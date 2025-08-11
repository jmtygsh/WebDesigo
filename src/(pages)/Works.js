"use client";

import React from "react";
import { VideoBackground } from "@/components/VideoBackground";
import { ViewCards } from "@/components/ViewCards";
import { Cta } from "@/components/Cta";

import { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import { projectAllList } from "@/data/index";

export const Works = () => {
  const headingRef = useRef(null);
  const peraRef = useRef(null);

  useGSAP(() => {
    gsap.from([headingRef.current, peraRef.current], {
      y: 50,
      duration: 0.7,
      opacity: 0,
      ease: "power2.out",
      filter: "blur(10px)",
      stagger: 0.2,
    });
  });
  return (
    <section className="relative">
      <section className="flex justify-center items-center h-dvh relative">
        <VideoBackground url="/assets/videos/bgbackground.mp4" />

        <div className="relative max-w-[90%] lg:max-w-4/6 text-center space-y-5 flex flex-col items-center z-2">
          <h1 className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold" ref={headingRef}>
            Discover Our Latest Creations
          </h1>

          <p className="text-lg text-secondary" ref={peraRef}>
            Each project we create is a reflection of our passion for design,
            technology, and results. Explore how we help businesses like yours
            stand out and thrive in the digital world.
          </p>
        </div>
      </section>
      <section className="relative pb-20 md:pb-50 max-w-[90%] md:max-w-full m-auto">
        <ViewCards data={projectAllList} />
      </section>

      {/* later i will pagination here  */}

      <Cta />
    </section>
  );
};
