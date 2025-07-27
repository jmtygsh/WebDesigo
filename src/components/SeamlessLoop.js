"use client";

import gsap from 'gsap'
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export const SeamlessLoop = ({ icons, clases, rmborder }) => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const container = marqueeRef.current;

        if (!container) return;

        const totalWidth = container.scrollWidth / 2;  // half since we duplicated

        gsap.fromTo(
            container,
            { x: -totalWidth },  // Start from left
            {
                x: 0,  // Move to the right
                duration: 50, // Adjust speed
                ease: "linear",
                repeat: -1,    // Infinite loop
                modifiers: {
                    x: (x) => `${Math.round(parseFloat(x) % totalWidth)}px`, // Wrap around
                },
            }
        );

    }, []);

    return (
        <div ref={marqueeRef} className={`flex gap-5 w-max`}>
            {icons.concat(icons).map((img, idx) => (
                <Image
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    width={img.width || '100'}
                    height={img.height || '100'}
                    className={`object-cover object-center rounded-2xl overflow-hidden 
                        ${rmborder ? '' : 'border-4 border-[#363434]'}
                        `}
                    style={{ width: img.width || '100px', height: img.height || '100px' }}
                />
            ))}
        </div>
    )
}
