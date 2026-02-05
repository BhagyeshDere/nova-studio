"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.99 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    gsap.fromTo(
      pageRef.current.querySelectorAll("section"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );

    gsap.utils.toArray<HTMLElement>(".about-anim").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
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
  bg-gradient-to-b from-white to-[#F6FBFC]
  px-5 sm:px-8 lg:px-[8vw]
  pt-[14vh] sm:pt-[18vh]
  pb-[10vh] sm:pb-[14vh]
">
  <div className="max-w-[1400px] mx-auto">

    <h1 className="about-anim text-[clamp(2.4rem,8vw,8rem)] leading-[1.05] font-semibold">

      {/* LINE 1 — GRADIENT */}
      <span className="
        block
        bg-gradient-to-r 
        from-[#071A1F] 
        via-[#1F6677] 
        to-[#4DA6B8]
        bg-clip-text text-transparent
      ">
        Engineering powerful
      </span>

      {/* LINE 2 — BLACK */}
      <span className="block text-black">
        digital solutions.
      </span>

    </h1>

    <div className="about-anim mt-5 sm:mt-6 w-[70px] sm:w-[80px] h-[3px] bg-[#1F6677]/40"/>

    <p className="about-anim mt-6 sm:mt-8 max-w-[720px]
      text-[15px] sm:text-[18px]
      leading-[1.8]
      text-black/70
    ">
      Qiro Tech is a software company delivering scalable web,
      mobile, and cloud solutions. We combine engineering excellence,
      innovation, and strategy to build technology that drives
      real business growth.
    </p>

  </div>
</section>

{/* TEAM IMAGE */}
<section className="py-[8vh] sm:py-[12vh]">
  <div className="group overflow-hidden rounded-2xl mx-5 sm:mx-8 lg:mx-[6vw] shadow-xl">
    <Image
      src="/images/about/team.png"
      alt="Team"
      width={2200}
      height={900}
      className="w-full h-auto object-cover transition duration-700 group-hover:scale-110"
    />
  </div>
</section>

{/* ================= INTRO ================= */}
<section className="
  bg-gradient-to-br from-[#071A1F] via-[#0E3A43] to-[#1F6677]
  text-white
  px-5 sm:px-8 lg:px-[8vw]
  py-[10vh] sm:py-[16vh]
">
  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-[8vh] lg:gap-[8vw]">

    <div>
      <h2 className="about-anim text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.1]">
        We build software that <br /> powers businesses.
      </h2>

      <div className="about-anim mt-6 sm:mt-8 w-[60px] h-[2px] bg-white/40"/>
    </div>

    <div className="space-y-5 sm:space-y-6 text-[15px] sm:text-[18px] leading-[1.9] text-white/80 max-w-[720px]">
      <p className="about-anim">
        At Qiro Tech, technology is more than code — it is a business enabler.
        We design and develop systems that improve efficiency,
        enhance user experience, and accelerate growth.
      </p>

      <p className="about-anim">
        From startups to enterprises, we partner with organizations
        to build reliable digital platforms tailored to their goals.
      </p>

      <p className="about-anim text-white/70">
        Our solutions are secure, scalable, and built for long-term success.
      </p>
    </div>

  </div>
</section>

{/* ================= VISION & MISSION ================= */}
<section className="bg-[#F6FBFC] px-5 sm:px-8 lg:px-[8vw] py-[10vh] sm:py-[14vh]">
  <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-[6vh] sm:gap-[8vh]">

    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-md">
      <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">Vision</span>
      <h3 className="about-anim text-[clamp(1.8rem,4vw,3rem)] font-semibold mt-5 mb-5">
        Empower businesses with technology
      </h3>
      <p className="about-anim text-[15px] sm:text-[17px] leading-[1.9] text-black/70">
        Our vision is to become a trusted global technology partner,
        enabling companies to innovate and scale through modern software.
      </p>
    </div>

    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-md">
      <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">Mission</span>
      <h3 className="about-anim text-[clamp(1.8rem,4vw,3rem)] font-semibold mt-5 mb-5">
        Deliver reliable digital solutions
      </h3>
      <p className="about-anim text-[15px] sm:text-[17px] leading-[1.9] text-black/70">
        We aim to build secure, scalable, and user-centric applications
        that solve real business challenges.
      </p>
    </div>

  </div>
</section>

{/* ================= CULTURE ================= */}
<section className="bg-white px-5 sm:px-8 lg:px-[8vw] py-[12vh] sm:py-[16vh]">

  <div className="grid lg:grid-cols-2 gap-[6vh] sm:gap-[8vh] lg:gap-[8vw] items-center">

    <div className="about-anim group relative w-full h-[45vh] sm:h-[60vh] lg:h-[75vh] rounded-3xl overflow-hidden shadow-2xl">
      <Image
        src="/images/about/culture.png"
        alt="Culture"
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#071A1F]/10"/>
    </div>

    <div className="max-w-[620px]">
      <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">
        Culture
      </span>

      <h3 className="about-anim text-[clamp(1.8rem,3vw,2.6rem)] font-semibold mt-4 mb-6">
        Our Work Culture
      </h3>

      <div className="about-anim w-[60px] h-[2px] bg-[#1F6677]/40 mb-6"/>

      <div className="space-y-5 text-[15px] sm:text-[18px] leading-[1.9] text-black/70">
        <p className="about-anim">We believe in collaboration, transparency, and innovation.</p>
        <p className="about-anim">Our teams work closely with clients to ensure success.</p>
        <p className="about-anim text-black/60">Continuous learning and improvement define our mindset.</p>
      </div>
    </div>

  </div>
</section>

{/* ================= PROCESS ================= */}
<section className="bg-white py-[10vh] sm:py-[12vh]">

  <div className="group relative w-full h-[45vh] sm:h-[60vh] lg:h-[85vh] overflow-hidden rounded-2xl shadow-xl">
    <Image
      src="/images/about/cinematic-1.png"
      alt="Process"
      fill
      className="object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-[#071A1F]/10"/>
  </div>

</section>

{/* ================= FINAL ================= */}
<section className="px-5 sm:px-8 lg:px-[8vw] py-[12vh] sm:py-[16vh] text-center bg-gradient-to-b from-white to-[#F6FBFC]">

  <h2 className="about-anim text-[clamp(1.8rem,6vw,5rem)] font-semibold">
    We don’t just build software.<br/>We build growth.
  </h2>

  <p className="about-anim mt-5 sm:mt-6 text-[#1F6677] font-medium">
    Qiro Tech — Smart Software for Modern Businesses.
  </p>

</section>

</main>
  );
}
