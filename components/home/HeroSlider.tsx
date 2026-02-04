"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  "/images/hero/main.png",
  "/images/hero/main2.png",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full h-full">

      {/* IMAGE */}
      <Image
        src={slides[index]}
        alt=""
        fill
        className="object-cover transition-all duration-700"
        priority
      />

      {/* DOTS (GEN style) */}
      <div className="absolute top-10 left-10 flex gap-4">

        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-12 h-12 rounded-full border
              flex items-center justify-center
              transition
              ${index === i ? "border-white" : "border-white/40"}
            `}
          >
            <div
              className={`
                w-2.5 h-2.5 rounded-full
                ${index === i ? "bg-white" : "bg-white/40"}
              `}
            />
          </button>
        ))}

      </div>
    </div>
  );
}
