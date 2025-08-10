import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules'; // It's good practice to import and use modules explicitly
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Swiper styles
import 'swiper/css';

// Register the plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Slider = forwardRef(({ datas }, ref) => {

    const sliderContainer = useRef(null);
    const swiperInstanceRef = useRef(null);

    // Your useImperativeHandle is perfectly set up, no changes needed here.
    useImperativeHandle(ref, () => ({
        prevSlide: () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.slidePrev();
            }
        },
        nextSlide: () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.slideNext();
            }
        },
    }));



    useGSAP(() => {
        const allSlider = sliderContainer.current?.children[0]?.children;
        const allSliderArr = gsap.utils.toArray(allSlider);



        // on viewport
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sliderContainer.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        })


        tl.from(allSliderArr, {
            x: -50,
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
            filter: "blur(2px)",
            stagger: 0.2,
        })
    }, { scope: sliderContainer })

    if (!datas || datas.length === 0) return null;

    return (
        // The container with the fade-out mask. px-4 is a more standard Tailwind padding.
        <div
            className="relative px-4 mt-5"
            style={{
                maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)"
            }}
        >
            <Swiper
                // --- KEY CHANGES FOR RESPONSIVENESS ---

                // 1. Mobile-first: Set the default for the smallest screens first.
                slidesPerView={1.2}
                spaceBetween={15}

                // 2. Breakpoints: Progressively add more slides as the screen gets wider.
                breakpoints={{
                    // For small phones and up (>= 480px)
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    // For tablets and up (>= 768px)
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 24,
                    },
                    // For laptops and up (>= 1024px)
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    // For larger desktops and up (>= 1280px)
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}

                // --- OTHER CONFIGURATIONS ---
                loop={true}
                onSwiper={(swiper) => (swiperInstanceRef.current = swiper)}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                modules={[Keyboard]} // Register the modules you use
                className="mySwiper"
                ref={sliderContainer}
            >
                {datas.map((data) => (
                    // The pt-10 makes room for the icon positioned absolutely above the card
                    <SwiperSlide key={data.id} className='pt-10 pb-5'>
                        {/* h-full is crucial here. It makes all visible slides stretch to the height
                          of the tallest slide in the current view, keeping them aligned.
                        */}
                        <div
                            className="relative bg-blue-100/5 border border-blue-500/20 rounded-xl px-8 pb-8 pt-14 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group h-full flex flex-col"
                        >
                            <div
                                className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-3 md:-translate-x-0 w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-r from-[#061125] to-[#061125] border border-blue-500/20"
                            >
                                <Image
                                    src={data.icon}
                                    alt={data.title}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            {/* flex-grow allows this div to take all available vertical space, pushing the content down */}
                            <div className="relative z-10 flex-grow flex flex-col text-center md:text-left">
                                <h3 className="text-white text-xl font-semibold mb-3">
                                    {data.title}
                                </h3>
                                <p className="text-slate-400 text-base leading-relaxed">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
});

// Setting displayName is great practice for debugging with React DevTools!
Slider.displayName = 'Slider';