'use client';

import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton, Stack, Box, Menu, MenuButton, IconButton, chakra, Drawer, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SidePanel from "./sidePanel";
import Image from "next/image";
import coverPic from "@/public/images/coverimage.png";

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
    const [sideOpen, setSideOpen] = useState<boolean>(true);

    // const toggleSide = () => {
    //     setSideOpen(!sideOpen);
    // };

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
            <div role="status" className=" w-full h-full max-w-sm animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
        );
    };

    return (

        <div className="h-full w-full flex justify-start" >

            <div className="flex flex-col h-full">
                <SidePanel open={ sideOpen }></SidePanel>
            </div>
            <div className="w-full h-full flex flex-col items-center gap-[16px] pt-[10px]">
                <p className="w-[90%]"> Profile </p>
                <div className=" relative w-[90%] h-[30%] border-[2px] flex flex-col rounded-[10px]">
                    <div className=" w-full h-[65%] bg-slate-400 ">
                        <Image src={ coverPic } alt="cover" className="w-full h-full bg-auto bg-no-repeat bg-center"/>
                    </div>
                    <div className=" w-full h-[35%] px-[20%] flex items-center">
                        <p>{ user.name}</p>
                    </div>
                    <Image src={""} alt="profile-pic" className="border-[px] w-[75px] h-[75px] absolute top-[50%] left-[4%] bg-black rounded-full"/>

                </div>
                <div className=" w-[90%] h-[55%] border-[2px] rounded-[10px]">

                </div>

            </div>

        </div>

    );
};

export default UserProfile;