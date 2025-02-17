import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { UserProfile } from '@/lib/interfaces';

interface UpdateProfilesRequest {
    lastUpdated: string;
    users: UserProfile[];
}

export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        }
    );
}

export async function POST(request: Request) {
    try {
        const body = await request.json() as UpdateProfilesRequest;
        const filePath = path.join(process.cwd(), 'public', 'data', 'leaderboard-profiles.json');

        // Ensure directory exists
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });

        // Calculate ranks based on total score
        // const rankedUsers = body.users
        //     .map(user => ({
        //         ...user,
        //         rank: 0 // Initialize rank
        //     }))
        //     .sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0))
        //     .map((user, index) => ({
        //         ...user,
        //         rank: index + 1
        //     }));

        const updatedData = {
            lastUpdated: body.lastUpdated,
            users: body.users
        };

        // Write to file
        await fs.writeFile(
            filePath,
            JSON.stringify(updatedData, null, 2)
        );

        return NextResponse.json(
            { success: true, data: updatedData },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            }
        );
    } catch (error) {
        console.error('Error updating profiles:', error);

        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to update profiles'
            },
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            }
        );
    }
}