"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";
import WorkSlider from "./WorkSlider";

export default function WorksShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".work-anim"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  const scrollToSlider = () => {
    sliderRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-gradient-to-br 
        from-[#071A1F]
        via-[#0E3A43]
        to-[#1F6677]
        overflow-hidden
        relative
      "
    >
      {/* ===== TOP RIGHT SOCIALS + BUTTON ===== */}
      <div
        className="
          absolute 
          top-6 sm:top-8
          right-4 sm:right-6
          flex items-center gap-4 sm:gap-6 
          z-20
        "
      >
        <div className="flex items-center gap-4 sm:gap-5">
          <a href="#" className="hover:opacity-60">
            <Image
              src="images/icons/instagram.svg"
              alt=""
              width={18}
              height={18}
              className="sm:w-5 sm:h-5"
            />
          </a>

          <a href="#" className="hover:opacity-60">
            <Image
              src="images/icons/linkedin.svg"
              alt=""
              width={18}
              height={18}
              className="sm:w-5 sm:h-5"
            />
          </a>

          <a href="#" className="hover:opacity-60">
            <Image
              src="images/icons/whatsapp.svg"
              alt=""
              width={18}
              height={18}
              className="sm:w-5 sm:h-5"
            />
          </a>
        </div>

        {/* Scroll to slider */}
        <button
          onClick={scrollToSlider}
          className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full
            border border-white
            flex items-center justify-center
            hover:scale-110
            transition
          "
        >
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full" />
        </button>
      </div>

      {/* spacing */}
      <div className="h-[18vh] sm:h-[24vh] md:h-[28vh]" />

      {/* ===== SLIDER ===== */}
      <div ref={sliderRef}>
        <WorkSlider />
      </div>
    </section>
  );
}
