"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Link from "next/link";

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
        bg-black text-white
        px-5 sm:px-10 lg:px-[6vw]
        py-[14vh] sm:py-[16vh] lg:py-[18vh]
        overflow-hidden
      "
    >
      {/* TOP RIGHT CONTACT */}
      <div className="
        absolute
        top-6 right-5 sm:right-10 lg:right-[6vw]
        text-xs sm:text-sm
        opacity-80
        flex items-center gap-2
      ">
        <span>📞</span>
        <span>+55 21 98479-6999</span>
      </div>

      {/* BIG TITLE */}
      <h1
        className="
          hi-line
          font-bold
          tracking-tight
          leading-[0.9]
          text-[clamp(3.5rem,14vw,18rem)]
        "
      >
        SAY HI!
      </h1>

      {/* SUBTEXT */}
      <div className="
        hi-sub
        mt-[5vh]
        max-w-[520px]
        text-[15px] sm:text-[16px]
        text-white/80
        leading-relaxed
      ">
        <p>Tell us about your project.</p>
        <p>Let’s collaborate and make great stuff.</p>
      </div>

      {/* DIVIDER */}
      <div className="
        relative
        mt-[10vh] sm:mt-[12vh]
        w-full h-[1px]
        bg-white/30
      ">
        <div
          ref={dotRef}
          className="
            absolute
            top-[-5px]
            left-1/2
            w-3 h-3
            bg-white
            rounded-full
          "
        />
      </div>

      {/* BOTTOM NAV */}
      <div className="
        hi-nav
        mt-[6vh]
        flex flex-col md:flex-row
        gap-6 md:gap-0
        justify-between
        items-start md:items-center
        text-xs sm:text-sm
      ">

        {/* LINKS */}
        <div className="
          flex flex-wrap
          gap-x-6 gap-y-3
          uppercase tracking-widest
        ">
          <Link href="/">Studio</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/works">Works</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-6 text-lg opacity-80">
          <a href="#">◎</a>
          <a href="#">in</a>
          <a href="#">◯</a>
        </div>

      </div>
    </section>
  );
}
