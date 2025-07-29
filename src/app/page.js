"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";



import { Header } from "@/components/Header";
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

import {
  images, features, whyus, ourapproach,
  toolWeUse, toolWeUseDetails, projectList, serviceCards,
  seamlessLoopService, countNumber, trustedByLeadingBrands,
  testimonials
} from '@/data/index';



export default function Home() {

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



  return (
    <div className="bg-background min-h-screen text-foreground font-sans relative">
      <Header />

      <section className="flex justify-center items-center h-dvh relative">
        <VideoBackground url="/assets/videos/bgbackground.mp4" />
        <HeroSection />
      </section>

      <section className="overflow-hidden mt-10"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        <SeamlessLoop icons={images} />
      </section>

      <section className="mt-20">
        <div className="flex justify-between items-center gap-3 max-w-3/4 m-auto">
          <div className="flex-1 h-[1px] bg-gradient-to-l from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
          <h4 className="text-slate-400">See How We Can Help Your Brand</h4>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
        </div>

        <div className="mt-5 mb-30">
          <FeaturesCard icons='true' style='true' datas={features} classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      <section className="mt-20">
        <div className="relative text-center rounded-xl h-dvh flex flex-col justify-center items-center
        border backdrop-blur-sm border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.4),0_0_30px_rgba(59,130,246,0.2)]"
        >
          <Badge text="Our Promise" />

          <h2 className="z-2 text-5xl/15 font-bold max-w-4xl mx-auto ">Our mission is to design websites that attract and engage customers.</h2>
          <p className="z-2 text-slate-400 mt-5">However, we approach things a bit differently around here.</p>
          <VideoBackground url="/assets/videos/intro.mp4" classes="rounded-2xl" />
        </div>
      </section>

      {/* i need here top aniamtion canavas  */}
      <section className="mt-50 h-dvh">
        <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
          <h3 className="text-4xl/15 font-bold">Why We, <span className="text-blue-600">Stands Out</span></h3>
          <p className="text-slate-400 mt-5">
            Experience the perfect blend of creativity, cutting-edge technology, and client-first strategies.
            We don’t just build websites — we craft digital experiences that inspire trust and drive results.
          </p>
        </div>
        <div className=" w-full h-72 mt-10 rounded flex gap-5 flex-col">
          <FeaturesCard datas={whyus} classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      {/* i need here top aniamtion canavas  */}
      <section className="mt-50">
        <div className="flex justify-center items-center flex-col">
          <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto">Our Approach</h3>
          <p className="z-2 text-slate-400 mt-1">Explore our streamlined approach to creating bespoke websites that align with your goals.</p>
          <div className="mt-10">
            <FeaturesCard icons='true' style='true' datas={ourapproach} steps classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" />
          </div>
        </div>

      </section>

      <section className="mt-50 flex justify-between gap-10 items-center max-w-6xl m-auto">

        <div className="flex-1 flex items-start flex-col">
          <Badge text="About Us" />
          <h3 className="z-2 text-4xl/15 font-bold mt-2">
            Our Story & Mission
          </h3>
          <p className="z-2 text-slate-400 mt-1">
            Discover who we are and our mission at WebDesigo. We are a passionate team of creative professionals dedicated to crafting exceptional web design solutions. Our mission is to empower businesses with innovative websites that not only captivate but also drive results.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 items-center">
            <Button url="/contact-us" text="Contact Us" />
            <Button url="/contact-us" text="View Projects" classes />
          </div>
        </div>

        <Image
          src="/assets/imgs/DesignAndDevelop.jpg"
          alt="Design And Develop"
          width={600}
          height={600}
          className="h-[400px] flex-1 rounded-xl"
          draggable="false"
        />
      </section>

      <section className="mt-50 ">
        <div className="flex flex-col items-start max-w-6xl m-auto">

          <div className="flex justify-between items-center w-full">
            <div className="max-w-2xl">
              <h3 className="z-2 text-4xl/15 font-bold w-auto">
                Tools We Utilize for Excellence
              </h3>
              <p className="z-2 text-slate-400 mt-1">
                Discover the advanced tools and technologies we leverage to create cutting-edge websites.
              </p>
            </div>


            <div className="flex gap-4">
              <ArrowNavigation handleClick={handlePrevClick} />
              <ArrowNavigation handleClick={handleNextClick} right />
            </div>
          </div>


        </div>

        <div className="mt-10 "
          style={{
            maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"
          }}
        >
          <Slider ref={sliderRef} datas={toolWeUseDetails} />
        </div>
      </section >

      <section className="mt-50">
        <div className="flex justify-center items-center flex-col">
          <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto">
            Explore Our Recent Projects
          </h3>
          <p className="z-2 text-slate-400 mt-1">
            Browse through our portfolio showcasing diverse, innovative web design projects and client successes.
          </p>

          <div className="mt-10">
            <ViewCards data={projectList} />
          </div>

          <div className="mt-20">
            <Button url="/view-all-works" text="View All Works" classes />
          </div>
        </div>
      </section>

      <section className="mt-50">
        <div className="flex justify-center items-center flex-col">
          <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto">Explore Our Core Services</h3>
          <p className="z-2 text-slate-400 mt-1">
            Discover our comprehensive range of services tailored to enhance your digital presence.
          </p>

          <div className="mt-10 max-w-6xl m-auto">
            <ServiceCard data={serviceCards} />
          </div>
        </div>


        <div className="flex justify-between items-center gap-3 max-w-3/4 m-auto mt-20">
          <div className="flex-1 h-[1px] bg-gradient-to-l from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
          <h4 className="text-slate-400">Other Services</h4>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
        </div>

        <div className="mt-7 overflow-hidden max-w-6xl m-auto"
          style={{
            maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
        >

          <SeamlessService data={seamlessLoopService} brd />
        </div>
      </section>

      <section className="mt-50 mb-50 flex justify-between gap-10 items-center max-w-6xl m-auto">

        <div className="flex-1">
          <Count data={countNumber} />
        </div>

        <div className="flex-1 flex items-start flex-col">
          <Badge text="Results & Analytics" />
          <h3 className="z-2 text-4xl font-bold mt-2">
            Performance Insights and the Analytics Overview
          </h3>

          <div className="mt-10">
            <h4 className="text-xl text-secondary">Trusted by Leading Brands</h4>

            <div className="mt-7 max-w-lg m-auto flex"
              style={{
                maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
              }}
            >
              <SeamlessService data={trustedByLeadingBrands} />
            </div>
          </div>
        </div>
      </section>


      <section className="mt-50 flex flex-col justify-center items-center mb-50">
        <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto">
          Client Success Stories
        </h3>
        <p className="z-2 text-slate-400 mt-1">Discover what our clients say about their experiences and success working with us.</p>

        <div className="mt-10"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"
          }}>
          < Testimonials data={testimonials} />
        </div>
       
      </section>
    </div>
  );
}
