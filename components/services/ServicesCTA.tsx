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
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Moving dot
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
      className="
        w-full
        bg-black text-white
        px-5 sm:px-10 lg:px-[6vw]
        py-[14vh] sm:py-[18vh]
        relative overflow-hidden
      "
    >
      {/* Phone */}
      <div className="
        cta-anim
        text-sm opacity-80
        flex items-center gap-3
        mb-10
        sm:absolute sm:top-[6vh] sm:right-[6vw]
      ">
        <span>📞</span>
        <span>+55 21 98479-6999</span>
      </div>

      {/* Title */}
      <h1 className="
        cta-anim
        font-bold leading-[0.9]
        text-[clamp(3.5rem,12vw,14rem)]
      ">
        SAY HI!
      </h1>

      {/* Subtext */}
      <div className="
        cta-anim
        mt-8 max-w-[520px]
        text-[15px] sm:text-[16px]
        leading-relaxed text-white/80
      ">
        <p>Tell us about your project.</p>
        <p>Let’s collaborate and make great stuff.</p>
      </div>

      {/* Divider */}
      <div className="
        relative mt-[10vh]
        w-full h-[1px] bg-white/20
      ">
        <div
          ref={dotRef}
          className="
            absolute top-[-6px]
            left-1/2
            w-3 h-3
            bg-white rounded-full
          "
        />
      </div>

      {/* Bottom */}
      <div className="
        cta-anim
        mt-10
        flex flex-col sm:flex-row
        gap-6 sm:gap-0
        justify-between items-start sm:items-center
        text-sm
      ">

        {/* Nav */}
        <div className="
          flex flex-wrap
          gap-6 sm:gap-[4vw]
          uppercase tracking-widest
        ">
          <Link href="/" className="opacity-70 hover:opacity-100">Studio</Link>
          <Link href="/services" className="opacity-70 hover:opacity-100">Services</Link>
          <Link href="/works" className="opacity-70 hover:opacity-100">Works</Link>
          <Link href="/contact" className="opacity-70 hover:opacity-100">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex gap-6 text-lg opacity-80">
          <a href="#">◎</a>
          <a href="#">in</a>
          <a href="#">◯</a>
        </div>

      </div>
    </section>
  );
}
