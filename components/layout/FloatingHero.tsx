"use client";

import Image from "next/image";

export default function FloatingHero() {
  return (
    <div
      className="
        absolute
        left-[8vw]
        top-[74vh]
        z-[30]
        pointer-events-none
      "
    >
      <div
        className="
          relative
          w-[48vw]
          max-w-[900px]
          h-[36vh]
          md:h-[40vh]
          lg:h-[44vh]
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
