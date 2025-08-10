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
import { MasonryGrid } from "@/components/MasonryGrid";

import { webDevelopmentPageData } from "@/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function webDevelopment() {
  const notice = useRef(null);
  const heading = useRef(null);
  const pera = useRef(null);
  const btnConsultation = useRef(null);
  const listBtn = useRef(null);
  const recentWorkContainer = useRef(null);
  const headingRecentWork = useRef(null);
  const peraRecentWork = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.from(notice.current, { opacity: 0, y: -20 })
      .from(heading.current, { opacity: 0, y: -20 }, "-=0.5")
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

    const rwtl = gsap.timeline({
      scrollTrigger: {
        trigger: recentWorkContainer.current,
        start: "top 80%",
        toggleActions: "play none none none", // play on enter, no reset or reverse
        once: true, // optional: play only once
      },
      defaults: {
        y: 50,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        filter: "blur(2px)",
      },
    });

    rwtl
      .from(headingRecentWork.current, {}, 0) // starts at 0
      .from(peraRecentWork.current, {}, "-=0.6"); // overlap start by 0.6s
  }, []);

  return (
    <>
      <Header />
      <section className="relative mt-10">
        <div className="flex justify-center items-center h-dvh relative">
          <div className="relative z-10 flex max-w-[90%] flex-col items-center space-y-6 text-center lg:max-w-3xl">
            {/* Main Headline */}
            <h1
              className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold"
              ref={heading}
            >
              Professional Web Development That Grows Your Business
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg text-secondary" ref={pera}>
              We deliver end-to-end web solutions, from initial Figma to custom
              development. Get a high-quality, scalable, and affordable website
              tailored to your business goals.
            </p>

            {/* Call-to-Action Button */}
            <div className="pt-2" ref={btnConsultation}>
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3 text-lg font-bold text-slate-900 shadow-md transition-bg duration-300 hover:bg-slate-200 hover:shadow-xl"
              >
                Get a Free Consultation
              </Link>
            </div>

            {/* Feature List as Pills/Tags */}
            <div className="w-full pt-6">
              <ul
                className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap md:gap-6"
                ref={listBtn}
              >
                {[
                  "Affordable Price",
                  "Customized Design",
                  "Ongoing Support",
                ].map((text, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    <FaCheckCircle className="text-green-500" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative" ref={recentWorkContainer}>
          <div className="bg-slate-900 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="max-w-2xl text-center mx-auto mb-12 lg:mb-16">
                <h2
                  className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold text-white"
                  ref={headingRecentWork}
                >
                  Our Recent Work
                </h2>
                <p className="mt-4 text-lg text-slate-300" ref={peraRecentWork}>
                  A glimpse into the digital experiences we've crafted for our
                  clients.
                </p>
              </div>

              {/* Masonry Grid Container */}
              <MasonryGrid data={webDevelopmentPageData} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
