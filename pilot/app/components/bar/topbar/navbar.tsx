import React from "react";
import { CgMenuLeft } from "react-icons/cg";
//import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Profile from "../../profile";
import { ModeToggle } from "../../ThemeToggle";
import { UserNav } from "@/components/ui/user-nav";
import { MainNav } from "@/components/ui/main-nav";
import TeamSwitcher from "@/components/ui/team-switcher";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
type Props = {
  onMenuButtonClick(): void;
};

const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-background text-card-foreground ": true, // colors
        "flex items-center": true, // layout
        "w-full sticky z-10 px-4 h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <CgMenuLeft size={20} />
      </button>
      <div className="flex h-16 items-center px-4 gap-4">
        {/* <TeamSwitcher className="hidden md:flex" /> */}
        <div className="hidden lg:flex gap-4">
          <HoverCard>
            <HoverCardTrigger>

                <div className="flex items-center py-2 px-3 rounded-md shadow bg-secondary gap-2">
                  <div className="relative w-3 h-3 rounded-full">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-fade-in-out" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold"> On:</span>
                    <span className="text-sm "> 2057 </span>
                  </div>
                </div>


            </HoverCardTrigger>
            <HoverCardContent className="flex items-center gap-2">
                <div className="relative w-3 h-3 rounded-full">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-fade-in-out" />
                </div>
                <span className="text-sm font-medium"> Equip. Online: </span>
                <span className="text-sm"> 3620 </span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex items-center py-2 px-3 rounded-md shadow bg-secondary gap-2">
                <div className="relative w-3 h-3 rounded-full">
                  <div className="absolute inset-0 bg-red-400 rounded-full" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold"> Off:</span>
                  <span className="text-sm "> 3620 </span>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex items-center gap-2">
                <div className="relative w-3 h-3 rounded-full">
                  <div className="absolute inset-0 bg-red-400 rounded-full" />
                </div>
                <span className="text-sm font-medium"> Equip. Offline: </span>
                <span className="text-sm"> 3620 </span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex items-center py-2 px-3 rounded-md shadow bg-secondary gap-2">
                <div className="relative w-3 h-3 rounded-full">
                  <div className="absolute inset-0 bg-blue-400 rounded-full" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold"> JC400:</span>
                  <span className="text-sm "> 4637 </span>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col w-auto gap-2  justify-start">

                  <div className="flex items-center gap-2 justify-start"> 
                      <div className="relative w-3 h-3 rounded-full">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-fade-in-out" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium"> Online: </span>
                        <span className="text-sm"> 1785 </span>
                      </div>
                  </div>


                  <div className="flex items-center gap-2">
                    <div className="relative w-3 h-3 rounded-full">
                          <div className="absolute inset-0 bg-red-400 rounded-full animate-fade-in-out" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium"> Offline: </span>
                      <span className="text-sm"> 2852 </span>
                    </div>
                  </div>
                
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex items-center py-2 px-3 rounded-md shadow bg-secondary gap-2">
                <div className="relative w-3 h-3 rounded-full">
                  <div className="absolute inset-0 bg-fuchsia-400 rounded-full" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold"> JC450:</span>
                  <span className="text-sm "> 840 </span>
                </div>
              </div>
            </HoverCardTrigger>
            
            <HoverCardContent className="flex flex-col w-auto gap-2  justify-start">

                  <div className="flex items-center gap-2 justify-start"> 
                      <div className="relative w-3 h-3 rounded-full">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-fade-in-out" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium"> Online: </span>
                        <span className="text-sm"> 260 </span>
                      </div>
                  </div>


                  <div className="flex items-center gap-2">
                    <div className="relative w-3 h-3 rounded-full">
                          <div className="absolute inset-0 bg-red-400 rounded-full animate-fade-in-out" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium"> Offline: </span>
                      <span className="text-sm"> 580 </span>
                    </div>
                  </div>
                
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex items-center py-2 px-3 rounded-md shadow bg-secondary gap-2">
                <div className="relative w-3 h-3 rounded-full">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold"> VL02:</span>
                  <span className="text-sm "> 39 </span>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col w-auto gap-2  justify-start">
                  <div className="flex items-center gap-2">
                    <div className="relative w-3 h-3 rounded-full">
                          <div className="absolute inset-0 bg-red-400 rounded-full animate-fade-in-out" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium"> Offline: </span>
                      <span className="text-sm"> 39 </span>
                    </div>
                  </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex items-center py-2 px-3 rounded-md shadow bg-secondary gap-2">
                <div className="relative w-3 h-3 rounded-full">
                  <div className="absolute inset-0 bg-violet-400 rounded-full" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold"> VL03:</span>
                  <span className="text-sm "> 161 </span>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col w-auto gap-2  justify-start">

                  <div className="flex items-center gap-2 justify-start"> 
                      <div className="relative w-3 h-3 rounded-full">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-fade-in-out" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium"> Online: </span>
                        <span className="text-sm"> 12 </span>
                      </div>
                  </div>


                  <div className="flex items-center gap-2">
                    <div className="relative w-3 h-3 rounded-full">
                          <div className="absolute inset-0 bg-red-400 rounded-full animate-fade-in-out" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium"> Offline: </span>
                      <span className="text-sm"> 158 </span>
                    </div>
                  </div>
                
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="ml-auto flex items-center space-x-4 fixed right-8">
          {/* <UserNav /> */}
          <ModeToggle />
          <Profile />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;