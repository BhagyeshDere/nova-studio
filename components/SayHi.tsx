"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Link from "next/link";

export default function SayHi() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Text animation
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".hi-line, .hi-sub, .hi-nav"),
      { y: 140, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Moving dot animation
    if (dotRef.current) {
      gsap.fromTo(
        dotRef.current,
        { x: "-20vw" },
        {
          x: "20vw",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
      className="
        relative
        isolate
        w-full 
        min-h-[75vh]
        px-[6vw] 
        py-[18vh] 
        overflow-hidden
      "
    >
      {/* HARD BLACK BACKGROUND */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* CONTENT */}
      <div className="relative z-10 text-white">

        {/* Top right contact */}
        <div className="absolute top-[6vh] right-[6vw] text-sm opacity-80 flex items-center gap-3">
          <span>📞</span>
          <span>+55 21 98479-6999</span>
        </div>

        {/* Big Title */}
        <div className="relative">
          <h1 className="hi-line text-[clamp(5rem,14vw,18rem)] leading-[0.85] font-bold tracking-tight whitespace-nowrap">
            SAY HI!
          </h1>
        </div>

        {/* Sub text */}
        <div className="hi-sub mt-[6vh] max-w-[520px] text-[16px] leading-relaxed text-white/80">
          <p>Tell us about your project.</p>
          <p>Let’s collaborate and make great stuff.</p>
        </div>

        {/* Divider */}
        <div className="relative mt-[14vh] w-full h-[1px] bg-white/30">
          <div
            ref={dotRef}
            className="absolute top-[-6px] left-1/2 w-3 h-3 bg-white rounded-full"
          />
        </div>

        {/* Bottom navigation */}
        <div className="hi-nav mt-[6vh] flex justify-between items-center text-sm">

          {/* Left links */}
          <div className="flex gap-[3.5vw] uppercase tracking-widest">

            <Link href="/" className="opacity-70 hover:opacity-100 transition">
              Studio
            </Link>

            <Link href="/about" className="opacity-70 hover:opacity-100 transition">
              About
            </Link>

            <Link href="/services" className="opacity-70 hover:opacity-100 transition">
              Services
            </Link>

            <Link href="/works" className="opacity-70 hover:opacity-100 transition">
              Works
            </Link>

            {/* ✅ Career added */}
            <Link href="/career" className="opacity-70 hover:opacity-100 transition">
              Career
            </Link>

            <Link href="/contact" className="opacity-70 hover:opacity-100 transition">
              Contact
            </Link>

          </div>

          {/* Right socials */}
          <div className="flex gap-6 text-lg opacity-80">
            <a href="#" aria-label="Instagram" className="hover:opacity-100 transition">◎</a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-100 transition">in</a>
            <a href="#" aria-label="WhatsApp" className="hover:opacity-100 transition">◯</a>
          </div>

        </div>

      </div>
    </section>
  );
}
