"use client";

/* =========================================
   HOME — REACT BITS EXPERIENCE ENGINE
   Cinematic Studio Homepage
========================================= */

import Hero from "@/components/home/Hero";
import WorksShowcase from "@/components/home/WorksShowcase";
import About from "@/components/home/About";
import Philosophy from "@/components/home/Philosophy";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";
import FloatingHero from "@/components/layout/FloatingHero";

/* ===== React Bits Components ===== */
import BlurText from "@/reactbits/BlurText";
import ScrollReveal from "@/reactbits/ScrollReveal";

import ServicesFlowing from "@/components/home/ServicesFlowing";

/* =========================================
   Home Component
========================================= */

export default function Home() {
  return (
   <main className="relative w-full overflow-x-hidden">



      {/* ===============================
         HERO — ENTRY SCENE
      =============================== */}
      <Hero />
      <FloatingHero /> 

      {/* ===============================
         FEATURED WORKS
      =============================== */}
      <WorksShowcase />

{/* ===============================
   ABOUT — REVEAL STORY
=============================== */}
<section className="w-full bg-black text-white px-[8vw] py-[10vh]">

  <ScrollReveal>
    <span className="text-white">
      We blend technology and art to create innovative designs that open up new possibilities.
    </span>
  </ScrollReveal>

  <div className="mt-[6vh]">
    <div className="text-white">
      <About />
    </div>
  </div>

</section>




      {/* ===============================
         PHILOSOPHY — BIG EDITORIAL
      =============================== */}
      <Philosophy />

{/* ===============================
   CINEMATIC BLUR LINE — EDITORIAL BLOCK
=============================== */}
<section className="w-full bg-white text-black px-[8vw] py-[10vh]">

  <BlurText
    text="We design experiences, not just interfaces."
    animateBy="words"
    direction="top"
    className="
      text-[5.5vw]              /* bigger */
      font-black                /* maximum bold */
      leading-[1.05]
      max-w-[1400px]
      text-black
      tracking-[-0.02em]        /* tight but powerful */
      uppercase                 /* cinematic feel */
    "
  />

  <div className="mt-[5vh] max-w-[950px] space-y-[3vh] text-black/65 text-[19px] leading-[1.9]">
    <p>
      Every interaction is crafted with intention — from the first impression
      to the final detail. We believe great digital products are not just seen,
      but felt.
    </p>

    <p>
      Our process blends strategy, design, and technology into seamless
      experiences that connect emotionally, perform technically, and scale
      naturally with your brand.
    </p>
  </div>

</section>


      {/* ===============================
         SERVICES — FLOWING CAPSULE SYSTEM
      =============================== */}
      <ServicesFlowing />

      {/* ===============================
         CLIENTS GRID
      =============================== */}
      <Clients />

      {/* ===============================
         CTA — BUSINESS CONVERSION
      =============================== */}
      <CTA />

      {/* ===============================
         FINAL SAY HI — GLOBAL FOOTER
         (Handled by layout.tsx now)
      =============================== */}
      {/* <SayHi /> ❌ REMOVED */}
      

    </main>
  );
}
