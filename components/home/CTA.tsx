"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".about-anim"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1,
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
        bg-white text-black
        px-[6vw]
        py-[8vh] sm:py-[10vh]
      "
    >
      <div className="max-w-[1400px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw]">
          {/* Your content here */}
        </div>

      </div>
    </section>
  );
}
