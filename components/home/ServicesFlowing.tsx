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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
<section
  ref={sectionRef}
  className="
    w-full
    bg-white text-black
    px-5 sm:px-10 lg:px-[6vw]
    py-[12vh] sm:py-[14vh]
  "
>
  <div className="max-w-[1600px] mx-auto text-center">

    {/* LABEL */}
    <p className="
      flow-fade
      text-sm
      tracking-[0.35em]
      uppercase
      opacity-60
      mb-[6vh]
    ">
      What can we do for you
    </p>

    {/* FLOW LINES */}
    <div className="
      font-semibold
      leading-[1.05]
      space-y-[4vh] sm:space-y-[5vh]
      text-[clamp(2rem,7vw,7rem)]
    ">

      {/* LINE 1 */}
      <div className="
        flow-line
        flex flex-wrap
        items-center justify-center
        gap-3 sm:gap-[2vw]
      ">
        <span>MOTION</span>

        <div className="
          w-[160px] sm:w-[22vw]
          h-[46px] sm:h-[6.5vw]
          rounded-full overflow-hidden
          border border-black/10
        ">
          <FlowingCapsule
            text="MOTION GRAPHICS"
            image="/images/services/motion.png"
            speed={18}
          />
        </div>

        <span>GRAPHICS</span>
      </div>

      {/* LINE 2 */}
      <div className="
        flow-line
        flex flex-wrap
        items-center justify-center
        gap-3 sm:gap-[2vw]
      ">
        <span>WEB</span>

        <div className="
          w-[180px] sm:w-[24vw]
          h-[46px] sm:h-[6.5vw]
          rounded-full overflow-hidden
          border border-black/10
        ">
          <FlowingCapsule
            text="DIGITAL PRODUCT"
            image="/images/services/digital.png"
            speed={18}
          />
        </div>

        <span>PRODUCT</span>
      </div>

      {/* LINE 3 */}
      <div className="
        flow-line
        flex flex-wrap
        items-center justify-center
        gap-3 sm:gap-[2vw]
      ">
        <span>BRAND</span>

        <div className="
          w-[180px] sm:w-[24vw]
          h-[46px] sm:h-[6.5vw]
          rounded-full overflow-hidden
          border border-black/10
        ">
          <FlowingCapsule
            text="BRAND IDENTITY"
            image="/images/services/brand.png"
            speed={18}
          />
        </div>

        <span>IDENTITY</span>
      </div>

    </div>

    {/* BUTTON */}
    <div className="flow-fade mt-[8vh] sm:mt-[10vh]">
      <Link href="/works">
        <button
          className="
            px-8 sm:px-12
            py-3 sm:py-4
            bg-black text-white
            rounded-full
            text-[14px] sm:text-[15px]
            font-medium
            tracking-wide
            border border-black
            transition-all duration-300
            hover:bg-white
            hover:text-black
            hover:scale-105
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
