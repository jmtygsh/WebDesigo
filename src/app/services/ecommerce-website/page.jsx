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

export default function ecommerceWebsite() {
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
              Ecommerce Webistes generate onlines sales.
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg text-secondary" ref={pera}>
              We specialise in building ecommerce websites / online shops for
              business and individuals who want to start selling online or who
              already have an online business but want more sales.
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

        <div className="py-20 sm:py-28 bg-slate-900">
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
              <div className="max-w-3xl text-center">
                <h2
                  className="text-3xl lg:text-4xl font-bold tracking-tight text-white 
                  leading-tight md:leading-snug"
                >
                  Get Your Products on Google Shopping
                </h2>
                <p className="mt-4 text-secondary">
                  Stop waiting for customers to find you. We seamlessly
                  integrate your website with Google Shopping, placing your
                  products directly in front of motivated buyers—all with zero
                  listing fees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 md:mt-10">
                <Image
                  src="/assets/imgs/ecoms/ecommerce-website-seo.webp"
                  width={500}
                  height={333}
                  alt="Diagram showing products listed on Google Shopping"
                  className="rounded-xl"
                  draggable="false"
                />
                <Image
                  src="/assets/imgs/ecoms/ecommerce-website-seo.webp"
                  width={500}
                  height={333}
                  alt="Diagram showing products listed on Google Shopping"
                  className="rounded-xl"
                  draggable="false"
                />
                <Image
                  src="/assets/imgs/ecoms/ecommerce-website-seo.webp"
                  width={500}
                  height={333}
                  alt="Diagram showing products listed on Google Shopping"
                  className="rounded-xl"
                  draggable="false"
                />

                <Image
                  src="/assets/imgs/ecoms/ecommerce-website-seo.webp"
                  width={500}
                  height={333}
                  alt="Diagram showing products listed on Google Shopping"
                  className="rounded-xl"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 py-20 sm:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-4 sm:px-6 md:flex-row lg:px-8">
            {/* --- Text Content Column --- */}
            <div className="max-w-xl text-center md:text-left">
              {/* CHANGE: Centered text on mobile, left-aligned on medium+ */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:leading-snug lg:text-4xl">
                Automatically Sync Your Products to Facebook & Instagram
                {/* REMOVED: <br /> for natural text flow on all screen sizes. */}
              </h2>

              <p className="mt-4 text-secondary">
                List products on Instagram & Facebook automatically with ease.
                No need to manage 3 different platforms—simply update your
                website, and your products will sync everywhere.
                {/* REMOVED: <br /> to let the paragraph wrap naturally. */}
              </p>

              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start">
                {/* CHANGE: Using flex-wrap for a more robust list layout on mobile. */}
                {[
                  "Reach new clients",
                  "Improved online visibility",
                  "Tag products in posts",
                  "Facebook & Instagram backlinks",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img // Using a standard <img> tag is often simpler for static SVGs
                      src="/assets/imgs/ui/tick-li.svg"
                      width={20}
                      height={20}
                      alt="tick icon"
                      aria-hidden="true" // Decorative image
                    />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Image Column --- */}
            <div className="mt-8 flex-shrink-0 md:mt-0">
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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 md:py-10 lg:py-20">
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
       
      </section>
      <Footer />
    </>
  );
}
