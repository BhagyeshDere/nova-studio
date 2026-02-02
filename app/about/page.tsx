"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import BlurText from "@/reactbits/BlurText";
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
    <main ref={pageRef} className="w-full bg-white text-black overflow-x-hidden">

{/* ================= HERO ================= */}
<section className="px-[8vw] pt-[20vh] pb-[18vh] bg-[#2f3437] text-white">
  <div className="max-w-[1400px]">
    <h1 className="about-anim text-[clamp(3rem,8vw,8rem)] leading-[1] font-semibold">
      Designing meaning,<br/>not just visuals.
    </h1>

    <p className="about-anim mt-8 max-w-[720px] text-[18px] leading-[1.9] text-white/80">
      NOVA Studio is a digital design studio crafting immersive identities,
      scalable systems, and cinematic digital experiences for modern brands.
      We merge strategy, storytelling, and technology to create work that lasts.
    </p>
  </div>
</section>

{/* ================= INTRO — EDITORIAL ================= */}
<section className="w-full bg-white px-[8vw] py-[20vh]">

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-[10vw]">

    {/* LEFT — BIG STATEMENT */}
    <div>

      <h2 className="about-anim text-[clamp(2.8rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
        We design how brands <br />
        live and evolve.
      </h2>

      <div className="about-anim mt-[5vh] w-[60px] h-[2px] bg-black/20" />

    </div>


    {/* RIGHT — DESCRIPTION */}
    <div className="space-y-8 max-w-[720px] text-[18px] leading-[1.9] text-black/70">

      <p className="about-anim">
        We believe design is infrastructure — not decoration.
        Every identity, system, and interface we build is crafted
        to bring clarity, longevity, and emotional connection.
        Design should not just look good; it should guide,
        communicate, and perform.
      </p>

      <p className="about-anim">
        At NOVA Studio, we approach every project as a living system.
        We study how brands behave, how people interact,
        and how digital environments shape perception.
        This allows us to design solutions that feel natural,
        intuitive, and deeply aligned with business goals.
      </p>

      <p className="about-anim text-black/60">
        Our work sits at the intersection of strategy,
        design, and technology — where storytelling meets
        functionality. The result is not just visuals,
        but meaningful experiences that grow with your brand
        and remain relevant over time.
      </p>

    </div>

  </div>

</section>


{/* ================= STUDIO IMAGE + EDITORIAL ================= */}
<section className="w-full bg-white py-[12vh]">

  {/* FULL WIDTH IMAGE */}
  <div className="relative w-full h-[90vh] overflow-hidden">
    <Image
      src="/images/about/studio.png"
      alt="Studio"
      fill
      className="object-cover"
    />

    {/* Soft cinematic overlay */}
    <div className="absolute inset-0 bg-black/10" />
  </div>


  {/* EDITORIAL CONTENT */}
  <div className="px-[8vw] pt-[12vh] max-w-[1100px]">

    {/* MICRO LABEL */}
    <span className="about-anim uppercase tracking-[0.35em] text-sm text-black/50">
      Studio
    </span>

    {/* TITLE */}
    <h3 className="about-anim text-[clamp(2.4rem,4vw,3.4rem)] font-semibold mt-4 mb-6 leading-tight">
      Our Studio
    </h3>

    {/* DIVIDER */}
    <div className="about-anim w-[60px] h-[2px] bg-black/20 mb-10" />


    {/* TEXT CONTENT */}
    <div className="space-y-8 text-[18px] leading-[2] text-black/70">

      <p className="about-anim">
        Our studio is built for deep thinking and intentional creation.
        We remove noise and focus only on ideas that truly matter.
        Every project begins with understanding — people,
        culture, context, and long-term brand direction.
      </p>

      <p className="about-anim">
        We treat design as a discipline, not decoration.
        Research, strategy, and experimentation shape our process.
        This allows us to create work that is not only visually refined,
        but also functional and future-ready.
      </p>

      <p className="about-anim text-black/60">
        Our space encourages curiosity and collaboration.
        Designers, developers, and strategists work side-by-side
        to refine ideas until they become meaningful digital experiences.
        It’s not just where we work —
        it’s where brands are shaped, challenged, and elevated.
      </p>

    </div>

  </div>

