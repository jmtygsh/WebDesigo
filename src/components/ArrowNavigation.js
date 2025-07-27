import React from 'react'
import { CgArrowRight } from "react-icons/cg";
import { CgArrowLeft } from "react-icons/cg";


import gsap from "gsap";
import { useRef, useEffect } from "react";

export const ArrowNavigation = ({ handleClick, right }) => {

    const iconWrapperRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const btn = btnRef.current;
        const [icon1, icon2] = iconWrapperRef.current.children;

        gsap.set(icon2, { x: "100%", y: "-100%" });

        const mouseEnter = () => {
            gsap.to(icon1, {
                x: "-100%",
                duration: 0.3,
                ease: "power2.inOut",
            });
            gsap.to(icon2, {
                x: "0%",
                duration: 0.3,
                ease: "power2.inOut",
            });
        };

        const mouseLeave = () => {
            gsap.to(icon1, {
                x: "0%",
                duration: 0.3,
                ease: "power2.inOut",
            });
            gsap.to(icon2, {
                x: "100%",
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
    )
}
