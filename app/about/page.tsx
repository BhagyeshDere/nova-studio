"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    // ===== PAGE LOAD ANIMATION =====
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.99 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    // ===== STAGGER SECTIONS =====
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

    // ===== SCROLL ANIMATION =====
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
  bg-gradient-to-br from-[#071A1F] via-[#0E3A43] to-[#1F6677]
  text-white
  px-6 sm:px-10 lg:px-[8vw]
  pt-[18vh] sm:pt-[20vh]
  pb-[14vh] sm:pb-[18vh]
">
  <div className="max-w-[1400px] mx-auto">

    <h1 className="about-anim text-[clamp(2.6rem,8vw,8rem)] leading-[1.05] font-semibold">
      Engineering powerful<br/>digital solutions.
    </h1>

    <p className="about-anim mt-6 sm:mt-8 max-w-[720px]
      text-[16px] sm:text-[18px]
      leading-[1.8]
      text-white/85
    ">
      Qiro Tech is a software company delivering scalable web,
      mobile, and cloud solutions. We combine engineering excellence,
      innovation, and strategy to build technology that drives
      real business growth.
    </p>

  </div>
</section>

{/* TEAM IMAGE */}
<section className="py-[8vh] sm:py-[10vh]">
  <div className="group overflow-hidden rounded-xl mx-5 sm:mx-10 lg:mx-[6vw]">
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
<section className="bg-white px-6 sm:px-10 lg:px-[8vw] py-[14vh] sm:py-[18vh]">
  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-[10vh] lg:gap-[10vw]">

    <div>
      <h2 className="about-anim text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.1]">
        We build software that <br /> powers businesses.
      </h2>

      <div className="about-anim mt-8 w-[60px] h-[2px] bg-[#1F6677]/40"/>
    </div>

    <div className="space-y-6 text-[16px] sm:text-[18px] leading-[1.9] text-black/70 max-w-[720px]">
      <p className="about-anim">
        At Qiro Tech, technology is more than code — it is a business enabler.
        We design and develop systems that improve efficiency,
        enhance user experience, and accelerate growth.
      </p>

      <p className="about-anim">
        From startups to enterprises, we partner with organizations
        to build reliable digital platforms tailored to their goals.
      </p>

      <p className="about-anim text-black/60">
        Our solutions are secure, scalable, and built for long-term success.
      </p>
    </div>

  </div>
</section>

{/* ================= VISION & MISSION ================= */} <section className="bg-[#E8F4F5] px-6 sm:px-10 lg:px-[8vw] py-[14vh]"> <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-[8vh]"> <div> <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]"> Vision </span> <h3 className="about-anim text-[clamp(2rem,4vw,3rem)] font-semibold mt-6 mb-6"> Empower businesses with technology </h3> <p className="about-anim text-[17px] leading-[1.9] text-black/70 max-w-[520px]"> Our vision is to become a trusted global technology partner, enabling companies to innovate and scale through modern software. </p> </div> <div> <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]"> Mission </span> <h3 className="about-anim text-[clamp(2rem,4vw,3rem)] font-semibold mt-6 mb-6"> Deliver reliable digital solutions </h3> <p className="about-anim text-[17px] leading-[1.9] text-black/70 max-w-[520px]"> We aim to build secure, scalable, and user-centric applications that solve real business challenges. </p> </div> </div> </section>

{/* ================= STUDIO IMAGE ================= */}
<section className="bg-white py-[10vh] sm:py-[12vh]">

  <div className="group relative w-full h-[55vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden">
    <Image
      src="/images/about/studio.png"
      alt="Studio"
      fill
      className="object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-[#071A1F]/10"/>
  </div>

  <div className="px-6 sm:px-10 lg:px-[8vw] pt-[10vh] max-w-[1100px]">
    <span className="about-anim uppercase tracking-[0.35em] text-sm text-[#1F6677]">
      Company
    </span>

    <h3 className="about-anim text-[clamp(2rem,4vw,3.2rem)] font-semibold mt-4 mb-6">
      About Qiro Tech
    </h3>

    <div className="about-anim w-[60px] h-[2px] bg-[#1F6677]/40 mb-8"/>

    <div className="space-y-6 text-[16px] sm:text-[18px] leading-[1.9] text-black/70">
      <p className="about-anim">
        Qiro Tech brings together engineers, designers, and strategists
        focused on building impactful software.
      </p>

      <p className="about-anim">
        We specialize in Web Development, Mobile Apps,
        AI-ML systems, and Cloud Infrastructure.
      </p>

      <p className="about-anim text-black/60">
        Our goal is to help businesses thrive in the digital era.
      </p>
    </div>
  </div>

</section>

{/* ================= CULTURE ================= */}
<section className="bg-white px-6 sm:px-10 lg:px-[8vw] py-[14vh] sm:py-[18vh]">

  <div className="grid lg:grid-cols-2 gap-[8vh] lg:gap-[8vw] items-center">

    <div className="about-anim group relative w-full h-[50vh] sm:h-[65vh] lg:h-[75vh] rounded-3xl overflow-hidden shadow-xl">
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

      <h3 className="about-anim text-[clamp(2rem,3vw,2.6rem)] font-semibold mt-4 mb-6">
        Our Work Culture
      </h3>

      <div className="about-anim w-[60px] h-[2px] bg-[#1F6677]/40 mb-8"/>

      <div className="space-y-6 text-[16px] sm:text-[18px] leading-[1.9] text-black/70">
        <p className="about-anim">We believe in collaboration, transparency, and innovation.</p>
        <p className="about-anim">Our teams work closely with clients to ensure success.</p>
        <p className="about-anim text-black/60">Continuous learning and improvement define our mindset.</p>
      </div>
    </div>

  </div>
</section>

{/* ================= PROCESS ================= */}
<section className="bg-white py-[12vh]">

  <div className="group relative w-full h-[50vh] sm:h-[65vh] lg:h-[85vh] overflow-hidden">
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
<section className="px-6 sm:px-10 lg:px-[8vw] py-[14vh] sm:py-[18vh] text-center">

  <h2 className="about-anim text-[clamp(2rem,6vw,5rem)] font-semibold">
    We don’t just build software.<br/>We build growth.
  </h2>

  <p className="about-anim mt-6 text-[#1F6677]">
    Qiro Tech — Smart Software for Modern Businesses.
  </p>

</section>

</main>
  );
}
