"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    /* PAGE INTRO */
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    /* SECTION REVEAL */
    gsap.utils.toArray<HTMLElement>(".srv-section").forEach((section) => {
      gsap.fromTo(
        section,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });

    /* TEXT REVEAL */
    gsap.utils.toArray<HTMLElement>(".srv-anim").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });

    /* IMAGE PARALLAX FEEL */
    gsap.utils.toArray<HTMLElement>(".img-wrap").forEach((wrap) => {
      gsap.to(wrap, {
        y: -40,
        scrollTrigger: {
          trigger: wrap,
          scrub: true,
        },
      });
    });
  }, []);


  return (
    <main ref={pageRef} className="relative w-full overflow-x-hidden bg-white text-black">

{/* ===============================
   HERO — REINO STYLE
=============================== */}
<section className="relative w-full min-h-[100vh] px-[6vw] pt-[22vh] pb-[14vh] bg-white">

  {/* Wide container */}
  <div className="w-full">

    <h1 className="srv-anim font-semibold tracking-tight text-[#2b2e2f] leading-[0.95]
      text-[clamp(3.2rem,7vw,8.5rem)]">

      <span className="block whitespace-nowrap">
        We are a design studio that
      </span>

      <span className="block whitespace-nowrap">
        loves to create together.
      </span>

    </h1>

    {/* Paragraph */}
    <div className="srv-anim mt-[10vh] max-w-[560px] text-[16.5px] leading-[1.9] text-black/80">
    <p>
      At Reino, we believe the best ideas are born from collaboration. That’s why
      we work side by side with other creative agencies, acting as a natural
      extension of their teams. We get into the flow, understand the culture, and
      wear the project’s jersey as if it were our own.
    </p>
  </div>

  </div>

</section>





{/* ===============================
   TEAM STRIP — FULL IMAGE (NO CROP)
=============================== */}
<section className="relative w-full py-[12vh] bg-white">
  <div className="relative w-full flex justify-center items-center">

    {/* Hover wrapper */}
    <div className="group relative overflow-hidden rounded-2xl">

      <Image
        src="/images/services/team.png"
        alt="Team"
        width={2200}
        height={900}
        priority
        className="
          w-full h-auto object-contain
          transition-all duration-[900ms] ease-out
          group-hover:scale-105
          group-hover:rotate-[0.6deg]
          group-hover:contrast-110
        "
      />

    </div>

  </div>
</section>



{/* ===============================
   PART OF YOUR TEAM — PARAGRAPH
=============================== */}
<section className="relative w-full px-[8vw] py-[18vh] bg-white text-black">

  <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-tight mb-[8vh]">
    Part of your team,<br />
    from start to finish
  </h2>

  <div className="max-w-[720px]">
    <p className="text-[18px] leading-[1.9] text-black/75">
      More than providers, we are partners. This means we take part in the
      entire process — from strategic conception to final delivery — bringing
      our expertise in UX, UI, Motion Design, and Branding. Our main strength is
      flexibility: we adapt the depth and format of our contribution to match
      the needs of each project.
    </p>
  </div>

</section>

{/* ===============================
   OUR SERVICES — FULL WIDTH EDITORIAL
=============================== */}
<section className="relative w-full bg-white">

{/* Heading */}
<div className="px-[8vw] pt-[18vh] pb-[12vh] max-w-[1200px]">
  <span className="text-[13px] tracking-[0.3em] uppercase text-black/50">
    Services
  </span>

  <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-[1] mt-[2vh]">
    What we do
  </h2>
</div>

<div className="flex flex-col gap-[22vh]">

{[
{
title:"Web Development",
desc:"We craft modern websites blending performance with aesthetics. Optimized for SEO, speed, and scalability.",
bullets:["Responsive sites","SaaS platforms","E-commerce","SEO structure"],
img:"/images/services/web.png"
},
{
title:"App Development",
desc:"Mobile apps that feel natural and intuitive. Built for stability and long-term growth.",
bullets:["iOS & Android","Cross-platform","Backend APIs","Deployment"],
img:"/images/services/app1.png"
},
{
title:"UI/UX Design",
desc:"Design is experience. We craft intuitive flows focused on clarity and usability.",
bullets:["UX research","Wireframes","Prototypes","Design systems"],
img:"/images/services/uiux.png"
},
{
title:"MVP to Product",
desc:"We help founders transform ideas into real scalable products.",
bullets:["MVP builds","Validation","Rapid prototyping","Scaling"],
img:"/images/services/mvp.png"
},
{
title:"AI & ML",
desc:"AI systems that learn, automate and deliver insights.",
bullets:["AI agents","Chatbots","Analytics","Automation"],
img:"/images/services/ai.png"
},
{
title:"Hardware & IoT",
desc:"Smart connected ecosystems linking physical devices with digital intelligence.",
bullets:["IoT devices","Sensors","Automation","Dashboards"],
img:"/images/services/iot.png"
},
{
title:"ERP & CRM",
desc:"Enterprise systems that streamline operations and relationships.",
bullets:["ERP systems","CRM tools","Dashboards","Automation"],
img:"/images/services/erp.png"
},
{
title:"Resource Outsourcing",
desc:"Scale teams with expert talent and flexible support.",
bullets:["Dedicated teams","Developers","Designers","QA support"],
img:"/images/services/outsource.png"
},
{
title:"Custom Software",
desc:"Tailored software built exactly around your workflow.",
bullets:["Enterprise apps","APIs","Security","Cloud systems"],
img:"/images/services/software.png"
}

].map((s,i)=>{

const right = i % 2 !== 0

return (
<div key={i} className="relative w-full group">

  {/* FULL WIDTH IMAGE */}
  <div className="relative w-full h-[90vh] overflow-hidden">


    {/* IMAGE */}
    <Image
      src={s.img}
      alt={s.title}
      fill
      className="
        object-cover
        transition-all
        duration-[1400ms]
        ease-out
        group-hover:scale-110
        group-hover:rotate-[0.6deg]
        group-hover:contrast-110
        group-hover:brightness-95
      "
    />

    {/* DARK OVERLAY */}
    <div className="
      absolute inset-0 bg-black/30
      transition-all duration-700
      group-hover:bg-black/10
    "/>

  </div>

  {/* TEXT BLOCK */}
  <div className={`
    relative -mt-[18vh]
    px-[8vw]
    ${right ? "text-right" : "text-left"}
  `}>

    <div className={`
      bg-white
      max-w-[720px]
      p-[4vw]
      shadow-xl
      transition-all duration-500
      group-hover:shadow-2xl
      ${right ? "ml-auto" : ""}
    `}>

      <h3 className="text-[clamp(2.5rem,4vw,3.4rem)] font-semibold mb-6">
        {s.title}
      </h3>

      <p className="text-black/70 text-[18px] leading-[1.9] mb-6">
        {s.desc}
      </p>

      <ul className="space-y-2 text-black/80 text-[17px]">
        {s.bullets.map((b,idx)=>(
          <li key={idx} className="flex gap-3">
            <span>•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

    </div>
  </div>

</div>
)

})}

</div>
</section>



{/* ===============================
   WHY WORK WITH US — CENTERED EDITORIAL
=============================== */}
<section className="relative w-full bg-white px-[8vw] py-[24vh]">

  <div className="max-w-[1200px] mx-auto text-center">

    {/* Label */}
    <span className="text-[13px] tracking-[0.3em] uppercase text-black/50">
      Partnership
    </span>

    {/* Title */}
    <h2 className="
      srv-anim
      text-[clamp(3.5rem,7vw,7rem)]
      font-semibold
      leading-[0.95]
      mt-[3vh]
      mb-[10vh]
      text-[#2b2e2f]
    ">
      Why work with us
    </h2>

    {/* Full Description */}
    <div className="
      srv-anim
      text-[20px]
      leading-[2]
      text-black/70
      max-w-[950px]
      mx-auto
    ">
      <p>
        Our goal is to simplify complexity, add value, and amplify impact.
        Every delivery is born from a collaborative process — balancing
        sensitivity, strategy, and execution to create meaningful outcomes
        with consistency and precision.
      </p>

      <p className="mt-6">
        Working with us is not outsourcing — it’s partnership.
        We embed ourselves into your process, your culture, and your vision,
        building long-term systems instead of short-term solutions.
        We think with you, design with purpose, and build with care —
        ensuring every project grows with your brand and evolves over time.
      </p>
    </div>

  </div>

</section>




    </main>
  );
}
