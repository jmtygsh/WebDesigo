import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/Button"; // Assuming Button component exists
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once
gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Child Component: Card ---
const Card = ({ item }) => {
  const cardRef = useRef(null);
  const buttonRef = useRef(null); // Ref for the button element
  const tl = useRef();

  useGSAP(
    () => {
      // Target the button directly via its ref
      const button = buttonRef.current;
      gsap.set(button, { opacity: 0 }); // Set initial state

      tl.current = gsap
        .timeline({ paused: true })
        .to(cardRef.current, {
          // Animate the card container
          maskImage:
            "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
          webkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
          duration: 0.5,
          ease: "power1.inOut",
        })
        .to(
          button, // Animate the button element
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "<"
        );
    },
    { scope: cardRef } // Scope is still useful for cleanup
  );

  const handleMouseEnter = () => tl.current.play();
  const handleMouseLeave = () => tl.current.reverse();

  return (
    <div
      ref={cardRef}
      className="relative border-1 border-white/10 p-2 rounded-2xl cursor-pointer bg-gradient-to-b from-[#00041f]/20 to-transparent card-item"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 98%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 98%, transparent 100%)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={item.src}
        width={600}
        height={600}
        alt={item.title}
        className="object-cover object-center rounded-2xl overflow-hidden border-5 border-[#363434]"
        draggable="false"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
        }}
      />
      {/* Attach the ref directly to the button's container */}
      <div ref={buttonRef} className="absolute top-5 right-5">
        <Button url={item.url} text={item.text} />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-normal md:text-2xl md:font-bold">
          {item.title}
        </h3>
        <p className="text-slate-400 mt-3">{item.pera}</p>
      </div>
    </div>
  );
};

// --- Parent Component: ViewCards ---
export const ViewCards = ({ data }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animate the direct children of the container, avoiding class selectors
      gsap.from(containerRef.current.children, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        filter: "blur(2px)",
        stagger: 0.2,
      });
    },
    { scope: containerRef }
  );

  if (!data || data.length === 0) return null;

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-6 m-auto"
      ref={containerRef}
    >
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
