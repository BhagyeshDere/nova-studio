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
    <main
      ref={pageRef}
      className="bg-[#f8f8f6] text-black overflow-x-hidden text-[15px] sm:text-[16px]"
    >

{/* ================= HERO ================= */}
<section className="
  relative
  min-h-[70vh] sm:min-h-[80vh] lg:h-[90vh]
  flex items-center justify-center text-center
  bg-[#2f3437]
">

  <div className="absolute inset-0 bg-gradient-to-b from-[#3a3f42] to-[#2f3437]" />

  <div className="relative z-10 px-5 sm:px-10 lg:px-[8vw] text-white">

    <p className="reveal uppercase tracking-[0.35em] text-xs sm:text-sm text-white/60 mb-6">
      CAREERS
    </p>

    <h1 className="reveal text-[clamp(2.4rem,9vw,6rem)] font-semibold leading-[1.05]">
      Build the future<br/>with us.
    </h1>

    <p className="reveal mt-6 max-w-[620px] mx-auto text-white/80 text-[16px] sm:text-lg leading-[1.8]">
      Join a team that values clarity, craft, and meaningful design.
      We collaborate deeply and build work that matters.
    </p>

  </div>
</section>

{/* ================= CULTURE ================= */}
<section className="
  px-5 sm:px-10 lg:px-[8vw]
  py-[14vh] sm:py-[16vh] lg:py-[18vh]
  grid grid-cols-1 lg:grid-cols-2
  gap-12 lg:gap-[8vw]
  items-center bg-white
">

  <div className="reveal relative h-[55vh] sm:h-[65vh] lg:h-[70vh] rounded-3xl overflow-hidden">
    <Image
      src="/images/careers/culture.png"
      alt="Studio culture"
      fill
      className="object-cover transition duration-700 hover:scale-105"
    />
  </div>

  <div className="max-w-[680px]">
    <span className="reveal uppercase tracking-[0.3em] text-sm text-black/40">
      Our Studio
    </span>

    <h2 className="reveal text-[clamp(2rem,5vw,3.4rem)] font-semibold mt-4 mb-6">
      A studio built on curiosity.
    </h2>

    <div className="reveal w-16 h-[2px] bg-black/20 mb-8"/>

    <p className="reveal text-black/70 leading-[1.8] mb-6">
      Meaningful work comes from deep thinking and collaboration.
      Our studio is a shared creative space.
    </p>

    <p className="reveal text-black/70 leading-[1.8] mb-6">
      Designers and developers operate as one system,
      connecting creativity with execution.
    </p>

    <p className="reveal text-black/60 leading-[1.8]">
      We value intention over speed.
      Thoughtful design that evolves and lasts.
    </p>
  </div>

</section>

{/* ================= OPEN ROLES ================= */}
<section className="
  px-5 sm:px-10 lg:px-[8vw]
  py-[16vh] sm:py-[18vh] lg:py-[22vh]
  bg-white
">

  <div className="mb-[10vh]">
    <p className="reveal uppercase tracking-[0.35em] text-sm text-black/40 mb-4">
      Open Roles
    </p>

    <h2 className="reveal text-[clamp(2.4rem,7vw,5rem)] font-semibold">
      Join our team
    </h2>

    <p className="reveal mt-6 max-w-[520px] text-black/60 leading-[1.8]">
      We’re looking for thoughtful people who care about craft.
    </p>
  </div>

  <div className="max-w-[1100px] mx-auto">

    {[
      { role:"UI/UX Designer", type:"Full-time", desc:"Design digital experiences."},
      { role:"Frontend Developer", type:"Full-time", desc:"Build modern interfaces."},
      { role:"Brand Designer", type:"Contract", desc:"Craft brand identities."},
      { role:"Motion Designer", type:"Full-time", desc:"Create cinematic motion."},
    ].map((job,i)=>(
      <div key={i} className="reveal group py-8 border-t border-black/15">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <h3 className="text-[clamp(1.8rem,5vw,2.6rem)] font-semibold">
              {job.role}
            </h3>

            <p className="mt-3 text-black/60 max-w-[520px] leading-[1.8] md:opacity-0 md:group-hover:opacity-100 transition">
              {job.desc}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="uppercase text-xs tracking-[0.3em] text-black/40">
              {job.type}
            </span>

            <span className="text-xl md:group-hover:translate-x-2 transition">
              →
            </span>
          </div>

        </div>

      </div>
    ))}

    <div className="border-t border-black/15 mt-4"/>
  </div>
</section>

{/* ================= TEAM IMAGE ================= */}
<section className="relative w-full py-[12vh] bg-white">
  <div className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[100vh] overflow-hidden">
    <Image
      src="/images/careers/team.png"
      alt="Team"
      fill
      className="object-cover transition duration-[1400ms] hover:scale-105"
    />
  </div>
</section>

{/* ================= CTA ================= */}
<section className="
  bg-white
  px-5 sm:px-10 lg:px-[8vw]
  py-[16vh] sm:py-[18vh] lg:py-[22vh]
">

  <div className="max-w-[900px] mx-auto text-center">

    <p className="reveal uppercase tracking-[0.35em] text-sm text-black/40 mb-6">
      Careers
    </p>

    <h2 className="reveal text-[clamp(2.4rem,7vw,5rem)] font-semibold mb-8">
      Don’t see your role?
    </h2>

    <p className="reveal text-black/60 text-[16px] sm:text-[18px] leading-[1.8] max-w-[520px] mx-auto mb-12">
      We’re always open to meeting thoughtful people.
    </p>

    <a
      href="mailto:careers@novastudio.com"
      className="
        reveal inline-flex items-center gap-3
        px-10 py-4
        border border-black
        rounded-full
        text-[15px]
        transition
        hover:bg-black hover:text-white
      "
    >
      careers@novastudio.com
      <span>→</span>
    </a>

  </div>
</section>

    </main>
  );
}
