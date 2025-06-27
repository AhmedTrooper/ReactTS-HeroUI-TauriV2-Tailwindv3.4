import { Navbar, NavbarMenuItem } from "@heroui/react";
import { RouteList } from "../../../constants/routes/RouteList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function NavigationComponent() {
  return (
    <div className="grid  mt-4 self-center bg-[#191f1f] dark:bg-zinc-900">
      <div className={clsx("grid self-center")}>
        {RouteList.map((route, index) => (
          <div key={index}>
            <Link to={route.url}>{route.name}</Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}
