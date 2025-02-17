import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: '**.neobrutalism.dev',
            },
            {
                protocol: 'https',
                hostname: '**.github.com',
            },
            {
                protocol: 'https',
                hostname: '**.githubusercontent.com',
            },
        ],
    },
};

export default nextConfig;
