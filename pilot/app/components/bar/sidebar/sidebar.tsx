// components/Sidebar.tsx
"use client"
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { defaultNavItems, NavItem } from "./navItems";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { CgMenuLeft } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

type Props = {
  collapsed: boolean;
  shown: boolean;
  setShow(shown: boolean): void;
  setCollapsed(collapsed: boolean): void;
  navItems?: NavItem[]; 
};

const SidebarComp = ({ 
    collapsed, 
    setCollapsed,
    shown,
    setShow,
    navItems = defaultNavItems,
}: Props) => {
  return (
    <div className={classNames({
      "bg-secondary text-card-foreground z-20 rounded-r-3xl shadow": true,
      "transition-all duration-300 ease-in-out": true,
      "fixed md:static md:translate-x-0": true,
      "w-[260px]": !collapsed,
      "w-16": collapsed,
      "-translate-x-full": !shown,
    })}
      
    >
      <div className={classNames({"flex flex-col justify-between sticky inset-0": true})}>

        <div
          className={classNames({
            "flex ": true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {!collapsed && <img src="https://app.jimibrasil.com.br/assets/img/logo_jimi.png" alt="logo" width={120} className="m-4" />}

          <button
            className={classNames({
              "grid place-content-center": true, 
              "text-card-foreground ": true, 
              "w-10 h-10 rounded-full": true, 
            })}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <CgMenuLeft size={20} /> : <VscChromeClose size={20} className="hidden md:block"/>}
          </button>
          
          {shown && 
            <button
              className={classNames({
                "grid place-content-center": true, 
                "text-card-foreground ": true, 
                "w-10 h-10 rounded-full": true, 
              })}
              onClick={() => setShow(!shown)}
            >
              <VscChromeClose size={20} className="block md:hidden"/>
            </button>
          }
        </div>

        
        <nav className="flex-grow">
          <ul className={classNames({"my-2 flex flex-col gap-4 items-stretch": true })}>
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-sm text-card-foreground flex": true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                    {item.colapsable ? (
                        <div className="flex w-full items-start gap-3">
                            {item.icon}

                            {!collapsed && (
                                <Accordion type="single" collapsible className="w-full border-none">
                                    <AccordionItem value="item-1" className="border-none ">
                                        <AccordionTrigger className="flex w-full hover:no-underline p-0 mb-0">
                                            {item.label}
                                        </AccordionTrigger>
                                                <AccordionContent className="pb-0 flex flex-col gap-4 mt-4">
                                                  {item.children?.map((item) => (
                                                    <Link key={item.href} href={item.href} className="flex gap-3 hover:text-slate-400">
                                                        {item.icon} <span>{!collapsed && item.label}</span>
                                                    </Link>
                                                  ))}
                                            </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            )}
                        </div>
                    ) : (
                    <Link href={item.href} className="flex gap-3 hover:text-slate-400">
                        {item.icon} <span>{!collapsed && item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </div>
  );
};
export default SidebarComp;

