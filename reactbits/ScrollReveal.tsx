"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll("span");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: "power4.out",
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // If NOT string → render normally
  if (typeof children !== "string") {
    return (
      <h2
        ref={ref}
        className="text-[5vw] font-semibold leading-tight text-white"   // ✅ white text
      >
        <span className="text-white">{children}</span>
      </h2>
    );
  }

  // If string → split animation
  return (
    <h2
      ref={ref}
      className="text-[5vw] font-semibold leading-tight text-white"     // ✅ white text
    >
      {children.split(" ").map((w, i) => (
        <span key={i} className="inline-block text-white">
          {w}&nbsp;
        </span>
      ))}
    </h2>
  );
}
