'use client';

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { Skeleton, Stack } from "@chakra-ui/react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    userId:string|string[]
}

const UserProfile = ({userId}:Props) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    // const params = useParams();
    // const params = useParams();
    // const userId = params.userId;

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!userId) return;

            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found, redirect to login');
                router.push('/login');
                return;
            }

            const response = await fetch(`/api/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                console.error("Failed to fetch user profile");
                router.push('/login');
            } else {
                const data = await response.json();
                setUser(data);
            }
        };

        fetchUserProfile();
    }, [userId]);

    if (!user) {
        return (
            <Stack className="!h-[100%] !w-[100%]">
                <Skeleton height='20px' width={1000} />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        );
    };

    return (
        <div>
                <h1>Your Name: { user.name }</h1>
                <h1>Your Email: { user.email }</h1>
                <h1>Your ID: { user.id }</h1>
        </div>
    );
};

export default UserProfile;