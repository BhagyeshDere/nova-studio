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
        bg-transparent
        text-black
        overflow-hidden
      "
    >
      <div className="max-w-[1600px] mx-auto">

        {/* EDITORIAL FLOW LAYOUT */}
        <div className="flex flex-col gap-[8vh]">

          {/* PARAGRAPH 1 */}
          <p className="about-anim text-[19px] leading-[2] text-black/90 text-justify max-w-[1200px]">
            At Reino Studio, we blend technology and art to create innovative
            designs that open up new possibilities. We understand that sensitivity
            and technique go hand in hand, working together to benefit your company
            and customers. Our approach combines strategic thinking with creative
            execution, ensuring every solution is both functional and emotionally
            engaging.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="about-anim text-[19px] leading-[2] text-black/85 text-justify max-w-[1200px]">
            Specializing in digital platforms, we also work across various mediums.
            From planning to development, we cover everything from visual identity
            to interactive installations. Our multidisciplinary expertise allows
            us to design cohesive systems that perform seamlessly across physical
            and digital environments.
          </p>

          {/* PARAGRAPH 3 */}
          <p className="about-anim text-[19px] leading-[2] text-black/85 text-justify max-w-[1200px]">
            Our owners are actively involved throughout the design process,
            ensuring a passionate and results-driven experience. With our
            dedicated customer service, close collaboration, and streamlined
            process, we make things simple and efficient, without unnecessary
            bureaucracy or complexity.
          </p>

          {/* PARAGRAPH 4 */}
          <p className="about-anim text-[19px] leading-[2] text-black/80 text-justify max-w-[1200px]">
            We believe in building long-term partnerships, not just delivering
            projects. Our focus is on clarity, trust, and sustainable growth —
            creating solutions that evolve with your brand and scale with your
            ambitions. We don’t just design visuals — we design systems, meaning,
            and long-term value.
          </p>

        </div>
      </div>
    </section>
  );
}