</section>
{/* ================= CULTURE — EDITORIAL SPLIT ================= */}
<section className="w-full py-[18vh] bg-white">

  <div className="px-[8vw] grid lg:grid-cols-2 gap-[8vw] items-center">

    {/* IMAGE SIDE (LEFT) */}
    <div className="about-anim relative w-full h-[75vh] overflow-hidden rounded-3xl shadow-xl order-1">

      <Image
        src="/images/about/culture.png"
        alt="Culture"
        fill
        className="
          object-cover
          transition-all
          duration-700
          hover:scale-[1.05]
        "
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* label */}
      <div className="absolute bottom-6 left-6 bg-white/85 backdrop-blur px-5 py-2 rounded-full text-sm font-medium">
        Team & Culture
      </div>

    </div>


    {/* TEXT SIDE (RIGHT) */}
    <div className="max-w-[620px] ml-auto order-2">

      {/* MICRO LABEL */}
      <span className="about-anim uppercase tracking-[0.35em] text-sm text-black/50">
        Culture
      </span>

      <h3 className="about-anim text-[clamp(2.2rem,3vw,2.8rem)] font-semibold mt-4 mb-6 leading-tight">
        Our Culture
      </h3>

      <div className="about-anim w-[60px] h-[2px] bg-black/20 mb-10" />


      <div className="space-y-7 text-[18px] leading-[2] text-black/70">

        <p className="about-anim">
          Collaboration, curiosity, and experimentation shape our culture.
          We encourage questions, exploration, and bold thinking.
          Innovation begins when assumptions are challenged.
        </p>

        <p className="about-anim">
          Our team operates as one connected system —
          designers, strategists, and developers working side-by-side.
          Every voice matters, and every idea is refined together.
        </p>

        <p className="about-anim text-black/60">
          We value depth over speed and clarity over noise.
          This mindset allows us to create thoughtful,
          human-centered experiences that feel intentional
          and stand the test of time.
        </p>

      </div>

    </div>

  </div>

</section>


{/* ================= PROCESS — EDITORIAL IMAGE + TEXT ================= */}
<section className="w-full py-[14vh] bg-white">

  {/* FULL WIDTH IMAGE */}
  <div className="relative w-full h-[85vh] overflow-hidden">

    <Image
      src="/images/about/cinematic-1.png"
      alt="Process"
      fill
      className="
        object-cover
        transition-transform
        duration-[1200ms]
        hover:scale-[1.04]
      "
    />

    {/* soft overlay for depth */}
    <div className="absolute inset-0 bg-black/10" />

  </div>


  {/* EDITORIAL TEXT BLOCK */}
  <div className="px-[8vw] pt-[12vh]">

    <div className="max-w-[1100px] grid lg:grid-cols-2 gap-[8vw]">

      {/* LEFT TITLE COLUMN */}
      <div>

        <span className="about-anim uppercase tracking-[0.35em] text-sm text-black/50">
          Process
        </span>

        <h3 className="
          about-anim
          text-[clamp(2.4rem,3.2vw,3.2rem)]
          font-semibold
          mt-4
          mb-6
          leading-tight
        ">
          Our Process
        </h3>

        {/* editorial divider */}
        <div className="about-anim w-[60px] h-[2px] bg-black/20" />

      </div>


      {/* RIGHT TEXT COLUMN */}
      <div className="space-y-7 text-[18px] leading-[2] text-black/70">

        <p className="about-anim">
          Strategy guides everything we do.
          We begin by understanding the brand,
          its audience, and the context it lives in.
          Insight always comes before execution.
        </p>

        <p className="about-anim">
          We research deeply, prototype quickly,
          and refine with intention.
          Each phase of our process is designed
          to uncover clarity and remove guesswork.
        </p>

        <p className="about-anim">
          Collaboration is central to how we work.
          Clients are part of the journey,
          not just observers of the outcome.
          This ensures alignment and stronger results.
        </p>

        <p className="about-anim text-black/60">
          Every decision serves a long-term vision —
          not short-term trends.
          We design systems that grow with your brand,
          adapt to change, and remain meaningful over time.
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= PHILOSOPHY ================= */}
<section className="px-[8vw] py-[12vh] text-center">

  {/* LABEL */}
  <span className="about-anim uppercase tracking-[0.35em] text-sm text-black/40">
    Philosophy
  </span>

  {/* TITLE */}
  <h2 className="
    about-anim
    mt-6
    text-[clamp(2.4rem,5vw,4.5rem)]
    font-semibold
    leading-[1.15]
    tracking-tight
  ">
    Design.System.Identity.Experience
  </h2>

  {/* DIVIDER */}
  <div className="about-anim w-[70px] h-[2px] bg-black/20 mx-auto my-8" />

  {/* DESCRIPTION */}
  <p className="
    about-anim
    max-w-[720px]
    mx-auto
    text-black/60
    text-[17px]
    leading-[1.9]
  ">
    We don’t design isolated visuals — we build connected ecosystems
    that influence perception, guide behavior, and create long-term
    brand value. Every system we craft is built to evolve, adapt,
    and remain meaningful over time.
  </p>

