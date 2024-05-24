"use client"
import { SetStateAction, useEffect, useState } from "react";
import SidebarComp from './sidebar/sidebar'
import Navbar from "./topbar/navbar";
import classNames from "classnames";
import { CgMenuLeft } from "react-icons/cg";

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
                    "sm:grid-cols-sidebar": !collapsed,
                    "sm:grid-cols-sidebarcollapsed": collapsed,
                    "fixed top-0 left-0 z-[99] sm:relative": !showSidebar,
                    "transition-all duration-300 ease-in-out": true,
                })}
            >
                <SidebarComp
                    collapsed={collapsed}
                    setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
                    setShow={() => setShowSidebar((prev) => !prev)}
                    shown={showSidebar}
                />

                <button className="md:hidden ml-6 mt-6 h-12" onClick={() => setShowSidebar((prev) => !prev)}>
                    <CgMenuLeft size={20} />
                </button>

            </div>
        </>
    )
}