import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { gsap } from "gsap";

export const Slider = forwardRef(({ data }, ref) => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!data || data.length === 0) return null;

    const slideCount = data.length;
    const visibleCount = 3;

    useEffect(() => {
        const offset = -(currentIndex * (100 / visibleCount));
        gsap.to(sliderRef.current, {
            xPercent: offset,
            duration: 0.7,
            ease: "power2.out",
        });
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slideCount);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
    };

    // Expose functions to parent
    useImperativeHandle(ref, () => ({
        nextSlide,
        prevSlide
    }));

    return (
        <div className="overflow-hidden relative w-full">
            <div className="overflow-hidden">
                <div
                    className="flex w-fit gap-5"
                    ref={sliderRef}
                    style={{ transform: "translateX(0%)" }}
                >
                    {data.map((tool) => (
                        <div
                            key={tool.id}
                            className="min-w-[300px] p-4 border border-blue-500/20 rounded-xl bg-blue-100/5 shadow-md"
                        >
                            <img src={tool.icon} alt={tool.title} className="w-12 h-12 mb-3" />
                            <h3 className="font-bold text-lg">{tool.title}</h3>
                            <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});
