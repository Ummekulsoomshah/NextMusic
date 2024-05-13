"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href="#">
                    <MenuItem setActive={setActive} active={active} item="Home">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">latest music released</HoveredLink>
                            <HoveredLink href="/interface-design">Best of 90's</HoveredLink>
                            <HoveredLink href="/seo">People's Choice</HoveredLink>
                            <HoveredLink href="/branding">Trending Now</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="My Songs">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Liked</HoveredLink>
                        <HoveredLink href="/interface-design">Favourite</HoveredLink>
                        <HoveredLink href="/seo">Downloads</HoveredLink>
                        <HoveredLink href="/branding">Uploads</HoveredLink>
                    </div>
                </MenuItem>
                <Link href="#">
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
                    </Link>

            </Menu>
        </div>
    )
}
export default Navbar;