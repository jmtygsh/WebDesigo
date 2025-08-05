import React from 'react'

import { VideoBackground } from "@/components/VideoBackground";
export const Contact = () => {
    return (
        <section className='relative'>
            <section className="flex justify-center items-center h-dvh relative">
                <VideoBackground url="/assets/videos/bgbackground.mp4" />
                <div className="relative max-w-[90%] lg:max-w-4/6 text-center space-y-5 flex flex-col items-center z-10 p-4">
                    <h1 className="text-3xl lg:text-5xl/snug font-bold">
                        Contact Us
                    </h1>
                    <p className="text-lg text-secondary max-w-[90%] md:max-w-full mx-auto text-center">
                        We’re not just builders—we’re brand partners. Our team of skilled designers, developers, and strategists work together to craft powerful, custom digital solutions that reflect your vision,
                    </p>
                </div>
            </section>
        </section>
    )
}
