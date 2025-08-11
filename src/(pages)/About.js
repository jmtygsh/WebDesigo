"use client";

import Image from "next/image";

import { Badge } from "@/components/Badge";
import { Cta } from "@/components/Cta";
import { VideoBackground } from "@/components/VideoBackground";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { founders } from "@/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const About = () => {
  const headingRef = useRef(null);
  const peraRef = useRef(null);

  const sectionRef = useRef(null);
  const sectionLeft = useRef(null);
  const sectionRight = useRef(null);
  const sectionHeading = useRef(null);
  const sectionPera = useRef(null);
  const sectionPera2 = useRef(null);

  const teamSectionRef = useRef(null);
  const teamHeadingRef = useRef(null);
  const teamPeraRef = useRef(null);
  const teamImages = useRef(null);

  useGSAP(() => {
    // This animation runs immediately when the component mounts
    gsap.from([headingRef.current, peraRef.current], {
      y: 50,
      duration: 0.7,
      opacity: 0,
      ease: "power2.out",
      filter: "blur(10px)",
      stagger: 0.2,
    });

    // This timeline is controlled by the ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Add animations to the timeline
    tl.from(sectionLeft.current, {
      x: -50,
      duration: 0.5,
      opacity: 0,
      filter: "blur(2px)",
    })
      .from(sectionRight.current, {
        x: 50,
        duration: 0.5,
        opacity: 0,
        filter: "blur(2px)",
      })
      .from(
        sectionHeading.current,
        {
          y: 30,
          duration: 0.5,
          opacity: 0,
        },
        "-=0.3"
      )
      .from(
        sectionPera.current,
        {
          y: 30,
          duration: 0.5,
          opacity: 0,
        },
        "-=0.4"
      )
      .from(
        sectionPera2.current,
        {
          y: 30,
          duration: 0.5,
          opacity: 0,
        },
        "-=0.4"
      );

    // This timeline is controlled by the ScrollTrigger
    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: teamSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Add animations to the timeline
    tls
      .from([teamHeadingRef.current, teamPeraRef.current], {
        y: 50,
        duration: 0.7,
        opacity: 0,
        ease: "power2.out",
        filter: "blur(10px)",
      })
      .from(teamImages.current?.children, {
        x: 30,
        duration: 0.5,
        opacity: 0,
        filter: "blur(2px)",
        stagger: 0.4,
      });
  });

  return (
    // Main container section
    <section className="relative">
      <section className="flex justify-center items-center h-dvh relative">
        <VideoBackground url="/assets/videos/bgbackground.mp4" />
        <div className="relative max-w-[90%] lg:max-w-4/6 text-center space-y-5 flex flex-col items-center z-10 p-4">
          <h1
            className="text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold"
            ref={headingRef}
          >
            Crafting Connections Digitally
          </h1>
          <p
            className="text-lg text-secondary max-w-[90%] md:max-w-full mx-auto text-center"
            ref={peraRef}
          >
            We&apos;re not just builders—we&apos;re brand partners. Our team of
            skilled designers, developers, and strategists work together to
            craft powerful, custom digital solutions that reflect your vision,
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          ref={sectionRef}
        >
          {/* Image Column */}

          <Image
            className="rounded-lg shadow-xl object-cover w-full h-full aspect-[4/3]"
            src="/assets/imgs/about-goal.jpg"
            alt="A team of professionals collaborating around a table with sticky notes"
            width={600}
            height={600}
            ref={sectionLeft}
          />

          {/* Text Column */}
          <div
            className="space-y-4 flex flex-col items-start"
            ref={sectionRight}
          >
            <Badge text="Our Story" />

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto"
              ref={sectionHeading}
            >
              Founded on a Passion for Code and Creativity
            </h2>
            <p
              className="text-slate-400 max-w-[90%] md:max-w-full md:mx-auto"
              ref={sectionPera}
            >
              Webdesigo was born in 2020 from a simple belief: every business
              deserves a powerful and elegant online presence. Our founders saw
              an opportunity to provide high-touch, custom web solutions in a
              world of templates and quick fixes.
            </p>
            <p
              className="text-slate-400 max-w-[90%] md:max-w-full md:mx-auto"
              ref={sectionPera2}
            >
              We&apos;ve since grown into a dynamic team, but our core mission
              remains unchanged. We weave together innovative design and robust
              technology to create digital tapestries that tell your
              brand&apos;s unique story.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-8" ref={teamSectionRef}>
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto"
            ref={teamHeadingRef}
          >
            The People Behind the Pixels
          </h2>
          <p
            className="mt-4 text-slate-400 max-w-[90%] md:max-w-full mx-auto text-center"
            ref={teamPeraRef}
          >
            Our team is our greatest asset. Get to know the minds dedicated to
            your project&apos;s success.
          </p>

          <div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12"
            ref={teamImages}
          >
            {founders.map((data) => (
              <div className="space-y-3">
                <Image
                  className="object-cover w-full h-80 rounded-lg shadow-lg"
                  src={data.src}
                  alt={data.name}
                  width={600}
                  height={600}
                />
                <div className="pt-2">
                  <h3 className="text-xl font-bold">{data.name}</h3>
                  <p className="text-blue-500 font-medium">{data.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </section>
  );
};
