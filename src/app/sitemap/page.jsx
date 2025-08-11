"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function siteMap() {
  return (
    <>
      <Header />
      <section className="relative mt-10">
        <div className="flex justify-center items-center h-dvh relative">
          <div className="relative z-10 flex max-w-[90%] flex-col items-center space-y-6 text-center lg:max-w-3xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
             SITEMAP - NOT READY
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
