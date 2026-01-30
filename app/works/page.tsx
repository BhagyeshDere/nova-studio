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

    gsap.fromTo(
      pageRef.current.querySelectorAll(".work-anim"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      }
    );
  }, []);

  return (
  <main
  ref={pageRef}
  className="works-page relative w-full overflow-x-hidden"
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
        <div className="relative w-full h-[78vh] overflow-hidden rounded-xl">
          <Image src="/images/works/gen.png" alt="GEN" fill priority className="object-cover" />
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
<section className="relative w-full py-[22vh]">
  <div className="absolute left-[4vw] top-[8vh] text-[clamp(10rem,22vw,26rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-[1]">
    02
  </div>

  <div className="relative px-[8vw] max-w-[1900px] mx-auto z-[2]">
    <div className="relative w-full flex items-start justify-between mb-[8vh]">
      <div className="w-[40%]" />
      <h3 className="work-anim text-white text-[48px] font-semibold tracking-tight">
        Berrics
      </h3>
    </div>

    <div className="relative w-full flex">
      <div className="w-[40%] relative">
        <div className="absolute left-[25%] top-[50%] w-[14px] h-[14px] rounded-full bg-white opacity-90" />
      </div>

      <div className="w-[60%] relative">
        <div className="relative w-full h-[78vh] overflow-hidden rounded-xl">
          <Image src="/images/works/berrics.png" alt="Berrics" fill priority className="object-cover" />
        </div>
      </div>
    </div>

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

    <div className="relative w-full overflow-hidden rounded-xl bg-black">
      <div className="relative w-full aspect-[16/9]">
        <Image src="/images/works/cariuma.png" alt="Cariuma" fill priority className="object-contain" />
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
        <div className="relative w-full bg-[#f7f7f7] rounded-xl overflow-hidden z-30">
          <div className="relative w-full aspect-[16/10]">
            <Image src="/images/works/zuso.png" alt="Zuso" fill priority className="object-contain" />
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
        <div className="relative w-full rounded-xl overflow-hidden z-30 shadow-2xl">
          <div className="relative w-full aspect-[16/9]">
            <Image src="/images/works/superela.png" alt="Superela" fill priority className="object-cover" />
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

    <div className="absolute left-[6vw] top-[4vh] text-[clamp(18rem,30vw,38rem)] font-semibold text-white opacity-[0.06] select-none pointer-events-none z-10">
      06
    </div>

    <div className="relative w-full flex justify-end z-40 mb-[8vh]">
      <h3 className="work-anim text-white text-[clamp(2.8rem,5vw,4.2rem)] font-semibold">
        Waypoint Group
      </h3>
    </div>

    <div className="relative w-full flex z-20 items-start">
      <div className="w-[42%]" />

      <div className="w-[58%] relative">
        <div className="relative w-full rounded-xl overflow-hidden z-30 shadow-2xl bg-[#eaeaea]">
          <div className="relative w-full aspect-[16/10]">
            <Image src="/images/works/waypoint.png" alt="Waypoint Group" fill priority className="object-contain" />
          </div>
        </div>
      </div>
    </div>

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
        <div className="relative w-full rounded-xl overflow-hidden bg-[#dff0ff] z-30">
          <div className="relative w-full aspect-[16/10]">
            <Image src="/images/works/fapes.png" alt="Fapes" fill priority className="object-contain" />
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

    <div className="absolute left-[6vw] top-[4vh] text-[clamp(18rem,32vw,40rem)] font-semibold text-white opacity-[0.05] select-none pointer-events-none z-10">
      08
    </div>

    <div className="relative w-full flex justify-end z-40 mb-[8vh]">
      <h3 className="work-anim text-white text-[clamp(2.8rem,5vw,4.4rem)] font-semibold">
        Go HQ
      </h3>
    </div>

    <div className="relative w-full flex z-20">
      <div className="w-[42%]" />

      <div className="w-[58%] relative">
        <div className="relative w-full rounded-xl overflow-hidden z-30 shadow-2xl bg-white">
          <div className="relative w-full aspect-[16/10]">
            <Image src="/images/works/gohq.png" alt="Go HQ" fill priority className="object-cover" />
          </div>
        </div>
      </div>
    </div>

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

    </main>
  );
}
