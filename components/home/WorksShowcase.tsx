"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function WorksShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".work-img"),
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        bg-white
        overflow-hidden
      "
      style={{ backgroundColor: "#ffffff" }}   // pure white
    >
      {/* White background layer */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          flex
          justify-center
          pt-[28vh]
          pb-[18vh]
        "
      >
        {/* Main cinematic grid */}
        <div className="w-full max-w-[1600px] grid grid-cols-3 items-center">

          {/* spacer column */}
          <div />

          {/* Poster */}
          <div className="work-img flex justify-center">
            <div className="relative w-[420px] h-[80vh] overflow-hidden bg-white">
              <Image
                src="/images/works/poster.png"
                alt="Poster"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="work-img flex justify-center">
            <div className="relative w-[420px] h-[80vh] overflow-hidden bg-white">
              <Image
                src="/images/works/mobile.png"
                alt="Mobile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
