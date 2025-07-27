import React, { useRef, useImperativeHandle, forwardRef } from 'react'; // Added forwardRef
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules'; // Import Swiper modules

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

// Your Slider component will now be wrapped with forwardRef
export const Slider = forwardRef(({ datas }, ref) => { // Receive 'ref' as the second argument
    if (!datas || datas.length === 0) return null;

    // Create a local ref to hold the Swiper instance
    const swiperInstanceRef = useRef(null);

    // Use useImperativeHandle to expose Swiper's methods to the parent ref
    useImperativeHandle(ref, () => ({
        // These methods will be callable from sliderRef.current in the parent
        prevSlide: () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.slidePrev(); // Swiper's built-in method slidePrev()
            }
        },
        nextSlide: () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.slideNext(); // Swiper's built-in method slideNext()
            }
        },
        // You can expose other Swiper methods if needed, e.g.,
        // goToSlide: (index) => swiperInstanceRef.current.slideTo(index),
        // getSwiper: () => swiperInstanceRef.current, // To get the raw Swiper instance
    }));

    return (
        <div className="relative px-5 mt-5">
            <div className="">
                <Swiper
                    // Assign the local ref to the Swiper component itself
                    onSwiper={(swiper) => (swiperInstanceRef.current = swiper)}
                    spaceBetween={25}
                    slidesPerView={4}
                    loop={true}
                    modules={[A11y]}
                    a11y={{
                        prevSlideMessage: 'Previous item',
                        nextSlideMessage: 'Next item',
                        firstSlideMessage: 'This is the first item',
                        lastSlideMessage: 'This is the last item',
                        paginationBulletMessage: 'Go to item {{index}}',
                        containerMessage: 'Content Carousel',
                        containerRoleDescriptionMessage: 'carousel',
                        itemRoleDescriptionMessage: 'slide',
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                    className="mySwiper"
                >
                    {datas.map((data) => (
                        <SwiperSlide key={data.id} className='pt-10'>
                            <div
                                className={`relative bg-blue-100/5 border border-blue-500/20 rounded-xl px-8 pb-8 pt-14 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/15 group h-full flex flex-col`}
                            >
                                <div
                                    className="absolute -top-6.5 left-3 w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-r from-[#061125] to-[#061125]"
                                >
                                    <Image
                                        src={data.icon}
                                        alt={data.title}
                                        width={35}
                                        height={35}
                                    />
                                </div>
                                <div className="relative z-10 flex-grow">
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
        </div>
    );
});