"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/animations";
import FlowingCapsule from "@/reactbits/FlowingCapsule";
import Link from "next/link";

export default function ServicesFlowing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".flow-line, .flow-fade"),
      { y: 80, opacity: 0 },
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
    <section
      ref={sectionRef}
      className="
        w-full bg-white text-[#071A1F]
        px-5 sm:px-10 lg:px-[6vw]
        pb-[12vh]
      "
    >
      <div className="max-w-[1600px] mx-auto text-center">

        {/* LABEL */}
        <p className="flow-fade text-sm tracking-[0.35em] uppercase text-[#1F6677] mb-[6vh]">
          OUR EXPERTISE
        </p>

        {/* ===== FLOWING LINES ===== */}
        <div
          className="
            font-semibold
            leading-[1.1]
            space-y-[4vh]
            text-[clamp(1.6rem,6vw,5rem)]
          "
        >

          {/* 1 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>WEBSITE</span>
            <Capsule text="WEB & SEO" image="/images/services/web.png" />
            <span>DEVELOPMENT</span>
          </div>

  {/* 4 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>MOBILE</span>
            <Capsule text="APP DEV" image="/images/services/app1.png" />
            <span>SOLUTIONS</span>
          </div>

          {/* 2 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>UI/UX</span>
            <Capsule text="UI & UX" image="/images/services/uiux1.png" />
            <span>DESIGN</span>
          </div>

          {/* 3 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>CUSTOM</span>
            <Capsule text="SOFTWARE" image="/images/services/software.png" />
            <span>DEVELOPMENT</span>
          </div>

         

          {/* 5 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>SOFTWARE</span>
            <Capsule text="SUPPORT" image="/images/services/support.png" />
            <span>MAINTENANCE</span>
          </div>

          {/* 6 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>SMART</span>
            <Capsule text="IOT APPS" image="/images/services/iot.png" />
            <span>SYSTEMS</span>
          </div>

          {/* 7 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>AI</span>
            <Capsule text="AI & ML" image="/images/services/ai.png" />
            <span>SOLUTIONS</span>
          </div>

          {/* 8 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>CLOUD</span>
            <Capsule text="INFRASTRUCTURE" image="/images/services/infrastructure.png" />
            <span>MANAGEMENT</span>
          </div>

        </div>

        {/* BUTTON */}
        <div className="flow-fade mt-[8vh]">
          <Link href="/services">
            <button
              className="
                px-8 py-4
                bg-[#1F6677] text-white
                rounded-full
                border border-[#1F6677]
                transition
                hover:bg-white hover:text-[#1F6677]
              "
            >
              Explore Services →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* Capsule */
function Capsule({ text, image }: any) {
  return (
    <div
      className="
        w-[120px] sm:w-[180px]
        h-[38px] sm:h-[52px]
        rounded-full overflow-hidden
        border border-[#1F6677]/30
        flex-shrink-0
      "
    >
      <FlowingCapsule
        text={text}
        image={image}
        speed={18}
      />
    </div>
  );
}
