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
      sectionRef.current.querySelectorAll(".flow-line, .flow-btn"),
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
        relative
        w-full 
        bg-white 
        text-black 
        px-[6vw] 
        py-[16vh]
        overflow-hidden
      "
    >
      {/* CONTENT */}
      <div className="max-w-[1800px] mx-auto flex flex-col items-center">

        {/* CENTER LABEL */}
        <div className="mb-[7vh]">
          <h1 className="text-[15px] font-medium opacity-60 tracking-[0.2em] text-center uppercase">
            What can we do for you
          </h1>
        </div>

        {/* MAIN TYPOGRAPHY BLOCK */}
        <div className="w-full text-[7.8vw] leading-[0.95] font-semibold space-y-[5vh] text-center">

          {/* LINE 1 */}
          <div className="flow-line flex items-center justify-center gap-[2.5vw]">
            <span>MOTION</span>

            <div className="w-[22vw] h-[6.5vw] rounded-full overflow-hidden border border-black/10 bg-white">
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
            <span>WEB & DIGITAL</span>

            <div className="w-[24vw] h-[6.5vw] rounded-full overflow-hidden border border-black/10 bg-white">
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

            <div className="w-[24vw] h-[6.5vw] rounded-full overflow-hidden border border-black/10 bg-white">
              <FlowingCapsule
                text="BRAND IDENTITY"
                image="/images/services/brand.png"
                speed={18}
              />
            </div>

            <span>IDENTITY</span>
          </div>

        </div>

        {/* ===============================
           VIEW ALL WORKS BUTTON
        =============================== */}
        <div className="flow-btn mt-[10vh] flex justify-center">
          <Link href="/works">
            <button
              className="
                group
                flex items-center gap-3
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
                hover:scale-[1.05]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                active:scale-[0.97]
              "
            >
              <span>View all Works</span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
