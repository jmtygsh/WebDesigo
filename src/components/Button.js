"use client";

import Link from "next/link";
import { CgArrowTopRightO } from "react-icons/cg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // Import useGSAP

// Register the useGSAP plugin (important for it to work correctly)
gsap.registerPlugin(useGSAP);

export const Button = ({ url, text, classes }) => {
    const btnRef = useRef(null); // Ref for the button element, which will be the scope for GSAP
    const iconWrapperRef = useRef(null); // Ref for the icon wrapper

    // useGSAP hook for GSAP animations and automatic cleanup
    useGSAP(() => {
        const [icon1, icon2] = iconWrapperRef.current.children;

        // Initial placement of icon2
        gsap.set(icon2, { x: "100%", y: "-100%" });

        // Create GSAP timelines for hover effects
        const tl = gsap.timeline({ paused: true });
        tl.to(icon1, {
            x: "-100%",
            y: "100%",
            duration: 0.3,
            ease: "power2.inOut",
        });
        tl.to(
            icon2,
            {
                x: "0%",
                y: "0%",
                duration: 0.3,
                ease: "power2.inOut",
            },
            "<" // Start this animation at the same time as the previous one
        );


        // Add event listeners to play/reverse the timelines
        const btn = btnRef.current;

        if (btn) {
            const mouseEnterHandler = () => tl.play();
            const mouseLeaveHandler = () => tl.reverse();

            btn.addEventListener("mouseenter", mouseEnterHandler);
            btn.addEventListener("mouseleave", mouseLeaveHandler);

            // Cleanup function returned by useGSAP will remove these event listeners automatically
            return () => {
                btn.removeEventListener("mouseenter", mouseEnterHandler);
                btn.removeEventListener("mouseleave", mouseLeaveHandler);
            };
        }
    }, { scope: btnRef }); // The `scope` option ensures animations are scoped to `btnRef` and cleaned up

    return (
        <Link href={url} ref={btnRef}>
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