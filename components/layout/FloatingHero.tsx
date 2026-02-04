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
        sm:top-[70vh]
        lg:top-[72vh]
      "
    >
      <div
        className="
          relative

          w-[92vw]
          sm:w-[76vw]
          md:w-[60vw]
          lg:w-[50vw]

          max-w-[1000px]

          /* ✅ RECTANGULAR RATIO */
          aspect-[16/8]
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
          "
        />
      </div>
    </div>
  );
}
