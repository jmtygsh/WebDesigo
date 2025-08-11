"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// GSAP and the official React hook
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { VideoBackground } from "@/components/VideoBackground";
import { TbLinkOff } from "react-icons/tb";
import { IoHomeOutline, IoArrowBack } from "react-icons/io5";

export const NotFound = () => {
  const router = useRouter();

  // Create a ref for the main container to scope our animations
  const container = useRef(null);

  // --- GSAP Animation Hook ---
  // This hook runs after the component mounts.
  // The { scope: container } option ensures animations only target elements
  // inside our container, and it handles cleanup automatically.
  useGSAP(
    () => {
      // Create a timeline for a controlled animation sequence
      const tl = gsap.timeline();

      // 1. Animate the container box itself
      tl.from(".glass-container", {
        opacity: 0,
        scale: 0.95,
        y: -30,
        duration: 0.5,
        ease: "power2.out",
      });

      // 2. Animate the icon with a "pop" effect
      tl.from(
        ".icon",
        {
          scale: 0.5,
          opacity: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      ); // Overlap with previous animation

      // 3. Animate the text content with a stagger
      tl.from(
        ".text-content",
        {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.1, // Animate each element 0.1s after the previous one
          ease: "power1.out",
        },
        ">-0.2"
      ); // Start 0.2s after the start of the previous animation

      // 4. Animate the buttons in
      tl.from(
        ".action-buttons",
        {
          opacity: 0,
          y: 10,
          duration: 0.4,
          ease: "power1.out",
        },
        ">-0.2"
      );
    },
    { scope: container }
  );

  const handleGoBack = () => {
    router.back();
  };

  return (
    // The main ref is attached here
    <section
      ref={container}
      className="flex justify-center items-center h-dvh relative overflow-hidden"
    >
      <VideoBackground url="/assets/videos/bgbackground.mp4" />

      <div className="relative z-10 w-[90%] max-w-lg">
        {/* Added a class for GSAP to target */}
        <div className="glass-container bg-black/30 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 text-center shadow-2xl">
          <div className="flex flex-col items-center space-y-6">
            {/* Added a class for GSAP to target */}
            <div className="icon">
              <TbLinkOff className="h-20 w-20 text-red-500" />
            </div>

            {/* Added a class for GSAP to target each text element */}
            <h1 className="text-content text-3xl md:text-4xl font-bold text-white">
              Not Found
            </h1>
            <p className="text-content text-base md:text-lg text-gray-300">
              It looks like this link is broken or the page has moved. Let's get
              you back on track.
            </p>

            {/* Added a class for GSAP to target the button container */}
            <div className="action-buttons flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 w-full">
              <button
                onClick={handleGoBack}
                className="flex w-full sm:w-auto items-center  gap-2 px-6 py-3 font-semibold text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <IoArrowBack /> Go Back
              </button>
              <Link
                href="/"
                className="flex w-full sm:w-auto items-center  gap-2 px-6 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                <IoHomeOutline /> Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
