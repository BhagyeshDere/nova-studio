"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="w-full bg-white text-[#071A1F] overflow-x-hidden">

      {/* HERO */}
      <section className="
        px-5 sm:px-8 lg:px-[8vw]
        pt-[12vh] sm:pt-[14vh] lg:pt-[16vh]
        pb-[8vh] sm:pb-[10vh]
        text-center
      ">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-[clamp(2.5rem,7vw,6rem)]
            font-semibold
            tracking-tight
          "
        >
          <span className="text-black">Our </span>

          <span className="bg-gradient-to-r from-[#1F6677] to-[#4DA6B8] bg-clip-text text-transparent">
            Works
          </span>
        </motion.h1>

        <p className="
          text-black/60
          mt-4
          max-w-xl
          mx-auto
          text-[15px] sm:text-[16px] lg:text-[18px]
          leading-[1.8]
        ">
          Custom Digital Products & Enterprise Solutions crafted with
          performance, scalability, and modern design.
        </p>

      </section>


      {/* PROJECTS */}
      <section className="
        px-5 sm:px-8 lg:px-[8vw]
        pb-[12vh] sm:pb-[14vh]
        space-y-[12vh] sm:space-y-[18vh] lg:space-y-[32]
      ">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >

            {/* TEXT CONTENT */}
            <div className="space-y-6 text-center">

              <h2 className="
                text-[clamp(1.8rem,4.5vw,2.6rem)]
                font-semibold
              ">
                {project.title}
              </h2>

              <div className="
                bg-[#1F6677]/10
                p-5 sm:p-6
                rounded-xl
                border border-[#1F6677]/20
                text-left
              ">
                <h3 className="font-semibold mb-2 text-[#1F6677]">
                  Project Overview
                </h3>

                <p className="
                  text-sm
                  text-black/70
                  leading-relaxed
                ">
                  {project.overview}
                </p>
              </div>

              <div className="
                bg-[#1F6677]/10
                p-5 sm:p-6
                rounded-xl
                border border-[#1F6677]/20
                text-left
              ">
                <h3 className="font-semibold mb-2 text-[#1F6677]">
                  Key Features
                </h3>

                <ul className="
                  text-sm
                  space-y-2
                  text-black/70
                ">
                  {project.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* BIG IMAGE BELOW */}
            <div className="
              relative
              w-full
              h-[260px] sm:h-[380px] md:h-[460px] lg:h-[520px]
              mt-8 sm:mt-10
              rounded-2xl
              overflow-hidden
              shadow-2xl
              border border-[#1F6677]/20
            ">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

          </motion.div>
        ))}

      </section>

    </main>
  );
}


/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "P. N. Gadgil & Sons Ltd.",
    image: "/images/projects/project11.png",
    overview:
      "Enterprise retail solution enabling fleet tracking, expense reporting, and large-scale operational control.",
    features: [
      "Vehicle tracking & fleet management",
      "Expense reporting system",
      "Driver management",
      "Multi-location retail support",
    ],
  },

  {
    title: "Solarica Nexus – CRM",
    image: "/images/projects/project22.png",
    overview:
      "Centralized CRM unifying operations across multiple companies.",
    features: [
      "Central CRM database",
      "Multi-company management",
      "Workflow automation",
      "Unified reporting",
    ],
  },

  {
    title: "LGM Sports – Ecommerce",
    image: "/images/projects/project33.png",
    overview:
      "Modern ecommerce platform for sports retail with secure payments.",
    features: [
      "Advanced catalog system",
      "Secure checkout",
      "Admin dashboard",
      "High scalability",
    ],
  },

  {
    title: "Admark Digitech",
    image: "/images/projects/project44.png",
    overview:
      "Sales management platform for tracking leads and performance.",
    features: [
      "Lead management",
      "Sales pipeline tracking",
      "Live reports",
      "Access control",
    ],
  },

  {
    title: "DW Innovation HRMS",
    image: "/images/projects/project55.png",
    overview:
      "Employee management system centralizing HR operations.",
    features: [
      "Attendance management",
      "Leave system",
      "Performance tracking",
      "Secure storage",
    ],
  },

  {
    title: "Aquagreen Tech",
    image: "/images/projects/project66.png",
    overview:
      "Corporate website for sustainable water solutions company.",
    features: [
      "SEO-optimized design",
      "Responsive layout",
      "Modern UI/UX",
      "Brand storytelling",
    ],
  },
];
