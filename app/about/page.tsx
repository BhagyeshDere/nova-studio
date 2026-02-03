"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.utils.toArray<HTMLElement>(".about-anim").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
<main ref={pageRef} className="w-full bg-white text-[#071A1F] overflow-x-hidden">

{/* ================= HERO ================= */}
<section className="
  bg-gradient-to-br from-[#071A1F] via-[#0E3A43] to-[#1F6677]
  text-white
  px-6 sm:px-10 lg:px-[8vw]
  pt-[18vh] sm:pt-[20vh]
  pb-[14vh] sm:pb-[18vh]
">
  <div className="max-w-[1400px] mx-auto">

    <h1 className="about-anim text-[clamp(2.6rem,8vw,8rem)] leading-[1.05] font-semibold">
      Designing meaning,<br/>not just visuals.
    </h1>

    <p className="about-anim mt-6 sm:mt-8 max-w-[720px]
      text-[16px] sm:text-[18px]
      leading-[1.8]
      text-white/85
    ">
      NOVA Studio is a digital design studio crafting immersive identities,
      scalable systems, and cinematic digital experiences for modern brands.
      We merge strategy, storytelling, and technology to create work that lasts.
    </p>

  </div>
</section>


{/* ================= INTRO ================= */}
<section className="bg-white px-6 sm:px-10 lg:px-[8vw] py-[14vh] sm:py-[18vh]">
  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-[10vh] lg:gap-[10vw]">

    <div>
      <h2 className="about-anim text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.1]">
        We design how brands <br /> live and evolve.
      </h2>

      <div className="about-anim mt-8 w-[60px] h-[2px] bg-[#1F6677]/40"/>
    </div>

    <div className="space-y-6 text-[16px] sm:text-[18px] leading-[1.9] text-black/70 max-w-[720px]">
      <p className="about-anim">We believe design is infrastructure — not decoration...</p>
      <p className="about-anim">At NOVA Studio, we approach every project as a living system...</p>
      <p className="about-anim text-black/60">Our work sits at the intersection of strategy...</p>
    </div>

  </div>
</section>


{/* ================= STUDIO IMAGE ================= */}
<section className="bg-white py-[10vh] sm:py-[12vh]">

  <div className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[90vh]">
    <Image src="/images/about/studio.png" alt="Studio" fill className="object-cover"/>
    <div className="absolute inset-0 bg-[#071A1F]/10"/>
  </div>

  <div className="px-6 sm:px-10 lg:px-[8vw] pt-[10vh] max-w-[1100px]">
    <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">Studio</span>

    <h3 className="about-anim text-[clamp(2rem,4vw,3.2rem)] font-semibold mt-4 mb-6">
      Our Studio
    </h3>

    <div className="about-anim w-[60px] h-[2px] bg-[#1F6677]/40 mb-8"/>

    <div className="space-y-6 text-[16px] sm:text-[18px] leading-[1.9] text-black/70">
      <p className="about-anim">Our studio is built for deep thinking...</p>
      <p className="about-anim">We treat design as a discipline...</p>
      <p className="about-anim text-black/60">Our space encourages curiosity...</p>
    </div>
  </div>

</section>


{/* ================= VISION & MISSION ================= */}
<section className="bg-[#E8F4F5] px-6 sm:px-10 lg:px-[8vw] py-[14vh]">

<div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-[8vh]">

  <div>
    <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">
      Vision
    </span>

    <h3 className="about-anim text-[clamp(2rem,4vw,3rem)] font-semibold mt-6 mb-6">
      To shape future-ready brands
    </h3>

    <p className="about-anim text-[17px] leading-[1.9] text-black/70 max-w-[520px]">
      Our vision is to design brands and digital systems that
      remain relevant for years — evolving with culture and technology.
      We aim to build work that stands the test of time.
    </p>
  </div>

  <div>
    <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">
      Mission
    </span>

    <h3 className="about-anim text-[clamp(2rem,4vw,3rem)] font-semibold mt-6 mb-6">
      Design with purpose
    </h3>

    <p className="about-anim text-[17px] leading-[1.9] text-black/70 max-w-[520px]">
      Our mission is to help brands communicate clearly,
      connect emotionally, and grow strategically through
      thoughtful design and technology.
    </p>
  </div>

</div>
</section>


{/* ================= CULTURE ================= */}
<section className="bg-white px-6 sm:px-10 lg:px-[8vw] py-[14vh] sm:py-[18vh]">

  <div className="grid lg:grid-cols-2 gap-[8vh] lg:gap-[8vw] items-center">

    <div className="about-anim relative w-full h-[50vh] sm:h-[65vh] lg:h-[75vh] rounded-3xl overflow-hidden shadow-xl">
      <Image src="/images/about/culture.png" alt="Culture" fill className="object-cover"/>
      <div className="absolute inset-0 bg-[#071A1F]/10"/>
    </div>

    <div className="max-w-[620px]">
      <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">Culture</span>

      <h3 className="about-anim text-[clamp(2rem,3vw,2.6rem)] font-semibold mt-4 mb-6">
        Our Culture
      </h3>

      <div className="about-anim w-[60px] h-[2px] bg-[#1F6677]/40 mb-8"/>

      <div className="space-y-6 text-[16px] sm:text-[18px] leading-[1.9] text-black/70">
        <p className="about-anim">Collaboration and curiosity shape our culture...</p>
        <p className="about-anim">Our team operates as one connected system...</p>
        <p className="about-anim text-black/60">We value depth over speed...</p>
      </div>
    </div>

  </div>
</section>


{/* ================= PROCESS ================= */}
<section className="bg-white py-[12vh]">

  <div className="relative w-full h-[50vh] sm:h-[65vh] lg:h-[85vh]">
    <Image src="/images/about/cinematic-1.png" alt="Process" fill className="object-cover"/>
    <div className="absolute inset-0 bg-[#071A1F]/10"/>
  </div>

  <div className="px-6 sm:px-10 lg:px-[8vw] pt-[10vh]">
    <div className="max-w-[1100px] grid lg:grid-cols-2 gap-[8vw]">

      <div>
        <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">Process</span>

        <h3 className="about-anim text-[clamp(2rem,3vw,3rem)] font-semibold mt-4 mb-6">
          Our Process
        </h3>

        <div className="about-anim w-[60px] h-[2px] bg-[#1F6677]/40"/>
      </div>

      <div className="space-y-6 text-[16px] sm:text-[18px] leading-[1.9] text-black/70">
        <p className="about-anim">Strategy guides everything we do...</p>
        <p className="about-anim">We research deeply...</p>
        <p className="about-anim">Collaboration is central...</p>
        <p className="about-anim text-black/60">Every decision serves a long-term vision...</p>
      </div>

    </div>
  </div>
</section>


{/* ================= FINAL ================= */}
<section className="px-6 sm:px-10 lg:px-[8vw] py-[14vh] sm:py-[18vh] text-center">

  <h2 className="about-anim text-[clamp(2rem,6vw,5rem)] font-semibold">
    We don’t design projects.<br/>We design futures.
  </h2>

  <p className="about-anim mt-6 text-[#1F6677]">
    NOVA Studio — Designing identity, experience & presence.
  </p>

</section>

</main>
  );
}
