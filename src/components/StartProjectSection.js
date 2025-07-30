import React from 'react';
import { Button } from "@/components/Button";
import Image from 'next/image';

export const StartProjectSection = () => {
    return (
        <div className='relative rounded-2xl  bg-[#010417] overflow-hidden'

        >
            <div className="relative z-10 mx-auto max-w-6xl text-center h-96 flex flex-col items-center justify-center
                      rounded-xl">
                <h2 className="mb-4 text-4xl font-bold">
                    Start Your Project
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-slate-400">
                    Contact us today to start crafting your exceptional and customized website solution.
                </p>

                <ul className="mb-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
                    <li className="flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-2 text-sm text-blue-300 transition-colors duration-200 hover:bg-blue-900/20">
                        <Image src="/assets/imgs/ui/tick-li.svg" width={4} height={4} className="h-4 w-4" alt="tick icon" />
                        <span>Customized design</span>
                    </li>
                    <li className="flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-2 text-sm text-blue-300 transition-colors duration-200 hover:bg-blue-900/20">
                        <Image src="/assets/imgs/ui/tick-li.svg" width={4} height={4} className="h-4 w-4" alt="tick icon" />
                        <span>Ongoing support</span>
                    </li>
                    <li className="flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-2 text-sm text-blue-300 transition-colors duration-200 hover:bg-blue-900/20">
                        <Image src="/assets/imgs/ui/tick-li.svg" width={4} height={4} className="h-4 w-4" alt="tick icon" />
                        <span>Fast delivery</span>
                    </li>
                </ul>

                <Button url="/start-project" text="Start a Project" />
            </div>

            <div className='absolute top-0 left-0'>
                <Image src='/assets/imgs/ui/left.png' width={400} height={400} alt='Left' />
            </div>
            <div className='absolute top-0 right-0'>
                <Image src='/assets/imgs/ui/right.png' width={400} height={400} alt='Right'/>
            </div>
        </div>
    );
};