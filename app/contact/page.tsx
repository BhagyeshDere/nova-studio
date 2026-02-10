"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current.querySelectorAll(".reveal"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <main
      ref={pageRef}
      className="
        bg-gradient-to-b from-white to-[#F3FAFB]
        text-black
        min-h-screen
        overflow-x-hidden
        text-[14px] sm:text-[16px]
      "
    >

{/* ================= HERO ================= */}
<section className="
  text-center
  px-4 sm:px-8 lg:px-[6vw]
  pt-[10vh] sm:pt-[14vh] lg:pt-[16vh]
  pb-[6vh] sm:pb-[7vh]
">

  <p className="reveal uppercase tracking-[0.35em] text-[10px] sm:text-sm text-[#1F6677] mb-4 sm:mb-5">
    CONTACT QIRO TECH INNOVATION PVT. LTD.
  </p>

  <h1 className="reveal text-[clamp(1.8rem,7vw,4.5rem)] font-semibold leading-[1.1]">
    
    <span className="
      block
      bg-gradient-to-r
      from-[#071A1F]
      via-[#1F6677]
      to-[#4DA6B8]
      bg-clip-text text-transparent
    ">
      Let’s Build the Future
    </span>

    <span className="block text-black">
      Together
    </span>

  </h1>

  <div className="reveal mx-auto mt-5 sm:mt-6 w-[50px] sm:w-[60px] h-[3px] bg-[#1F6677]/40"/>

  <p className="reveal mt-5 sm:mt-6 text-black/60 max-w-[640px] mx-auto text-[14px] sm:text-lg leading-[1.8] px-2">
    Connect with our team to build powerful digital solutions
    and innovative technology experiences.
  </p>

</section>

{/* ================= CONTENT ================= */}
<section className="
  px-4 sm:px-8 lg:px-[6vw]
  pb-[8vh] sm:pb-[10vh]
">

  <div className="
    max-w-[1200px]
    mx-auto
    grid grid-cols-1 lg:grid-cols-2
    gap-8 md:gap-10 lg:gap-[6vw]
    items-start
  ">

{/* ===== FORM ===== */}
<div className="
  reveal
  bg-white/95
  backdrop-blur-sm
  shadow-2xl
  border border-[#1F6677]/15
  rounded-2xl
  p-5 sm:p-8 lg:p-10
">

  <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
    Send Us a Message
  </h3>

  <div className="space-y-4 sm:space-y-5">

    <input
      placeholder="Full Name"
      className="w-full border border-black/20 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-[#1F6677] focus:ring-2 focus:ring-[#1F6677]/20 transition"
    />

    <input
      placeholder="Email Address"
      type="email"
      className="w-full border border-black/20 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-[#1F6677] focus:ring-2 focus:ring-[#1F6677]/20 transition"
    />

    <input
      placeholder="Company (Optional)"
      className="w-full border border-black/20 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-[#1F6677] focus:ring-2 focus:ring-[#1F6677]/20 transition"
    />

    <textarea
      rows={4}
      placeholder="Project Details"
      className="w-full border border-black/20 rounded-lg px-4 py-3 text-sm sm:text-base outline-none resize-none focus:border-[#1F6677] focus:ring-2 focus:ring-[#1F6677]/20 transition"
    />

    <button className="
      w-full
      bg-[#071A1F] text-white
      py-3 sm:py-4
      rounded-lg
      text-sm sm:text-base
      transition
      hover:bg-[#1F6677]
      shadow-lg hover:shadow-xl
    ">
      Submit Inquiry
    </button>

  </div>
</div>

{/* ===== INFO ===== */}
<div className="reveal pt-2 lg:pt-4">

  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
    Get in Touch
  </h3>

  <p className="text-black/60 mb-6 sm:mb-8 leading-[1.7] text-sm sm:text-base">
    Our experts are ready to collaborate on your next
    technology project.
  </p>

  <div className="space-y-5 sm:space-y-6">

    <div>
      <p className="text-[11px] sm:text-sm text-[#1F6677] uppercase mb-2 tracking-wide">
        Email
      </p>
      <p className="text-base sm:text-lg font-medium break-all">
        hr@qirotec.com
      </p>
    </div>

    {/* SOCIAL MEDIA (replaced Phone) */}
    <div>
      <p className="text-[11px] sm:text-sm text-[#1F6677] uppercase mb-3 tracking-wide">
        Social Media
      </p>

      <div className="flex gap-5 text-2xl text-[#1F6677]">
        <a href="#" className="hover:opacity-70 transition">
          <FaInstagram />
        </a>

        <a href="#" className="hover:opacity-70 transition">
          <FaTwitter />
        </a>

        <a href="#" className="hover:opacity-70 transition">
          <FaLinkedin />
        </a>
      </div>
    </div>

    <div>
      <p className="text-[11px] sm:text-sm text-[#1F6677] uppercase mb-2 tracking-wide">
        Business Enquiry
      </p>
      <p className="text-base sm:text-lg font-medium">
        +91 9860507744<br/>
        +91 9113882782
        
      </p>
    </div>

    <div>
      <p className="text-[11px] sm:text-sm text-[#1F6677] uppercase mb-2 tracking-wide">
        Location
      </p>
      <p className="text-base sm:text-lg font-medium leading-relaxed">
        Office No. 235, 2nd Floor, Xion Mall,<br/>
        Beside DMart, Hinjewadi Phase 1,<br/>
        Pune - 411057
      </p>
    </div>

  </div>
</div>

  </div>
</section>

{/* ================= MAP ================= */}
<section className="
  reveal
  px-4 sm:px-8 lg:px-[6vw]
  pb-[10vh] sm:pb-[12vh]
">

  <div className="max-w-[1200px] mx-auto">

    <div className="
      rounded-2xl
      overflow-hidden
      shadow-2xl
      border border-[#1F6677]/20
    ">

      <iframe
        src="https://www.google.com/maps?q=Hinjewadi,Pune,India&output=embed"
        width="100%"
        height="300"
        className="sm:h-[420px] lg:h-[450px]"
        style={{ border: 0 }}
        loading="lazy"
      />

    </div>

  </div>
</section>

    </main>
  );
}
