import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export const DynamicGallery = ({ data }) => {
  // 1. Create a ref for the main container to scope the animation
  const container = useRef(null);

  // 2. Add a class to the repeating element for easier targeting
  const itemClass = "gallery-item";

  // 3. Use the useGSAP hook for animations
  useGSAP(
    () => {
      // Set the initial state of the items to be invisible
      gsap.set(`.${itemClass}`, { opacity: 0, y: 50 });

      // Create the scroll-triggered animation
      gsap.to(`.${itemClass}`, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        // The 'stagger' property animates items one after another
        stagger: 0.15,
        scrollTrigger: {
          trigger: container.current, // Use the container as the trigger
          start: "top 80%", // Animation starts when the top of the container is 80% down the viewport
          end: "bottom 20%",
          toggleActions: "play none none none", // Play animation once on entering the viewport
          // markers: true, // Uncomment for debugging scroll trigger positions
        },
      });
    },
    { scope: container } // Scope the GSAP selector to the container ref
  );

  return (
    // 4. Attach the ref to the component's root element
    <div ref={container} className="p-4">
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {data.map((img, index) => (
          // 5. Add the target class to each item
          <div key={index} className={`${itemClass} mb-4 break-inside-avoid`}>
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
