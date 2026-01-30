"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

const clients = [
  "/images/clients/client1.png",
  "/images/clients/client2.png",
  "/images/clients/client3.png",
  "/images/clients/client4.png",
  "/images/clients/client5.png",
  "/images/clients/client6.png",
  "/images/clients/client7.png",
  "/images/clients/client8.png",
  "/images/clients/client9.png",
  "/images/clients/client10.png",
  "/images/clients/client11.png",
  "/images/clients/client12.png",
];

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".client-logo"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-black"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="px-[8vw] py-[20vh]">

        {/* Section label */}
        <div className="mb-[12vh] text-[11px] uppercase tracking-[0.35em] opacity-50">
          <h1>Trusted by global brands</h1>
        </div>

        {/* 4-column editorial grid */}
        <div
          className="
            grid 
            grid-cols-4
            gap-y-[14vh]
            gap-x-[10vw]
            items-center
          "
        >
          {clients.map((logo, i) => (
            <div
              key={i}
              className="client-logo flex items-center justify-center"
            >
              <Image
                src={logo}
                alt="Client logo"
                width={180}
                height={90}
                className="
                  object-contain 
                  opacity-90 
                  grayscale 
                  hover:grayscale-0 
                  transition-all 
                  duration-500
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
