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
        bg-white
        text-[#071A1F]
        overflow-hidden
        px-5 sm:px-10 lg:px-[8vw]
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
              text-[#071A1F]/90
            "
          >
            At Qiro Tech, we build powerful software solutions that help
            businesses operate smarter and grow faster. By combining
            technology, design, and strategy, we create digital products that
            are scalable, secure, and built for real-world performance.
            Every solution we develop focuses on reliability, usability,
            and long-term business value.
          </p>

          {/* PARAGRAPH 2 */}
          <p
            className="
              about-anim
              text-[16px] sm:text-[18px] lg:text-[20px]
              leading-[1.9] sm:leading-[2]
              text-[#071A1F]/75
            "
          >
            From custom software and mobile applications to AI-ML systems,
            IoT platforms, and infrastructure management, Qiro Tech works
            across multiple domains to deliver end-to-end digital solutions.
            Our team collaborates closely with clients to transform ideas into
            high-impact technology that evolves with their business.
          </p>

        </div>

      </div>
    </section>
  );
}
