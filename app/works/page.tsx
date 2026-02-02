"use client";

/* =========================================
   WORKS PAGE — NOVA STUDIO
   Cinematic Editorial Portfolio Experience
========================================= */

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";
import BlurText from "@/reactbits/BlurText";

export default function WorksPage() {
  const pageRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (!pageRef.current) return;

  /* ===============================
     PAGE LOAD (INITIAL REVEAL)
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
     SECTION SCROLL REVEAL
  =============================== */
  gsap.utils.toArray<HTMLElement>(".work-section").forEach((section) => {
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
     TEXT ANIMATION
  =============================== */
  gsap.utils.toArray<HTMLElement>(".work-anim").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      }
    );
  });

  /* ===============================
     IMAGE ANIMATION
  =============================== */
  gsap.utils.toArray<HTMLElement>(".work-image").forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 0.96, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
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
    <main
      ref={pageRef}
      className="works-page relative w-full overflow-x-hidden bg-[#2f3437]"
    >

      {/* ===============================
         HERO
      =============================== */}
      <section className="relative w-full min-h-screen px-[8vw] pt-[18vh] pb-[14vh] flex items-center">
        <div className="max-w-[1600px]">
          <h1 className="work-anim text-white text-[clamp(3.5rem,8vw,8rem)] leading-[1] font-semibold tracking-tight">
            We embark on
            <br /> creative journeys.
          </h1>
        </div>
      </section>

{/* ===============================
PROJECT 01 — GEN
=============================== */}
<section className="relative w-full py-[22vh] overflow-hidden">
  <div className="absolute right-[4vw] top-[6vh] text-[clamp(10rem,22vw,26rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-[1]">
    01
  </div>

  <div className="relative px-[8vw] max-w-[1900px] mx-auto z-[2]">
    <div className="relative w-full flex items-start justify-between mb-[8vh]">
      <h3 className="work-anim text-white text-[48px] font-semibold tracking-tight">
        GEN
      </h3>
      <div className="w-[40%]" />
    </div>
<div className="relative w-full flex">
  <div className="w-[60%] relative">

    {/* IMAGE WRAPPER WITH HOVER */}
    <div
      className="
        relative
        w-full
        h-[78vh]
        overflow-hidden
        rounded-xl
        transition-transform
        duration-700
        ease-out
        hover:scale-[1.03]
        hover:-translate-y-2
      "
    >
      <Image
        src="/images/works/gen.png"
        alt="GEN"
        fill
        priority
        className="object-cover"
      />
    </div>

  



        <div className="mt-[6vh] max-w-[720px]">
          <h2 className="work-anim text-white text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight">
            Building a Cohesive Identity <br />
            for Global Engineers
          </h2>
        </div>
      </div>

      <div className="w-[40%] relative">
        <div className="absolute right-[30%] top-[50%] w-[14px] h-[14px] rounded-full bg-white opacity-90" />
      </div>
    </div>
  </div>
</section>
{/* ===============================
PROJECT 02 — BERRICS
=============================== */}
<section className="relative w-full py-[22vh] overflow-hidden">

  {/* BIG NUMBER */}
  <div className="absolute left-[4vw] top-[8vh] text-[clamp(10rem,22vw,26rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-[1]">
    02
  </div>

  <div className="relative px-[8vw] max-w-[1900px] mx-auto z-[2]">

    {/* TITLE ROW */}
    <div className="relative w-full flex items-start justify-between mb-[8vh]">
      <div className="w-[40%]" />
      <h3 className="work-anim text-white text-[48px] font-semibold tracking-tight">
        Berrics
      </h3>
    </div>

    {/* IMAGE ROW */}
    <div className="relative w-full flex">

      {/* LEFT — DOT */}
      <div className="w-[40%] relative">
        <div className="absolute left-[25%] top-[50%] w-[14px] h-[14px] rounded-full bg-white opacity-90" />
      </div>

      {/* RIGHT — IMAGE WITH HOVER */}
      <div className="w-[60%] relative">
        <div
          className="
            work-image
            relative
            w-full
            h-[78vh]
            overflow-hidden
            rounded-xl
            transition-all
            duration-700
            ease-out
            hover:scale-[1.03]
            hover:-translate-y-2
          "
        >
          <Image
            src="/images/works/berrics.png"
            alt="Berrics"
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              hover:scale-105
            "
          />
        </div>
      </div>

    </div>

    {/* DESCRIPTION */}
    <div className="relative w-full mt-[7vh] flex justify-end">
      <div className="max-w-[720px] text-right">
        <h2 className="work-anim text-white text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight">
          A Revitalized Brand for a Connected <br />
          Skateboarding Community
        </h2>
      </div>
    </div>

  </div>
