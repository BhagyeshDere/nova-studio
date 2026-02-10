"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/animations";
import FlowingCapsule from "@/reactbits/FlowingCapsule";
import Link from "next/link";

export default function ServicesFlowing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".flow-line, .flow-fade"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  const services = [
    {
      name: "Website Development & SEO Services",
      image: "/images/services/web4.png",
    },
    {
      name: "UI & UX Design",
      image: "/images/services/uiux4.png",
    },
    {
      name: "Custom Software Development",
      image: "/images/services/software2.png",
    },
    {
      name: "Mobile & Web App",
      image: "/images/services/app5.png",
    },
    {
      name: "Software Maintenance and Support",
      image: "/images/services/support2.png",
    },
    {
      name: "IoT Application Development",
      image: "/images/services/iot2.png",
    },
    {
      name: "AI-ML Solutions",
      image: "/images/services/ai2.png",
    },
    {
      name: "Infrastructure Management Services",
      image: "/images/services/infrastructure2.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-white
        text-[#071A1F]
        px-5 sm:px-10 lg:px-[6vw]
        pb-[12vh]
      "
    >
      <div className="max-w-[1500px] mx-auto text-center">

        {/* LABEL */}
        <p className="flow-fade text-sm tracking-[0.35em] uppercase text-[#1F6677] mb-[7vh]">
          OUR EXPERTISE
        </p>

        {/* SERVICES */}
        <div
          className="
            font-semibold
            leading-[1.15]
            space-y-[5vh]
            text-[clamp(1.4rem,4vw,3rem)]
          "
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="
                flow-line
                flex flex-col lg:flex-row
                items-center
                justify-center
                gap-4 lg:gap-8
              "
            >
              {/* TEXT */}
              <span className="text-center">
                {service.name}
              </span>

              {/* CAPSULE */}
              <Capsule
                text={service.name}
                image={service.image}
              />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flow-fade mt-[9vh]">
          <Link href="/services">
            <button
              className="
                px-8 py-4
                bg-[#1F6677]
                text-white
                rounded-full
                border border-[#1F6677]
                transition
                hover:bg-white
                hover:text-[#1F6677]
              "
            >
              Explore Services →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* CAPSULE COMPONENT */
function Capsule({ text, image }: any) {
  return (
    <div
      className="
        w-[220px] sm:w-[260px] lg:w-[300px]
        h-[46px] sm:h-[54px]
        rounded-full
        overflow-hidden
        border border-[#1F6677]/30
        flex-shrink-0
        bg-white
      "
    >
      <FlowingCapsule
        text={text}
        image={image}
        speed={18}
      />
    </div>
  );
}
