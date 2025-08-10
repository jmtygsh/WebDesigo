import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Count = ({ data }) => {
    const countRef = useRef(null);
    const numberRefs = useRef([]);

    useGSAP(() => {
        const countCurrent = countRef.current;

        // Animate the box itself
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: countCurrent,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        tl.from(countCurrent?.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            filter: "blur(2px)",
            stagger: 0.3,
        });

        // Animate each number
        numberRefs.current.forEach((el, index) => {
            const finalValue = data[index].count;
            gsap.fromTo(el, 
                { innerText: 0 }, 
                {
                    innerText: finalValue,
                    duration: 2,
                    ease: "power1.out",
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        el.innerText = Math.floor(el.innerText) + (data[index].sign || "");
                    },
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });

    }, { scope: countRef });

    if (!data || data.length === 0 || !Array.isArray(data)) return null;

    return (
        <div className="grid grid-cols-2 gap-5" ref={countRef}>
            {data.map((item, index) => (
                <div key={item.id} className="relative bg-blue-100/5 border
                 border-blue-500/20 rounded-xl p-8 backdrop-blur-sm 
                 hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/15 group overflow-hidden">

                    <div className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgb(255 255 255 / 15%) 0px, transparent 1px),
                                linear-gradient(90deg, rgb(255 255 255 / 15%) 1px, transparent 1px)
                            `,
                            backgroundSize: '23px 23px',
                            maskImage:
                                'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(255 254 254) 0%, rgb(0 0 0) 0%, rgb(0 0 0 / 14%) 70%)',
                            WebkitMaskImage:
                                'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(255 254 254) 0%, rgb(0 0 0) 0%, rgb(0 0 0 / 14%) 70%)',
                        }}
                    />

                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                        <span ref={el => numberRefs.current[index] = el}></span>
                    </h4>
                    <p className="text-slate-400 mt-1 text-center">{item.des}</p>
                </div>
            ))}
        </div>
    )
}
