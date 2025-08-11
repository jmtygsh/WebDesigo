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
import { webDevelopmentPageData,googleShoppingImages } from "@/data/index"


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function EcommerceWebsite() {
  // Refs for Hero Section
  const heading = useRef(null);
  const pera = useRef(null);
  const btnConsultation = useRef(null);
  const listBtn = useRef(null);

  // Refs for Google Shopping Section
  const googleShoppingSection = useRef(null);

  // Refs for Facebook/Instagram Sync Section
  const socialSyncSection = useRef(null);

  // Refs for Recent Work Section
  const recentWorkContainer = useRef(null);
  const headingRecentWork = useRef(null);
  const peraRecentWork = useRef(null);

  useGSAP(() => {
    // 1. Hero Section Animation
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
    tl.from(heading.current, { opacity: 0, y: -20 })
      .from(pera.current, { opacity: 0, y: -20 }, "-=0.5")
      .from(btnConsultation.current, { opacity: 0, scale: 0.8 }, "-=0.4")
      .from(
        listBtn.current?.children,
        { opacity: 0, y: 10, stagger: 0.1 },
        "-=0.6"
      );

    // 2. Google Shopping Section Animation
    const gsTl = gsap.timeline({
      scrollTrigger: {
        trigger: googleShoppingSection.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsTl.from(gsap.utils.toArray(".gs-text"), {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
    gsTl.from(
      gsap.utils.toArray(".gs-image"),
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // 3. Facebook & Instagram Sync Section Animation
    const ssTl = gsap.timeline({
      scrollTrigger: {
        trigger: socialSyncSection.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    ssTl.from(gsap.utils.toArray(".ss-text-col > *"), {
      x: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out",
    });
    ssTl.from(
      ".ss-image-col",
      {
        x: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "<0.2"
    );

    // 4. Recent Work Section Animation
    const rwtl = gsap.timeline({
      scrollTrigger: {
        trigger: recentWorkContainer.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      defaults: { y: 50, opacity: 0, duration: 0.6, ease: "power2.out" },
    });
    rwtl
      .from(headingRecentWork.current, {})
      .from(peraRecentWork.current, {}, "-=0.4");
  });

  return (
    <>
      <Header />
      <section className="relative mt-10">
        <div className="flex justify-center items-center h-dvh relative">
          <div className="relative z-10 flex max-w-[90%] flex-col items-center space-y-6 text-center lg:max-w-3xl">
            <h1
              className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold"
              ref={heading}
            >
              Ecommerce Websites that Generate Online Sales.
            </h1>
            <p className="max-w-2xl text-lg text-secondary" ref={pera}>
              We specialise in building ecommerce websites / online shops for
              businesses and individuals who want to start selling online or who
              already have an online business but want more sales.
            </p>
            <div className="pt-2" ref={btnConsultation}>
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3 text-lg font-bold text-slate-900 shadow-md transition-bg duration-300 hover:bg-slate-200 hover:shadow-xl"
              >
                Get a Free Consultation
              </Link>
            </div>
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

        <div
          ref={googleShoppingSection}
          className="py-20 sm:py-28 bg-slate-900"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            <div className="max-w-3xl text-center">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight md:leading-snug gs-text">
                Get Your Products on Google Shopping
              </h2>
              <p className="mt-4 text-secondary gs-text">
                Stop waiting for customers to find you. We seamlessly integrate
                your website with Google Shopping, placing your products
                directly in front of motivated buyers—all with zero listing
                fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 md:mt-10">
              {googleShoppingImages.map((image) => (
                <Image
                  key={image.id}
                  src={image.src}
                  width={500}
                  height={333}
                  alt={image.alt}
                  className="rounded-xl gs-image"
                  draggable="false"
                />
              ))}
            </div>
          </div>
        </div>

        <div ref={socialSyncSection} className="bg-slate-800 py-20 sm:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-4 sm:px-6 md:flex-row lg:px-8">
            <div className="max-w-xl text-center md:text-left ss-text-col">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:leading-snug lg:text-4xl">
                Automatically Sync Your Products to Facebook & Instagram
              </h2>
              <p className="mt-4 text-secondary">
                List products on Instagram & Facebook automatically with ease.
                No need to manage 3 different platforms—simply update your
                website, and your products will sync everywhere.
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start">
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
            <div className="mt-8 flex-shrink-0 md:mt-0 ss-image-col">
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

        <div
          ref={recentWorkContainer}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 md:py-10 lg:py-20"
        >
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
          <MasonryGrid data={webDevelopmentPageData} />
        </div>
      </section>
      <Footer />
    </>
  );
}
