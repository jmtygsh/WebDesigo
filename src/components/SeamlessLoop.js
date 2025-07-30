"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Image from 'next/image';


gsap.registerPlugin(useGSAP);

export const SeamlessLoop = ({ icons, rmborder }) => {

    const marqueeRef = useRef(null);

    useGSAP(() => {
        const container = marqueeRef.current;
        if (!container) return;

        // Calculate totalWidth based on the first half of the duplicated content
        // This ensures a true seamless loop by animating exactly one full cycle of the original content
        // scrollWidth coming from container object

        const totalWidth = container.scrollWidth / 2;

        gsap.fromTo(
            container,
            { x: -totalWidth }, // Start from left, equivalent to the end of the first set of icons
            {
                x: 0, // Move to the right, bringing the second set of icons into view
                duration: 50, // Adjust speed as needed
                ease: "linear",
                repeat: -1, // Infinite loop
                modifiers: {
                    // This modifier ensures that when the animation completes one cycle (x: 0),
                    // it instantly jumps back to -totalWidth, creating a seamless loop without a visible jump.
                    // The animation essentially goes from -totalWidth to 0, and then instantly resets to -totalWidth,
                    // making it appear as if the content is continuously scrolling.
                    x: (x) => `${parseFloat(x) % totalWidth}px`,
                },
            }
        );
    }, { scope: marqueeRef }); // Pass marqueeRef as the scope for useGSAP


    if (!icons) return null;


    return (
        <div ref={marqueeRef} className={`flex gap-5 w-max overflow-hidden`}>
            {/* Duplicate the icons array to create the seamless loop effect */}
            {icons.concat(icons).map((img, idx) => (
                <Image
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    width={img.width || 456} // Use numbers for width/height props
                    height={img.height || 307} // Use numbers for width/height props
                    draggable="false"
                    className={`object-cover object-center rounded-2xl overflow-hidden bg-transparent
                         ${rmborder ? '' : 'border-4 border-[#363434]'}
                     `}
                />
            ))}
        </div>
    );
};