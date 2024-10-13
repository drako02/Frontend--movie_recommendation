import TiTleBar from "@/components/titleBar";
import { ReactNode } from "react";

export default function ProfilePageLayout({children}:{children:ReactNode}) {
    return (
        <div className="flex flex-col h-full w-full">
            <TiTleBar></TiTleBar>
            {children}
        </div>
    )
}