</section>

{/* ================= VISION & MISSION — EDITORIAL ================= */}
<section className="relative w-full bg-white py-[22vh] px-[8vw] overflow-hidden">

  <div className="max-w-[1400px] mx-auto">

    {/* SECTION LABEL */}
    <div className="about-anim mb-[12vh] text-center">
      <span className="uppercase tracking-[0.35em] text-sm text-black/50">
        Direction
      </span>

      <h2 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold">
        Vision & Mission
      </h2>
    </div>


    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-[12vw]">

      {/* ===== VISION ===== */}
      <div className="about-anim max-w-[620px]">

        <span className="uppercase tracking-[0.3em] text-sm text-black/50">
          Vision
        </span>

        <h3 className="text-[clamp(2rem,3vw,2.6rem)] font-semibold mt-5 mb-6 leading-tight">
          To shape the future of brands through meaning.
        </h3>

        {/* divider */}
        <div className="w-[60px] h-[2px] bg-black/20 mb-8" />

        <p className="text-black/70 leading-[2] mb-6">
          We believe brands are living systems — not static visuals.
          They should evolve alongside culture, technology,
          and human behavior.
        </p>

        <p className="text-black/70 leading-[2] mb-6">
          Our vision is to help brands remain relevant,
          adaptive, and emotionally connected to the people
          they serve.
        </p>

        <p className="text-black/60 leading-[2]">
          By designing with intention and foresight,
          we create identities that grow with time
          instead of fading with trends.
        </p>

      </div>


      {/* ===== MISSION ===== */}
      <div className="about-anim max-w-[620px] md:ml-auto">

        <span className="uppercase tracking-[0.3em] text-sm text-black/50">
          Mission
        </span>

        <h3 className="text-[clamp(2rem,3vw,2.6rem)] font-semibold mt-5 mb-6 leading-tight">
          To build brands that endure.
        </h3>

        {/* divider */}
        <div className="w-[60px] h-[2px] bg-black/20 mb-8" />

        <p className="text-black/70 leading-[2] mb-6">
          Our mission is to craft intelligent identities
          and meaningful digital experiences that scale
          across platforms, industries, and generations.
        </p>

        <p className="text-black/70 leading-[2] mb-6">
          We combine strategy, design, and technology
          to build systems that perform in the real world —
          not just on screens.
        </p>

        <p className="text-black/60 leading-[2]">
          Every project is approached with care,
          precision, and long-term thinking.
          Because strong brands are built for the future,
          not just the present.
        </p>

      </div>

    </div>

  </div>

</section>


{/* ================= FINAL ================= */}
<section className="px-[8vw] py-[18vh] text-center">
  <h2 className="about-anim text-[clamp(2.5rem,6vw,5rem)] font-semibold">
    We don’t design projects.<br/>We design futures.
  </h2>

  <p className="about-anim mt-6 text-black/60">
    NOVA Studio — Designing identity, experience & presence.
  </p>
</section>

    </main>
  );
}
