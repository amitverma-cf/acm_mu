import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface ProfileRequest {
    name: string;
    avatar: string;
    username: {
        github: string;
        leetcode?: string;
        codeforces?: string;
    }
}

// Update in the same file
export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        }
    );
}

interface StoredProfile extends ProfileRequest {
    id: string;
    stats: {
        github: { contributions: 0, repositories: 0, stars: 0, followers: 0 },
        leetcode: { solved: 0, ranking: 0, rating: 0, contestRating: 0 },
        codeforces: { rating: 0, maxRating: 0, rank: "unrated", problemsSolved: 0 }
    };
    totalScore: number;
    rank: number;
}

async function getProfilesFile() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'leaderboard-profiles.json');
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });

    try {
        const content = await fs.readFile(filePath, 'utf-8');
        return { filePath, data: JSON.parse(content) };
    } catch {
        return {
            filePath,
            data: { lastUpdated: new Date().toISOString(), users: [] }
        };
    }
}

// ... existing imports and interfaces ...

export async function GET() {
    try {
        const { data } = await getProfilesFile();

        // Map users to return only required fields
        const profiles = data.users.map((user: StoredProfile) => ({
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            username: {
                github: user.username.github,
                leetcode: user.username.leetcode,
                codeforces: user.username.codeforces
            }
        }));

        return NextResponse.json(
            {
                success: true,
                profiles,
                lastUpdated: data.lastUpdated
            },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            }
        );
    } catch (error) {
        console.error('Error fetching profiles:', error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to fetch profiles'
            },
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            }
        );
    }
}

export async function POST(request: Request) {
    try {
        const profile = await request.json() as ProfileRequest;
        const { filePath, data } = await getProfilesFile();

        // Validate required fields
        if (!profile.name || !profile.avatar || !profile.username.github) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create new profile with default values
        const newProfile: StoredProfile = {
            id: crypto.randomUUID(),
            ...profile,
            stats: {
                github: { contributions: 0, repositories: 0, stars: 0, followers: 0 },
                leetcode: { solved: 0, ranking: 0, rating: 0, contestRating: 0 },
                codeforces: { rating: 0, maxRating: 0, rank: "unrated", problemsSolved: 0 }
            },
            totalScore: 0,
            rank: data.users.length + 1
        };

        // Add new profile
        data.users.push(newProfile);
        data.lastUpdated = new Date().toISOString();

        // Save updated data
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        return NextResponse.json(
            { success: true, profile: newProfile },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating profile:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create profile' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const profileId = searchParams.get('id');

        if (!profileId) {
            return NextResponse.json(
                { success: false, error: 'Profile ID is required' },
                { status: 400 }
            );
        }

        const { filePath, data } = await getProfilesFile();

        // Remove profile
        const profileIndex = data.users.findIndex(
            (user: StoredProfile) => user.id === profileId
        );

        if (profileIndex === -1) {
            return NextResponse.json(
                { success: false, error: 'Profile not found' },
                { status: 404 }
            );
        }

        data.users.splice(profileIndex, 1);
        data.lastUpdated = new Date().toISOString();

        // Update ranks
        data.users = data.users.map((user: StoredProfile, index: number) => ({
            ...user,
            rank: index + 1
        }));

        // Save updated data
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error deleting profile:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete profile' },
            { status: 500 }
        );
    }
}