"use client";

/* =========================================
   SERVICES PAGE — NOVA STUDIO
   Studio-grade editorial layout
========================================= */

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";



export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

 


  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current.querySelectorAll(".srv-anim"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <main ref={pageRef} className="relative w-full overflow-x-hidden bg-white text-black">

{/* ===============================
   HERO — REINO STYLE
=============================== */}
<section className="relative w-full min-h-[100vh] px-[6vw] pt-[22vh] pb-[14vh] bg-white">

  {/* Wide container */}
  <div className="w-full">

    <h1 className="srv-anim font-semibold tracking-tight text-[#2b2e2f] leading-[0.95]
      text-[clamp(3.2rem,7vw,8.5rem)]">

      <span className="block whitespace-nowrap">
        We are a design studio that
      </span>

      <span className="block whitespace-nowrap">
        loves to create together.
      </span>

    </h1>

    {/* Paragraph */}
    <div className="srv-anim mt-[10vh] max-w-[560px] text-[16.5px] leading-[1.9] text-black/80">
    <p>
      At Reino, we believe the best ideas are born from collaboration. That’s why
      we work side by side with other creative agencies, acting as a natural
      extension of their teams. We get into the flow, understand the culture, and
      wear the project’s jersey as if it were our own.
    </p>
  </div>

  </div>

</section>





{/* ===============================
   TEAM STRIP — FULL IMAGE (NO CROP)
=============================== */}
<section className="relative w-full py-[12vh] bg-white">
  <div className="relative w-full flex justify-center items-center">

    <Image
      src="/images/services/team.png"
      alt="Team"
      width={2200}          // natural large width
      height={900}          // natural aspect
      className="w-full h-auto object-contain"
      priority
    />

  </div>
</section>


{/* ===============================
   PART OF YOUR TEAM — PARAGRAPH
=============================== */}
<section className="relative w-full px-[8vw] py-[18vh] bg-white text-black">

  <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-tight mb-[8vh]">
    Part of your team,<br />
    from start to finish
  </h2>

  <div className="max-w-[720px]">
    <p className="text-[18px] leading-[1.9] text-black/75">
      More than providers, we are partners. This means we take part in the
      entire process — from strategic conception to final delivery — bringing
      our expertise in UX, UI, Motion Design, and Branding. Our main strength is
      flexibility: we adapt the depth and format of our contribution to match
      the needs of each project.
    </p>
  </div>

</section>

{/* ===============================
   HOW WE COLLABORATE — EDITORIAL LAYOUT (IMPROVED)
=============================== */}
<section className="relative w-full bg-white px-[8vw] py-[22vh]">

  <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10vw] items-center">

    {/* LEFT — GEOMETRY SYSTEM GRAPHIC */}
    <div className="relative w-full h-[85vh] flex items-center justify-center">
      <div className="relative w-full h-full max-w-[720px]">
        <Image
          src="/images/services/geometry.png"
          alt="Design System Geometry"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>

    {/* RIGHT — CONTENT */}
    <div className="flex flex-col gap-[8vh]">

      {/* TITLE BLOCK */}
      <div className="space-y-[2vh]">
        <span className="text-[13px] tracking-[0.3em] uppercase text-black/50">
          Process
        </span>

        <h2 className="text-[clamp(3.2rem,6vw,7rem)] font-semibold leading-[0.95] tracking-tight text-black">
          How we<br/>collaborate
        </h2>
      </div>

      {/* ITEMS */}
      <div className="flex flex-col gap-[6vh] max-w-[640px]">

        {/* ITEM 1 */}
        <div className="flex gap-8 group">
          <div className="pt-1 text-black/40 text-[18px]">▲</div>
          <div>
            <h3 className="text-[22px] font-semibold mb-[1vh] text-black">
              Discovery + Strategy
            </h3>
            <p className="text-black/65 leading-[1.9] text-[17px]">
              We dive deep into your ecosystem to understand goals, audience,
              culture, and context — transforming insights into clear strategic
              directions and design frameworks.
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex gap-8 group">
          <div className="pt-1 text-black/40 text-[18px]">●</div>
          <div>
            <h3 className="text-[22px] font-semibold mb-[1vh] text-black">
              Branding
            </h3>
            <p className="text-black/65 leading-[1.9] text-[17px]">
              We create identities that communicate meaning, purpose, and emotion —
              from symbol systems to voice, behavior, and visual language.
            </p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex gap-8 group">
          <div className="pt-1 grid grid-cols-2 gap-[3px] opacity-60">
            <span className="block w-[6px] h-[6px] bg-black"></span>
            <span className="block w-[6px] h-[6px] bg-black"></span>
            <span className="block w-[6px] h-[6px] bg-black"></span>
            <span className="block w-[6px] h-[6px] bg-black"></span>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold mb-[1vh] text-black">
              UX + UI
            </h3>
            <p className="text-black/65 leading-[1.9] text-[17px]">
              We design intuitive, elegant interfaces where aesthetics and usability
              merge into seamless digital experiences that feel natural to use.
            </p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="flex gap-8 group">
          <div className="pt-1 text-black/40 text-[18px]">◯</div>
          <div>
            <h3 className="text-[22px] font-semibold mb-[1vh] text-black">
              Motion Design
            </h3>
            <p className="text-black/65 leading-[1.9] text-[17px]">
              We bring systems to life through animation, interaction, and movement —
              creating rhythm, emotion, and clarity across digital environments.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

