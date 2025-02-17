import { useState, useCallback } from 'react';
import { UserProfile } from '@/lib/interfaces';
import { fetchGithubProfile, fetchLeetcodeProfile, fetchCodeforcesProfile, calculateTotalScore } from './leaderboardUtils';

type SortKey = 'rank' | 'leetcode' | 'codeforces' | 'github';

export const useLeaderboard = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>('rank');
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('/data/leaderboard-profiles.json');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error loading profiles:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateProfiles = useCallback(async () => {
    try {
      setIsLoading(true);

      // Get current profiles
      const response = await fetch('/data/leaderboard-profiles.json');
      const data = await response.json();

      // Update each profile
      const updatedUsers = await Promise.all(
        data.users.map(async (user: UserProfile) => {
          const [github, leetcode, codeforces] = await Promise.all([
            fetchGithubProfile(user.username.github),
            fetchLeetcodeProfile(user.username.leetcode),
            fetchCodeforcesProfile(user.username.codeforces)
          ]);

          const updatedUser = {
            ...user,
            stats: {
              github,
              leetcode,
              codeforces
            }
          };

          // Calculate total score
          updatedUser.totalScore = calculateTotalScore(updatedUser);
          return updatedUser;
        })
      );

      // Sort users by total score and assign ranks
      const rankedUsers = updatedUsers
        .sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0))
        .map((user, index) => ({
          ...user,
          rank: index + 1
        }));

      // Save updated profiles
      await fetch('/api/update-profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lastUpdated: new Date().toISOString(),
          users: rankedUsers
        }),
      });

      // Refresh the display
      await fetchUsers();
    } catch (error) {
      console.error('Error updating profiles:', error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchUsers]);

  const handleSort = useCallback((key: SortKey) => {
    const newOrder = sortBy === key && sortOrder === 'desc' ? 'asc' : 'desc';
    setSortOrder(newOrder);
    setSortBy(key);

    const sortedUsers = [...users].sort((a, b) => {
      const getValue = (user: UserProfile) => {
        switch (key) {
          case 'leetcode':
            return user.stats.leetcode.rating;
          case 'codeforces':
            return user.stats.codeforces.rating;
          case 'github':
            return user.stats.github.contributions;
          default:
            return user.rank;
        }
      };

      const valueA = getValue(a);
      const valueB = getValue(b);
      return newOrder === 'asc' ? valueA - valueB : valueB - valueA;
    });

    setUsers(sortedUsers);
  }, [users, sortBy, sortOrder]);

  return {
    users,
    sortBy,
    sortOrder,
    isLoading,
    handleSort,
    fetchUsers,
    updateProfiles
  };
};