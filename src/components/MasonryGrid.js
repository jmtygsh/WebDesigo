import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// A simple spinner component
const Loader = () => (
  <div className="absolute inset-0 z-10 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
  </div>
);

// New Component for the Focused/Modal View
const FocusView = ({ item, onClose }) => {
  const backdropRef = useRef(null);
  const wrapperRef = useRef(null);
  const [zoomStep, setZoomStep] = useState(0);
  // 1. Initialize loading state to `true`
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(wrapperRef.current, { opacity: 0, scale: 0.95, duration: 0.2 }).to(
      backdropRef.current,
      { opacity: 0, duration: 0.2 },
      "-=0.1"
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDoubleClick = (ref) => {
    const nextStep = (zoomStep + 1) % 3;
    if (nextStep === 1) {
      ref.zoomToElement("img", 2, 200, "easeOut");
    } else if (nextStep === 2) {
      ref.zoomToElement("img", 4, 200, "easeOut");
    } else {
      ref.resetTransform(200, "easeOut");
    }
    setZoomStep(nextStep);
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      {loading && <Loader />}

      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={10}
        limitToBounds={true}
        doubleClick={{ disabled: true }}
        onDoubleClick={handleDoubleClick}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <React.Fragment>
            <div ref={wrapperRef} onClick={(e) => e.stopPropagation()}>
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%" }}
                contentStyle={{ width: "100%", height: "100%" }}
              >
                <Image
                  id="img"
                  src={item.src}
                  width={1920}
                  height={1080}
                  alt={item.alt}
                  priority
                  // 3. Add `onLoadingComplete` to update the state
                  onLoadingComplete={() => setLoading(false)}
                  // 4. Use state to control opacity for a smooth fade-in effect
                  className={`object-contain max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl transition-opacity duration-300 ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                />
              </TransformComponent>
            </div>

            {/* Controls are hidden while loading for a cleaner look */}
            {!loading && (
              // A single container for all controls, positioned in the top-right corner.
              <div className="absolute top-4 right-4 flex flex-col gap-3">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  aria-label="Close image"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-red-500 text-2xl backdrop-blur-sm transition-all duration-200 hover:bg-black/75 hover:scale-110"
                >
                  &times;
                </button>

                {/* Zoom In Button */}
                <button
                  onClick={() => zoomIn()}
                  aria-label="Zoom in"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl backdrop-blur-sm transition-all duration-200 hover:bg-black/75 hover:scale-110"
                >
                  +
                </button>

                {/* Zoom Out Button */}
                <button
                  onClick={() => zoomOut()}
                  aria-label="Zoom out"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl backdrop-blur-sm transition-all duration-200 hover:bg-black/75 hover:scale-110"
                >
                  -
                </button>

                {/* Reset Zoom Button */}
                <button
                  onClick={() => resetTransform(200, "easeOut")}
                  aria-label="Reset zoom"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white text-xl backdrop-blur-sm transition-all duration-200 hover:bg-black/75 hover:scale-110"
                >
                  ⟲
                </button>
              </div>
            )}
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};

// Your Updated MasonryGrid Component
export const MasonryGrid = ({ data }) => {
  const cardContainer = useRef(null);
  // 1. State to track the selected image. `null` means nothing is selected.
  const [selectedItem, setSelectedItem] = useState(null);

  // Your existing GSAP scroll animation (no changes needed here)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardContainer.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.from(cardContainer.current?.children, {
      y: 50,
      opacity: 0,
      duration: 0.2,
      stagger: 0.2,
      ease: "power2.out",
      filter: "blur(2px)",
    });
  });

  return (
    <>
      <div className="columns-1 gap-6 lg:columns-2" ref={cardContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            // 2. Add the onClick handler to set the selected item
            onClick={() => setSelectedItem(item)}
            className="group relative mb-6 break-inside-avoid overflow-hidden 
                       bg-blue-100/5 border border-blue-500/20 rounded-xl backdrop-blur-sm
                       cursor-pointer" // Add cursor-pointer for better UX
          >
            <Image
              src={item.src}
              width={500}
              height={500}
              key={index}
              loading="lazy"
              alt={item.alt}
              draggable="false"
              className={`h-auto w-full transition-transform 
                         rounded-2xl duration-500 p-2 group-hover:scale-101`}
            />
          </div>
        ))}
      </div>

      {/* 3. Conditionally render the FocusView component */}
      {selectedItem && (
        <FocusView
          item={selectedItem}
          onClose={() => setSelectedItem(null)} // Pass a function to reset the state
        />
      )}
    </>
  );
};
