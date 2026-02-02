"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function CareersPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current.querySelectorAll(".reveal"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <main ref={pageRef} className="bg-[#f8f8f6] text-black overflow-x-hidden">

   {/* ================= HERO ================= */}
<section className="relative h-[90vh] flex items-center justify-center text-center bg-[#2f3437]">

  {/* subtle gradient for depth (dark) */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#3a3f42] to-[#2f3437]" />

  <div className="relative z-10 px-[8vw] text-white">

    <p className="reveal uppercase tracking-[0.4em] text-sm text-white/60 mb-6">
      CAREERS
    </p>

    <h1 className="reveal text-[clamp(3rem,7vw,6rem)] font-semibold leading-[1] text-white">
      Build the future
      <br /> with us.
    </h1>

    <p className="reveal mt-6 max-w-[620px] mx-auto text-white/80 text-lg leading-[1.8]">
      Join a team that values clarity, craft, and meaningful design.
      We collaborate deeply, think long-term, and build work that matters.
    </p>

  </div>
</section>



      {/* ================= CULTURE ================= */}
      <section className="px-[8vw] py-[18vh] grid lg:grid-cols-2 gap-[8vw] items-center bg-white">

        {/* IMAGE */}
        <div className="reveal relative h-[70vh] rounded-3xl overflow-hidden">
          <Image
            src="/images/careers/culture.png"
            alt="Studio culture"
            fill
            className="object-cover hover:scale-105 transition duration-700"
          />
        </div>
{/* TEXT */}
<div className="max-w-[680px]">

  {/* small label */}
  <span className="reveal uppercase tracking-[0.3em] text-sm text-black/40">
    Our Studio
  </span>

  {/* title */}
  <h2 className="reveal text-[clamp(2.4rem,4vw,3.4rem)] font-semibold mt-4 mb-6 leading-tight">
    A studio built on curiosity.
  </h2>

  {/* divider line */}
  <div className="reveal w-16 h-[2px] bg-black/20 mb-8"></div>

  {/* paragraphs */}
  <p className="reveal text-black/70 leading-[1.9] mb-6">
    We believe meaningful work comes from deep thinking,
    open dialogue, and true collaboration. Our studio
    is designed as a shared creative space where ideas
    are explored, challenged, and refined together.
  </p>

  <p className="reveal text-black/70 leading-[1.9] mb-6">
    Designers, developers, and strategists operate as
    one system — not separate roles. This allows us to
    connect creativity with logic, and vision with
    execution. Every project benefits from multiple
    perspectives working in harmony.
  </p>

  <p className="reveal text-black/60 leading-[1.9]">
    We value clarity over chaos and intention over speed.
    No noise. No rush. Just thoughtful design that
    evolves, adapts, and lasts long after trends fade.
  </p>

</div>

      </section>


{/* ================= OPEN ROLES — EDITORIAL STYLE ================= */}
<section className="px-[8vw] py-[22vh] bg-white">

  {/* Header */}
  <div className="mb-[14vh]">

    <p className="reveal uppercase tracking-[0.4em] text-sm text-black/40 mb-4">
      Open Roles
    </p>

    <h2 className="reveal text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1]">
      Join our team
    </h2>

    <p className="reveal mt-6 max-w-[520px] text-black/60 leading-[1.9]">
      We’re looking for thoughtful people who care about craft,
      clarity, and meaningful design.
    </p>

  </div>

  {/* Roles List */}
  <div className="max-w-[1100px] mx-auto">

    {[
      {
        role: "UI/UX Designer",
        type: "Full-time",
        desc: "Design thoughtful digital experiences and user journeys."
      },
      {
        role: "Frontend Developer",
        type: "Full-time",
        desc: "Build elegant, fast, and modern interfaces."
      },
      {
        role: "Brand Designer",
        type: "Contract",
        desc: "Craft visual identities and brand systems."
      },
      {
        role: "Motion Designer",
        type: "Full-time",
        desc: "Create cinematic motion and visual storytelling."
      },
    ].map((job, i) => (

      <div
        key={i}
        className="
          reveal
          group
          py-10
          border-t border-black/15
          cursor-pointer
        "
      >

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT */}
          <div>

            <h3 className="
              text-[clamp(2rem,3vw,2.8rem)]
              font-semibold
              leading-tight
              group-hover:tracking-wide
              transition-all
              duration-500
            ">
              {job.role}
            </h3>

            <p className="
              mt-3
              text-black/60
              max-w-[520px]
              leading-[1.8]
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            ">
              {job.desc}
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-8">

            <span className="
              uppercase
              text-xs
              tracking-[0.3em]
              text-black/40
            ">
              {job.type}
            </span>

            <span className="
              text-xl
              group-hover:translate-x-2
              transition-transform
              duration-300
            ">
              →
            </span>

          </div>

        </div>

      </div>

    ))}

    {/* Bottom line */}
    <div className="border-t border-black/15 mt-4"></div>

  </div>

</section>



  {/* ================= TEAM IMAGE STRIP ================= */}
<section className="relative w-full py-[14vh] bg-white">

  <div className="relative w-full h-[85vh] md:h-[105vh] lg:h-[120vh] overflow-hidden">

    <Image
      src="/images/careers/team.png"
      alt="Team"
      fill
      className="
        object-cover
        transition-transform
        duration-[1600ms]
        ease-out
        hover:scale-105
      "
    />

  </div>

</section>



{/* ================= CTA — EDITORIAL STYLE ================= */}
<section className="bg-white px-[8vw] py-[22vh]">

  <div className="max-w-[900px] mx-auto text-center">

    <p className="reveal uppercase tracking-[0.35em] text-sm text-black/40 mb-6">
      Careers
    </p>

    <h2 className="
      reveal
      text-[clamp(2.8rem,6vw,5rem)]
      font-semibold
      leading-[1.05]
      mb-8
    ">
      Don’t see your role?
    </h2>

    <p className="
      reveal
      text-black/60
      text-[18px]
      leading-[1.9]
      max-w-[520px]
      mx-auto
      mb-12
    ">
      We’re always open to meeting thoughtful designers,
      developers, and strategists who care about meaningful work.
      If you believe you’d be a good fit, reach out.
    </p>

    {/* email button */}
    <a
      href="mailto:careers@novastudio.com"
      className="
        reveal
        inline-flex
        items-center
        gap-3
        px-12
        py-4
        border
        border-black
        rounded-full
        text-black
        text-[15px]
        tracking-wide
        transition-all
        duration-300
        hover:bg-black
        hover:text-white
        hover:scale-105
      "
    >
      careers@novastudio.com
      <span className="text-lg">→</span>
    </a>

  </div>

</section>


    </main>
  );
}
