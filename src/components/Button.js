"use client";

import Link from "next/link";
import { CgArrowTopRightO } from "react-icons/cg";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export const Button = ({ url, text, classes }) => {
    const iconWrapperRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const btn = btnRef.current;
        const [icon1, icon2] = iconWrapperRef.current.children;

        // Place icon2 diagonally bottom-right (45°)
        gsap.set(icon2, { x: "100%", y: "-100%" });

        const mouseEnter = () => {
            gsap.to(icon1, {
                x: "-100%",
                y: "100%", // move diagonally top-right
                duration: 0.3,
                ease: "power2.inOut",
            });
            gsap.to(icon2, {
                x: "0%",
                y: "0%", // bring icon2 to center
                duration: 0.3,
                ease: "power2.inOut",
            });
        };

        const mouseLeave = () => {
            gsap.to(icon1, {
                x: "0%",
                y: "0%", // reset
                duration: 0.3,
                ease: "power2.inOut",
            });
            gsap.to(icon2, {
                x: "100%",
                y: "-100%", // move back diagonally bottom-right
                duration: 0.3,
                ease: "power2.inOut",
            });
        };

        btn.addEventListener("mouseenter", mouseEnter);
        btn.addEventListener("mouseleave", mouseLeave);

        return () => {
            btn.removeEventListener("mouseenter", mouseEnter);
            btn.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <Link
            href={url}
            ref={btnRef}
            className="backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/15 group"
        >
            <button
                className={`flex gap-2 items-center px-6 py-2 rounded-full text-secondary cursor-pointer
                ${classes
                        ? "bg-background border border-blue-500/20"
                        : "bg-primary"
                    }`}
            >
                {text}
                <span
                    ref={iconWrapperRef}
                    className="inline-block relative w-[1.2rem] h-[1.2rem] overflow-hidden"
                >
                    <CgArrowTopRightO className="absolute inset-0 text-lg leading-none" />
                    <CgArrowTopRightO className="absolute inset-0 text-lg leading-none" />
                </span>
            </button>
        </Link>
    );
};
