import { React, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);

export const Testimonials = ({ data }) => {


    const marqueeRef = useRef(null);

    useGSAP(() => {
        const container = marqueeRef.current;

        if (!container) return;

        const totalHeight = container.scrollHeight / 2;

        gsap.set(container, { y: 0 });

        gsap.to(container, {
            y: -totalHeight,
            duration: 50,
            ease: "none",
            repeat: -1,

        });
    }, { scope: marqueeRef });

    if (!data || data.length === 0 || !Array.isArray(data)) return null;

    return (
        <div className="h-dvh">
            <div ref={marqueeRef} className='columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto p-4 '
                style={{
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"
                }}
            >
                {data.concat(data).map((item, index) => (
                    <div key={index} className='relative bg-blue-100/5 border border-blue-500/20 p-8 rounded-2xl backdrop-blur-md shadow-2xl overflow-hidden mb-5 break-inside-avoid-column 
                    transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/15 group 
                    '>

                        <div className='relative z-20 flex items-center gap-4 mb-6'>
                            <div className='relative'>
                                {item.src ? (
                                    <Image
                                        src={item.src}
                                        width={60}
                                        height={60}
                                        alt={item.name}
                                        className='rounded-full object-cover w-[60px] h-[60px] border-2 border-blue-500/50 shadow-lg'
                                    />
                                ) : (
                                    <div className='flex items-center justify-center w-[60px] h-[60px] rounded-full bg-blue-100 text-blue-700 font-semibold text-xl border-2 border-blue-500/50 shadow-lg'>
                                        {item.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                {/* Optional: Status indicator */}
                                {/* <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 rounded-full border-2 border-zinc-900"></span> */}
                            </div>
                            <div>
                                <h4 className='font-bold text-xl text-white tracking-wide'>
                                    {item.name}
                                </h4>
                                <p className='text-sm text-zinc-400 font-medium'>
                                    {item.username}
                                </p>
                            </div>
                        </div>
                        <p className='relative z-20 text-lg leading-relaxed text-zinc-300 font-light italic'>
                            <span className="text-2xl text-purple-400 font-bold mr-2 align-middle">&quot;</span>
                            {item.comment}
                            <span className="text-2xl text-purple-400 font-bold ml-2 align-middle">&quot;</span>
                        </p>
                        <div className='relative z-20 flex justify-end mt-6'>
                            <div className='w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full'></div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};
