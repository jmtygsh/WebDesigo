"use client";

import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Button } from "@/components/Button";

export const HeroSection = () => {
    const container = useRef(null);

    // Refs for individual elements
    const heroLink = useRef(null);
    const heroHeading = useRef(null);
    const heroParagraph = useRef(null);
    const heroButton = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.from(heroLink.current, { scale: 0.9, opacity: 0, duration: 0.3 });
        tl.from(heroHeading.current, { y: 30, opacity: 0, duration: 0.8 });
        tl.from(heroParagraph.current, { y: 20, opacity: 0, duration: 0.7 });
        tl.from(heroButton.current, { scale: 0.9, opacity: 0, duration: 0.6 });
    }, { scope: container });

    return (
        <div ref={container} className="max-w-3/6 text-center space-y-5 flex flex-col items-center z-2">

            <Link
                ref={heroLink}
                href="/"
                className="py-3 px-5 rounded-full bg-[#1d2033] drop-shadow-md flex gap-2"
            >
                <span className="text-secondary">
                    We Design websites that matter, user’s can’t resist
                </span>
                <span className="bg-blue-500 flex items-center rounded-full px-3">
                    <CgArrowRight />
                </span>
            </Link>

            <h1 ref={heroHeading} className="text-5xl/15 font-bold">
                Design That Powers Real Business Growth
            </h1>

            <p ref={heroParagraph} className="text-lg text-secondary">
                Elevating brands through innovative and engaging web solutions.
            </p>

            <div ref={heroButton}>
                <Button url="/get-started" text="Get Started" />
            </div>
        </div>
    );
};
