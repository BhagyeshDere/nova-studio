"use client";

import { motion } from "framer-motion";
import FloatingHero from "@/components/layout/FloatingHero";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-visible
        bg-white
        flex flex-col
        justify-center
      "
    >
      {/* HERO TEXT */}
      <div
        className="
          relative z-20
          flex flex-col
          justify-center
          items-center
          text-center
          px-6 sm:px-10 lg:px-[8vw]
          pb-[24vh] md:pb-[28vh]
        "
      >
        {/* COMPANY NAME */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            mb-6
            text-[13px] sm:text-[15px]
            tracking-[0.35em]
            uppercase
            font-medium
            text-black/60
          "
        >
          QIRO TECH INNOVATION PVT. LTD.
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
            font-semibold
            leading-[1.02]
            tracking-[-0.03em]
            text-[clamp(3rem,7vw,6.5rem)]
            max-w-[1200px]
          "
        >
          <span
            className="
              block
              bg-gradient-to-r
              from-[#071A1F]
              via-[#1F6677]
              to-[#4DA6B8]
              bg-clip-text
              text-transparent
            "
          >
            Powerful digital solutions
          </span>

          <span className="block text-black">
            for modern businesses.
          </span>
        </motion.h1>
      </div>

      {/* FLOATING IMAGE */}
      <div
        className="
          absolute
          bottom-[-14vh] md:bottom-[-18vh]
          left-[5vw]
          z-10
          pointer-events-none
        "
      >
        <FloatingHero />
      </div>
    </section>
  );
}
