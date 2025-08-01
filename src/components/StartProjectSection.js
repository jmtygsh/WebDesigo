"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from 'next/image';
import { Button } from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

export const StartProjectSection = () => {
    const container = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const listItemRefs = useRef([]);
    const buttonRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: 'power2.out', duration: 0.6 },
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        tl.from(headingRef.current, { y: 30, opacity: 0 })
            .from(paragraphRef.current, { y: 20, opacity: 0 })
            .from(listItemRefs.current, {
                y: 10,
                opacity: 0,
                stagger: 0.15
            }).from(buttonRef.current, { scale: 0.95, opacity: 0 });
    }, { scope: container });

    return (
        <div ref={container} className='relative rounded-2xl bg-[#010417] overflow-hidden'>
            <div className="relative z-10 mx-auto max-w-6xl text-center h-96 flex flex-col items-center justify-center rounded-xl">

                {/* Heading */}
                <h2 ref={headingRef} className="mb-4 text-4xl font-bold">
                    Start Your Project
                </h2>

                {/* Paragraph */}
                <p ref={paragraphRef} className="mx-auto mb-8 max-w-2xl text-slate-400">
                    Contact us today to start crafting your exceptional and customized website solution.
                </p>

                {/* Tick Icon List */}
                <ul className="mb-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
                    {["Customized design", "Ongoing support", "Fast delivery"].map((text, i) => (
                        <li
                            key={i}
                            ref={el => listItemRefs.current[i] = el}
                            className="flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-2 text-sm text-blue-300 transition-colors duration-200 hover:bg-blue-900/20"
                        >
                            <Image src="/assets/imgs/ui/tick-li.svg" width={16} height={16} className="h-4 w-4" alt="tick icon" />
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <div ref={buttonRef}>
                    <Button url="/start-project" text="Start a Project" />
                </div>
            </div>

            {/* Background Decorative Images */}
            <div className='absolute top-0 left-0'>
                <Image src='/assets/imgs/ui/left.png' width={400} height={400} alt='Left' />
            </div>
            <div className='absolute top-0 right-0'>
                <Image src='/assets/imgs/ui/right.png' width={400} height={400} alt='Right' />
            </div>
        </div>
    );
};
