import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// A reusable component for a single FAQ item to keep the main component clean
const FAQItem = ({ faq, openId, toggleFAQ }) => {
  const isOpen = openId === faq.id;

  return (
    <div
      // Added a class for easier animation targeting.
      // REMOVED `transition-all duration-300` to prevent conflicts with GSAP.
      className="faq-item bg-[#11142b] border border-[#2d325a] rounded-xl overflow-hidden shadow-lg 
                       ease-in-out hover:shadow-2xl hover:border-blue-500/40"
    >
      <button
        onClick={() => toggleFAQ(faq.id)}
        className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <h3 className="text-base md:text-lg font-semibold text-white">
          {faq.question}
        </h3>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-400" : "rotate-0 text-gray-400"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`faq-answer-${faq.id}`}
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-gray-300/80">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
};

export const FAQs = ({ data, dual = false }) => {
  const faqContainer = useRef(null);

  // State to manage which FAQ item is currently open
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    // If the same FAQ is clicked, close it. Otherwise, open the new one.
    setOpenId(openId === id ? null : id);
  };

  useGSAP(
    () => {
      // Animate all elements with the .faq-item class within the container
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: faqContainer.current,
          start: "top 85%", // Start animation a bit later
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.5, // Slightly longer duration for a smoother feel
        ease: "power3.out",
        filter: "blur(3px)",
        stagger: 0.15, // A bit faster stagger
      });
    },
    { scope: faqContainer }
  );

  // Logic to split data for dual-column layout
  const middleIndex = Math.ceil(data.length / 2);
  const firstHalf = dual ? data.slice(0, middleIndex) : [];
  const secondHalf = dual ? data.slice(middleIndex) : [];

  return (
    <div
      className={`max-w-[90%] ${
        dual ? " md:max-w-7xl" : "md:max-w-6xl"
      }  mx-auto`}
      ref={faqContainer}
    >
      {dual ? (
        // --- DUAL COLUMN LAYOUT ---
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* First Column */}
          <div className="space-y-6">
            {firstHalf.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                openId={openId}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
          {/* Second Column */}
          <div className="space-y-6">
            {secondHalf.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                openId={openId}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>
      ) : (
        // --- SINGLE COLUMN LAYOUT ---
        <div className="space-y-6 max-w-4xl mx-auto">
          {data.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              openId={openId}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      )}
    </div>
  );
};
