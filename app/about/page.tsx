"use client";

/* =========================================
   ABOUT PAGE — NOVA STUDIO
   Cinematic Editorial Experience (Enhanced)
========================================= */

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import BlurText from "@/reactbits/BlurText";
import ScrollReveal from "@/reactbits/ScrollReveal";
import Image from "next/image";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!pageRef.current) return;

  /* ===============================
     PAGE ENTER — SOFT FADE
  =============================== */
  gsap.fromTo(
    pageRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  );

  /* ===============================
     SECTION FLOW — CINEMATIC
  =============================== */
  gsap.utils.toArray<HTMLElement>(".about-section").forEach((section) => {
    gsap.fromTo(
      section,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      }
    );
  });

  /* ===============================
     TEXT REVEAL — HIERARCHY
  =============================== */
  gsap.utils.toArray<HTMLElement>(".about-anim").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      }
    );
  });

  /* ===============================
     IMAGE REVEAL — EDITORIAL
  =============================== */
  gsap.utils.toArray<HTMLElement>("img").forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 0.97, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
        },
      }
    );
  });

}, []);


  return (
    <main ref={pageRef} className="relative w-full overflow-x-hidden bg-white">

{/* ===============================
   HERO — DARK (PRIMARY IDENTITY)
=============================== */}
<section className="relative isolate w-full px-[8vw] pt-[20vh] pb-[18vh] overflow-hidden bg-[#2f3437] text-white">
  <div className="relative z-10 max-w-[1600px]">

    <h1 className="about-anim text-[clamp(3.2rem,8vw,9rem)] leading-[0.95] font-semibold tracking-tight">
      We design meaning, <br />
      not just visuals.
    </h1>

    <p className="about-anim mt-[5vh] max-w-[760px] text-[19px] leading-[1.9] text-white/85">
      NOVA Studio is a digital design studio focused on creating immersive
      experiences, scalable systems, and cinematic digital identities for
      modern brands.
    </p>

  </div>
</section>

{/* ===============================
   STORY — WHITE EDITORIAL
=============================== */}
<section
  className="relative w-full px-[8vw] py-[18vh]"
  style={{
    backgroundColor: "#ffffff",   // hard white
    color: "#000000"              // hard black
  }}
>
  <div className="max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-[9vw] items-center">

    {/* TEXT */}
    <div className="space-y-[5vh]">

      <ScrollReveal>
        <span
          className="font-semibold text-[20px] block"
          style={{ color: "#000000" }}   // hard black
        >
          We believe design is not decoration — it’s infrastructure.
        </span>
      </ScrollReveal>

      <p
        className="about-anim text-[18px] leading-[1.9]"
        style={{ color: "#000000" }}   // hard black
      >
        At NOVA Studio, we blend strategy, design, and technology to build digital
        ecosystems that feel natural, intuitive, and emotionally engaging.
      </p>

      <p
        className="about-anim text-[18px] leading-[1.9]"
        style={{ color: "#000000" }}   // hard black
      >
        We design how brands behave, communicate, and evolve.
      </p>

    </div>

    {/* IMAGE */}
    <div
      className="about-anim relative w-full h-[72vh] overflow-hidden rounded-3xl shadow-xl"
      style={{ backgroundColor: "#ffffff" }}   // hard white container
    >
      <Image
        src="/images/about/studio.png"
        alt="Studio"
        fill
        className="object-cover"
      />
    </div>

  </div>
</section>


{/* ===============================
   VISUAL BREAK — FULL WHITE
=============================== */}
<section className="relative w-full py-[22vh] bg-white overflow-hidden">
  <div className="max-w-[1600px] mx-auto">
    <ScrollReveal>
      <div className="relative w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl">
        <Image src="/images/about/cinematic-1.png" alt="Cinematic" fill className="object-cover" />
      </div>
    </ScrollReveal>
  </div>
</section>

{/* ===============================
   PHILOSOPHY STRIP — PREMIUM WHITE EDITORIAL
=============================== */}
<section
  className="relative w-full overflow-hidden"
  style={{
    backgroundColor: "#ffffff",   // hard white
    color: "#000000"              // hard black
  }}
>
  {/* subtle editorial line */}
  <div className="absolute top-[10vh] left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-black/10" />

  <div className="max-w-[1600px] mx-auto text-center py-[20vh] px-[6vw]">

    {/* Micro label */}
    <div className="about-anim mb-[4vh]">
      <span className="text-[12px] tracking-[0.4em] uppercase text-black/50">
        Philosophy
      </span>
    </div>

    {/* Main statement */}
    <BlurText
      text="Design.Systems.Identity.Experience."
      animateBy="letters"
      direction="bottom"
      className="text-[clamp(2.6rem,6vw,5.4rem)] font-semibold tracking-tight leading-[1.15]"
      style={{ color: "#000000" }}   // hard black
    />

    {/* Subline */}
    <p className="about-anim mt-[6vh] max-w-[820px] mx-auto text-[18px] leading-[1.9] text-black/60">
      We don’t create isolated visuals — we build connected systems that shape
      perception, behavior, and long-term brand value.
    </p>

  </div>

  {/* bottom editorial line */}
  <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-black/10" />
</section>



{/* ===============================
   STUDIO CULTURE — WHITE
=============================== */}
<section className="relative w-full bg-white px-[8vw] py-[20vh] text-black">
  <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[9vw] items-center">

    <ScrollReveal>
      <div className="relative w-full h-[72vh] overflow-hidden rounded-3xl shadow-xl">
        <Image src="/images/about/culture.png" alt="Culture" fill className="object-cover" />
      </div>
    </ScrollReveal>

    <div className="space-y-[5vh]">
      <h2 className="about-anim text-[clamp(2.4rem,3.8vw,4rem)] font-semibold">
        Culture is our foundation.
      </h2>

      <p className="about-anim text-[18px] leading-[1.9] text-black/70">
        We work slow, deep, and intentionally. We value thinking over noise.
      </p>

      <p className="about-anim text-[18px] leading-[1.9] text-black/70">
        Built on curiosity, precision, collaboration, and long-term thinking.
      </p>
    </div>

  </div>
</section>

{/* ===============================
   VISION & MISSION — WHITE STRIP
=============================== */}
<section
  className="relative w-full px-[8vw] py-[20vh]"
  style={{
    backgroundColor: "#ffffff",   // ✅ hard white
    color: "#000000"              // ✅ hard black
  }}
>
  <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[12vw]">

    {/* VISION */}
    <div className="about-anim space-y-[3vh]">

      <span
        className="text-[12px] tracking-[0.35em] uppercase"
        style={{ color: "#000000" }}   // hard black
      >
        Vision
      </span>

      <h2
        className="text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-tight"
        style={{ color: "#000000" }}   // hard black
      >
        To shape the future of brands
        through meaning, systems, and experience.
      </h2>

      <p
        className="text-[18px] leading-[1.9] max-w-[640px]"
        style={{ color: "#000000" }}   // hard black
      >
        We envision brands as living systems — evolving with culture, people,
        and time, not static identities frozen in design.
      </p>

    </div>

    {/* MISSION */}
    <div className="about-anim space-y-[3vh]">

      <span
        className="text-[12px] tracking-[0.35em] uppercase"
        style={{ color: "#000000" }}   // hard black
      >
        Mission
      </span>

      <h2
        className="text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-tight"
        style={{ color: "#000000" }}   // hard black
      >
        To build brands that move,
        scale, and endure.
      </h2>

      <p
        className="text-[18px] leading-[1.9] max-w-[640px]"
        style={{ color: "#000000" }}   // hard black
      >
        Our mission is to design intelligent systems, strong identities, and
        meaningful experiences that scale across digital, physical, and cultural spaces.
      </p>

    </div>

  </div>
</section>

{/* ===============================
   VALUES — EDITORIAL GRID
=============================== */}
<section className="relative w-full bg-white text-black px-[8vw] py-[22vh]">
  <div className="max-w-[1600px] mx-auto">

    <div className="mb-[14vh]">
      <h2 className="about-anim text-[clamp(2.8rem,5vw,4.8rem)] font-semibold">
        Our values shape everything we build
      </h2>
      <p className="about-anim mt-[3vh] max-w-[680px] text-[19px] leading-[1.9] text-black/60">
        Principles that guide our thinking, our process, and every experience we create.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-[9vw]">

      {[
        {
          title: "Clarity",
          text: "We simplify complexity. Our work transforms ideas into clear systems, meaningful structures, and intuitive experiences."
        },
        {
          title: "Craft",
          text: "Quality lives in details. Every interaction, motion, and system is designed with intention and precision."
        },
        {
          title: "Continuity",
          text: "We design for evolution. Systems that grow, adapt, and scale with your brand and time."
        }
      ].map((v, i) => (
        <div key={i} className="about-anim relative space-y-[2.5vh]">
          <div className="w-[42px] h-[1px] bg-black/20"></div>
          <h3 className="text-[23px] font-semibold">{v.title}</h3>
          <p className="text-black/70 leading-[1.9] text-[17.5px]">
            {v.text}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* ===============================
   FINAL STATEMENT — CLEAN WHITE
=============================== */}
<section className="relative w-full bg-white text-black px-[8vw] py-[18vh] text-center">
  <h2 className="about-anim text-[clamp(2.8rem,6vw,5.5rem)] font-semibold">
    We don’t design projects. <br /> We design futures.
  </h2>

  <p className="about-anim mt-[4vh] text-[19px] text-black/70">
    NOVA Studio — Designing identity, experience & presence.
  </p>
</section>

    </main>
  );
}
