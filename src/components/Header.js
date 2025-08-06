"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems, contactItem } from "@/data/index";
import { Button } from "@/components/Button";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import Image from "next/image";

// Note: FiClock is imported but not used in this specific file. 
// It's likely used within the data/index file.
import { FiClock } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

export const Header = () => {
    const pathname = usePathname();
    const headerRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    // GSAP animation for header visibility on scroll
    useGSAP(() => {
        gsap.from(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const header = headerRef.current;
            if (!header) return;

            // Keep header visible when the mobile menu is open
            if (isMenuOpen) {
                gsap.to(header, { y: '0%', duration: 0.5, ease: 'power2.inOut' });
                return;
            }

            // Hide header on scroll down, show on scroll up
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                gsap.to(header, { y: '-100%', duration: 0.5, ease: 'power2.inOut' });
            } else {
                gsap.to(header, { y: '0%', duration: 1, ease: 'power2.inOut' });
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    // GSAP animation for mobile menu items appearing
    useGSAP(() => {
        if (isMenuOpen) {
            // Animate the menu container itself
            gsap.fromTo(mobileMenuRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.in' }
            );
            // Animate the list items with a stagger effect
            gsap.fromTo(".mobile-nav-link", {
                opacity: 0,
                y: 20,
                skewX: -10,
            }, {
                opacity: 1,
                y: 0,
                skewX: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.1,
            });
        }
    }, { scope: mobileMenuRef, dependencies: [isMenuOpen] });

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleLinkClick = () => setIsMenuOpen(false);

    if (!navItems) return null;

    return (
        <>
            <header
                ref={headerRef}
                className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 fixed top-0 left-0 right-0 z-50 
               transition-colors duration-300 backdrop-blur-lg border-b border-white/10"
            >


                <Link href="/" onClick={handleLinkClick} className="z-10">
                    <Image src="/websigo.svg" width={100} height={100} alt="WEBDESIGO" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center border border-white/20 rounded-full p-1 bg-black/10 backdrop-blur-md">
                    <ul className="flex items-center">
                        {navItems.map((item) => (
                            <li key={item.name} className="group">
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${pathname === item.href ? "bg-primary text-background" : "text-secondary hover:text-primary"}`}
                                >
                                    <span className="text-lg transition-transform duration-300">{item.icon}</span>
                                    <span className={`text-sm tracking-[1px] ${pathname === item.href ? "font-semibold" : "font-normal"}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>



                {/* Desktop Button -- CHANGED from md:block to lg:block */}
                <div className="hidden lg:block">
                    <Button url={contactItem.href} text={contactItem.name} icon={contactItem.icon} />
                </div>

                {/* Animated Mobile Menu Button -- CHANGED from md:hidden to lg:hidden */}
                <button
                    className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`block w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    // CHANGED from md:hidden to lg:hidden
                    // IMPROVEMENT: Added `fixed` for robust positioning
                    className="lg:hidden fixed h-dvh inset-0 z-40 bg-background backdrop-blur-xl flex flex-col"
                >
                    {/* Decorative Corner Brackets */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20"></div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                        <ul className="flex flex-col items-center gap-4 text-center">
                            {navItems.map((item) => (
                                <li key={item.name} className="mobile-nav-link">
                                    <Link
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className={`group flex items-center gap-2 px-4 py-3 rounded-lg text-lg transition-colors duration-300 ${pathname === item.href ? "text-primary font-semibold" : "text-secondary hover:text-primary"}`}
                                    >
                                        <span className="transition-transform duration-300">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                            {/* Separator */}
                            <li className="w-1/2 h-px bg-white/10 my-4 mobile-nav-link"></li>
                            <li className="mobile-nav-link">
                                <Link
                                    href={contactItem.href}
                                    onClick={handleLinkClick}
                                    className={`group flex items-center gap-2 px-4 py-3 rounded-lg text-lg transition-colors duration-300 ${pathname === contactItem.href ? "text-primary font-semibold" : "text-secondary hover:text-primary"}`}
                                >
                                    <span className="transition-transform duration-300">{contactItem.icon}</span>
                                    <span className="text-lg">{contactItem.name}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Footer Info in Mobile Menu */}
                    <div className="text-center p-6 text-xs text-secondary/50 gap-4">
                        <span>&copy; {new Date().getFullYear()} WebDesigo</span>
                    </div>
                </div>
            )}
        </>
    );
};