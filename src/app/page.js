"use client";

import { useRef } from "react";
import Image from "next/image";


import { gsap } from "gsap";

import { FaStar, FaRocket, FaPaintBrush, FaCode, FaBolt, FaSearch } from "react-icons/fa";


import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VideoBackground } from "@/components/VideoBackground";
import { VideoSection } from "@/components/VideoSection";
import { FeaturesCard } from "@/components/FeaturesCard";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { SeamlessLoop } from "@/components/SeamlessLoop";
import { Slider } from "@/components/Slider";

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




  const images = [
    { src: "/assets/imgs/demoWebsites/1.svg", alt: "Website Demo 1", width: 456, height: 307 },
    { src: "/assets/imgs/demoWebsites/2.svg", alt: "Website Demo 2", width: 456, height: 307 },
    { src: "/assets/imgs/demoWebsites/mob-1.svg", alt: "Website Mob Demo 1", width: 162, height: 307 },
    { src: "/assets/imgs/demoWebsites/3.svg", alt: "Website Demo 3", width: 456, height: 307 },
    { src: "/assets/imgs/demoWebsites/4.avif", alt: "Website Demo 4", width: 456, height: 307 },
    { src: "/assets/imgs/demoWebsites/mob-2.svg", alt: "Website Mob Demo 2", width: 162, height: 307 },
    { src: "/assets/imgs/demoWebsites/5.svg", alt: "Website Demo 5", width: 456, height: 307 },
  ];


  const features = [
    {
      id: 1,
      icon: <FaPaintBrush className="w-6 h-6 text-white" />,
      title: "Custom Designs",
      description: "Tailored websites meticulously crafted to reflect your brand."
    },
    {
      id: 2,
      icon: <FaBolt className="w-6 h-6 text-white" />,
      title: "Fast Performance",
      description: "Optimized for lightning-fast speed to enhance user experience."
    },
    {
      id: 3,
      icon: <FaSearch className="w-6 h-6 text-white" />,
      title: "SEO Friendly",
      description: "Designed to improve SEO and increase visibility effortlessly."
    }
  ];

  const whyus = [
    {
      id: 1,
      icon: "/assets/imgs/features/team.svg",
      title: "Expert Team",
      description: "Dedicated professionals with expertise in cutting-edge web design + development."
    },
    {
      id: 2,
      icon: "/assets/imgs/features/client.svg",
      title: "Client-Centric Approach",
      description: "Tailoring solutions to meet your unique business needs and exceed expectations."
    },
    {
      id: 3,
      icon: "/assets/imgs/features/experience.svg",
      title: "Proven Experience",
      description: "Years of successfully delivering impactful web solutions across diverse industries."
    },
    {
      id: 4,
      icon: "/assets/imgs/features/delivery.svg",
      title: "Timely Delivery",
      description: "Meeting deadlines consistently without compromising on quality or precision."
    },
    {
      id: 5,
      icon: "/assets/imgs/features/responsive.svg",
      title: "Responsive Solutions",
      description: "Ensuring seamless performance & Responsive across all devices for optimal user experience."
    },
    {
      id: 6,
      icon: "/assets/imgs/features/transparent.svg",
      title: "Transparent Communication",
      description: "Clear, open lines of communication throughout every stage of your project.s"
    }
  ];

  const ourapproach = [
    {
      id: 1,
      icon: <FaStar className="w-6 h-6 text-white" />,
      title: "Discovery Phase",
      description: "Understanding your brand, objectives, and target audience to define project goals."
    },
    {
      id: 2,
      icon: <FaRocket className="w-6 h-6 text-white" />,
      title: "Design Concept",
      description: "Creating initial design concepts based on insights gathered during the discovery phase."
    },
    {
      id: 3,
      icon: <FaPaintBrush className="w-6 h-6 text-white" />,
      title: "Development & Testing",
      description: "Building and refining the website, ensuring functionality and compatibility across devices."
    },
    {
      id: 4,
      icon: <FaCode className="w-6 h-6 text-white" />,
      title: "Launch & Support",
      description: "Deploying the finalized website and providing ongoing support to ensure long-term success."
    }
  ];


  const toolWeUse = [
    { src: "/assets/imgs/tools/figma.svg", alt: "Figma", width: 40, height: 40 },
    { src: "/assets/imgs/tools/gsap.svg", alt: "Gsap", width: 40, height: 40 },
    { src: "/assets/imgs/tools/nextjs.svg", alt: "Nextjs", width: 40, height: 40 },
    { src: "/assets/imgs/tools/react-js.svg", alt: "React js", width: 40, height: 40 },
    { src: "/assets/imgs/tools/shopify.svg", alt: "Shopify", width: 40, height: 40 },
    { src: "/assets/imgs/tools/vite.svg", alt: "Vite", width: 40, height: 40 },
    { src: "/assets/imgs/tools/wordpress.svg", alt: "Wordpress", width: 40, height: 40 },
  ]

  const toolWeUseDetails = [
    {
      id: 1,
      icon: "/assets/imgs/tools/figma.svg",
      title: "Figma",
      description: "Collaborative design and prototyping tool online."
    },
    {
      id: 2,
      icon: "/assets/imgs/tools/gsap.svg",
      title: "GSAP",
      description: "Interactive prototypes for advanced animations website Interactive prototypes for advanced animations website Interactive prototypes for advanced animations website.. "
    },
    {
      id: 3,
      icon: "/assets/imgs/tools/nextjs.svg",
      title: "Next Js",
      description: "E-commerce platform for online shopping websites."
    },
    {
      id: 4,
      icon: "/assets/imgs/tools/react-js.svg",
      title: "React JS",
      description: "All-in-one workspace for notes and project tasks."
    },
    {
      id: 5,
      icon: "/assets/imgs/tools/shopify.svg",
      title: "Shopify",
      description: "All-in-one workspace for notes and project tasks."
    },
    {
      id: 6,
      icon: "/assets/imgs/tools/vite.svg",
      title: "Vite",
      description: "All-in-one workspace for notes and project tasks."
    },
    {
      id: 7,
      icon: "/assets/imgs/tools/wordpress.svg",
      title: "Wordpress",
      description: "All-in-one workspace for notes and project tasks."
    },
    {
      id: 8,
      icon: "/assets/imgs/tools/wordpress.svg",
      title: "Wordpress",
      description: "All-in-one workspace for notes and project tasks."
    },
    {
      id: 9,
      icon: "/assets/imgs/tools/wordpress.svg",
      title: "Wordpress",
      description: "All-in-one workspace for notes and project tasks."
    }
  ];




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
          <h3 className="text-slate-400">See How We Can Help Your Brand</h3>
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
          <h2 className="text-5xl/15 font-bold">Why We, <span className="text-blue-600">Stands Out</span></h2>
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
          <Badge text="Our Process" />

          <h2 className="z-2 text-5xl/15 font-bold max-w-4xl mx-auto ">Our Approach</h2>
          <p className="z-2 text-slate-400 mt-5">Explore our streamlined approach to creating bespoke websites that align with your goals.</p>
          <div className="mt-10">
            <FeaturesCard icons='true' style='true' datas={ourapproach} steps classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" />
          </div>
        </div>

      </section>




      <section className="mt-50 flex justify-between gap-10 items-center max-w-6xl m-auto">

        <div className="flex-1 flex items-start flex-col">
          <Badge text="About Us" />
          <h2 className="z-2 text-5xl/15 font-bold">
            Discover Who We Are <br /> & Our Mission
          </h2>
          <p className="z-2 text-slate-400 mt-5">
            Discover who we are and our mission at WebDesigo. We are a passionate team of creative professionals dedicated to crafting exceptional web design solutions. Our mission is to empower businesses with innovative websites that not only captivate but also drive results.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 items-center">
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
        />
      </section>




      <section className="mt-50 ">
        <div className="flex flex-col items-start max-w-6xl m-auto">
          <Badge text="Tools We Use" />

          <div className="flex justify-between items-center w-full">
            <h2 className="z-2 text-5xl/15 font-bold w-auto">
              Tools We Utilize for Excellence
            </h2>
            <div className="flex gap-4">
              <button className="w-10 aspect-square border rounded-full flex items-center justify-center text-lg font-bold"
                onClick={handlePrevClick}
              >
                ←
              </button>
              <button className="w-10 aspect-square border rounded-full flex items-center justify-center text-lg font-bold"
                onClick={handleNextClick}
              >

                →
              </button>
            </div>
          </div>


        </div>

        <div className="overflow-hidden mt-10"
          style={{
            maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Slider ref={sliderRef} data={toolWeUseDetails} />
        </div>
      </section >




      <section className="mt-50 h-dvh">
        {/* <p className="z-2 text-slate-400 mt-5">Discover the advanced tools and technologies we leverage to create cutting-edge websites. </p> */}
        {/* <div className="mt-10">
          <FeaturesCard datas={toolWeUseDetails} classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
        </div> */}
      </section>

    </div >
  );
}
