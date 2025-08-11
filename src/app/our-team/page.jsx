"use client";

import React, { useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assuming these components are located in your project's "@/components" directory
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cta } from "@/components/Cta";
import { VideoBackground } from "@/components/VideoBackground";
import { teamData } from "@/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function OurTeam() {
  const container = useRef();
  const heroTitle = useRef();
  const heroParagraph = useRef();
  const teamSection = useRef();

  useGSAP(
    () => {
      // --- Hero Section Animation (On Load) ---
      gsap.from(heroTitle.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(heroParagraph.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      // --- Team Section Animation (With ScrollTrigger) ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamSection.current,
          start: "top 80%", // Animation starts when the top of the section hits 80% of the viewport height
          toggleActions: "play none none none",
        },
      });

      tl.from(teamSection.current.querySelector("h2"), {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          teamSection.current.querySelector("p"),
          {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8"
        ) // Starts 0.8s before the previous animation ends
        .from(
          ".team-member-card",
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.2, // Animates each card 0.2s after the previous one
          },
          "-=0.5"
        );
    },
    { scope: container } // Scope animations to the container for automatic cleanup
  );

  return (
    <>
      <Header />
      <main ref={container}>
        {/* --- Hero Section --- */}
        <section className="flex justify-center items-center h-screen relative overflow-hidden">
          <VideoBackground url="/assets/videos/bgbackground.mp4" />

          <div className="relative max-w-4xl text-center space-y-6 flex flex-col items-center z-10 p-6">
            <h1
              ref={heroTitle}
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Meet the Visionaries Behind <br /> Our Success
            </h1>
            <p ref={heroParagraph} className="text-slate-300 max-w-3xl mx-auto">
              We are a collective of passionate creators, strategic thinkers,
              and digital artisans dedicated to crafting web experiences that
              not only look stunning but also deliver exceptional performance
              and drive results.
            </p>
          </div>
        </section>

        {/* --- Team Grid Section --- */}
        <section ref={teamSection} className="py-20 lg:py-28 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto">
              The Architects of Your Digital Future
            </h2>
            <p className="mt-5 text-slate-300 max-w-3xl mx-auto">
              Talent, passion, and a shared vision unite our team. Discover the
              experts who will bring your digital ambitions to life with
              precision and creativity.
            </p>

            {/* --- Dynamic Team Member Grid --- */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {teamData.map((member, index) => (
                <div
                  key={index}
                  // We add a class here to easily target all cards for the stagger animation
                  className="flex flex-col items-center text-center space-y-4 team-member-card"
                >
                  {/* Circular Image Container */}
                  <div className="w-48 h-48 md:w-56 md:h-56 relative">
                    <Image
                      className="object-cover rounded-full shadow-lg border-4 border-gray-700 transform transition-transform duration-300 hover:scale-105"
                      src={member.imageUrl}
                      alt={`Photo of ${member.name}`}
                      fill={true} // Use fill instead of the deprecated layout="responsive"
                      sizes="(max-width: 768px) 192px, 224px" // Corresponds to w-48 and w-56
                    />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base md:text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base text-blue-400 font-medium tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Call to Action Section --- */}
        <Cta />
      </main>
      <Footer />
    </>
  );
}