</section>


{/* ===============================
PROJECT 03 — CARIUMA
=============================== */}
<section className="relative w-full py-[22vh] overflow-hidden bg-[#2f3437]">
  <div className="absolute right-[3vw] top-[6vh] text-[clamp(10rem,22vw,26rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-[1]">
    03
  </div>

  <div className="relative px-[8vw] max-w-[1900px] mx-auto z-[2]">
    <div className="relative w-full flex items-start justify-between mb-[8vh]">
      <h3 className="work-anim text-white text-[48px] font-semibold tracking-tight">
        Cariuma
      </h3>
      <div className="w-[30%]" />
    </div>
<div
  className="
    work-image
    relative
    w-full
    overflow-hidden
    rounded-xl
    bg-black
    transition-all
    duration-700
    ease-out
    hover:scale-[1.03]
    hover:-translate-y-2
  "
>
  <div className="relative w-full aspect-[16/9]">
    <Image
      src="/images/works/cariuma.png"
      alt="Cariuma"
      fill
      priority
      className="
        object-contain
        transition-transform
        duration-700
        ease-out
        hover:scale-105
      "
    />
  </div>
</div>


    <div className="mt-[6vh] max-w-[900px]">
      <h2 className="work-anim text-white text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight">
        A Blend of Sustainability, Urban Style, <br />
        and Brazilian Identity
      </h2>
    </div>
  </div>
</section>

{/* ===============================
PROJECT 04 — ZUSO
=============================== */}
<section className="relative w-full py-[22vh] overflow-hidden">
  <div className="px-[8vw] max-w-[1900px] mx-auto relative">
    <div className="relative w-full flex items-start justify-between mb-[6vh] z-40">
      <h3 className="work-anim text-white text-[clamp(2.5rem,5vw,3.8rem)] font-semibold">
        Zuso
      </h3>
    </div>

    <div className="absolute right-[6vw] top-[10vh] text-[clamp(16rem,28vw,36rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-10">
      04
    </div>
