"use client";

import Image from "next/image";

export default function FloatingHero() {
  return (
    <div
      className="
        absolute
        z-[30]
        pointer-events-none

        left-1/2 -translate-x-1/2
        sm:left-[8vw] sm:translate-x-0

        top-[68vh]
        sm:top-[72vh]
        lg:top-[74vh]
      "
    >
      <div
        className="
          relative

          w-[88vw]
          sm:w-[70vw]
          md:w-[56vw]
          lg:w-[48vw]

          max-w-[900px]

          /* 🔥 SHORTER HEIGHT */
          aspect-[16/7]
        "
      >
        <Image
          src="/images/hero/main.png"
          alt="Hero Visual"
          fill
          priority
          className="
            object-cover
            shadow-[0_25px_60px_rgba(0,0,0,0.22)]
            rounded-lg
          "
        />
      </div>
    </div>
  );
}
