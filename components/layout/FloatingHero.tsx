"use client";

import Image from "next/image";

export default function FloatingHero() {
  return (
    <div
      className="
        absolute
        left-[6vw]
        top-[72vh]
        z-[30]
        pointer-events-none
      "
    >
      <div
        className="
          relative 
          w-[62vw]
          h-[40vh]
          max-w-[1100px]
        "
      >
        <Image
          src="/images/hero/main.png"
          alt="Hero Visual"
          fill
          className="object-cover rounded-xl shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