<div className="relative w-full flex z-20">
  <div className="relative w-[58%]">

    <div
      className="
        work-image
        relative
        w-full
        bg-[#f7f7f7]
        rounded-xl
        overflow-hidden
        z-30
        transition-all
        duration-700
        ease-out
        hover:scale-[1.03]
        hover:-translate-y-2
      "
    >
      <div className="relative w-full aspect-[16/10]">
        <Image
          src="/images/works/zuso.png"
          alt="Zuso"
          fill
          priority
          className="
            object-contain
            transition-transform
            duration-700
            ease-out
            hover:scale-105
          "
        />
      </div>
    </div>

  



        <div className="mt-[6vh] max-w-[650px] relative z-40">
          <h2 className="work-anim text-white text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight">
            Reinventing <br />
            Culinary Experience
          </h2>
        </div>
      </div>

      <div className="w-[42%] relative z-20" />
    </div>
  </div>
</section>

{/* ===============================
PROJECT 05 — SUPERELA
=============================== */}
<section className="relative w-full py-[22vh] overflow-hidden bg-[#2f3437]">
  <div className="px-[8vw] max-w-[1900px] mx-auto relative">
    <div className="absolute left-[4vw] top-[8vh] w-[14px] h-[14px] rounded-full bg-white z-30" />

    <div className="absolute left-[10vw] top-[6vh] text-[clamp(18rem,30vw,38rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-10">
      05
    </div>

    <div className="relative w-full flex justify-end z-40 mb-[8vh]">
      <h3 className="work-anim text-white text-[clamp(2.8rem,5vw,4.2rem)] font-semibold">
        Superela
      </h3>
    </div>

    <div className="relative w-full flex z-20">
      <div className="w-[45%]" />

     <div className="w-[55%] relative">
  <div
    className="
      work-image
      relative
      w-full
      rounded-xl
      overflow-hidden
      z-30
      shadow-2xl
      transition-all
      duration-700
      ease-out
      hover:scale-[1.03]
      hover:-translate-y-2
    "
  >
    <div className="relative w-full aspect-[16/9]">
      <Image
        src="/images/works/superela.png"
        alt="Superela"
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          hover:scale-105
        "
      />
    </div>
  </div>



        <div className="mt-[6vh] max-w-[700px] ml-auto text-right relative z-40">
          <h2 className="work-anim text-white text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight">
            Where busy women find their way <br />
            back to wellness and self-love
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===============================
PROJECT 06 — WAYPOINT GROUP
=============================== */}
<section className="relative w-full py-[22vh] overflow-hidden bg-[#2f3437]">
  <div className="px-[8vw] max-w-[1900px] mx-auto relative">

    {/* BIG NUMBER */}
    <div className="absolute left-[6vw] top-[4vh] text-[clamp(18rem,30vw,38rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-10">
      06
    </div>

    {/* TITLE */}
    <div className="relative w-full flex justify-end z-40 mb-[8vh]">
      <h3 className="work-anim text-white text-[clamp(2.8rem,5vw,4.2rem)] font-semibold">
        Waypoint Group
      </h3>
    </div>

    {/* IMAGE ROW */}
    <div className="relative w-full flex z-20 items-start">
      <div className="w-[42%]" />

      <div className="w-[58%] relative">
        <div
          className="
            work-image
            relative
            w-full
            rounded-xl
            overflow-hidden
            z-30
            shadow-2xl
            bg-[#eaeaea]
            transition-all
            duration-700
            ease-out
            hover:scale-[1.03]
            hover:-translate-y-2
          "
        >
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/images/works/waypoint.png"
              alt="Waypoint Group"
              fill
              priority
              className="
                object-contain
                transition-transform
                duration-700
                ease-out
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </div>

    {/* DESCRIPTION */}
    <div className="relative w-full mt-[8vh] flex justify-end z-40">
      <div className="max-w-[620px] text-right">
        <h2 className="work-anim text-white text-[clamp(2rem,3.8vw,3.2rem)] font-semibold leading-tight">
          Built to grow with <br />
          clarity and strength
        </h2>
      </div>
    </div>

  </div>
</section>


{/* ===============================
PROJECT 07 — FAPES
=============================== */}
<section className="relative w-full py-[22vh] overflow-hidden bg-[#2f3437]">
  <div className="px-[8vw] max-w-[1900px] mx-auto relative">

    <div className="absolute right-[6vw] top-[8vh] text-[clamp(18rem,30vw,40rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-10">
      07
    </div>

    <div className="relative w-full flex items-start justify-between mb-[6vh] z-40">
      <h3 className="work-anim text-white text-[clamp(2.8rem,5vw,4.2rem)] font-semibold">
        Fapes
      </h3>
      <div className="w-[30%]" />
    </div>
<div className="relative w-full flex z-20">
  <div className="relative w-[62%]">

    <div
      className="
        work-image
        relative
        w-full
        rounded-xl
        overflow-hidden
        bg-[#dff0ff]
        z-30
        transition-all
        duration-700
        ease-out
        hover:scale-[1.03]
        hover:-translate-y-2
      "
    >
      <div className="relative w-full aspect-[16/10]">
        <Image
          src="/images/works/fapes.png"
          alt="Fapes"
          fill
          priority
          className="
            object-contain
            transition-transform
            duration-700
            ease-out
            hover:scale-105
          "
        />
      </div>
    </div>

  



        <div className="mt-[6vh] max-w-[720px] relative z-40">
          <h2 className="work-anim text-white text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight">
            Take care of your <br />
            patients anywhere.
          </h2>
        </div>
      </div>

      <div className="w-[38%] relative">
        <div className="absolute right-[25%] top-[55%] w-[14px] h-[14px] rounded-full bg-white opacity-90" />
      </div>
    </div>
  </div>
</section>

{/* ===============================
PROJECT 08 — GO HQ
=============================== */}
<section className="relative w-full py-[22vh] overflow-hidden bg-[#2f3437]">
  <div className="px-[8vw] max-w-[1900px] mx-auto relative">

    {/* BIG NUMBER */}
    <div className="absolute left-[6vw] top-[4vh] text-[clamp(18rem,32vw,40rem)] font-semibold text-white opacity-[0.05] select-none pointer-events-none z-10">
      08
    </div>

    {/* TITLE */}
    <div className="relative w-full flex justify-end z-40 mb-[8vh]">
      <h3 className="work-anim text-white text-[clamp(2.8rem,5vw,4.4rem)] font-semibold">
        Go HQ
      </h3>
    </div>

    {/* IMAGE ROW */}
    <div className="relative w-full flex z-20">
      <div className="w-[42%]" />

      <div className="w-[58%] relative">
        <div
          className="
            work-image
            relative
            w-full
            rounded-xl
            overflow-hidden
            z-30
            shadow-2xl
            bg-white
            transition-all
            duration-700
            ease-out
            hover:scale-[1.03]
            hover:-translate-y-2
          "
        >
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/images/works/gohq.png"
              alt="Go HQ"
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </div>

    {/* DESCRIPTION */}
    <div className="relative w-full mt-[8vh] flex justify-end z-40">
      <div className="max-w-[720px] text-right">
        <h2 className="work-anim text-white text-[clamp(2rem,3.8vw,3.2rem)] font-semibold leading-tight">
          A strategic rebrand <br />
          for a leader on the move
        </h2>
      </div>
    </div>

  </div>
</section>

{/* ===============================
PROJECT 09 — SEXTANTE
================================ */}
<section className="relative w-full py-[24vh] overflow-hidden bg-[#2f3437]">

  {/* BIG NUMBER */}
  <div className="absolute right-[4vw] top-[6vh] text-[clamp(18rem,32vw,42rem)] font-semibold text-white opacity-[0.05] select-none pointer-events-none z-10">
    09
  </div>

  {/* TITLE */}
  <div className="px-[8vw] max-w-[1900px] mx-auto relative z-30">
    <h3 className="work-anim text-white/70 text-[clamp(3rem,6vw,5rem)] font-semibold tracking-tight mb-[10vh]">
      Sextante
    </h3>
  </div>

  {/* DEVICE MOCKUP */}
<div className="relative w-full flex justify-center z-20">
  <div
    className="
      relative 
      w-full 
      max-w-[1200px]        /* 👈 REDUCED WIDTH */
      bg-[#f3f1e8] 
      rounded-[40px] 
      px-[5vw] 
      py-[8vh] 
      shadow-2xl
    "
  >
    {/* Device Frame */}
    <div className="relative w-full bg-black rounded-[28px] p-[6px]">
      <div className="relative w-full bg-white rounded-[22px] overflow-hidden">
{/* SCREEN */}
<div
  className="
    work-image
    relative
    w-full
    aspect-[19/10]
    transition-transform
    duration-700
    ease-out
    hover:scale-[1.02]
  "
>
  <Image
    src="/images/works/sextante.png"
    alt="Sextante website mockup"
    fill
    priority
    className="
      object-cover
      transition-transform
      duration-700
      ease-out
      hover:scale-105
    "
  />
</div>


      </div>
    </div>
  </div>
</div>


  {/* TEXT BLOCK */}
  <div className="px-[8vw] max-w-[1900px] mx-auto relative z-30 mt-[14vh]">
    <h2 className="work-anim text-white/80 text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-tight max-w-[900px]">
      A universe of stories, ready to be <br />
      explored now
    </h2>
  </div>

</section>



{/* ===============================
PROJECT 10 — GRASSHOPPER
================================ */}

<div className="relative w-full bg-[#2f3437] overflow-visible">

  {/* BIG NUMBER */}
  <div
    className="
      absolute
      right-[6vw]
      top-[4vh]
      text-[clamp(18rem,30vw,40rem)]
      font-semibold
      text-[#8b8f93]/25
      select-none
      pointer-events-none
      z-10
    "
  >
    10
  </div>

  <section className="relative w-full py-[22vh]">

    {/* CONTENT GRID */}
    <div className="relative z-30 px-[8vw] max-w-[1900px] mx-auto grid grid-cols-12 gap-[4vw] items-start">

      {/* LEFT — TITLE + IMAGE */}
      <div className="col-span-12 lg:col-span-6 flex flex-col gap-[4vh]">

        {/* TITLE (ABOVE IMAGE) */}
        <h2 className="work-anim text-white text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-[1.05]">
          Grasshopper
        </h2>

        {/* IMAGE WRAPPER — FIXED SIZE */}
        <div className="relative w-[720px] max-w-full">
{/* Image */}
<div
  className="
    work-image
    relative
    w-full
    aspect-[16/10]
    overflow-hidden
    transition-all
    duration-700
    ease-out
    hover:scale-[1.03]
    hover:-translate-y-2
  "
>
  <Image
    src="/images/works/grasshopper.png"
    alt="Grasshopper climbing gym"
    fill
    priority
    className="
      object-cover
      transition-transform
      duration-700
      ease-out
      hover:scale-105
    "
  />
</div>

          {/* Floating Dot */}
          <span
            className="
              absolute
              -top-[10px]
              left-[45%]
              w-4
              h-4
              bg-white
              rounded-full
            "
          />
        </div>

      </div>

      {/* RIGHT — TEXT ONLY */}
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-end pt-[10vh]">
{/* Description — MATCHING PROJECT 09 STYLE */}
<h2
  className="
    work-anim
    text-white
    text-[clamp(3.2rem,5vw,4.8rem)]
    font-semibold
    leading-[1.05]
    max-w-[900px]
  "
>
  Where all climbing <br />
  athletes meet.
</h2>


      </div>

    </div>

  </section>
</div>


{/* ===============================
PROJECT 11 — OPPLIO
================================ */}

<div className="relative w-full bg-[#2f3437] overflow-visible">

  {/* BIG NUMBER */}
  <div
    className="
      absolute
      left-[6vw]
      top-[6vh]
      text-[clamp(18rem,30vw,40rem)]
      font-semibold
      text-[#8b8f93]/20
      select-none
      pointer-events-none
      z-10
    "
  >
    11
  </div>

  <section className="relative w-full py-[22vh]">

    {/* GRID */}
    <div className="relative z-30 px-[8vw] max-w-[1900px] mx-auto grid grid-cols-12">

      {/* LEFT — EMPTY SPACE */}
      <div className="hidden lg:block lg:col-span-6" />

      {/* RIGHT — CONTENT (FORCED RIGHT) */}
      <div className="col-span-12 lg:col-span-6 flex flex-col items-end text-right gap-[6vh]">

        {/* TITLE — TOP RIGHT */}
        <h2
          className="
            work-anim
            text-white
            text-[clamp(3.5rem,6vw,5.5rem)]
            font-semibold
            leading-[1.05]
          "
        >
          Opplio
        </h2>

       {/* IMAGE — RIGHT ALIGNED, BOXED */}
<div className="relative w-[760px] max-w-full self-end">
  <div
    className="
      work-image
      relative
      w-full
      aspect-[16/10]
      overflow-hidden
      transition-all
      duration-700
      ease-out
      hover:scale-[1.03]
      hover:-translate-y-2
    "
  >
    <Image
      src="/images/works/opplio.png"
      alt="Opplio illustration"
      fill
      priority
      className="
        object-cover
        transition-transform
        duration-700
        ease-out
        hover:scale-105
      "
    />
  </div>



          {/* DOT — LEFT OF IMAGE */}
          <span
            className="
              absolute
              -left-[14px]
              top-[40%]
              w-4
              h-4
              bg-white
              rounded-full
            "
          />
        </div>

        {/* HEADLINE — BOTTOM RIGHT */}
        <h2
          className="
            work-anim
            text-white
            text-[clamp(3.2rem,5vw,4.8rem)]
            font-semibold
            leading-[1.05]
            max-w-[820px]
          "
        >
          Everything you need <br />
          to management
        </h2>

      </div>

    </div>

  </section>
</div>


{/* ===============================
PROJECT 12 — CEO
================================ */}

<div className="relative w-full bg-[#2f3437] overflow-visible">

  {/* BIG NUMBER */}
  <div
    className="
      absolute
      left-[6vw]
      top-[6vh]
      text-[clamp(18rem,30vw,40rem)]
      font-semibold
      text-[#8b8f93]/20
      select-none
      pointer-events-none
      z-10
    "
  >
    12
  </div>

  <section className="relative w-full py-[22vh]">

    {/* GRID */}
    <div className="relative z-30 px-[8vw] max-w-[1900px] mx-auto grid grid-cols-12">

      {/* LEFT — EMPTY SPACE */}
      <div className="hidden lg:block lg:col-span-6" />

      {/* RIGHT — CONTENT (FORCED RIGHT) */}
      <div className="col-span-12 lg:col-span-6 flex flex-col items-end text-right gap-[6vh]">

        {/* TITLE — TOP RIGHT */}
        <h2
          className="
            work-anim
            text-white
            text-[clamp(3.5rem,6vw,5.5rem)]
            font-semibold
            leading-[1.05]
          "
        >
          CEO
        </h2>

        {/* IMAGE — LAPTOP MOCKUP (RIGHT ALIGNED) */}
        <div className="relative w-[820px] max-w-full self-end">

          <div
  className="
    work-image
    relative
    w-full
    aspect-[16/10]
    overflow-hidden
    transition-all
    duration-700
    ease-out
    hover:scale-[1.02]
    hover:-translate-y-1
  "
>
  <Image
    src="/images/works/ceo.png"
    alt="CEO platform laptop mockup"
    fill
    priority
    className="
      object-cover
      transition-transform
      duration-700
      ease-out
      hover:scale-105
    "
  />
</div>


          {/* FLOATING DOT */}
          <span
            className="
              absolute
              -left-[14px]
              top-[45%]
              w-4
              h-4
              bg-white
              rounded-full
            "
          />
        </div>

        {/* BIG HEADLINE — BOTTOM RIGHT */}
        <h2
          className="
            work-anim
            text-white
            text-[clamp(3.2rem,5vw,4.8rem)]
            font-semibold
            leading-[1.05]
            max-w-[900px]
          "
        >
          Empowering Leaders through a <br />
          Dynamic Digital Platform
        </h2>

      </div>

    </div>

  </section>
</div>

{/* ===============================
PROJECT 13 — ECOLOGICAL FOOTPRINT
================================ */}

<div className="relative w-full bg-[#2f3437] overflow-visible">

  {/* BIG NUMBER */}
  <div
    className="
      absolute
      right-[6vw]
      top-[6vh]
      text-[clamp(18rem,30vw,40rem)]
      font-semibold
      text-[#8b8f93]/20
      select-none
      pointer-events-none
      z-10
    "
  >
    13
  </div>

  <section className="relative w-full py-[22vh]">

    {/* GRID */}
    <div className="relative z-30 px-[8vw] max-w-[1900px] mx-auto grid grid-cols-12 gap-[4vw] items-start">

      {/* LEFT — CONTENT */}
      <div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-[6vh]">

        {/* TITLE — TOP LEFT */}
        <h2
          className="
            work-anim
            text-white
            text-[clamp(3.5rem,6vw,5.5rem)]
            font-semibold
            leading-[1.05]
          "
        >
          Ecological footprint
        </h2>

        {/* IMAGE — LEFT ALIGNED */}
<div className="relative w-[760px] max-w-full">
  <div
    className="
      work-image
      relative
      w-full
      aspect-[16/9]
      overflow-hidden
      transition-all
      duration-700
      ease-out
      hover:scale-[1.03]
      hover:-translate-y-2
    "
  >
    <Image
      src="/images/works/ecological.png"
      alt="Ecological footprint planet illustration"
      fill
      priority
      className="
        object-cover
        transition-transform
        duration-700
        ease-out
        hover:scale-105
      "
    />
  </div>
</div>


        {/* HEADLINE — BELOW IMAGE */}
        <h2
          className="
            work-anim
            text-white
            text-[clamp(3.2rem,5vw,4.8rem)]
            font-semibold
            leading-[1.05]
            max-w-[820px]
          "
        >
          How your lifestyle impacts <br />
          the planet.
        </h2>

      </div>

      {/* RIGHT — EMPTY SPACE */}
      <div className="hidden lg:block lg:col-span-6" />

    </div>

  </section>
</div>


{/* ===============================
PROJECT 14 — LITTLE BLACK BOOK
================================ */}

<section className="relative w-full bg-[#2f3437] py-[22vh] overflow-hidden">

  {/* BIG NUMBER — BACKSIDE & MORE LEFT */}
<div
  className="
    absolute
    left-[-4vw]
    top-[6vh]
    text-[clamp(18rem,30vw,42rem)]
    font-semibold
    text-[#8b8f93]/20
    select-none
    pointer-events-none
    z-0
  "
>
  14
</div>



  {/* CONTENT */}
  <div className="relative z-10 max-w-[1900px] mx-auto px-[8vw]">

    {/* TITLE — TOP RIGHT */}
    <div className="flex justify-end mb-[6vh]">
      <h2 className="work-anim text-white font-semibold text-[clamp(3.5rem,6vw,5.5rem)]">
        Little Black Book
      </h2>
    </div>
{/* IMAGE — RIGHT ALIGNED (SLIGHTLY SMALLER) */}
<div className="relative w-full flex justify-end">
  <div
    className="
      work-image
      relative
      w-[1050px]
      max-w-full
      aspect-[16/9]
      overflow-hidden
      transition-all
      duration-700
      ease-out
      hover:scale-[1.02]
      hover:-translate-y-1
    "
  >
    <Image
      src="/images/works/little-black-book.png"
      alt="Little Black Book"
      fill
      priority
      className="
        object-cover
        transition-transform
        duration-700
        ease-out
        hover:scale-105
      "
    />
  </div>
</div>


    {/* DESCRIPTION — BOTTOM RIGHT */}
    <div className="flex justify-end mt-[10vh]">
      <p
        className="
          work-anim
          text-white
          font-semibold
          text-[clamp(2.2rem,4vw,3.4rem)]
          leading-tight
          max-w-[640px]
          text-right
        "
      >
        A visual identity for <br />
        digital empowerment.
      </p>
    </div>

  </div>

</section>


    </main>
  );
}
