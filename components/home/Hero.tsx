"use client";

import { motion } from "framer-motion";
import FloatingHero from "@/components/layout/FloatingHero";

export default function Hero() {
  return (
    <section
      className="
        relative h-screen w-full overflow-visible
        bg-white
      "
    >

      {/* HERO TEXT */}
      <div
        className="
          relative z-20
          h-full
          flex items-center
          px-6 sm:px-10 lg:px-[8vw]
        "
      >
       <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            font-semibold
            text-black
            leading-[1.05]
            tracking-[-0.02em]

            text-right
            ml-auto
            w-full
            max-w-[1400px]

            text-[clamp(2rem,6vw,6rem)]
          "
        >
          {/* LINE 1 */}
          <span className="block md:whitespace-nowrap">
            We build powerful software
          </span>

          {/* LINE 2 */}
          <span className="block">
            for modern businesses.
          </span>
        </motion.h1>

      </div>

      {/* UI CONTENT */}
      <div
        className="
          absolute
          bottom-[6vh] sm:bottom-[8vh]
          left-0 w-full z-30
          px-6 sm:px-10 lg:px-[8vw]
        "
      >
        <div
          className="
            flex items-center justify-between
            text-black/90
            flex-col sm:flex-row
            gap-6 sm:gap-0
          "
        >
          <div className="flex items-center gap-5">
            <button className="w-[44px] h-[44px] rounded-full border border-black/40 hover:border-black transition">
              ●
            </button>
            <button className="w-[44px] h-[44px] rounded-full border border-black/40 hover:border-black transition">
              ▶
            </button>
          </div>

          <div className="text-center">
            <p className="text-[14px] tracking-wide font-semibold text-black">
              GEN
            </p>
            <p className="text-[14px] text-black/70">
              Branding, brand guide
            </p>
          </div>

          <button className="text-[14px] text-black/80 hover:text-black transition">
            ← Our Works
          </button>
        </div>
      </div>

      {/* Floating image INSIDE hero */}
      <FloatingHero />

    </section>
  );
}
