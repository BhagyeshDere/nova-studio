"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";

export default function SayHi() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".hi-line, .hi-sub, .hi-nav"),
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

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
        relative isolate
        w-full
        bg-[#0E2E34] text-white
        px-5 sm:px-10 lg:px-[6vw]

        /* RESPONSIVE VERTICAL SPACING */
        py-[10vh] sm:py-[14vh] lg:py-[18vh]

        overflow-hidden
      "
    >
      {/* ===== LOGO ===== */}
      <Link
        href="/"
        className="
          absolute
          top-5 sm:top-6
          left-5 sm:left-10 lg:left-[6vw]
          z-20
          group
        "
      >
        <div className="
          p-[6px]
          rounded-lg
          border border-[#1F6677]/40
          transition-all duration-300
          group-hover:border-[#1F6677]
        ">
          <Image
            src="/images/logo3.png"
            alt="NOVA Logo"
            width={36}
            height={36}
            className="group-hover:scale-105 transition"
          />
        </div>
      </Link>

      {/* Cinematic glow — scaled for mobile */}
      <div className="
        absolute -top-20 -left-20
        w-[300px] h-[300px]
        sm:w-[500px] sm:h-[500px]
        bg-[#1F6677]/30
        blur-[120px] sm:blur-[160px]
        rounded-full
      " />

      {/* TOP RIGHT CONTACT */}
      <div className="
        absolute
        top-5 sm:top-6
        right-5 sm:right-10 lg:right-[6vw]

        text-[11px] sm:text-sm
        text-white/70
        flex items-center gap-2
      ">
        <span className="text-[#1F6677]">📞</span>
        <span>+55 21 98479-6999</span>
      </div>

      {/* BIG TITLE */}
      <h1
        className="
          hi-line
          font-bold
          tracking-tight
          leading-[0.9]

          /* SAFER RESPONSIVE SCALE */
          text-[clamp(2.8rem,12vw,12rem)]

          mt-[8vh] sm:mt-[10vh]
        "
      >
        SAY HI!
      </h1>

      {/* SUBTEXT */}
      <div className="
        hi-sub
        mt-[4vh] sm:mt-[5vh]
        max-w-[520px]

        text-[14px] sm:text-[16px]
        text-white/70
        leading-relaxed
      ">
        <p>Tell us about your project.</p>
        <p>Let’s collaborate and make great stuff.</p>
      </div>

      {/* DIVIDER */}
      <div className="
        relative
        mt-[6vh] sm:mt-[10vh]
        w-full h-[1px]
        bg-white/20
      ">
        <div
          ref={dotRef}
          className="
            absolute
            top-[-5px]
            left-1/2
            w-3 h-3
            bg-[#1F6677]
            rounded-full
            shadow-[0_0_12px_#1F6677]
          "
        />
      </div>

      {/* BOTTOM NAV */}
      <div className="
        hi-nav
        mt-[5vh] sm:mt-[6vh]

        flex flex-col md:flex-row
        gap-6 md:gap-0
        justify-between
        items-start md:items-center

        text-xs sm:text-sm
      ">

        {/* LINKS */}
        <div className="
          flex flex-wrap
          gap-x-5 sm:gap-x-6
          gap-y-3

          uppercase tracking-widest
          text-white/70
        ">
          {["Studio","About","Services","Works","Career","Contact"].map((item,i)=>(
            <Link 
              key={i}
              href={`/${item.toLowerCase()}`}
              className="hover:text-[#1F6677] transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* SOCIALS */}
        <div className="
          flex gap-5 sm:gap-6
          text-lg
          text-white/60
        ">
          <a href="#" className="hover:text-[#1F6677] transition">◎</a>
          <a href="#" className="hover:text-[#1F6677] transition">in</a>
          <a href="#" className="hover:text-[#1F6677] transition">◯</a>
        </div>

      </div>
    </section>
  );
}
