import React from 'react';
import { BiCheckCircle } from "react-icons/bi";
import Image from 'next/image';

export const FeaturesCard = ({ style, icons, datas, steps, classes }) => {

    if (!datas || datas.length === 0) return null; // avoid error

    return (
        <div className="relative px-5 mt-5">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className={`${classes} ${icons ? 'gap-6' : 'gap-10'}`}>
                    {datas.map((data) => (
                        <div
                            key={data.id}
                            className={`relative bg-blue-100/5 border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/15 group ${icons ? 'overflow-hidden' : ''}`}
                        >

                            {icons ? (<div></div>) : (
                                <div className="absolute -top-6.5 p-2 bg-gradient-to-r from-[#061125] to-[#061125] left-3 w-12 h-12 flex items-center justify-center rounded-full shadow-lg"

                                >
                                    <Image
                                        src={data.icon}
                                        alt={data.title}
                                        width={35}
                                        height={35}
                                        className='w-6 h-6 lg:w-8 lg:h-8'
                                    />
                                </div>
                            )}

                            <div className="absolute inset-0 pointer-events-none"
                                style={style ? {
                                    backgroundImage: `
                                    linear-gradient(rgb(255 255 255 / 15%) 0px, transparent 1px),
                                    linear-gradient(90deg, rgb(255 255 255 / 15%) 1px, transparent 1px)
                                    `,
                                    backgroundSize: '23px 23px',
                                    maskImage:
                                        'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(255 254 254) 30%, rgb(0 0 0) 0%, rgb(0 0 0 / 14%) 70%)',
                                    WebkitMaskImage:
                                        'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(255 254 254) 30%, rgb(0 0 0) 0%, rgb(0 0 0 / 14%) 70%)',
                                } : {}}
                            />


                            {/* Content */}
                            <div className="relative z-10">
                                {icons ? (<div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-5">
                                    {data.icon}
                                </div>) : (
                                    <div></div>
                                )}

                                {
                                    steps ? (
                                        <p className="absolute right-0 top-0 z-2 flex justify-center items-center gap-1 border border-white/30 rounded-2xl px-3 py-1 mb-2 text-sm text-secondary shadow-2xl shadow-blue-200">
                                            <BiCheckCircle />
                                            <span>Step {data.id} </span>
                                        </p>

                                    ) : (<p></p>)
                                }


                                <h3 className="text-white text-xl lg:font-semibold mb-3">
                                    {data.title}
                                </h3>
                                <p className="text-slate-400 text-base leading-relaxed">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
