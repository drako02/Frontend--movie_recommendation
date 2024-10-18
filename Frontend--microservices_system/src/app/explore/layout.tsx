import TiTleBar from "@/components/titleBar";
import { ReactNode } from "react";

export default function ExploreLayout({ children}:{children:ReactNode}) {
    return (
        <div className="w-full h-full flex flex-col"> 
            <TiTleBar/>
            {children}
        </div>
    );
}