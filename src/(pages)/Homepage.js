"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { HeroSection } from "@/components/HeroSection";
import { VideoBackground } from "@/components/VideoBackground";
import { VideoSection } from "@/components/VideoSection";
import { FeaturesCard } from "@/components/FeaturesCard";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { SeamlessLoop } from "@/components/SeamlessLoop";
import { Slider } from "@/components/Slider";
import { ArrowNavigation } from "@/components/ArrowNavigation";
import { ViewCards } from "@/components/ViewCards";
import { ServiceCard } from "@/components/ServiceCard";
import { SeamlessService } from "@/components/SeamlessService";
import { Count } from "@/components/Count";
import { Testimonials } from "@/components/Testimonials";
import { FAQs } from "@/components/FAQs";
import { StartProjectSection } from "@/components/StartProjectSection";
import { SeamlessLogo } from "@/components/SeamlessLogo";

import {
  images,
  features,
  whyus,
  ourapproach,
  toolWeUse,
  toolWeUseDetails,
  projectList,
  serviceCards,
  seamlessLoopService,
  countNumber,
  trustedByLeadingBrands,
  testimonials,
  faqData,
} from "@/data/index";

gsap.registerPlugin(ScrollTrigger);

export const Homepage = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.prevSlide();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.nextSlide();
    }
  };

  // promise container
  const promiseHeadingRef = useRef(null);
  const promiseHeadingText = useRef(null);

  // Why choose us container
  const whyUsContainerRef = useRef(null);
  const whyUsContainerHeading = useRef(null);
  const whyUSContainerSpan1Ref = useRef(null);
  const whyUSContainerSpan2Ref = useRef(null);
  const whyUsContainerText = useRef(null);

  // ourApproach container
  const ourApproachContainerRef = useRef(null);
  const ourApproachContainerRefHeading = useRef(null);
  const ourApproachContainerRefText = useRef(null);

  // our story container
  const ourStoryContainerRef = useRef(null);
  const ourStoryContainerRefLeft = useRef(null);
  const ourStoryContainerRefRight = useRef(null);
  const ourStoryContainerRefBtn = useRef(null);

  // tool we use container
  const toolContainerRef = useRef(null);
  const toolContainerRefText = useRef(null);
  const toolContainerRefHeading = useRef(null);
  const toolContainerRefBtn = useRef(null);

  // core service cards
  const coreServiceRef = useRef(null);
  const coreServiceRefHeading = useRef(null);
  const coreServiceRefText = useRef(null);

  const coreServiceRefOtherService = useRef(null);
  const coreServiceRefOtherServiceCard = useRef(null);

  // recent project container
  const recentProjectContainer = useRef(null);
  const recentProjectContainerHeading = useRef(null);
  const recentProjectContainerText = useRef(null);
  const recentProjectContainerBtn = useRef(null);

  // performance container
  const performanceContainerRef = useRef(null);
  const performanceContainerHeadingRef = useRef(null);
  const performanceContainerHeadingTwoRef = useRef(null);
  const performanceContainerCard = useRef(null);

  // client container
  const clientContainerRef = useRef(null);
  const clientContainerHeadingRef = useRef(null);
  const clientContainerTextRef = useRef(null);

  // faq container
  const faqContainerRef = useRef(null);
  const faqContainerHeadingRef = useRef(null);
  const faqContainerTextRef = useRef(null);

  useGSAP(() => {
    const DURATION_HEADING = 0.8;
    const DURATION_TEXT = 0.6;
    const DURATION_CARD = 0.7;
    const STAGGER_DEFAULT = 0.15;

    // --- Promise Section ---
    const headingEl = promiseHeadingRef.current;
    if (headingEl) {
      const splitText = headingEl.textContent
        .split("")
        .map((char) => `<span>${char}</span>`);
      headingEl.innerHTML = splitText.join("");
      const chars = gsap.utils.toArray(headingEl.children);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingEl,
          start: "100% 100%",
          end: "100% 40%",
          scrub: 0.5,
        },
      });

      tl.from(chars, {
        opacity: 0,
        scale: 1.2,
        filter: "blur(10px)",
        stagger: STAGGER_DEFAULT,
      }).from(
        promiseHeadingText.current,
        {
          y: 50,
          opacity: 0,
          duration: DURATION_TEXT,
        },
        "-=0.5"
      ); // overlap with character animation
    }

    // --- Why Us Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: whyUsContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(whyUSContainerSpan1Ref.current, {
        y: -50,
        opacity: 0,
        duration: DURATION_HEADING,
        ease: "power2.out",
      })
      .from(
        whyUSContainerSpan2Ref.current,
        {
          y: 50,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        whyUsContainerText.current,
        {
          y: 30,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // --- Our Approach Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ourApproachContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(ourApproachContainerRefHeading.current, {
        x: 50,
        opacity: 0,
        duration: DURATION_HEADING,
        ease: "power2.out",
      })
      .from(
        ourApproachContainerRefText.current,
        {
          x: 50,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // --- Our Story Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ourStoryContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(ourStoryContainerRefLeft.current, {
        x: -50,
        opacity: 0,
        duration: DURATION_HEADING,
        ease: "power2.out",
      })
      .from(
        ourStoryContainerRefBtn.current.children,
        {
          x: -50,
          opacity: 0,
          duration: DURATION_TEXT,
          stagger: STAGGER_DEFAULT,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ourStoryContainerRefRight.current,
        {
          x: 50,
          opacity: 0,
          duration: DURATION_HEADING,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // --- Tools We Use Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: toolContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(toolContainerRefHeading.current, {
        x: 50,
        opacity: 0,
        duration: DURATION_HEADING,
        ease: "power2.out",
      })
      .from(
        toolContainerRefText.current,
        {
          y: 40,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        toolContainerRefBtn.current,
        {
          x: 100,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // --- Core Services Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: coreServiceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(coreServiceRefHeading.current, {
        x: -50,
        opacity: 0,
        duration: DURATION_HEADING,
        ease: "power2.out",
      })
      .from(
        coreServiceRefText.current,
        {
          x: -50,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        coreServiceRefOtherService.current,
        {
          x: 50,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        coreServiceRefOtherServiceCard.current,
        {
          y: 50,
          opacity: 0,
          duration: DURATION_CARD,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // --- Recent Projects Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: recentProjectContainer.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(recentProjectContainerHeading.current, {
        y: 50,
        opacity: 0,
        duration: DURATION_HEADING,
        ease: "power2.out",
      })
      .from(
        recentProjectContainerText.current,
        {
          y: 40,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        recentProjectContainerBtn.current,
        {
          y: 30,
          opacity: 0,
          duration: DURATION_TEXT,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // --- Performance Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: performanceContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(performanceContainerHeadingRef.current, {
        y: 50,
        opacity: 0,
        duration: DURATION_HEADING,
        filter: "blur(2px)",
        ease: "power2.out",
      })
      .from(
        performanceContainerHeadingTwoRef.current,
        {
          y: 40,
          opacity: 0,
          duration: DURATION_TEXT,
          filter: "blur(2px)",
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        performanceContainerCard.current,
        {
          y: 40,
          opacity: 0,
          duration: DURATION_TEXT,
          filter: "blur(2px)",
          ease: "power2.out",
        },
        "-=0.4"
      );

    // --- Client Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: clientContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(clientContainerHeadingRef.current, {
        y: 50,
        opacity: 0,
        duration: DURATION_HEADING,
        filter: "blur(2px)",
        ease: "power2.out",
      })
      .from(
        clientContainerTextRef.current,
        {
          y: 30,
          opacity: 0,
          duration: DURATION_TEXT,
          filter: "blur(2px)",
          ease: "power2.out",
        },
        "-=0.4"
      );

    // --- FAQ Section ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(faqContainerHeadingRef.current, {
        y: 50,
        opacity: 0,
        duration: DURATION_HEADING,
        filter: "blur(2px)",
        ease: "power2.out",
      })
      .from(
        faqContainerTextRef.current,
        {
          y: 30,
          opacity: 0,
          duration: DURATION_TEXT,
          filter: "blur(2px)",
          ease: "power2.out",
        },
        "-=0.4"
      ); // overlap to keep the animation flowing smoothly
  });

  return (
    <div className="bg-background min-h-screen text-foreground font-sans relative">
      <section className="flex justify-center items-center h-dvh relative">
        <VideoBackground url="/assets/videos/bgbackground.mp4" />
        <HeroSection />
      </section>

      <section
        className="overflow-hidden mt-10 relative"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        <SeamlessLoop icons={images} />
      </section>

      <section className="py-10 relative">
        <div className="flex justify-between items-center gap-3 max-w-3/4 m-auto">
          <div className="flex-1 h-[1px] bg-gradient-to-l from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
          <h4 className="text-slate-400">See How We Can Help Your Brand</h4>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
        </div>

        <div className="mt-5">
          <FeaturesCard
            icons="true"
            style="true"
            datas={features}
            classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </section>

      <section className="py-16 md:py-20 relative overflow-hidden">
        <div
          className="relative text-center rounded-none lg:rounded-xl h-dvh flex flex-col 
                justify-center items-center border backdrop-blur-sm 
                border-blue-500/40 
                shadow-[0_0_15px_rgba(59,130,246,0.4),0_0_30px_rgba(59,130,246,0.2)]"
        >
          <Badge text="Our Promise" />
          <h2
            className="z-2 text-2xl md:text-4xl/15 lg:text-5xl/15 font-bold max-w-[80%] lg:max-w-4xl mx-auto"
            ref={promiseHeadingRef}
          >
            Our mission is to design websites that attract and engage customers.
          </h2>
          <p
            className="z-2 text-slate-400 mt-5 max-w-[80%] md:max-w-full"
            ref={promiseHeadingText}
          >
            However, we approach things a bit differently around here.
          </p>
          <VideoBackground
            url="/assets/videos/intro.mp4"
            classes="rounded-none lg:rounded-xl"
          />
        </div>
      </section>

      <section
        className="py-16 md:py-20 min-h-dvh relative flex flex-col justify-center items-center"
        ref={whyUsContainerRef}
      >
        <div className="text-center max-w-3xl mx-auto">
          {" "}
          {/* Added px-4 for side padding on mobile */}
          <h3
            className="text-2xl md:text-3xl lg:text-4xl/15 font-bold"
            ref={whyUsContainerHeading}
          >
            <span ref={whyUSContainerSpan1Ref} className="inline-block">
              Why We,
            </span>{" "}
            <span
              ref={whyUSContainerSpan2Ref}
              className="text-blue-600 inline-block"
            >
              Stands Out
            </span>
          </h3>
          <p
            className="text-slate-400 mt-2 max-w-[90%] md:max-w-full mx-auto text-center"
            ref={whyUsContainerText}
          >
            Experience the perfect blend of creativity, cutting-edge technology,
            and client-first strategies. We don’t just build websites — we craft
            digital experiences that inspire trust and drive results.
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto  mt-10">
          <FeaturesCard
            datas={whyus}
            classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          />
        </div>
      </section>

      <section className="py-16 md:py-20" ref={ourApproachContainerRef}>
        <div className="flex justify-center items-center flex-col">
          <h3
            className="z-2 text-2xl md:text-3xl/15 lg:text-4xl/15 font-bold max-w-4xl mx-auto"
            ref={ourApproachContainerRefHeading}
          >
            Our Approach
          </h3>
          <p
            className="text-slate-400 mt-2 max-w-[90%] md:max-w-full mx-auto text-center"
            ref={ourApproachContainerRefText}
          >
            Explore our streamlined approach to creating bespoke websites that
            align with your goals.
          </p>
          <div className="mt-10">
            <FeaturesCard
              icons="true"
              style="true"
              datas={ourapproach}
              steps
              classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
            />
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-20 flex flex-col max-w-[95%] lg:max-w-6xl m-auto lg:flex-row justify-between gap-10 items-center "
        ref={ourStoryContainerRef}
      >
        <div
          className="flex-1 flex items-start flex-col"
          ref={ourStoryContainerRefLeft}
        >
          <Badge text="About Us" />
          <h3 className="z-2 text-2xl md:text-3xl/15 lg:text-4xl/15 font-bold mt-2">
            Our Story & Mission
          </h3>
          <p className="z-2 text-slate-400 mt-2">
            Discover who we are and our mission at WebDesigo.
            <br className="md:hidden" />
            <br className="md:hidden" />
            We are a passionate team of creative professionals dedicated to
            crafting exceptional web design solutions.
            <br className="md:hidden" />
            <br className="md:hidden" />{" "}
            {/* This break also only appears on small screens */}
            Our mission is to empower businesses with innovative websites that
            not only captivate but also drive results.
          </p>
          <div
            className="mt-5 flex flex-wrap gap-5 items-center"
            ref={ourStoryContainerRefBtn}
          >
            <Button className="mt-20" url="/contact" text="Contact Us" />
            <div className="hidden lg:block">
              <Button url="/works" text="View Projects" classes />
            </div>
          </div>
        </div>

        <Image
          src="/assets/imgs/DesignAndDevelop.jpg"
          alt="Design And Develop"
          width={600}
          height={600}
          className="h-[400px] flex-1 rounded-xl"
          draggable="false"
          ref={ourStoryContainerRefRight}
        />
      </section>

      <section
        className="py-16 md:py-20 overflow-hidden"
        ref={toolContainerRef}
      >
        <div className="flex flex-col items-start max-w-[95%] lg:max-w-6xl m-auto">
          <div className="flex justify-between items-center w-full">
            <div className="max-w-2xl">
              <h3
                className="z-2 text-2xl md:text-3xl/15 lg:text-4xl/15 font-bold w-auto"
                ref={toolContainerRefHeading}
              >
                Tools We Utilize for Excellence
              </h3>
              <p className="z-2 text-slate-400 mt-1" ref={toolContainerRefText}>
                Discover the advanced tools and technologies we leverage to
                create cutting-edge websites.
              </p>
            </div>
            <div className="hidden md:flex gap-4" ref={toolContainerRefBtn}>
              <ArrowNavigation handleClick={handlePrevClick} />
              <ArrowNavigation handleClick={handleNextClick} right />
            </div>
          </div>
        </div>

        <div
          className="lg:mt-10"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Slider ref={sliderRef} datas={toolWeUseDetails} />
        </div>

        <div
          className="flex justify-end lg:hidden gap-4 max-w-[90%] m-auto mt-5"
          ref={toolContainerRefBtn}
        >
          <ArrowNavigation handleClick={handlePrevClick} />
          <ArrowNavigation handleClick={handleNextClick} right />
        </div>
      </section>

      <section className="py-16 md:py-20 " ref={coreServiceRef}>
        <div className="flex justify-center items-center flex-col">
          <h3
            className="z-2 text-2xl md:text-3xl/15 lg:text-4xl/15 font-bold max-w-4xl mx-auto"
            ref={coreServiceRefHeading}
          >
            Explore Our Core Services
          </h3>
          <p
            className="text-slate-400 mt-3 max-w-[90%] md:max-w-full mx-auto text-center"
            ref={coreServiceRefText}
          >
            Discover our comprehensive range of services tailored to enhance
            your digital presence.
          </p>

          <div className="mt-10 max-w-6xl m-auto">
            <ServiceCard data={serviceCards} />
          </div>
        </div>

        <div
          className="flex justify-between items-center gap-3 max-w-3/4 m-auto mt-20"
          ref={coreServiceRefOtherService}
        >
          <div className="flex-1 h-[1px] bg-gradient-to-l from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
          <h4 className="text-slate-400">Other Services</h4>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
        </div>

        <div
          className="mt-7 overflow-hidden max-w-6xl m-auto"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
          ref={coreServiceRefOtherServiceCard}
        >
          <SeamlessService data={seamlessLoopService} brd />
        </div>
      </section>

      <section
        className="py-16 md:py-20 max-w-[95%] m-auto lg:max-w-full"
        ref={recentProjectContainer}
      >
        <div className="flex justify-center items-center flex-col">
          <h3
            className="z-2 text-2xl md:text-3xl/15 lg:text-4xl/15 font-bold max-w-4xl mx-auto"
            ref={recentProjectContainerHeading}
          >
            Explore Our Recent Projects
          </h3>
          <p
            className="text-slate-400 mt-3 max-w-[90%] md:max-w-full mx-auto text-center"
            ref={recentProjectContainerText}
          >
            Browse through our portfolio showcasing diverse, innovative web
            design projects and client successes.
          </p>

          <div className="mt-10">
            <ViewCards data={projectList} />
          </div>

          <div className="mt-30" ref={recentProjectContainerBtn}>
            <Button url="/works" text="View All Works" classes />
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-20 flex flex-col-reverse md:flex-row justify-between 
            gap-10 items-center max-w-[95%] lg:max-w-6xl mx-auto"
      >
        <div className="w-full md:flex-1" ref={performanceContainerRef}>
          <Count data={countNumber} />
        </div>

        <div className="w-full md:flex-1 flex items-center md:items-start flex-col text-center md:text-left">
          <Badge text="Results & Analytics" />
          <h3
            className="z-2 text-2xl md:text-3xl/15 lg:text-4xl font-bold mt-2"
            ref={performanceContainerHeadingRef}
          >
            Performance Insights and the Analytics Overview
          </h3>
          <div className="mt-5 md:mt-10 w-full">
            <h4
              className="text-xl text-secondary"
              ref={performanceContainerHeadingTwoRef}
            >
              Trusted by Leading Brands
            </h4>
            <div
              className="mt-5 md:mt-7 max-w-lg mx-auto flex"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
              }}
              ref={performanceContainerCard}
            >
              <SeamlessLogo data={trustedByLeadingBrands} />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-20 flex flex-col justify-center items-center"
        ref={clientContainerRef}
      >
        <h3
          className="z-2 text-2xl md:text-3xl lg:text-4xl/15 font-bold max-w-4xl mx-auto"
          ref={clientContainerHeadingRef}
        >
          Client Success Stories
        </h3>
        <p
          className="text-slate-400 mt-3 max-w-[90%] md:max-w-full mx-auto text-center"
          ref={clientContainerTextRef}
        >
          Discover what our clients say about their experiences and success
          working with us.
        </p>

        <div
          className="mt-10"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Testimonials data={testimonials} />
        </div>
      </section>

      <section
        className="py-16 md:py-20 flex flex-col justify-center items-center"
        ref={faqContainerRef}
      >
        <Badge text="FAQ" />
        <h3
          className="mt-3 md:mt-0 z-2 text-2xl md:text-3xl/15 lg:text-4xl font-bold max-w-4xl mx-auto"
          ref={faqContainerHeadingRef}
        >
          Frequently Asked Questions
        </h3>
        <p
          className="text-slate-400 mt-3 max-w-[90%] md:max-w-full mx-auto text-center"
          ref={faqContainerTextRef}
        >
          Answers to common questions about our services, processes, and what
          sets us apart.
        </p>

        <div className="mt-10">
          <FAQs data={faqData} />
        </div>
      </section>

      <section className="py-16 md:py-20 mb-20 md:10 max-w-6xl m-auto ">
        <StartProjectSection />
      </section>
    </div>
  );
};
