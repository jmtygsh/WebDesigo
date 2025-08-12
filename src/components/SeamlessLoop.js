"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa"; // Using react-icons

// It's good practice to register plugins once, but in this component structure it's fine.
gsap.registerPlugin(useGSAP);

export const SeamlessLoop = ({ icons, rmborder }) => {
  // Create refs for all the elements we need to animate or reference
  const containerRef = useRef(null); // Ref for the main container
  const marqueeRef = useRef(null); // Ref for the scrolling element
  const cursorRef = useRef(null); // Ref for our custom cursor
  const marqueeTween = useRef(null); // Ref to hold the marquee animation instance
  const [isPlaying, setIsPlaying] = useState(true); // State to track play/pause

  // Set up the marquee animation using useGSAP for proper cleanup
  useGSAP(
    () => {
      const container = marqueeRef.current;
      if (!container) return;

      const totalWidth = container.scrollWidth / 2;

      // Store the animation in our ref so we can control it later
      marqueeTween.current = gsap.fromTo(
        container,
        { x: -totalWidth },
        {
          x: 0,
          duration: 50,
          ease: "linear",
          repeat: -1,
          modifiers: {
            x: (x) => `${parseFloat(x) % totalWidth}px`,
          },
        }
      );
    },
    { scope: containerRef } // Scope the GSAP context to our main container
  );

  // --- Event Handlers for Cursor and Interaction ---

  const handleMouseMove = (event) => {
    // Get the position of the mouse relative to the container element
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    // Use GSAP to smoothly move the custom cursor to the mouse position
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.5, // A little delay for a smoother follow effect
      ease: "power3.out",
    });
  };

  const handleMouseEnter = () => {
    // Animate the cursor to become visible
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    // Animate the cursor to hide
    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
    // Restore the marquee animation to play when the mouse leaves
    if (marqueeTween.current) {
      marqueeTween.current.play();
      setIsPlaying(true);
    }
  };

  const handleClick = () => {
    if (marqueeTween.current) {
      // Use the animation's built-in paused() method to check its state
      if (marqueeTween.current.paused()) {
        marqueeTween.current.play();
        setIsPlaying(true);
      } else {
        marqueeTween.current.pause();
        setIsPlaying(false);
      }
    }
  };

  if (!icons) return null;

  return (
    // The main container listens for mouse events, including the new click handler
    <div
      ref={containerRef}
      className="relative overflow-hidden" // Relative positioning is key for the absolute cursor
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick} // Add the click handler here
    >
      {/* This is our custom cursor element, now with icons */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 bg-black backdrop-blur-sm rounded-full 
        pointer-events-none z-10 flex items-center justify-center text-white"
        style={{
          width: 50,
          height: 50,
          // We use transforms to center the cursor on the pointer and to scale it for animations
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 0, // Start fully transparent
        }}
      >
        {/* Conditionally render the Play or Pause icon based on state */}
        {isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
      </div>

      {/* This is the original marquee component */}
      <div
        ref={marqueeRef}
        className={`flex gap-5 w-max overflow-hidden cursor-none`} // Hide the default system cursor
      >
        {/* Duplicate the icons array to create the seamless loop effect */}
        {icons.concat(icons).map((img, idx) => (
          <Image
            key={idx}
            src={img.src}
            alt={img.alt}
            width={img.width || 456}
            height={img.height || 307}
            draggable="false"
            className={`object-cover object-center rounded-2xl overflow-hidden bg-transparent
              ${rmborder ? "" : "border-4 border-[#363434]"}
            `}
          />
        ))}
      </div>
    </div>
  );
};
