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
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full 
        bg-white 
        text-black 
        px-[6vw] 
        py-[14vh]
      "
    >
      <div className="max-w-[1800px] mx-auto text-center">

        {/* ===== HEADING ===== */}
        <p className="flow-fade text-sm tracking-[0.35em] uppercase opacity-60 mb-[8vh]">
          What can we do for you
        </p>

        {/* ===== YOUR ORIGINAL 3 LINES (UNCHANGED) ===== */}
        <div className="text-[7.5vw] leading-[0.95] font-semibold space-y-[5vh]">

          {/* LINE 1 */}
          <div className="flow-line flex items-center justify-center gap-[2.5vw]">
            <span>MOTION</span>

            <div className="w-[22vw] h-[6.5vw] rounded-full overflow-hidden border border-black/10">
              <FlowingCapsule
                text="MOTION GRAPHICS"
                image="/images/services/motion.png"
                speed={18}
              />
            </div>

            <span>GRAPHICS</span>
          </div>

          {/* LINE 2 */}
          <div className="flow-line flex items-center justify-center gap-[2.5vw]">
            <span>WEB</span>

            <div className="w-[24vw] h-[6.5vw] rounded-full overflow-hidden border border-black/10">
              <FlowingCapsule
                text="DIGITAL PRODUCT"
                image="/images/services/digital.png"
                speed={18}
              />
            </div>

            <span>PRODUCT</span>
          </div>

          {/* LINE 3 */}
          <div className="flow-line flex items-center justify-center gap-[2.5vw]">
            <span>BRAND</span>

            <div className="w-[24vw] h-[6.5vw] rounded-full overflow-hidden border border-black/10">
              <FlowingCapsule
                text="BRAND IDENTITY"
                image="/images/services/brand.png"
                speed={18}
              />
            </div>

            <span>IDENTITY</span>
          </div>

        </div>

        {/* ===== BUTTON ===== */}
        <div className="flow-fade mt-[10vh]">
          <Link href="/works">
            <button
              className="
                px-12 py-4
                bg-black text-white
                rounded-full
                text-[15px]
                font-medium
                tracking-wide
                border border-black
                transition-all duration-300
                hover:bg-white
                hover:text-black
                hover:scale-105
                hover:shadow-xl
              "
            >
              View all Works →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
