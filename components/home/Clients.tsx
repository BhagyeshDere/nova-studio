"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

const clients = [
  { name: "NXP", src: "/images/clients/nxp.svg" },
  { name: "IKEA", src: "/images/clients/ikea.svg" },
  { name: "Zara", src: "/images/clients/zara.svg" },
  { name: "Zebra Technologies", src: "/images/clients/zebratechnologies.svg" },

  { name: "Lenovo", src: "/images/clients/lenovo.svg" },
  { name: "BMW", src: "/images/clients/bmw.svg" },
  { name: "PayPal", src: "/images/clients/paypal.svg" },
  { name: "Spotify", src: "/images/clients/spotify.svg" },

  { name: "Samsung", src: "/images/clients/samsung.svg" },
  { name: "Meta", src: "/images/clients/meta.svg" },
  { name: "Sony", src: "/images/clients/sony.svg" },
  { name: "FIFA", src: "/images/clients/fifa.svg" },

  { name: "Peugeot", src: "/images/clients/peugeot.svg" },
  { name: "Unraid", src: "/images/clients/unraid.svg" },
  { name: "CountingWorks Pro", src: "/images/clients/countingworkspro.svg" },
  { name: "McDonalds", src: "/images/clients/mcdonalds.svg" },
];

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".client-logo"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white">
      <div className="px-[8vw] py-[14vh]">

        {/* Label */}
        <div className="mb-[8vh] text-[11px] uppercase tracking-[0.35em] opacity-50">
          <h1>Trusted by global brands</h1>
        </div>

        {/* 4 × 4 GRID */}
        <div
          className="
            grid
            grid-cols-4
            gap-y-[10vh]
            gap-x-[8vw]
            items-center
            justify-items-center
          "
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="
                client-logo
                flex
                items-center
                justify-center
              "
            >
              <img
                src={client.src}
                alt={client.name}
                className="
                  h-[88px]
                  w-auto
                  opacity-85
                  grayscale
                  transition-all
                  duration-500
                  hover:opacity-100
                  hover:grayscale-0
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
