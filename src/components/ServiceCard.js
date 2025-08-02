import React from 'react';
import { Button } from "@/components/Button";
import Image from 'next/image';

export const ServiceCard = ({ data }) => {

    // Ensure data is an array and not empty
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] md:max-w-full m-auto">
            {data.map((item) => ( // Add parentheses here to implicitly return the JSX
                <div key={item.id} className="p-8 border-1 border-white/10 rounded-2xl cursor-pointer bg-gradient-to-b from-[#00041f]/20 to-transparent">
                    <div className="flex flex-col md:flex-row justify-between gap-3 items-center mb-5">
                        <h4 className="text-2xl lg:text-3xl/15 lg:font-bold">{item.title}</h4>
                        {/* Ensure btnUrl and btnText exist before passing to Button */}
                        {item.btnUrl && item.btnText && (
                            <Button url={item.btnUrl} text={item.btnText} classes />
                        )}
                    </div>
                    <p className="text-secondary mb-5 text-center lg:text-left">
                        {item.description}
                    </p>

                    <div className="bg-blue-500/10 h-[1px] w-full"></div>

                    <ul className="mt-5 space-y-5">
                        {item.features && item.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Image src="/assets/imgs/ui/tick-li.svg" width={20} height={20} alt="tick icon" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    
                </div>
            ))}
        </div>
    );
};
