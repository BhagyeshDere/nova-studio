"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

const clients = [
  "nxp","ikea","zara","zebratechnologies",
  "lenovo","bmw","paypal","spotify",
  "samsung","meta","sony","fifa",
  "peugeot","unraid","countingworkspro","mcdonalds"
];

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(
      sectionRef.current.querySelectorAll(".client-logo"),
      {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">

      <div className="px-6 lg:px-[8vw] py-[12vh] sm:py-[14vh]">

        {/* TITLE */}
        <h2 className="
          text-center
          text-[12px]
          uppercase
          tracking-[0.35em]
          text-[#1F6677]
          mb-[8vh]
        ">
          Trusted by global brands
        </h2>

        {/* GRID */}
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-y-[6vh]
          sm:gap-y-[8vh]
          gap-x-[6vw]
          place-items-center
        ">
          {clients.map((name,i)=>(

            <div key={i} className="client-logo">

              <div className="
                relative
                h-[40px]
                sm:h-[55px]
                md:h-[65px]
                w-[120px]
                sm:w-[150px]
              ">
                <Image
                  src={`/images/clients/${name}.svg`}
                  alt={name}
                  fill
                  className="
                    object-contain
                    opacity-80
                    transition
                    duration-300
                    hover:opacity-100
                    hover:scale-110
                  "
                />
              </div>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
}
