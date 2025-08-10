"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MasonryGrid } from "@/components/MasonryGrid";
import { seoCaseStudiesData, benefits, processSteps } from "@/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SeoPage() {
  const heading = useRef(null);
  const pera = useRef(null);
  const btnConsultation = useRef(null);
  const listBtn = useRef(null);

  const benefitsSection = useRef(null);
  const benefitsHeading = useRef(null);
  const benefitCards = useRef(null);

  const processSection = useRef(null);
  const processHeading = useRef(null);
  const processPera = useRef(null);
  const processCards = useRef(null);

  const caseStudiesSection = useRef(null);
  const caseStudiesHeading = useRef(null);
  const caseStudiesPera = useRef(null);

  return (
    <>
      <Header />
      <main className="relative mt-10">
        {/* === Hero Section === */}
        <section className="relative flex items-center justify-center h-dvh px-4 py-20 text-center">
          <div className="relative z-10 flex max-w-4xl flex-col items-center space-y-6">
            <h1
              ref={heading}
              className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold"
            >
              Rank on Page One. <br />
              Grow Your Business.
            </h1>

            <p ref={pera} className="max-w-2xl text-secondary">
              The single objective of SEO is to get your business listed on Page
              One of Google. We turn search engine traffic into more visitors,
              enquiries, and sales.
            </p>

            <div ref={btnConsultation} className="pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3 font-bold text-slate-900 shadow-md duration-300 hover:bg-slate-200 hover:shadow-xl"
              >
                Start Your Brand Journey
              </Link>
            </div>

            <ul
              ref={listBtn}
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-6"
            >
              {["More Visitors", "Increased Enquiries", "Higher Sales"].map(
                (text, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    <FaCheckCircle className="text-green-500" /> {text}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* === Benefits Section === */}
        <section ref={benefitsSection} className="bg-slate-900 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2
                ref={benefitsHeading}
                className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold  text-white"
              >
                The Unbeatable Benefits of SEO
              </h2>
            </div>
            <div
              ref={benefitCards}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center"
                >
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-base md:text-xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-slate-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === How It Works Section === */}
        <section ref={processSection} className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2
                ref={processHeading}
                className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold tracking-tight text-white"
              >
                Our Proven SEO Process
              </h2>
              <p ref={processPera} className="mt-4 text-secondary">
                SEO is a complex process involving over 200 ranking factors. We
                focus on what truly matters to deliver ongoing improvements and
                sustainable growth for our clients.
              </p>
            </div>

            <div
              ref={processCards}
              className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 "
            >
              <Image
                src="/assets/imgs/seo/seo-diagram.webp"
                width={600}
                height={400}
                alt="SEO DIAGRAM"
                className="rounded-xl"
                draggable="false"
              />

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-xl p-6 transition-all duration-300 bg-slate-800/50 hover:bg-slate-800/70 flex justify-center items-center "
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg text-blue-600">
                      {step.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-slate-400 text-base">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Case Studies Section === */}
        <section
          ref={caseStudiesSection}
          className="bg-slate-900 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto mb-12 text-center lg:mb-16">
              <h2
                ref={caseStudiesHeading}
                className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold  text-white "
              >
                Our Client Success Stories
              </h2>
              <p ref={caseStudiesPera} className="mt-4 text-secondary">
                A glimpse into the ranking results and digital growth we've
                crafted for our clients.
              </p>
            </div>
            <MasonryGrid data={seoCaseStudiesData} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
