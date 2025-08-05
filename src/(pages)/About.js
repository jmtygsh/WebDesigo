import React from 'react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Cta } from '@/components/Cta';

import { VideoBackground } from "@/components/VideoBackground";


export const About = () => {
    return (
        // Main container section
        <section className='relative'>
            <section className="flex justify-center items-center h-dvh relative">
                <VideoBackground url="/assets/videos/bgbackground.mp4" />
                <div className="relative max-w-[90%] lg:max-w-4/6 text-center space-y-5 flex flex-col items-center z-10 p-4">
                    <h1 className="text-3xl lg:text-5xl/snug font-bold">
                        Crafting Connections Digitally
                    </h1>
                    <p className="text-lg text-secondary max-w-[90%] md:max-w-full mx-auto text-center">
                        We’re not just builders—we’re brand partners. Our team of skilled designers, developers, and strategists work together to craft powerful, custom digital solutions that reflect your vision,
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-24 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Column */}
                    <div>
                        <img
                            className="rounded-lg shadow-xl object-cover w-full h-full aspect-[4/3]"
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="A team of professionals collaborating around a table with sticky notes"
                        />
                    </div>
                    {/* Text Column */}
                    <div className="space-y-4 flex flex-col items-start">

                        <Badge text="Our Story" />

                        <h2 className="text-2xl md:text-4xl font-bold max-w-4xl mx-auto">
                            Founded on a Passion for Code and Creativity
                        </h2>
                        <p className="text-slate-400 max-w-[90%] md:max-w-full md:mx-auto">
                            Webdesigo was born in 2020 from a simple belief: every business deserves a powerful and elegant online presence. Our founders saw an opportunity to provide high-touch, custom web solutions in a world of templates and quick fixes.
                        </p>
                        <p className="text-slate-400 max-w-[90%] md:max-w-full md:mx-auto">
                            We've since grown into a dynamic team, but our core mission remains unchanged. We weave together innovative design and robust technology to create digital tapestries that tell your brand's unique story.
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-16 lg:py-24 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-2xl md:text-4xl/15 font-bold max-w-4xl mx-auto">
                        The People Behind the Pixels
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-[90%] md:max-w-full mx-auto text-center">
                        Our team is our greatest asset. Get to know the minds dedicated to your project's success.</p>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {/* Fake Team Member 1 */}
                        <div className="space-y-3">
                            <img className="object-cover w-full h-80 rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop" alt="Aarav Sharma" />
                            <div className='pt-2'>
                                <h3 className="text-xl font-bold">Aarav Sharma</h3>
                                <p className="text-blue-500 font-medium">Founder & Lead Strategist</p>
                            </div>
                        </div>
                        {/* Fake Team Member 2 */}
                        <div className="space-y-3">
                            <img className="object-cover w-full h-80 rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" alt="Priya Das" />
                            <div className='pt-2'>
                                <h3 className="text-xl font-bold">Priya Das</h3>
                                <p className="text-blue-500 font-medium">Head of Design (UI/UX)</p>
                            </div>
                        </div>
                        {/* Fake Team Member 3 */}
                        <div className="space-y-3">
                            <img className="object-cover w-full h-80 rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" alt="Rohan Verma" />
                            <div className='pt-2'>
                                <h3 className="text-xl font-bold">Rohan Verma</h3>
                                <p className="text-blue-500 font-medium">Lead Frontend Developer</p>
                            </div>
                        </div>
                        {/* Fake Team Member 4 */}
                        <div className="space-y-3">
                            <img className="object-cover w-full h-80 rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Ananya Reddy" />
                            <div className='pt-2'>
                                <h3 className="text-xl font-bold">Ananya Reddy</h3>
                                <p className="text-blue-500 font-medium">Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Cta />

        </section>
    )
}