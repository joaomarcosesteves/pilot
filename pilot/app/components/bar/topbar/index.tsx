"use client"
import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import Navbar from "./navbar";

 const TopBar = (props: PropsWithChildren) => {
  const [showSidebar, setShowSidebar] = useState(false);
    console.log(showSidebar)

  return (
    <div
      className={classNames({
        "grid bg-zinc-100": true,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
    </div>
  );
};

export default TopBar;