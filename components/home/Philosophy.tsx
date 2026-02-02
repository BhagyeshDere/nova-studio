"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".ph-line, .ph-text"),
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.3,
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
      className="w-full bg-black text-white px-[6vw] py-[6vh] relative overflow-hidden"
    >
    </section>
  );
}
