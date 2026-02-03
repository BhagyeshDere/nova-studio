"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#2f3437] overflow-hidden">

      {/* HERO TEXT */}
      <div
        className="
          relative z-20
          min-h-screen
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
            text-white
            leading-[1.05]
            tracking-[-0.02em]

            text-right
            ml-auto

            w-full
            max-w-[1100px]

            text-[clamp(2.6rem,6vw,6.5rem)]
          "
        >
          We craft identity,
          <br />
          experience and presence.
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
            text-white/90

            flex-col sm:flex-row
            gap-6 sm:gap-0
          "
        >
          {/* LEFT BUTTONS */}
          <div className="flex items-center gap-5">
            <button className="w-[44px] h-[44px] rounded-full border border-white/40 flex items-center justify-center hover:border-white transition">
              ●
            </button>

            <button className="w-[44px] h-[44px] rounded-full border border-white/40 flex items-center justify-center hover:border-white transition">
              ▶
            </button>
          </div>

          {/* CENTER TEXT */}
          <div className="text-center">
            <p className="text-[14px] tracking-wide font-semibold">GEN</p>
            <p className="text-[14px] text-white/70">
              Branding, brand guide
            </p>
          </div>

          {/* RIGHT LINK */}
          <button className="text-[14px] text-white/80 hover:text-white transition">
            ← Our Works
          </button>
        </div>
      </div>

    </section>
  );
}
