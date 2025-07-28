import React from 'react';
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

// Register the useGSAP plugin (important for it to work correctly)
gsap.registerPlugin(useGSAP);

export const ArrowNavigation = ({ handleClick, right }) => {
    const btnRef = useRef(null);
    const iconWrapperRef = useRef(null); // Ref for the span wrapping the icons

    useGSAP(() => {
        // Ensure refs are available before proceeding
        if (!iconWrapperRef.current || !btnRef.current) return;

        const [icon1, icon2] = iconWrapperRef.current.children;

        // Set initial position for icon2 based on 'right' prop
        gsap.set(icon2, { x: "100%", y: "-100%" });


        // Create a timeline for the hover effect
        const tl = gsap.timeline({ paused: true });

        // Animation for mouse enter
        tl.to(icon1, {
            x: "-100%",
            duration: 0.3,
            ease: "power2.inOut",
        })
            .to(
                icon2,
                {
                    x: "0%",
                    duration: 0.3,
                    ease: "power2.inOut",
                },
                "<", // Animate icon2 at the same time as icon1
            );

        const handleMouseEnter = () => tl.play();
        const handleMouseLeave = () => tl.reverse();

        btnRef.current.addEventListener("mouseenter", handleMouseEnter);
        btnRef.current.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup function for event listeners
        return () => {
            if (btnRef.current) {
                btnRef.current.removeEventListener("mouseenter", handleMouseEnter);
                btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };


    }, { scope: btnRef, dependencies: [right] }); // Re-run effect if 'right' prop changes

    return (
        <button className="w-10 aspect-square rounded-full flex items-center justify-center text-lg font-bold border border-white/70  hover:bg-gradient-to-r from-blue-700/10 to-transparent transition-all duration-5 cursor-pointer"
            onClick={handleClick}
            ref={btnRef}
        >

            {right ?
                <span
                    ref={iconWrapperRef}
                    className="inline-block relative w-[1.2rem] h-[1.2rem] overflow-hidden"
                >
                    <CgArrowRight />
                    <CgArrowRight />
                </span>

                :

                <span
                    ref={iconWrapperRef}
                    className="inline-block relative w-[1.2rem] h-[1.2rem] overflow-hidden"
                >
                    <CgArrowLeft />
                    <CgArrowLeft />
                </span>
            }

        </button>
    );
};
