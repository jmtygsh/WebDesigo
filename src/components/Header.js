"use client";


import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/data/index";
import { Button } from "@/components/Button";

export const Header = () => {

    const pathname = usePathname(); // Get the current path

    if (!navItems) return null;

    return (
        <nav className="flex justify-between items-center px-6 md:px-10 py-4 fixed left-0 right-0 z-99">
            <span className="text-2xl font-bold ">WebDesigo</span>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center border border-[#ffffff6c] rounded-full  backdrop-blur-md">

                {navItems.map((item) =>
                    <li
                        key={item.name}
                        className={`px-6 py-2 rounded-full ${pathname === item.href ? "border-r border-l border-[#ffffff6c]" : ""}`}
                    >
                        <Link
                            href={item.href}
                            className={`hover:text-primary transition-colors duration-200 text-sm tracking-[2px]  ${pathname === item.href ? "text-primary" : " text-secondary"}`}>
                            {item.name}
                        </Link>
                    </li>
                )}

            </ul>


            <Button url="/contact-us" text="Contact Us" />

            {/* Mobile Menu Button (Hamburger Icon) - You'd implement actual mobile menu logic separately */}
            <div className="md:hidden">
                <button className="text-foreground text-3xl">☰</button>
            </div>
        </nav>
    )
}
