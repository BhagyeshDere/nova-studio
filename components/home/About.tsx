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
          start: "top 80%",
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
        text-black
        overflow-hidden
        py-[14vh]
        px-[6vw]
      "
    >
      <div className="max-w-[1600px] mx-auto">

        {/* EDITORIAL FLOW */}
        <div className="flex flex-col gap-[10vh]">

          {/* PARAGRAPH 1 */}
          <p className="about-anim text-[20px] leading-[2.1] text-black/90 text-justify max-w-[1250px]">
            At Reino Studio, we blend technology and art to create innovative
            digital experiences that open up new possibilities for brands and
            businesses. We believe sensitivity and technique must work together —
            strategy guiding creativity, and creativity enhancing strategy. Every
            project we design is built to be functional, emotionally engaging,
            and visually refined. Our process combines deep research, design
            thinking, and technical precision to craft solutions that feel natural
            to users while delivering measurable business impact. We don’t just
            create interfaces — we build meaningful digital journeys that connect
            brands with people.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="about-anim text-[20px] leading-[2.1] text-black/85 text-justify max-w-[1250px]">
            Specializing in digital platforms, we collaborate across multiple
            disciplines and mediums. From concept to execution, we handle
            everything from brand identity and UI systems to interactive
            experiences and scalable products. Our multidisciplinary team brings
            together designers, strategists, and developers who work as one
            unified force. We focus on clarity, collaboration, and long-term
            value — ensuring the systems we design evolve with your brand. Our
            goal is simple: to create work that not only looks beautiful today
            but continues to perform, adapt, and grow in the future.
          </p>

        </div>

      </div>
    </section>
  );
}
