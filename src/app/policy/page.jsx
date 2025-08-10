"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ourPolicy } from "@/data";

// Register the plugins
gsap.registerPlugin(useGSAP);

// The main page component that composes the Header, Footer, and the policy grid.
export default function PolicyIndexPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current?.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power1.in",
      stagger: 0.3,
    });
  });

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Page Title Banner */}
        <div className="bg-background mt-20">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 md:py-20 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Our Policies
            </h1>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 font-serif leading-relaxed">
              Please select a policy below to read the full details.
            </p>
          </div>

          {/* Responsive Grid for Policy Links */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            ref={containerRef}
          >
            {ourPolicy.map((policy) => (
              // For Next.js, you would wrap this with <Link href={policy.url} passHref>
              <a
                key={policy.id}
                href={policy.url}
                className="group block p-6 bg-gray-50 border border-gray-200 rounded-lg text-center hover:shadow-lg hover:border-blue-400 hover:bg-white"
              >
                <h3 className="text-lg font-bold text-blue-900 font-sans group-hover:text-blue-600 transition-colors">
                  {policy.title}
                </h3>
              </a>
              // </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
