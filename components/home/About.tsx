"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".about-anim"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
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
        w-full
        bg-white text-black
        overflow-hidden

        px-5 sm:px-10 lg:px-[8vw]

        /* Reduced padding */
        py-10 sm:py-14 lg:py-16
      "
    >
      <div className="max-w-[1100px] mx-auto">

        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">

          {/* PARAGRAPH 1 */}
          <p
            className="
              about-anim
              text-[16px] sm:text-[18px] lg:text-[20px]
              leading-[1.9] sm:leading-[2]
              text-black/90
            "
          >
            At Nova Studio, we blend technology and art to create innovative
            digital experiences that open up new possibilities for brands and
            businesses. We believe sensitivity and technique must work together —
            strategy guiding creativity, and creativity enhancing strategy.
            Every project we design is built to be functional, emotionally
            engaging, and visually refined.
          </p>

          {/* PARAGRAPH 2 */}
          <p
            className="
              about-anim
              text-[16px] sm:text-[18px] lg:text-[20px]
              leading-[1.9] sm:leading-[2]
              text-black/80
            "
          >
            Specializing in digital platforms, we collaborate across multiple
            disciplines. From concept to execution, we handle brand identity,
            UI systems, and interactive experiences. Our team works as one
            unified force focused on clarity and long-term value — creating
            work that performs, adapts, and grows with your brand.
          </p>

        </div>

      </div>
    </section>
  );
}
