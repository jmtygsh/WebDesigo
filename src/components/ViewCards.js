import React, { useRef, useEffect } from "react";
import Image from 'next/image';
import { Button } from "@/components/Button";

import gsap from "gsap";

export const ViewCards = ({ data }) => {

    if (!data || data.length === 0) return null;

    // Use a single ref to hold an array of DOM nodes directly
    const cardRefs = useRef([]);
    const buttonRefs = useRef([]);

    // We'll use a callback ref to populate the arrays of DOM nodes directly
    const setCardRef = (el, index) => {
        if (el) {
            cardRefs.current[index] = el;
        }
    };

    const setButtonRef = (el, index) => {
        if (el) {
            buttonRefs.current[index] = el;
        }
    };

    useEffect(() => {
        const cleanups = [];

        // Ensure all refs are present before proceeding
        if (cardRefs.current.length !== data.length || buttonRefs.current.length !== data.length) {
            // This can happen on initial render before all refs are assigned.
            // A more robust solution might involve waiting for all refs,
            // but often the next render cycle will have them.
            // For now, we'll just return if not all are ready.
            return;
        }

        data.forEach((_, i) => {
            const currentCard = cardRefs.current[i];
            const currentButton = buttonRefs.current[i];

            if (!currentCard || !currentButton) {
                // This shouldn't happen if the above length check is good,
                // but it's a good safeguard.
                return;
            }

            // Set initial state for the button (hidden)
            gsap.set(currentButton, { opacity: 0 });

            const handleMouseEnter = () => {
                // Animate the mask image on the card container
                gsap.to(currentCard, {
                    // Consider adding -webkit-mask-image for broader compatibility
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,0.5) 100%)",
                    duration: 0.5,
                    ease: "power1.out",
                });

                // Animate the button to be visible
                gsap.to(currentButton, {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.out",
                });
            };

            const handleMouseLeave = () => {
                // Animate the mask image back to its original state
                gsap.to(currentCard, {
                    // Consider adding -webkit-mask-image for broader compatibility
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 98%, rgba(0,0,0,0) 100%)",
                    duration: 0.5,
                    ease: "power1.out",
                });

                // Animate the button to be hidden
                gsap.to(currentButton, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.out",
                });
            };

            currentCard.addEventListener("mouseenter", handleMouseEnter);
            currentCard.addEventListener("mouseleave", handleMouseLeave);

            cleanups.push(() => {
                currentCard.removeEventListener("mouseenter", handleMouseEnter);
                currentCard.removeEventListener("mouseleave", handleMouseLeave);
            });
        });

        // This return acts as the cleanup for the useEffect hook
        return () => {
            cleanups.forEach(cleanup => cleanup());
        };

    }, [data]); // Depend on 'data' to re-run animations if the list of cards changes

    return (
        <div className="grid grid-cols-2 max-w-6xl gap-6 ">
            {
                data.map((item, i) => (
                    <div
                        // Use callback ref to directly assign DOM node to array
                        ref={el => setCardRef(el, i)}
                        key={item.id}
                        className="relative border-1 border-white/10 p-2 rounded-2xl cursor-pointer bg-gradient-to-b from-[#00041f]/20 to-transparent"
                        style={{
                            // Apply initial mask here directly in JSX for consistency
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 98%, rgba(0,0,0,0) 100%)",
                            // Add webkit prefix for better compatibility
                            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 98%, rgba(0,0,0,0) 100%)"
                        }}
                    >
                        <Image
                            src={item.src}
                            width={600}
                            height={600}
                            alt={item.title}
                            className="object-cover object-center rounded-2xl overflow-hidden border-5 border-[#363434]"
                            // Removed maskImage from the Image component, as it conflicts or is redundant
                        />

                        <div className="absolute top-5 right-5" ref={el => setButtonRef(el, i)}>
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