"use client";

/* =========================================
   CONTACT PAGE — NOVA STUDIO
   Image-accurate layout (fixed grid)
========================================= */

import { useState } from "react";

const interests = [
  "Site from scratch",
  "App from scratch",
  "UX/UI design",
  "Branding",
  "Animation 2D",
  "Animation 3D",
  "Motion Graphics",
  "Illustration",
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">

      {/* ===============================
         HEADER SECTION
      =============================== */}
      <section className="relative w-full px-[6vw] pt-[18vh]">

        {/* Title */}
        <h1 className="text-[clamp(4rem,7vw,7rem)] font-semibold leading-[1.05] tracking-tight text-black">
          Hey! Tell us all <br /> the things<span className="ml-2">.</span>
        </h1>

        {/* Address */}
        <div className="mt-[6vh] text-black text-[17px] space-y-1">
          <p>Avenida San Martin. 830, 102</p>
          <p>Leblon – Rio de Janeiro</p>
        </div>

        {/* Contact info */}
        <div className="mt-[6vh] text-black text-[16px] space-y-2">
          <div className="flex items-center gap-2">
            <span>✉</span>
            <span>contact@reinostudio.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>☎</span>
            <span>+55 21 98479-6999</span>
          </div>
        </div>

      </section>

      {/* ===============================
         FORM SECTION
      =============================== */}
      <section className="relative w-full px-[6vw] pt-[12vh] pb-[20vh]">

        {/* Interests title */}
        <p className="text-[18px] text-black mb-[4vh]">
          I'm interested in...
        </p>

        {/* Interests — 4 + 4 GRID */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 mb-[10vh] max-w-[1100px]">
          {interests.map((item) => (
            <button
              key={item}
              onClick={() => toggleInterest(item)}
              className={`w-full px-4 py-2 rounded-full border text-[14px] transition-colors text-center
                ${
                  selected.includes(item)
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="max-w-[1100px] space-y-6">

          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-black px-4 py-3 text-[18px] outline-none"
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-black px-4 py-3 text-[18px] outline-none"
          />

          <textarea
            placeholder="Tell us about your project"
            rows={6}
            className="w-full border border-black px-4 py-3 text-[18px] outline-none resize-none"
          />

        </div>

        {/* Submit */}
        <div className="mt-[8vh]">
          <button className="border border-black px-6 py-2 text-[18px] text-black">
            Send Request
          </button>
        </div>

      </section>

    </main>
  );
}
