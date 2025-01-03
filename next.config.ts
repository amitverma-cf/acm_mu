import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.unsplash.com',
            },{
                protocol: 'https',
                hostname: '**.neobrutalism.dev',
            },
        ],
    },
};

export default nextConfig;
