export type SVGBrand = {
    title: string;
    css: string;
    svg_size: string;
    svg_path: string;
};

export type TeamMember = {
    image: string;
    name: string;
    position: string;
    social: SocialLinks[];
};

export type SocialLinks = {
    title: "linkedin" | "twitter" | "github" | "instagram" | "leetcode" | "codeforces" | "hackerrank" | "kaggle" | "portfolio" | "youtube" | "facebook" | "email";
    url: string;
};

export type TeamData = {
    [key: string]: TeamMember[];
};

export interface UserProfile {
    id: string;
    name: string;
    avatar: string;
    username: {
        leetcode: string;
        codeforces: string;
        github: string;
    };
    stats: {
        leetcode: {
            solved: number;
            ranking: number;
            rating: number;
            contestRating: number;
        };
        codeforces: {
            rating: number;
            maxRating: number;
            rank: string;
            problemsSolved: number;
        };
        github: {
            contributions: number;
            repositories: number;
            stars: number;
            followers: number;
        };
    };
    totalScore: number;
    rank: number;
}

export interface ProfileLinks {
    github: string;
    leetcode: string;
    codeforces: string;
}

export interface GithubRepo {
    stargazers_count: number;
}

export interface GitHubStats {
    contributions: number;
    repositories: number;
    stars: number;
    followers: number;
}

export interface GithubEvent {
    type: string;
    created_at: string;
}

export interface CodeforcesSubmission {
    verdict: string;
    problem: {
        contestId: number;
        index: string;
    };
}