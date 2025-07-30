// components/SmoothScroller.js
'use client'; // This is a Client Component

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroller({ children }) {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            smooth: 3,
            effects: true,
            smoothTouch: 0.1,
        });

        // Cleanup on component unmount
        return () => smoother.kill();
    }, []);

    // The required wrapper structure for ScrollSmoother
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
}