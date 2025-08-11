"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQs } from "@/components/FAQs";
import { VideoBackground } from "@/components/VideoBackground";
import { Cta } from "@/components/Cta";

import { faqData } from "@/data";

export default function faqs() {
  return (
    <>
      <Header />
      <section className="flex justify-center items-center h-screen relative overflow-hidden">
        <VideoBackground url="/assets/videos/bgbackground.mp4" />
        <div className="relative max-w-4xl text-center space-y-6 flex flex-col items-center z-10 p-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            FAQ's
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Answers to questions we get asked the most
          </p>
        </div>
      </section>
      <div className="py-10">
        <FAQs data={faqData} dual />
      </div>
      <Cta />
      <Footer />
    </>
  );
}
