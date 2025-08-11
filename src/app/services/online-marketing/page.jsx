"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Register the GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function OnlineMarketing() {
  // A main container ref for scoping GSAP animations
  const container = useRef(null);

  // Refs for the Hero Section elements
  const heroHeading = useRef(null);
  const heroPera = useRef(null);
  const heroCta = useRef(null);
  const heroList = useRef(null);

  // Refs for the "Sync Section" elements
  const syncSection = useRef(null);
  const syncHeading = useRef(null);
  const syncPera = useRef(null);
  const syncList = useRef(null);
  const syncImage = useRef(null);

  useGSAP(() => {
    // --- 1. HERO SECTION ANIMATION (On Page Load) ---
    const heroTl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 1 },
    });

    heroTl
      .from(heroHeading.current, { opacity: 0, y: -30 })
      .from(heroPera.current, { opacity: 0, y: -20 }, "-=0.7")
      .from(heroCta.current, { opacity: 0, scale: 0.8 }, "-=0.7")
      .from(
        heroList.current?.children,
        {
          opacity: 0,
          y: 20,
          stagger: 0.15,
        },
        "-=0.6"
      );

    // --- 2. SYNC SECTION ANIMATION (On Scroll) ---
    const syncTl = gsap.timeline({
      scrollTrigger: {
        trigger: syncSection.current,
        start: "top 80%", // Animation starts when the top of the section is 80% down the viewport
        toggleActions: "play none none none",
        once: true, // Animation plays only once
      },
      defaults: {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        filter: "blur(5px)", // Add a subtle blur effect
      },
    });

    syncTl
      .from(syncHeading.current, {})
      .from(syncPera.current, {}, "-=0.6") // Overlap previous animation
      .from(syncList.current.children, { stagger: 0.1 }, "-=0.6")
      .from(syncImage.current, { scale: 0.9, y: 0 }, "-=0.8"); // Image scales in

  }, { scope: container }); // Scope animations to the main container

  return (
    // Use the main container ref here
    <main ref={container}>
      <Header />
      <section className="relative mt-10">
        {/* HERO SECTION */}
        <div className="flex min-h-screen items-center justify-center">
          <div className="relative z-10 flex max-w-[90%] flex-col items-center space-y-6 text-center lg:max-w-3xl">
            {/* Main Headline */}
            <h1
              className="text-2xl font-bold md:text-4xl/15 lg:text-5xl/15"
              ref={heroHeading}
            >
              Unlock Your Online Growth Potential.
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg text-secondary" ref={heroPera}>
              We craft stunning online shops and powerful marketing campaigns
              that turn browsers into loyal customers. Let us handle the digital
              complexities, so you can focus on running your business.
            </p>

            {/* Call-to-Action Button */}
            <div className="pt-2" ref={heroCta}>
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3 text-lg font-bold text-slate-900 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get a Free Consultation
              </Link>
            </div>

            {/* Feature List */}
            <div className="w-full pt-6">
              <ul
                className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap md:gap-6"
                ref={heroList}
              >
                {[
                  "Conversion-Optimized Design",
                  "Strategic Marketing Campaigns",
                  "Transparent Partnership & Support",
                ].map((text, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    <FaCheckCircle className="text-green-500" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SYNC PRODUCTS SECTION */}
        <div className="bg-slate-800 py-20 sm:py-28" ref={syncSection}>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-4 sm:px-6 md:flex-row lg:px-8">
            {/* Text Content Column */}
            <div className="max-w-xl text-center md:text-left">
              <h2
                className="text-3xl font-bold leading-tight tracking-tight text-white md:leading-snug lg:text-4xl"
                ref={syncHeading}
              >
                Automatically Sync Your Products to Facebook & Instagram
              </h2>

              <p className="mt-4 text-secondary" ref={syncPera}>
                List products on Instagram & Facebook automatically with ease.
                No need to manage 3 different platforms—simply update your
                website, and your products will sync everywhere.
              </p>

              <ul
                className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start"
                ref={syncList}
              >
                {[
                  "Reach new clients",
                  "Improved online visibility",
                  "Tag products in posts",
                  "Facebook & Instagram backlinks",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img
                      src="/assets/imgs/ui/tick-li.svg"
                      width={20}
                      height={20}
                      alt="tick icon"
                      aria-hidden="true"
                    />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Column */}
            <div className="mt-8 flex-shrink-0 md:mt-0" ref={syncImage}>
              <Image
                src="/assets/imgs/ecoms/sync-products-to-fafcebook-and-instagram.webp"
                width={600}
                height={600}
                alt="A diagram showing products syncing from a website to Facebook and Instagram shops."
                className="h-auto w-full max-w-md rounded-xl md:max-w-none"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}