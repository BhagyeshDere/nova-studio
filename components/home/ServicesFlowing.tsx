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

        {/* ===== 3 RESPONSIVE LINES ===== */}
        <div
          className="
            font-semibold
            leading-[1.1]
            space-y-[4vh]
            text-[clamp(1.6rem,6vw,5rem)]
          "
        >

          {/* LINE 1 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>SOFTWARE</span>

            <Capsule text="CUSTOM DEV" image="/images/services/software.png" />

            <span>DEVELOPMENT</span>
          </div>

          {/* LINE 2 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>AI</span>

            <Capsule text="AI & ML" image="/images/services/ai.png" />

            <span>SOLUTIONS</span>
          </div>

          {/* LINE 3 */}
          <div className="flow-line flex flex-wrap items-center justify-center gap-3">
            <span>CLOUD</span>

            <Capsule text="INFRASTRUCTURE" image="/images/services/infrastructure.png" />

            <span>INFRASTRUCTURE</span>
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
