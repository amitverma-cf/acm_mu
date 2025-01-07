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