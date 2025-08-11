"use client";
import React from "react";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Helper component for a single card's animation and rendering ---
// This is an internal component; it is not exported.
const AnimatedItem = ({ item, index }) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      // We create an animation for each individual card
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%", // Animate when the card is 85% from the top of the viewport
          toggleActions: "play none none none",
        },
        // Use the index to alternate animation direction
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        filter: "blur(5px)",
      });
    },
    { scope: cardRef }
  ); // Scope ensures animations are tied to this specific card

  return (
    <div
      ref={cardRef} // The ref is now on the individual card
      className="p-8 border-1 border-white/10 rounded-2xl cursor-pointer bg-gradient-to-b from-[#00041f]/20 to-transparent"
    >
      <div className="flex flex-col md:flex-row justify-between gap-3 items-center mb-5">
        <h4 className="text-xl md:text-2xl/15 lg:text-3xl/15 lg:font-bold">
          {item.title}
        </h4>
        {item.btnUrl && item.btnText && (
          <Button url={item.btnUrl} text={item.btnText} classes />
        )}
      </div>
      <p className="text-secondary mb-5 text-center md:text-left lg:text-left">
        {item.description}
      </p>
      <div className="bg-blue-500/10 h-[1px] w-full"></div>
      <ul className="mt-5 space-y-5">
        {item.features &&
          item.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Image
                src="/assets/imgs/ui/tick-li.svg"
                width={20}
                height={20}
                alt="tick icon"
              />
              <span className="text-sm md:text-base">
                {feature}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

// --- This is your main component, which is exported ---
export const ServiceCard = ({ data }) => {
  // The animation logic (useRef, useGSAP) has been moved out of here.

  // Ensure data is an array and not empty
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    // The container div no longer needs a ref. It just creates the grid.
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[90%] md:max-w-[95%] lg:max-w-full m-auto">
      {data.map((item, index) => (
        // For each item in your data, we render the self-animating helper component
        <AnimatedItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};
