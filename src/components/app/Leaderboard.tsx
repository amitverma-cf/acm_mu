"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpDown, Trophy, Star, RefreshCw } from 'lucide-react';
import { calculateTotalScore } from '@/lib/leaderboardUtils';
import { Button } from '../ui/button';
import { useLeaderboard } from '@/lib/useleaderboard';
import Link from 'next/link';

const Leaderboard = () => {
  const {
    users,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sortBy,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sortOrder,
    isLoading,
    handleSort,
    fetchUsers,
    updateProfiles
  } = useLeaderboard();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleRefresh = () => {
    updateProfiles();
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]';
    if (rank === 2) return 'bg-purple-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]';
    if (rank === 3) return 'bg-orange-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]';
    return 'border-2 border-black';
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-100">
        <div className="animate-spin">
          <RefreshCw className="h-32 w-32 text-black" />
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-yellow-100 min-h-screen px-4 py-8">
      <div className="container mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header with Stats */}
        <div className="p-6 bg-purple-400 border-b-4 border-black">
          <div className='flex flex-row justify-between items-center'>
            <h1 className="text-4xl font-black text-black mb-2 font-mono">ACM LEADERBOARD</h1>
            <Button size={"icon"} onClick={handleRefresh}> <RefreshCw /> </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-300 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform">
              <h3 className="text-black font-bold text-sm uppercase">Total Users</h3>
              <p className="text-black text-2xl font-black">{users.length}</p>
            </div>
            <div className="bg-blue-300 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform">
              <h3 className="text-black font-bold text-sm uppercase">Last Updated</h3>
              <p className="text-black text-lg font-bold">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="bg-red-300 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform">
              <h3 className="text-black font-bold text-sm uppercase">Total Problems Solved</h3>
              <p className="text-black text-2xl font-black">
                {users.reduce((acc, user) => acc + user.stats.leetcode.solved + user.stats.codeforces.problemsSolved, 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-4">
          <table className="w-full border-4 border-black">
            <thead className="bg-orange-300 border-b-4 border-black">
              <tr className="text-left font-black uppercase">
                <th className="p-4 w-16 border-r-4 border-black">Rank</th>
                <th className="p-4 border-r-4 border-black">User</th>
                <th className="p-4 border-r-4 border-black cursor-pointer hover:bg-orange-400 transition-colors"
                  onClick={() => handleSort('leetcode')}>
                  <div className="flex items-center gap-1">
                    LeetCode
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="p-4 border-r-4 border-black cursor-pointer hover:bg-orange-400 transition-colors" onClick={() => handleSort('codeforces')}>
                  <div className="flex items-center gap-1">
                    CodeForces
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="p-4 border-r-4 border-black cursor-pointer hover:bg-orange-400 transition-colors" onClick={() => handleSort('github')}>
                  <div className="flex items-center gap-1">
                    GitHub
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="p-4">Total Score</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}
                  className={`${getRankColor(user.rank)}  transition-transform`}>
                  <td className="p-4 border-r-4 border-black">
                    <div className="flex items-center gap-2">
                      {user.rank <= 3 && (
                        <Trophy className="h-6 w-6 text-black" />
                      )}
                      <span className="font-black text-xl">#{user.rank}</span>
                    </div>
                  </td>
                  <td className="p-4 border-r-4 border-black">
                    <div className="flex items-center gap-3">
                      <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Image
                          src={user.avatar || '/default-avatar.png'}
                          alt={user.name}
                          width={48}
                          height={48}
                          className="object-cover min-h-8 min-w-8"
                        />
                      </div>
                      <div>
                        <div className="font-black text-lg">{user.name}</div>
                        <div>
                          <div className="font-bold text-xs">
                            <Link
                              href={'https://leetcode.com/u/' + user.username.leetcode}
                              className='hover:underline text-balance text-blue-500'
                            >
                              {user.username.leetcode}
                            </Link>
                          </div>
                          <div className="font-bold text-xs">
                            <Link
                              href={'https://codeforces.com/profile/' + user.username.codeforces}
                              className='hover:underline text-balance text-blue-500'
                            >
                              {user.username.codeforces}</Link>
                          </div>
                          <div className="font-bold text-xs">
                            <Link
                              href={'https://github.com/' + user.username.github}
                              className='hover:underline text-balance text-blue-500'
                            >
                              {user.username.github}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-r-4 border-black transition-colors">
                    <div className="space-y-2">
                      <div className="font-black text-xl">Rating: {user.stats.leetcode.rating}</div>
                      <div className="text-base font-bold">
                        Solved: {user.stats.leetcode.solved}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-r-4 border-black transition-colors">
                    <div className="space-y-2">
                      <div className="font-black text-xl">Rating: {user.stats.codeforces.rating}</div>
                      <div className="text-base font-bold">
                        {user.stats.codeforces.rank}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-r-4 border-black transition-colors">
                    <div className="space-y-2">
                      <div className="font-black text-xl flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        {user.stats.github.stars}
                      </div>
                      {user.stats.github.contributions > 0 && (
                        <div className="text-base font-bold">
                          Contributions: {user.stats.github.contributions}
                        </div>
                      )
                      }
                    </div>
                  </td>
                  <td className="p-4 border-r-4 border-black transition-colors">
                    <div className="font-black text-2xl text-center">
                      {calculateTotalScore(user)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Leaderboard;