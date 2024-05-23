"use client"
import { SetStateAction, useEffect, useState } from "react";
import SidebarComp from './sidebar/sidebar'
import Navbar from "./topbar/navbar";
import classNames from "classnames";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Bars(){
    const [collapsed, setSidebarCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const { isMobile } = useMediaQuery();


    useEffect(() => {
        if(isMobile){
        setSidebarCollapsed(false)
        }
   })

    return(
        <>
            <div
                className={classNames({
                    "grid min-h-screen": true,
                    "grid-cols-sidebar": !collapsed,
                    "grid-cols-sidebarcollapsed": collapsed,
                    "transition-all duration-300 ease-in-out": true,
                })}
            >
                <SidebarComp
                    collapsed={collapsed}
                    setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
                    setShow={() => setShowSidebar((prev) => !prev)}
                    shown={showSidebar}
                />
                
                <div className="flex-col flex w-full">
                    <div className="fixed top-0 w-full flex justify-end">
                        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
                    </div>
                </div>
            </div>
        </>
    )
}