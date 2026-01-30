"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Link from "next/link";

export default function ServicesCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Reveal animation
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".cta-anim"),
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

    // Moving dot
    if (dotRef.current) {
      gsap.fromTo(
        dotRef.current,
        { x: "-25vw" },
        {
          x: "25vw",
          duration: 7,
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
      className="
        w-full 
        min-h-screen 
        bg-black 
        text-white 
        px-[6vw] 
        py-[18vh] 
        relative 
        overflow-hidden
      "
    >
      {/* Top right phone */}
      <div className="cta-anim absolute top-[6vh] right-[6vw] text-sm opacity-80 flex items-center gap-3">
        <span>📞</span>
        <span>+55 21 98479-6999</span>
      </div>

      {/* Big Title */}
      <div className="relative z-10">
        <h1 className="cta-anim text-[clamp(6rem,13vw,17rem)] leading-[0.9] font-bold">
          SAY HI!
        </h1>
      </div>

      {/* Subtext */}
      <div className="cta-anim mt-[6vh] max-w-[520px] text-[16px] leading-relaxed text-white/80">
        <p>Tell us about your project.</p>
        <p>Let’s collaborate and make great stuff.</p>
      </div>

      {/* Divider */}
      <div className="relative mt-[14vh] w-full h-[1px] bg-white/20">
        {/* Moving dot */}
        <div
          ref={dotRef}
          className="absolute top-[-7px] left-1/2 w-3.5 h-3.5 bg-white rounded-full"
        />
      </div>

      {/* Bottom bar */}
      <div className="cta-anim mt-[6vh] flex justify-between items-center text-sm">

        {/* Nav */}
        <div className="flex gap-[4vw] uppercase tracking-widest">
          <Link href="/studio" className="opacity-70 hover:opacity-100 transition">Studio</Link>
          <Link href="/services" className="opacity-70 hover:opacity-100 transition">Services</Link>
          <Link href="/works" className="opacity-70 hover:opacity-100 transition">Works</Link>
          <Link href="/contact" className="opacity-70 hover:opacity-100 transition">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex gap-6 text-lg opacity-80">
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="WhatsApp">◯</a>
        </div>

      </div>
    </section>
  );
}
