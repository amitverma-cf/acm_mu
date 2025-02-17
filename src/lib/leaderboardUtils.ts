import { CodeforcesSubmission, GithubRepo, GitHubStats, UserProfile } from "./interfaces";

export const calculateTotalScore = (user: UserProfile): number => {
    // LeetCode: Weight solved problems more than ratings
    const leetcodeScore = user.stats.leetcode ? (
        user.stats.leetcode.solved * 100 +            // Increased weight for solved problems
        (user.stats.leetcode.rating || 0) * 2 +       // Keep rating weight moderate
        (user.stats.leetcode.contestRating || 0) * 5  // Increased contest rating importance
    ) : 0;

    // Codeforces: Significantly weight rating and problems solved
    const codeforcesScore = user.stats.codeforces ? (
        (user.stats.codeforces.rating || 0) * 10 +    // Increased weight for rating
        (user.stats.codeforces.maxRating || 0) * 5 +  // Consider max rating
        (user.stats.codeforces.problemsSolved || 0) * 50  // Increased weight for solved problems
    ) : 0;

    // GitHub: Balance between contributions and social metrics
    const githubScore = user.stats.github ? (
        (user.stats.github.contributions || 0) * 20 +    // Increased weight for contributions
        (user.stats.github.repositories || 0) * 30 +     // Value active development
        (user.stats.github.stars || 0) * 40 +           // Reward quality projects
        (user.stats.github.followers || 0) * 15         // Consider community impact
    ) : 0;

    return Math.round(leetcodeScore + codeforcesScore + githubScore);
};

export async function fetchGithubProfile(username: string): Promise<GitHubStats> {
    try {
        // Basic user info
        const userResponse = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!userResponse.ok) {
            throw new Error(`GitHub API error: ${userResponse.status}`);
        }

        const userData = await userResponse.json();

        // Get public repos with pagination
        const perPage = 100;
        let page = 1;
        let allRepos: GithubRepo[] = [];

        while (true) {
            const reposResponse = await fetch(
                `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`,
                {
                    headers: {
                        'Accept': 'application/json',
                    }
                }
            );

            if (!reposResponse.ok) {
                throw new Error(`GitHub Repos API error: ${reposResponse.status}`);
            }

            const repos = await reposResponse.json();
            if (!repos.length) break;

            allRepos = allRepos.concat(repos);
            page++;
        }

        // Calculate total stars
        const stars = Array.isArray(allRepos) 
            ? allRepos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
            : 0;

        // Estimate contributions using recent activity
        const today = new Date();
        const threeMonthsAgo = new Date(today.setMonth(today.getMonth() - 3));
        
        const eventsResponse = await fetch(
            `https://api.github.com/users/${username}/events/public`,
            {
                headers: {
                    'Accept': 'application/json',
                }
            }
        );

        if (!eventsResponse.ok) {
            throw new Error(`GitHub Events API error: ${eventsResponse.status}`);
        }

        const events = await eventsResponse.json();
        const contributions = Array.isArray(events)
            ? events.filter(event => 
                event.type === 'PushEvent' && 
                new Date(event.created_at) > threeMonthsAgo
              ).length * 4 // Multiply by 4 to estimate yearly contributions
            : 0;

        return {
            contributions,
            repositories: userData.public_repos || 0,
            stars,
            followers: userData.followers || 0
        };
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
        return {
            contributions: 0,
            repositories: 0,
            stars: 0,
            followers: 0
        };
    }
}

export async function fetchLeetcodeProfile(username: string) {
    try {
        if (!username) return defaultLeetcodeStats();

        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (!response.ok) {
            throw new Error(`LeetCode API error: ${response.status}`);
        }

        const data = await response.json();
        return {
            solved: data.totalSolved || 0,
            ranking: data.ranking || 0,
            rating: data.rating || 0,
            contestRating: data.contestRating || 0
        };
    } catch (error) {
        console.error('Error fetching LeetCode profile:', error);
        return defaultLeetcodeStats();
    }
}

export async function fetchCodeforcesProfile(username: string) {
    try {
        if (!username) return defaultCodeforcesStats();

        const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
        if (!response.ok) {
            throw new Error(`Codeforces API error: ${response.status}`);
        }

        const data = await response.json();
        if (!data.result?.[0]) {
            throw new Error('No Codeforces user data found');
        }

        const user = data.result[0];
        const problemsSolved = await fetchCodeforcesSolvedCount(username);

        return {
            rating: user.rating || 0,
            maxRating: user.maxRating || 0,
            rank: user.rank || 'unrated',
            problemsSolved
        };
    } catch (error) {
        console.error('Error fetching Codeforces profile:', error);
        return defaultCodeforcesStats();
    }
}

function defaultLeetcodeStats() {
    return {
        solved: 0,
        ranking: 0,
        rating: 0,
        contestRating: 0
    };
}

function defaultCodeforcesStats() {
    return {
        rating: 0,
        maxRating: 0,
        rank: 'unrated',
        problemsSolved: 0
    };
}

async function fetchCodeforcesSolvedCount(username: string) {
    try {
        const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
        if (!response.ok) {
            throw new Error(`Codeforces Submissions API error: ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data.result)) {
            return 0;
        }

        const uniqueSolved = new Set(
            data.result
                .filter((submission: CodeforcesSubmission) => submission.verdict === 'OK')
                .map((submission: CodeforcesSubmission) => 
                    `${submission.problem.contestId}-${submission.problem.index}`
                )
        );

        return uniqueSolved.size;
    } catch (error) {
        console.error('Error fetching Codeforces solved count:', error);
        return 0;
    }
}