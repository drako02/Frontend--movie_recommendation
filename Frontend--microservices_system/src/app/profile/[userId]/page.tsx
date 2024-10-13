'use client';

import { useParams } from "next/navigation";
import UserProfile from "@/components/UserProfile";

interface User {
    id: number;
    name: string;
    email: string;
}
const ProfilePage = () => {

    const { userId } = useParams();


    return (
        <div className="h-full w-full">
            <UserProfile userId={ userId } ></UserProfile>
        </div>
    );
};

export default ProfilePage;