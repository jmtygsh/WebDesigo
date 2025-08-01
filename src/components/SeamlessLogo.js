import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Image from 'next/image';

// Register the GSAP plugin for React to make sure it's ready to use.
gsap.registerPlugin(useGSAP);

export const SeamlessLogo = ({ data }) => {

    // Create a "reference" (marqueeRef) to connect our JavaScript code to the HTML div
    // that holds all our scrolling items.
    const marqueeRef = useRef(null);



    // useGSAP is a special hook that runs our animation code when the component appears
    // or when its dependencies (like 'data') change.
    useGSAP(() => {
        // Get the actual HTML element that our marqueeRef is pointing to.
        const container = marqueeRef.current;

        // If the container isn't ready yet, stop here.
        if (!container) return;
        const totalWidthOfDuplicatedContent = container.scrollWidth;
        // The distance we need to scroll to show one full loop (one set of our original items).
        const widthOfOneDataSet = totalWidthOfDuplicatedContent / 2;

        // Start the GSAP animation!
        gsap.fromTo(
            container,
            { x: -widthOfOneDataSet },
            {
                x: 0,
                duration: 20,
                ease: "linear",
                repeat: -1,
                modifiers: {
                    x: (x) => {
                        return `${parseFloat(x) % widthOfOneDataSet}px`;
                    },
                },
                overwrite: "auto" // Prevents animation conflicts if the component quickly re-renders.
            }
        );
    }, {
        scope: marqueeRef,
        dependencies: [data] // Re-run the animation setup if the 'data' list changes.
    });


    // If there's no data or it's not a proper list, don't show anything.
    if (!data || data.length === 0) return null;

    return (
        <div className='overflow-hidden w-full h-15'>
            <div
                className='flex gap-5 items-center flex-nowrap w-max'
                ref={marqueeRef} // Connects this div to our marqueeRef for animation.
            >
                {data.concat(data).map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className={`flex gap-3 items-center text-secondary`}
                    >
                        {/* Display the icon image for the item. */}
                        <Image src={item.icon} width={160} height={160} alt={item.title || "Logo"} draggable="false" />
                    </div>
                ))}
            </div>
        </div>
    );
};