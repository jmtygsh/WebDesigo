"use client";

import Link from "next/link";
import Image from "next/image";

import { FaCheckCircle } from "react-icons/fa";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MasonryGrid } from "@/components/MasonryGrid";

import { DynamicGallery, Gallery } from "@/components/DynamicGallery";

import { brandingPageData } from "@/data";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Branding() {
  const heading = useRef(null);
  const pera = useRef(null);
  const btnConsultation = useRef(null);
  const listBtn = useRef(null);
  const portfolioContainer = useRef(null);
  const headingPortfolio = useRef(null);
  const peraPortfolio = useRef(null);

  useGSAP(() => {
    // Animation for the hero section
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.from(heading.current, { opacity: 0, y: -20 }, "-=0.5")
      .from(pera.current, { opacity: 0, y: -20 }, "-=0.5")
      .from(btnConsultation.current, { opacity: 0, scale: 0.8 }, "-=0.4")
      .from(
        listBtn.current?.children,
        {
          opacity: 0,
          y: 10,
          stagger: 0.1,
        },
        "-=0.6"
      );

    // Animation for the portfolio section on scroll
    const portfolioTl = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioContainer.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      defaults: {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        filter: "blur(2px)",
      },
    });

    portfolioTl
      .from(headingPortfolio.current, {}, 0)
      .from(peraPortfolio.current, {}, "-=0.6");
  }, []);

  return (
    <>
      <Header />
      <section className="relative mt-10">
        <section className="flex justify-center items-center h-dvh relative">
          <div className="relative z-10 flex max-w-[90%] flex-col items-center space-y-6 text-center lg:max-w-3xl">
            {/* Main Headline */}
            <h1 className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold" ref={heading}>
              Strategic Branding 
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg text-secondary" ref={pera}>
              We go beyond just a logo. We build comprehensive brand
              ecosystems—from core strategy and messaging to stunning visual
              identities and detailed guidelines—that resonate with your
              audience and create lasting value.
            </p>

            {/* Call-to-Action Button */}
            <div className="pt-2" ref={btnConsultation}>
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3 text-lg font-bold text-slate-900 shadow-md duration-300 hover:bg-slate-200 hover:shadow-xl"
              >
                Start Your Brand Journey
              </Link>
            </div>

            {/* Feature List as Pills/Tags */}
            <div className="w-full pt-6">
              <ul
                className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap md:gap-6"
                ref={listBtn}
              >
                {[
                  "Brand Strategy",
                  "Visual Identity",
                  "Messaging & Tone",
                ].map((text, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    <FaCheckCircle className="text-green-500" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="relative" ref={portfolioContainer}>
          <div className="bg-slate-900 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="max-w-2xl text-center mx-auto mb-12 lg:mb-16">
                <h2
                  className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold tracking-tight text-white sm:text-4xl"
                  ref={headingPortfolio}
                >
                  Our Branding Portfolio
                </h2>
                <p className="mt-4 text-lg text-slate-300" ref={peraPortfolio}>
                  A look into the powerful identities and memorable brand
                  experiences we've crafted for our partners.
                </p>
              </div>

              {/* Masonry Grid Container */}

              <DynamicGallery data={brandingPageData} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
