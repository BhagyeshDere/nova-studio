"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    gsap.fromTo(
      pageRef.current.querySelectorAll("section"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );

    gsap.utils.toArray<HTMLElement>(".srv-anim").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".group").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

  }, []);

  const services = [
    {
      title:"Website Development & SEO Services",
      desc:"High-performance websites built for visibility and growth.",
      bullets:["Corporate sites","E-commerce","SEO optimization","Speed performance"],
      img:"/images/services/web.png"
    },
    {
      title:"UI & UX Design",
      desc:"Design systems focused on clarity and usability.",
      bullets:["UX research","Wireframes","Prototypes","Design systems"],
      img:"/images/services/uiux1.png"
    },
    {
      title:"Custom Software Development",
      desc:"Tailor-made systems for your business logic.",
      bullets:["Enterprise apps","API integrations","Cloud systems","Security-first"],
      img:"/images/services/software.png"
    },
    {
      title:"Mobile & Web App",
      desc:"Apps that feel smooth, fast and intuitive.",
      bullets:["iOS & Android","Cross-platform","Backend APIs","Deployment"],
      img:"/images/services/app1.png"
    },
    {
      title:"Software Maintenance & Support",
      desc:"Reliable support to keep systems running.",
      bullets:["Monitoring","Bug fixing","Upgrades","24/7 support"],
      img:"/images/services/support.png"
    },
    {
      title:"IoT Application Development",
      desc:"Smart ecosystems connecting devices and data.",
      bullets:["Sensors","Dashboards","Automation","Real-time data"],
      img:"/images/services/iot.png"
    },
    {
      title:"AI-ML Solutions",
      desc:"Automation and intelligence for modern business.",
      bullets:["AI agents","Chatbots","Analytics","Predictions"],
      img:"/images/services/ai.png"
    },
    {
      title:"Infrastructure Management Services",
      desc:"Secure and scalable infrastructure solutions.",
      bullets:["Cloud setup","DevOps","Security","Monitoring"],
      img:"/images/services/infrastructure.png"
    }
  ];

  return (
<main ref={pageRef} className="w-full overflow-x-hidden bg-white text-[#071A1F]">

{/* HERO */}
<section className="px-5 sm:px-8 lg:px-[6vw] pt-[12vh] sm:pt-[16vh] lg:pt-[20vh] pb-[8vh]">

  <h1 className="srv-anim font-semibold leading-[0.95] tracking-[-0.03em] text-[clamp(2.4rem,6.5vw,8rem)]">
    
    {/* LINE 1 — GRADIENT */}
    <span className="
      block
      bg-gradient-to-r 
      from-[#071A1F] 
      via-[#1F6677] 
      to-[#4DA6B8]
      bg-clip-text text-transparent
    ">
      We build powerful software
    </span>

    {/* LINE 2 — BLACK */}
    <span className="block text-black">
      for modern businesses.
    </span>

  </h1>

  <div className="srv-anim mt-6 w-[70px] h-[3px] bg-[#1F6677]/40"/>

  <p className="srv-anim mt-6 sm:mt-8 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.8] text-[#071A1F]/70">
    At Qiro Tech, we partner with businesses to design,
    develop, and scale digital solutions — from custom
    software and AI systems to cloud infrastructure and
    enterprise applications.
  </p>

</section>

{/* SERVICES */}
<section className="w-full">

  <div className="px-5 sm:px-8 lg:px-[8vw] pt-[8vh] pb-[5vh]">
    <span className="uppercase text-xs sm:text-sm tracking-[0.3em] text-[#1F6677]">
      Our Expertise
    </span>

    <h2 className="text-[clamp(2.2rem,7vw,6rem)] font-semibold mt-4">
      Technology Solutions We Deliver
    </h2>
  </div>

  <div className="flex flex-col gap-[10vh] sm:gap-[14vh]">

    {services.map((s,i)=>{
      const isRight = i % 2 !== 0;

      return(
        <div key={i} className="group">

          <div className="relative w-full h-[38vh] sm:h-[55vh] lg:h-[80vh] overflow-hidden">
            <Image
              src={s.img}
              alt={s.title}
              fill
              className="object-cover transition duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#1F6677]/25 group-hover:bg-[#1F6677]/10 transition"/>
          </div>

          <div className="relative -mt-[6vh] sm:-mt-[10vh] px-5 sm:px-8 lg:px-[8vw]">

            <div className={`bg-white/95 backdrop-blur-sm max-w-[680px] p-6 sm:p-10 shadow-2xl rounded-2xl ${isRight ? "ml-auto" : ""}`}>

              <h3 className="text-[clamp(1.6rem,5vw,3rem)] font-semibold mb-4">
                {s.title}
              </h3>

              <p className="text-[#071A1F]/70 text-[15px] sm:text-[16px] leading-[1.8] mb-4">
                {s.desc}
              </p>

              <ul className="space-y-2 text-[#071A1F]/80 text-[14px] sm:text-[15px]">
                {s.bullets.map((b,idx)=>(
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#1F6677]">•</span>
                    {b}
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

{/* WHY US */}
<section className="px-5 sm:px-8 lg:px-[8vw] py-[12vh] sm:py-[16vh] text-center bg-gradient-to-b from-white to-[#F6FBFC]">

<span className="uppercase text-xs sm:text-sm tracking-[0.3em] text-[#1F6677]">
  Partnership
</span>

<h2 className="text-[clamp(2.2rem,7vw,6rem)] font-semibold mt-6 mb-8">
  Why work with us
</h2>

<p className="text-[16px] sm:text-[18px] leading-[1.9] text-[#071A1F]/70 max-w-[900px] mx-auto">
  We simplify complexity and amplify impact. Working with us is partnership —
  we embed into your culture and vision, building long-term systems.
</p>

</section>

</main>
  );
}
