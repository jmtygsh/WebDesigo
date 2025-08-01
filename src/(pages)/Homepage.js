"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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



import {
    images, features, whyus, ourapproach,
    toolWeUse, toolWeUseDetails, projectList, serviceCards,
    seamlessLoopService, countNumber, trustedByLeadingBrands,
    testimonials, faqData
} from '@/data/index';



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


    // ref for the component's container
    const featuresContainerRef = useRef(null);

    // promise container 
    const promiseContainerRef = useRef(null);
    const promiseHeadingRef = useRef(null);
    const promiseTextRef = useRef(null);

    // Why choose us container 
    const whyUsContainerRef = useRef(null);
    const whyUsContainerHeading = useRef(null);
    const whyUSContainerSpan1Ref = useRef(null);
    const whyUSContainerSpan2Ref = useRef(null);
    const whyUsContainerText = useRef(null);
    const whyUsContainerCard = useRef(null);


    // ourApproach container 
    const ourApproachContainerRef = useRef(null);
    const ourApproachContainerRefHeading = useRef(null);
    const ourApproachContainerRefText = useRef(null);
    const ourApproachContainerRefCard = useRef(null);


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
    const toolContainerRefSlider = useRef(null);


    // core service cards
    const coreServiceRef = useRef(null);
    const coreServiceRefHeading = useRef(null);
    const coreServiceRefText = useRef(null);
    const coreServiceRefCard = useRef(null);
    const coreServiceRefOtherService = useRef(null);
    const coreServiceRefOtherServiceCard = useRef(null);



    // recent project container
    const recentProjectContainer = useRef(null);
    const recentProjectContainerHeading = useRef(null);
    const recentProjectContainerText = useRef(null);
    const recentProjectContainerList = useRef(null);
    const recentProjectContainerBtn = useRef(null);


    useGSAP(() => {
        // features Container
        gsap.from(featuresContainerRef.current, {
            x: -100,
            opacity: 0,
            duration: 2,
            ease: "expo.in",

            scrollTrigger: {
                trigger: featuresContainerRef.current,
                start: '0% 100%',
                end: "100% 50%",

            }
        })

        // promise container 
        const ptl = gsap.timeline({
            scrollTrigger: {
                trigger: promiseContainerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        ptl.from(promiseHeadingRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }).from(promiseTextRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        });

        // promise container 
        const wtl = gsap.timeline({
            scrollTrigger: {
                trigger: whyUsContainerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',

            }
        });

        // why us container 
        wtl.from(whyUSContainerSpan1Ref.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "bounce.out",
        }).from(whyUSContainerSpan2Ref.current, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",

        }).from(whyUsContainerText.current, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",

        }).from(whyUsContainerCard.current, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        })


        // ourApproach container 
        const otl = gsap.timeline({
            scrollTrigger: {
                trigger: ourApproachContainerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        otl.from(ourApproachContainerRefHeading.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }).from(ourApproachContainerRefText.current, {
            x: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        }).from(ourApproachContainerRefCard.current, {
            x: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        })


        // our story container 
        const ostl = gsap.timeline({
            scrollTrigger: {
                trigger: ourStoryContainerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        })
        ostl.from(ourStoryContainerRefLeft.current, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }).from(ourStoryContainerRefRight.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }).from(ourStoryContainerRefBtn.current.children, {
            x: -50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.3,
        })


        // tool we use container 
        const tooltl = gsap.timeline({
            scrollTrigger: {
                trigger: toolContainerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        })

        tooltl.from(toolContainerRefHeading.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }).from(toolContainerRefText.current, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        }).from(toolContainerRefBtn.current, {
            x: 100,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        }).from(toolContainerRefSlider.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        })


        // core service 
        const csl = gsap.timeline({
            scrollTrigger: {
                trigger: coreServiceRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        })
        csl.from(coreServiceRefHeading.current, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }).from(coreServiceRefText.current, {
            x: -50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        }).from(coreServiceRefCard.current, {
            x: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        }).from(coreServiceRefOtherService.current, {
            x: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        }).from(coreServiceRefOtherServiceCard.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
        })



        // recent project container
        const retl = gsap.timeline({
            scrollTrigger: {
                trigger: recentProjectContainer.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        })

        retl.from(recentProjectContainerHeading.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }).from(recentProjectContainerText.current, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        }).from(recentProjectContainerList.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        }).from(recentProjectContainerBtn.current, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        })

    })
    return (
        <div className="bg-background min-h-screen text-foreground font-sans relative">

            <section className="flex justify-center items-center h-dvh relative">
                <VideoBackground url="/assets/videos/bgbackground.mp4" />
                <HeroSection />
            </section>

            <section className="overflow-hidden mt-10 relative"
                style={{
                    maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                }}
            >

                <SeamlessLoop icons={images} />
            </section>

            <section className="mt-20" ref={featuresContainerRef}>
                <div className="flex justify-between items-center gap-3 max-w-3/4 m-auto">
                    <div className="flex-1 h-[1px] bg-gradient-to-l from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
                    <h4 className="text-slate-400">See How We Can Help Your Brand</h4>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
                </div>

                <div className="mt-5 mb-30">
                    <FeaturesCard icons='true' style='true' datas={features} classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
                </div>
            </section>

            <section className="mt-20 overflow-hidden" ref={promiseContainerRef}>
                <div className="relative text-center rounded-xl h-dvh flex flex-col justify-center items-center
        border backdrop-blur-sm border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.4),0_0_30px_rgba(59,130,246,0.2)]"
                >
                    <Badge text="Our Promise" />

                    <h2 className="z-2 text-5xl/15 font-bold max-w-4xl mx-auto" ref={promiseHeadingRef}>
                        Our mission is to design websites that attract and engage customers.
                    </h2>
                    <p className="z-2 text-slate-400 mt-5" ref={promiseTextRef}>
                        However, we approach things a bit differently around here.
                    </p>
                    <VideoBackground url="/assets/videos/intro.mp4" classes="rounded-2xl" />
                </div>
            </section>

            {/* i need here top aniamtion canavas  */}
            <section className="mt-50 h-dvh" ref={whyUsContainerRef}>
                <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
                    <h3 className="text-4xl/15 font-bold" ref={whyUsContainerHeading}>
                        <span ref={whyUSContainerSpan1Ref} className="inline-block">Why We,</span> <span ref={whyUSContainerSpan2Ref} className="text-blue-600 inline-block">Stands Out</span>
                    </h3>
                    <p className="text-slate-400 mt-5" ref={whyUsContainerText}>
                        Experience the perfect blend of creativity, cutting-edge technology, and client-first strategies.
                        We don’t just build websites — we craft digital experiences that inspire trust and drive results.
                    </p>
                </div>
                <div className=" w-full h-72 mt-10 rounded flex gap-5 flex-col" ref={whyUsContainerCard}>
                    <FeaturesCard datas={whyus} classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
                </div>
            </section>


            {/* i need here top aniamtion canavas  */}
            <section className="mt-50" ref={ourApproachContainerRef} >
                <div className="flex justify-center items-center flex-col">
                    <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto" ref={ourApproachContainerRefHeading}>Our Approach</h3>
                    <p className="z-2 text-slate-400 mt-1"
                        ref={ourApproachContainerRefText}>
                        Explore our streamlined approach to creating bespoke websites that align with your goals.
                    </p>
                    <div className="mt-10" ref={ourApproachContainerRefCard}>
                        <FeaturesCard icons='true' style='true' datas={ourapproach} steps classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" />
                    </div>
                </div>

            </section>

            <section className="mt-50 flex justify-between gap-10 items-center max-w-6xl m-auto" ref={ourStoryContainerRef}>

                <div className="flex-1 flex items-start flex-col" ref={ourStoryContainerRefLeft}>
                    <Badge text="About Us" />
                    <h3 className="z-2 text-4xl/15 font-bold mt-2">
                        Our Story & Mission
                    </h3>
                    <p className="z-2 text-slate-400 mt-1">
                        Discover who we are and our mission at WebDesigo. We are a passionate team of creative professionals dedicated to crafting exceptional web design solutions. Our mission is to empower businesses with innovative websites that not only captivate but also drive results.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-5 items-center" ref={ourStoryContainerRefBtn}>
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
                    ref={ourStoryContainerRefRight}
                />
            </section>

            <section className="mt-50 overflow-hidden" ref={toolContainerRef}>
                <div className="flex flex-col items-start max-w-6xl m-auto">

                    <div className="flex justify-between items-center w-full">
                        <div className="max-w-2xl">
                            <h3 className="z-2 text-4xl/15 font-bold w-auto" ref={toolContainerRefHeading}>
                                Tools We Utilize for Excellence
                            </h3>
                            <p className="z-2 text-slate-400 mt-1" ref={toolContainerRefText}>
                                Discover the advanced tools and technologies we leverage to create cutting-edge websites.
                            </p>
                        </div>


                        <div className="flex gap-4" ref={toolContainerRefBtn}>
                            <ArrowNavigation handleClick={handlePrevClick} />
                            <ArrowNavigation handleClick={handleNextClick} right />
                        </div>
                    </div>


                </div>

                <div className="mt-10"
                    style={{
                        maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"
                    }}
                    ref={toolContainerRefSlider}
                >
                    <Slider ref={sliderRef} datas={toolWeUseDetails} />
                </div>
            </section >


            <section className="mt-50" ref={coreServiceRef}>
                <div className="flex justify-center items-center flex-col">
                    <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto" ref={coreServiceRefHeading}>Explore Our Core Services</h3>
                    <p className="z-2 text-slate-400 mt-1" ref={coreServiceRefText}>
                        Discover our comprehensive range of services tailored to enhance your digital presence.
                    </p>

                    <div className="mt-10 max-w-6xl m-auto" ref={coreServiceRefCard}>
                        <ServiceCard data={serviceCards} />
                    </div>
                </div>


                <div className="flex justify-between items-center gap-3 max-w-3/4 m-auto mt-20" ref={coreServiceRefOtherService}>
                    <div className="flex-1 h-[1px] bg-gradient-to-l from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
                    <h4 className="text-slate-400">Other Services</h4>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[#171d45] from-[28.8%] to-[#171d4500]"></div>
                </div>

                <div className="mt-7 overflow-hidden max-w-6xl m-auto"
                    style={{
                        maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                    }}
                    ref={coreServiceRefOtherServiceCard}
                >

                    <SeamlessService data={seamlessLoopService} brd />


                </div>
            </section>


            <section className="mt-50" ref={recentProjectContainer}>
                <div className="flex justify-center items-center flex-col">
                    <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto" ref={recentProjectContainerHeading}>
                        Explore Our Recent Projects
                    </h3>
                    <p className="z-2 text-slate-400 mt-1" ref={recentProjectContainerText}>
                        Browse through our portfolio showcasing diverse, innovative web design projects and client successes.
                    </p>

                    <div className="mt-10" ref={recentProjectContainerList}>
                        <ViewCards data={projectList} />
                    </div>

                    <div className="mt-20" ref={recentProjectContainerBtn}>
                        <Button url="/view-all-works" text="View All Works" classes />
                    </div>
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


            <section className="mt-50 flex flex-col justify-center items-center">
                <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto">
                    Client Success Stories
                </h3>
                <p className="z-2 text-slate-400 mt-1">Discover what our clients say about their experiences and success working with us.</p>

                <div className="mt-10"
                    style={{
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"
                    }}
                >
                    <Testimonials data={testimonials} />
                </div>

            </section>


            <section className="mt-50 flex flex-col justify-center items-center">
                <Badge text="FAQ" />
                <h3 className="z-2 text-4xl/15 font-bold max-w-4xl mx-auto">
                    Frequently Asked Questions
                </h3>
                <p className="z-2 text-slate-400 mt-1">
                    Answers to common questions about our services, processes, and what sets us apart.
                </p>

                <div className="mt-10">
                    <FAQs data={faqData} />
                </div>

            </section>

            <section className="mt-50 mb-50 max-w-6xl m-auto shadow-[0_0_15px_rgba(59,130,246,0.4),0_0_30px_rgba(59,130,246,0.2)] rounded-2xl ">
                <StartProjectSection />
            </section>

        </div>
    )
}
