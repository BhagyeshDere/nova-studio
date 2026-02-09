"use client";

import Image from "next/image";

export default function FloatingHero() {
  return (
    <div
      className="
        relative
        z-[30]
        pointer-events-none

        w-[92vw]
        sm:w-[76vw]
        md:w-[60vw]
        lg:w-[50vw]

        max-w-[1000px]
        aspect-[16/8]
      "
    >
      <Image
        src="/images/hero/main3.png"
        alt="Hero Visual"
        fill
        priority
        className="
          object-cover
          shadow-[0_25px_60px_rgba(0,0,0,0.22)]
        "
      />
    </div>
  );
}
