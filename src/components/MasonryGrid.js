import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const MasonryGrid = ({ data }) => {
  const cardContainer = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardContainer.current,
        start: "top 80%",
        toggleActions: "play none none none", // play on enter, no reset or reverse
        once: true
      },
    });

    tl.from(cardContainer.current?.children, {
      y: 50,
      opacity: 0,
      duration: 0.2,
      stagger: 0.2,
      ease: "power2.out",
      filter: "blur(2px)",
    });
  });
  return (
    <div className="columns-1 gap-6 lg:columns-2" ref={cardContainer}>
      {data.map((item, index) => (
        <div
          key={index}
          className="group relative mb-6 break-inside-avoid overflow-hidden 
           bg-blue-100/5 border border-blue-500/20 rounded-xl  backdrop-blur-sm"
        >
          {/* The Image */}
          <Image
            src={item.src}
            width={500}
            height={500}
            key={index}
            loading="lazy"
            alt={item.alt}
            draggable="false"
            className={`h-auto w-full transition-transform 
                rounded-2xl duration-500
                        p-2 group-hover:scale-101`}
          />
        </div>
      ))}


      {/* need to pagination later */}
    </div>
  );
};
