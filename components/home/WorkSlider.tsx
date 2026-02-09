"use client";

import { useState } from "react";
import Image from "next/image";

/* ✅ 4 SLIDES (2 images each) */
const slides = [
  {
    left: "/images/services/web4.png",
    right: "/images/services/uiux4.png",
  },
  {
    left: "/images/services/software2.png",
    right: "/images/services/app5.png",
  },
  {
    left: "/images/services/support2.png",
    right: "/images/services/iot2.png",
  },
  {
    left: "/images/services/ai2.png",
    right: "/images/services/infrastructure2.png",
  },
];

export default function WorkSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="
      w-full
      bg-gradient-to-br 
      from-[#071A1F]
      via-[#0E3A43]
      to-[#1F6677]
    "
    >
      {/* TOP SPACE */}
      <div className="h-[4vh]" />

      {/* WRAPPER */}
      <div
        className="
        max-w-[1400px]
        mx-auto
        px-4 sm:px-6 lg:px-10
        flex justify-center lg:justify-end
      "
      >
        <div className="w-full max-w-[1100px]">
          {/* IMAGES */}
          <div
            className="
            flex flex-col md:flex-row
            items-center
            justify-center lg:justify-end
            gap-6 md:gap-10
          "
          >
            {/* LEFT IMAGE */}
            <div
              className="
              relative
              w-full
              max-w-[420px]
              aspect-[3/4]
              overflow-hidden
              bg-white
            "
            >
              <Image
                src={slides[index].left}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
              relative
              w-full
              max-w-[420px]
              aspect-[3/4]
              overflow-hidden
              bg-white
            "
            >
              <Image
                src={slides[index].right}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* DOTS + TEXT */}
          <div
            className="
            flex items-center justify-between
            mt-8
            max-w-[820px]
            mx-auto lg:ml-auto
          "
          >
            {/* DOT BUTTONS */}
            <div className="flex items-center gap-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full
                    border
                    flex items-center justify-center
                    transition
                    ${
                      index === i
                        ? "border-white"
                        : "border-white/40"
                    }
                  `}
                >
                  <div
                    className={`
                    w-2.5 h-2.5 sm:w-3 sm:h-3
                    rounded-full
                    ${
                      index === i
                        ? "bg-white"
                        : "bg-white/40"
                    }
                  `}
                  />
                </button>
              ))}
            </div>

            {/* TEXT */}
            
          </div>
        </div>
      </div>

      {/* BOTTOM SPACE */}
      <div className="h-[4vh]" />
    </div>
  );
}
