import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Image from 'next/image';

// Register the GSAP plugin for React to make sure it's ready to use.
gsap.registerPlugin(useGSAP);

export const SeamlessService = ({ data, brd }) => {

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

        // --- How the seamless loop works ---
        // 1. We put the content twice inside the scrolling area (e.g., [Item A, B, C] [Item A, B, C]).
        // 2. We measure the total width of *both* sets of content.
        // 3. The animation then scrolls exactly the width of *one* set of content.
        // 4. When one set has completely moved out of view, the other set is perfectly in place,
        //    and we instantly "teleport" the entire container back to the starting point,
        //    creating a never-ending, smooth scroll without any visible jump.

        // Get the full width of the container, which now includes two copies of our items.
        const totalWidthOfDuplicatedContent = container.scrollWidth;
        // The distance we need to scroll to show one full loop (one set of our original items).
        const widthOfOneDataSet = totalWidthOfDuplicatedContent / 2;


        // Start the GSAP animation!
        gsap.fromTo(
            container, // This is the element we want to animate (our scrolling div).
            { x: -widthOfOneDataSet }, // Start position: Move the content to the left by the width of one set.
            // This brings the *second* copy of items into the starting view.
            {
                x: 0, // End position: Animate the content back to its original (0) position.
                // As it moves, the first copy slides off-screen, and the second copy takes its place.
                duration: 20, // How long one complete scroll cycle takes (in seconds).
                ease: "linear", // Keep the speed constant throughout the animation for a smooth look.
                repeat: -1, // Make it loop forever!
                modifiers: {
                    // This special function tells GSAP what to do with the 'x' (horizontal position) value
                    // at every step of the animation.
                    x: (x) => {
                        // The modulo operator (%) helps us "wrap around" the position.
                        // When the animation reaches its end (x=0), this line instantly
                        // "teleports" the content back to the starting negative position (-widthOfOneDataSet).
                        // Because the content is duplicated, this teleport is invisible to the user,
                        // making the scroll seem continuous.
                        return `${parseFloat(x) % widthOfOneDataSet}px`;
                    },
                },
                overwrite: "auto" // Prevents animation conflicts if the component quickly re-renders.
            }
        );
    }, {
        scope: marqueeRef, // Tell useGSAP to manage animations only within this ref's element.
        dependencies: [data] // Re-run the animation setup if the 'data' list changes.
    });


    // If there's no data or it's not a proper list, don't show anything.
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        // This outer div acts as a window. Anything that scrolls out of it will be hidden.
        <div className='overflow-hidden w-full h-15'>
            {/* This is the div that actually scrolls. It holds all our items. */}
            <div
                className='flex gap-5 items-center flex-nowrap w-max'
                ref={marqueeRef} // Connects this div to our marqueeRef for animation.
            >
                {/* We render the 'data' list twice here using 'concat(data)'. */}
                {/* This is essential for the seamless loop, as it provides the second set of items */}
                {/* to slide into view as the first set disappears. React handles rendering both sets efficiently. */}
                {data.concat(data).map((item, index) => (
                    // Each individual item in the scrolling list.
                    <div
                        // Unique key for each item, important for React to track changes efficiently.
                        key={`${item.id}-${index}`}
                        // Styling for each item: flex, gap, border, text color, padding, rounded corners,
                        // and 'flex-shrink-0' to prevent items from shrinking when space is limited.
                        className={`flex gap-3 items-center text-secondary  ${brd ? ('border border-[#171d45]  px-4 py-2 rounded-full flex-shrink-0') : ('')} `}
                    >
                        {/* Display the icon image for the item. */}
                        <Image src={item.icon} width={item.w} height={item.h} alt={item.title} draggable="false" />
                        {/* Display the title of the item. */}
                        {item.title ? (<h4>{item.title}</h4>) : ('')}
                    </div>
                ))}
            </div>
        </div>
    );
};