{/* ===============================
   WHY WORK WITH US — EDITORIAL (IMPROVED)
=============================== */}
<section className="relative w-full bg-white px-[8vw] py-[22vh]">

  <div className="max-w-[1700px] mx-auto">

    {/* Title */}
    <div className="mb-[14vh]">
      <span className="text-[13px] tracking-[0.3em] uppercase text-black/50">
        Partnership
      </span>

      <h2 className="srv-anim text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[1] mt-[2vh] text-[#2b2e2f]">
        Why work with us
      </h2>
    </div>

    {/* Content grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10vw]">

      <div className="srv-anim max-w-[640px] text-[18px] leading-[1.9] text-black/70">
        <p>
          Our goal is to simplify complexity, add value, and amplify impact.
          Every delivery is born from a collaborative process — balancing
          sensitivity, strategy, and execution to create meaningful outcomes
          with consistency and precision.
        </p>
      </div>

      <div className="srv-anim max-w-[640px] text-[18px] leading-[1.9] text-black/70">
        <p>
          Working with us is not outsourcing — it’s partnership.
          We embed ourselves into your process, your culture, and your vision,
          building long-term systems instead of short-term solutions.
        </p>
      </div>

    </div>

  </div>

</section>

{/* ===============================
   SHOWCASE — EDITORIAL (IMPROVED)
=============================== */}
<section className="relative w-full bg-white py-[22vh]">

  <div className="max-w-[1700px] mx-auto">

    {/* Headline */}
    <div className="w-full text-center mb-[14vh]">
      <h2 className="srv-anim text-[clamp(3rem,6vw,6rem)] font-semibold leading-tight text-black">
        See how we’ve helped<br />brands go further
      </h2>
      <p className="srv-anim mt-[3vh] text-black/60 text-[18px]">
        Real systems. Real impact. Real growth.
      </p>
    </div>

    {/* Image */}
    <div className="relative w-full flex justify-center">
      <div className="relative w-full max-w-[1400px] aspect-[16/9] rounded-2xl overflow-hidden">
        <Image
          src="/images/services/showcase.png"
          alt="Showcase"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>

  </div>

</section>

{/* ===============================
   LIFESTYLE — CINEMATIC
=============================== */}
<section className="relative w-full bg-white py-[22vh] flex justify-center">
  <div className="relative w-full max-w-[1400px] mx-auto">
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
      <Image
        src="/images/services/lifestyle.png"
        alt="Lifestyle"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
</section>

{/* ===============================
   TECH SHOWCASE — EDITORIAL CTA
=============================== */}
<section className="relative w-full bg-white py-[22vh] flex flex-col justify-center items-center">

  <div className="relative w-full max-w-[1400px] mx-auto">
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
      <Image
        src="/images/services/tech-showcase.png"
        alt="Tech Showcase"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>

  {/* Button */}
  <div className="mt-[10vh]">
    <button className="px-12 py-5 rounded-full bg-black text-white text-[16px] tracking-wide hover:scale-105 transition-transform duration-300">
      View All Work →
    </button>
  </div>

</section>



    </main>
  );
}
