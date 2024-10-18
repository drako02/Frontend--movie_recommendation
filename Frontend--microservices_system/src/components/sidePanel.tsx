import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, HamburgerIcon, useDisclosure } from "@chakra-ui/icons";
import { RefObject, useState } from "react";
import { Squares2X2Icon, ClockIcon, HandThumbUpIcon, StarIcon, Cog6ToothIcon} from "@heroicons/react/24/outline";

interface Props {
    open: boolean;
}

const SidePanel = ({open}:Props) => {
    

    if (!open) {
        return null;
    }

    return (
        <div className="h-full w-[200px] flex flex-col justify-start bg-[#1A1D1F] pt-[40px] text-[14px]">
            <a href="#" className="flex items-center p-2 text-[#787a7e] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Squares2X2Icon className="h-6 w-6" />
                <span className="ms-3">Dashboard</span>
            </a>
            <a href="#" className="flex items-center p-2 text-[#787a7e] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <ClockIcon className="h-6 w-6" />
                <span className="ms-3">Watchlist</span>
            </a>
            <a href="#" className="flex items-center p-2 text-[#787a7e] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <HandThumbUpIcon className="h-6 w-6" />
                <span className="ms-3">Recommendations</span>
            </a>
            <a href="#" className="flex items-center p-2 text-[#787a7e] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <StarIcon className="h-6 w-6" />
                <span className="ms-3">Ratings & Reviews</span>
            </a>
            <a href="#" className="flex items-center p-2 text-[#787a7e] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Cog6ToothIcon className="h-6 w-6" />
                <span className="ms-3">Account Settings</span>
            </a>
        </div>
    )
}

export default SidePanel;