import React, { useRef, useEffect } from "react";
import Image from 'next/image';
import { Button } from "@/components/Button";

import gsap from "gsap";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);

export const ViewCards = ({ data }) => {


    // Use a single ref to hold the container of all cards
    // GSAP can then target children within this container
    const containerRef = useRef(null);


    useGSAP(() => {
        // Ensure the container ref is available
        if (!containerRef.current) return;

        // Select all card and button elements within the container
        const cards = gsap.utils.toArray(".card-item", containerRef.current);
        const buttons = gsap.utils.toArray(".card-button", containerRef.current);

        // Set initial state for all buttons (hidden)
        gsap.set(buttons, { opacity: 0 });

        cards.forEach((card, i) => {
            const button = buttons[i];

            // Create a timeline for each card's hover animation
            const tl = gsap.timeline({ paused: true });

            tl.to(card, {
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,0.5) 100%)",
                webkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,0.5) 100%)",
                duration: 0.5,
                ease: "power1.out",
            }, 0) // Animate card and button simultaneously
                .to(button, {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.out",
                }, 0);


            // Add event listeners
            const handleMouseEnter = () => tl.play();
            const handleMouseLeave = () => tl.reverse();

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);

            // Cleanup function for event listeners
            return () => {
                if (card) {
                    card.removeEventListener("mouseenter", handleMouseEnter);
                    card.removeEventListener("mouseleave", handleMouseLeave);
                }
            };
        });

    }, [data]); // Re-run effect if data changes

    if (!data || data.length === 0) return null;

    return (
        <div className="grid grid-cols-2 max-w-6xl gap-6" ref={containerRef}>

            {
                data.map((item, i) => (
                    <div
                        key={item.id}
                        className="relative border-1 border-white/10 p-2 rounded-2xl cursor-pointer bg-gradient-to-b from-[#00041f]/20 to-transparent card-item" // Added card-item class for GSAP targeting
                        style={{
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 98%, rgba(0,0,0,0) 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 98%, rgba(0,0,0,0) 100%)"
                        }}
                    >
                        <Image
                            src={item.src}
                            width={600}
                            height={600}
                            alt={item.title}
                            className="object-cover object-center rounded-2xl overflow-hidden border-5 border-[#363434]"
                            draggable="false"
                            style={{
                                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
                            }}
                        />

                        <div className="absolute top-5 right-5 card-button"> {/* Added card-button class for GSAP targeting */}
                            <Button url={item.url} text={item.text} classes />
                        </div>

                        <div className="p-5">
                            <h3 className="text-2xl font-bold w-auto">
                                {item.title}
                            </h3>

                            <p className="text-slate-400 mt-3">
                                {item.pera}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};