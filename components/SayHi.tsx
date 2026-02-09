"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Link from "next/link";

export default function SayHi() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(
        ".hi-line, .hi-sub, .hi-contact, .hi-nav, .hi-footer"
      ),
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    if (dotRef.current) {
      gsap.fromTo(
        dotRef.current,
        { x: "-20vw" },
        {
          x: "20vw",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative isolate
        w-full
        bg-[#0E2E34] text-white
        px-5 sm:px-8 md:px-10 lg:px-[6vw]
        py-[6vh] sm:py-[8vh] lg:py-[10vh]
        overflow-hidden
      "
    >

{/* ================= TOP GRID ================= */}
<div className="
  grid
  lg:grid-cols-2
  gap-[6vh] sm:gap-[8vh]
  items-start
">

{/* ===== LEFT SIDE ===== */}
<div>

<h1
  className="
    hi-line
    font-bold
    tracking-tight
    leading-[0.9]
    whitespace-nowrap
    text-[clamp(2.5rem,10vw,12rem)]
  "
>
  SAY HI!
</h1>

<div className="
  hi-sub
  mt-[3vh]
  max-w-[520px]
  text-[14px] sm:text-[16px]
  text-white/70
  leading-relaxed
">
  <p>Tell us about your project.</p>
  <p>Let’s collaborate and make great stuff.</p>
</div>

</div>

{/* ===== RIGHT SIDE CONTACT ===== */}
<div
  className="
    hi-contact
    grid grid-cols-1 sm:grid-cols-2
    gap-6 sm:gap-8
    text-sm text-white/70
  "
>

<div>
  <p className="text-white font-medium mb-2">Mail ID</p>
  <p className="break-all">hr@qirotec.com</p>
</div>

<div>
  <p className="text-white font-medium mb-2">Phone</p>
  <p>+91 9860507744 </p>
<p>+91 9113882782</p>
</div>

<div>
  <p className="text-white font-medium mb-2">Business Enquiry</p>
  <p>+91 9860507744 </p>
<p>+91 9113882782</p>
</div>

<div>
  <p className="text-white font-medium mb-2">Location</p>
  <p>
    Office No. 235, 2nd Floor,<br/>
    Xion Mall, Beside DMart,<br/>
    Hinjewadi Phase 1,<br/>
    Pune - 411057
  </p>
</div>

</div>
</div>

{/* ===== DIVIDER ===== */}
<div className="relative mt-[6vh] sm:mt-[7vh] w-full h-[1px] bg-white/20">
  <div
    ref={dotRef}
    className="
      absolute
      top-[-5px]
      left-1/2
      w-3 h-3
      bg-[#1F6677]
      rounded-full
      shadow-[0_0_12px_#1F6677]
    "
  />
</div>

{/* ===== NAV ===== */}
<div
  className="
    hi-nav
    mt-[4vh]
    flex flex-wrap
    gap-x-5 sm:gap-x-6
    gap-y-3
    uppercase tracking-widest
    text-white/70
    text-xs sm:text-sm
  "
>
  {["Home","About","Services","Works","Career","Contact"].map((item,i)=>(
    <Link 
      key={i}
      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
      className="hover:text-[#1F6677] transition"
    >
      {item}
    </Link>
  ))}
</div>

{/* ===== FOOTER BOTTOM ===== */}
<div
  className="
    hi-footer
    mt-[5vh]
    flex flex-col md:flex-row
    justify-between
    items-start md:items-center
    gap-4 sm:gap-6
    text-xs sm:text-sm
    text-white/50
  "
>

<p>
  © QIRO TECH Innovation Pvt. Ltd. All rights reserved.
</p>

<div className="flex flex-wrap gap-4 sm:gap-6">
  <Link href="/privacy-policy" className="hover:text-[#1F6677]">Privacy Policy</Link>
  <Link href="/terms-of-service" className="hover:text-[#1F6677]">Terms of Service</Link>
  <Link href="/sitemap" className="hover:text-[#1F6677]">Sitemap</Link>
</div>

</div>

    </section>
  );
}
