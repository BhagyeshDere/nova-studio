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
  pt-[14vh] sm:pt-[15vh] lg:pt-[16vh]
  pb-[10vh] sm:pb-[11vh] lg:pb-[12vh]
">

  <div className="max-w-[1400px] mx-auto">

    <h1 className="about-anim text-[clamp(2.2rem,8vw,7rem)] leading-[1.05] font-semibold">

      <span className="block bg-gradient-to-r from-[#071A1F] via-[#1F6677] to-[#4DA6B8] bg-clip-text text-transparent">
        Engineering powerful
      </span>

      <span className="block text-black">
        digital solutions.
      </span>

    </h1>

    <div className="about-anim mt-5 sm:mt-6 w-[80px] h-[3px] bg-[#1F6677]/40"/>

    <p className="about-anim mt-6 sm:mt-8 max-w-[720px] text-[16px] sm:text-[18px] leading-[1.8] text-black/70">
      Qiro Tech is a modern software company delivering scalable web,
      mobile, AI and cloud solutions that help businesses grow,
      automate, and innovate.
    </p>

  </div>
</section>

{/* ================= TEAM IMAGE ================= */}
<section className="py-[8vh] sm:py-[9vh] lg:py-[10vh]">
  <div className="group overflow-hidden rounded-2xl sm:rounded-3xl mx-5 sm:mx-8 lg:mx-[6vw] shadow-xl">
    <Image
      src="/images/about/team1.png"
      alt="Qiro Tech Team"
      width={2200}
      height={900}
      className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
    />
  </div>
</section>

{/* ================= ABOUT QIRO TECH ================= */}
<section className="px-5 sm:px-6 lg:px-[8vw] py-[12vh] sm:py-[14vh] lg:py-[16vh] bg-white">

  <div className="max-w-[1100px] mx-auto text-center">

    <h2 className="about-anim text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight">
      <span className="text-black">About </span>

      <span className="bg-gradient-to-r from-[#1F6677] to-[#4DA6B8] bg-clip-text text-transparent">
        Qiro Tech
      </span>
    </h2>

    <div className="about-anim w-24 h-[3px] bg-gradient-to-r from-[#1F6677] to-[#4DA6B8] mx-auto mt-5 sm:mt-6 rounded-full"/>

    <p className="about-anim mt-8 sm:mt-10 text-[16px] sm:text-lg leading-[1.9] text-black/70 max-w-[900px] mx-auto">
      Qiro Tech is a technology-driven company focused on building
      smart, scalable and secure digital products. We partner with
      startups, SMEs and enterprises to transform ideas into
      impactful digital solutions that drive real business growth.
    </p>

    <p className="about-anim mt-5 sm:mt-6 text-[16px] sm:text-lg leading-[1.9] text-black/70 max-w-[900px] mx-auto">
      Our expertise spans web platforms, mobile applications,
      enterprise systems and cloud solutions. Every product we
      build is designed with performance, user experience and
      long-term scalability in mind.
    </p>

    <p className="about-anim mt-5 sm:mt-6 text-[16px] sm:text-lg leading-[1.9] text-black/60 max-w-[850px] mx-auto">
      At Qiro Tech, we don’t just develop software —
      we create digital experiences that help businesses
      innovate, automate and stay ahead in a fast-changing world.
    </p>

  </div>

</section>

