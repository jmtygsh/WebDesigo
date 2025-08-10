import React from 'react'
import { Button } from '@/components/Button'

export const Cta = () => {
    return (
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-blue-500/20">
            <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-3xl/15 lg:text-4xl/15 font-bold max-w-4xl mx-auto">
                    Have a Project in Mind?
                </h2>
                <p className="text-slate-400 max-w-[90%] md:max-w-full mx-auto text-center">
                    We&apos;re always excited to hear about new ideas. Let&apos;s talk about how we can work together to create something truly special for your brand.
                </p>
                <Button url="/contact" text="Let's Talk" />
            </div>
        </section>
    )
}
