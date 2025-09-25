import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroller from "@/gsap/SmoothScroller";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Design That Powers Real Business Growth",
  description: "Experience the perfect blend of creativity, cutting-edge technology, and client-first strategies. We don’t just build websites — we craft digital experiences that inspire trust and drive results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