{/* ================= STORY / WHO / ACTION ================= */}
<section className="bg-[#F6FBFC] px-5 sm:px-6 lg:px-[8vw] py-[14vh] sm:py-[16vh] lg:py-[18vh]">

  <div className="max-w-[1200px] mx-auto space-y-20 sm:space-y-28 lg:space-y-32">

    {/* OUR STORY */}
    <div className="grid md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

      <div className="about-anim">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F6677] leading-tight">
          Our Story
        </h3>

        <div className="w-16 h-[2px] bg-[#1F6677]/40 mt-5 sm:mt-6"/>

        <p className="mt-6 sm:mt-8 text-[16px] sm:text-lg leading-[1.9] text-black/70">
          Qiro Tech started with one belief —
          technology should create real impact.
          What began as a small group of passionate
          developers has evolved into a digital
          partner for growing businesses.
        </p>

        <p className="mt-5 sm:mt-6 text-[16px] sm:text-lg leading-[1.9] text-black/70">
          Over the years, we’ve helped companies
          launch platforms, automate operations
          and scale digitally in competitive markets.
        </p>
      </div>

      <div className="about-anim text-[70px] sm:text-[110px] lg:text-[160px] font-semibold text-[#1F6677]/10 text-right md:text-left">
        01
      </div>

    </div>

    {/* EMPOWERING */}
    <div className="grid md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

      <div className="about-anim text-[70px] sm:text-[110px] lg:text-[160px] font-semibold text-[#1F6677]/10 md:text-left text-right order-2 md:order-1">
        02
      </div>

      <div className="about-anim order-1 md:order-2">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F6677] leading-tight">
          Empowering Through Action
        </h3>

        <div className="w-16 h-[2px] bg-[#1F6677]/40 mt-5 sm:mt-6"/>

        <p className="mt-6 sm:mt-8 text-[16px] sm:text-lg leading-[1.9] text-black/70">
          We focus on execution, not just ideas.
          Our team builds solutions that automate
          workflows, reduce manual effort and
          increase business efficiency.
        </p>

        <p className="mt-5 sm:mt-6 text-[16px] sm:text-lg leading-[1.9] text-black/70">
          Every product we develop is designed
          to deliver measurable value and
          long-term scalability.
        </p>
      </div>

    </div>

    {/* WHO WE ARE */}
    <div className="grid md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

      <div className="about-anim">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F6677] leading-tight">
          Who We Are
        </h3>

        <div className="w-16 h-[2px] bg-[#1F6677]/40 mt-5 sm:mt-6"/>

        <p className="mt-6 sm:mt-8 text-[16px] sm:text-lg leading-[1.9] text-black/70">
          We are designers, engineers and
          problem-solvers who love building
          meaningful digital experiences.
        </p>

        <p className="mt-5 sm:mt-6 text-[16px] sm:text-lg leading-[1.9] text-black/70">
          Collaboration, innovation and
          transparency define our culture.
          We work as partners, not vendors.
        </p>
      </div>

      <div className="about-anim text-[70px] sm:text-[110px] lg:text-[160px] font-semibold text-[#1F6677]/10 text-right md:text-left">
        03
      </div>

    </div>

  </div>

</section>

{/* ================= STATS ================= */}
<section className="bg-[#071A1F] text-white px-5 sm:px-6 lg:px-[8vw] py-[10vh] sm:py-[12vh]">

  <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

    {[{num:"50+",label:"Projects Delivered"},{num:"20+",label:"Global Clients"},{num:"5+",label:"Years Experience"}].map((s,i)=>(
      <div key={i} className="about-anim">
        <h3 className="text-4xl sm:text-5xl font-semibold text-[#4DA6B8]">{s.num}</h3>
        <p className="mt-3 text-white/70">{s.label}</p>
      </div>
    ))}

  </div>

</section>

{/* ================= VISION & MISSION ================= */}
<section className="bg-white px-5 sm:px-6 lg:px-[8vw] py-[12vh] sm:py-[14vh]">

  <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">

    <div className="about-anim bg-[#F6FBFC] p-6 sm:p-10 rounded-2xl">
      <span className="uppercase tracking-[0.35em] text-sm text-[#1F6677]">Vision</span>
      <h3 className="text-2xl sm:text-3xl font-semibold mt-5 mb-4">
        Empower businesses with technology
      </h3>
      <p className="text-black/70 leading-[1.8]">
        Become a trusted global technology partner helping companies
        innovate and scale through digital solutions.
      </p>
    </div>

    <div className="about-anim bg-[#F6FBFC] p-6 sm:p-10 rounded-2xl">
      <span className="uppercase tracking-[0.35em] text-sm text-[#1F6677]">Mission</span>
      <h3 className="text-2xl sm:text-3xl font-semibold mt-5 mb-4">
        Deliver reliable digital solutions
      </h3>
      <p className="text-black/70 leading-[1.8]">
        Build secure, scalable and user-centric applications
        solving real business challenges.
      </p>
    </div>

  </div>

</section>

{/* ================= FINAL ================= */}
<section className="px-5 sm:px-6 lg:px-[8vw] py-[12vh] sm:py-[14vh] text-center bg-gradient-to-b from-white to-[#F6FBFC]">

  <h2 className="about-anim text-[clamp(1.8rem,6vw,4.5rem)] font-semibold">
    We don’t just build software.<br/>We build growth.
  </h2>

  <p className="about-anim mt-5 sm:mt-6 text-[#1F6677] font-medium">
    Qiro Tech — Smart Software for Modern Businesses.
  </p>

</section>

</main>
  );
}
