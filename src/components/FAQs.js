import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register the plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const FAQs = ({ data }) => {

    const faqContaienr = useRef(null);
    const faqContainerData = useRef(null);


    // State to manage which FAQ item is currently open
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        // If the same FAQ is clicked, close it. Otherwise, open the new one.
        setOpenId(openId === id ? null : id);
    };


    useGSAP(() => {

        // on viewport
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: faqContaienr.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        })


        tl.from(faqContainerData.current?.children, {
            y: 50,
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
            filter: "blur(2px)",
            stagger: 0.2,
        })



    }, { scope: faqContaienr })




    return (
        <div className='max-w-[90%] md:max-w-4xl mx-auto' ref={faqContaienr}>
            <div className='space-y-6' ref={faqContainerData}>
                {data.map((faq) => (
                    <div
                        key={faq.id}
                        className='bg-[#11142b] border border-[#2d325a] rounded-xl overflow-hidden shadow-lg 
                         ease-in-out hover:shadow-2xl hover:border-blue-500/40'
                    >
                        <button
                            onClick={() => toggleFAQ(faq.id)}
                            className='flex items-center justify-between w-full p-6 text-left focus:outline-none'
                        >
                            <h3 className='text-base md:text-lg font-semibold text-secondary'>
                                {faq.question}
                            </h3>
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-300 ${openId === faq.id ? 'rotate-180 text-secondary/50' : 'rotate-0 text-secondary/60'
                                    }`}
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M19 9l-7 7-7-7'
                                />
                            </svg>
                        </button>
                        <div
                            className={`
                                        grid transition-all duration-500 ease-in-out
                                        ${openId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                                    `}
                        >
                            <div className='overflow-hidden'>
                                <div className='px-6 pb-6 text-secondary/70'>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};