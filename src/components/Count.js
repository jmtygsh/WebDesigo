import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register the plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Count = ({ data }) => {

    const countRef = useRef(null);

    useGSAP(() => {
        const countCurrent = countRef.current;

        // on viewport
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: countCurrent,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        })

        tl.from(countCurrent?.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            filter: "blur(2px)",
            stagger: 0.3,
        })

    }, { scope: countRef })

    if (!data || data.length === 0 || !Array.isArray(data)) return null;

    return (
        <div className="grid grid-cols-2 gap-5" ref={countRef}>
            {data.map((item) => (
                <div key={item.id} className="relative bg-blue-100/5 border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm 
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

                    <h4 className="text-2xl md:text-5xl md:font-bold text-center">
                        {item.count}{item.sign}
                    </h4>
                    <p className="text-slate-400 mt-1 text-center">{item.des}</p>
                </div>
            ))}
        </div>
    )
}
