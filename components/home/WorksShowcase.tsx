"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function WorksShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".work-img"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
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
  className="relative w-full bg-white overflow-hidden"
>

  {/* CONTENT */}
  <div className="
    relative
    w-full
    flex justify-center
    pt-[14vh] sm:pt-[20vh] lg:pt-[26vh]
    pb-[12vh] sm:pb-[16vh] lg:pb-[18vh]
    px-5 sm:px-10
  ">

    <div className="
      w-full max-w-[1500px]
      grid
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-10 lg:gap-0
      items-center
    ">

      {/* SPACER — only desktop */}
      <div className="hidden lg:block" />

      {/* POSTER */}
      <div className="work-img flex justify-center">
        <div className="
          relative
          w-full max-w-[360px] lg:max-w-[420px]
          h-[60vh] sm:h-[70vh] lg:h-[80vh]
          overflow-hidden
          bg-white
          rounded-lg
        ">
          <Image
            src="/images/works/poster.png"
            alt="Poster"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* MOBILE */}
      <div className="work-img flex justify-center">
        <div className="
          relative
          w-full max-w-[360px] lg:max-w-[420px]
          h-[60vh] sm:h-[70vh] lg:h-[80vh]
          overflow-hidden
          bg-white
          rounded-lg
        ">
          <Image
            src="/images/works/mobile.png"
            alt="Mobile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
