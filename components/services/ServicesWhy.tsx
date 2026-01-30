"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function ServicesWhy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".why-anim"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
        text-black
        px-[6vw]
        py-[22vh]
      "
    >
      {/* Title */}
      <h2 className="why-anim text-[clamp(3rem,6vw,5.5rem)] font-semibold mb-[10vh]">
        Why work with us
      </h2>

      {/* Two column content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] max-w-[1600px]">

        {/* Left */}
        <p className="why-anim text-[16px] leading-[1.9] text-black/80 max-w-[520px]">
          Our goal is to simplify, add value, and amplify. Every delivery is born
          from a collaborative process, with the sensitivity to understand the
          agency’s needs and the responsibility to deliver with quality,
          consistency, and on time.
        </p>

        {/* Right */}
        <p className="why-anim text-[16px] leading-[1.9] text-black/80 max-w-[520px]">
          For us, working with other creative teams is not just about execution —
          it’s about building together, as part of the same story.
        </p>

      </div>
    </section>
  );
}
