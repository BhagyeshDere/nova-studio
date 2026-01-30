"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#2f3437] overflow-visible">

      {/* HERO TEXT */}
<div className="relative z-20 h-screen flex items-center px-[8vw]">
  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    style={{ color: "#ffffff" }}   // ✅ hard force white
    className="
      font-semibold 
      leading-[1.05] 
      text-[clamp(3rem,7vw,8rem)] 
      max-w-[85vw]
      ml-auto
      text-right
      !text-white              /* ✅ force tailwind override */
    "
  >
    We craft identity,
    <br />
    experience and presence.
  </motion.h1>
</div>


      {/* UI CONTENT (ANCHOR LAYER) */}
      <div className="absolute bottom-[8vh] left-0 w-full z-30 px-[8vw] pointer-events-auto">

        <div className="flex items-center justify-between text-white/90">

          {/* LEFT BUTTONS */}
          <div className="flex items-center gap-6">
            <button className="w-[46px] h-[46px] rounded-full border border-white/40 flex items-center justify-center hover:border-white transition">
              ●
            </button>

            <button className="w-[46px] h-[46px] rounded-full border border-white/40 flex items-center justify-center hover:border-white transition">
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
          <div>
            <button className="text-[14px] text-white/80 hover:text-white transition flex items-center gap-2">
              ← Our Works
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
