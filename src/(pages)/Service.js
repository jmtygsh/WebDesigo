"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cta } from "@/components/Cta";

import { VideoBackground } from "@/components/VideoBackground";
import { ServiceCard } from "@/components/ServiceCard";

import { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import { ourAllServices } from "@/data/index";

export const Service = () => {
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

        <div className="relative max-w-[90%] lg:max-w-3/6 text-center space-y-5 flex flex-col items-center z-2">
          <h1
            className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold"
            ref={headingRef}
          >
            Explore Our Services
          </h1>

          <p className="text-lg text-secondary" ref={peraRef}>
            From web development to digital strategy, we provide a wide range of
            services tailored to help your business grow and succeed.
          </p>
        </div>
      </section>

      <div className="relative pb-20 md:pb-50">
        <div
          className="absolute top-0 left-0 hidden md:block"
          style={{
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 1%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <Image
            src="/assets/imgs/ui/left.png"
            width={400}
            height={400}
            alt="Left decorative element"
          />
        </div>
        <div
          className="absolute top-0 right-0 hidden md:block"
          style={{
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 1%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <Image
            src="/assets/imgs/ui/right.png"
            width={400}
            height={400}
            alt="Right decorative element"
          />
        </div>

        <div className="h-15"></div>

        <div className="max-w-6xl m-auto z-2">
          <ServiceCard data={ourAllServices} />
        </div>

        <div
          className="absolute bottom-0 left-0 transform scale-y-[-1] hidden md:block"
          style={{
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 1%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <Image
            src="/assets/imgs/ui/left.png"
            width={400}
            height={400}
            alt="Left decorative element"
          />
        </div>
        <div
          className="absolute bottom-0 right-0 transform scale-y-[-1] hidden md:block"
          style={{
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 1%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <Image
            src="/assets/imgs/ui/right.png"
            width={400}
            height={400}
            alt="Right decorative element"
          />
        </div>
      </div>

      {/* later i will pagination here  */}

      <Cta />
    </section>
  );
};
