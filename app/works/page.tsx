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
      <section className="w-full">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              px-5 sm:px-8 lg:px-[8vw]
              py-[5vh]
            "
          >

            {/* ALTERNATING LAYOUT */}
            <div className="
              grid lg:grid-cols-2
              gap-12
              items-center
              max-w-7xl
              mx-auto
            ">

              {/* IMAGE */}
              <div className={`
                relative w-full
                h-[65vh] lg:h-[75vh]
                overflow-hidden
                ${i % 2 !== 0 ? "lg:order-2" : ""}
              `}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div className={`
                space-y-6
                ${i % 2 !== 0 ? "lg:order-1" : ""}
              `}>

                <h2 className="
                  text-[clamp(2rem,4.5vw,3rem)]
                  font-semibold
                ">
                  {project.title}
                </h2>

                {/* OVERVIEW */}
                <div className="
                  bg-[#1F6677]/10
                  p-6
                  rounded-xl
                  border border-[#1F6677]/20
                ">
                  <h3 className="font-semibold mb-3 text-[#1F6677]">
                    Project Overview
                  </h3>

                  <p className="text-[15px] leading-relaxed text-black/70">
                    {project.overview}
                  </p>

                  <p className="text-[15px] leading-relaxed text-black/70 mt-3">
                    This project was designed with a strong focus on user
                    experience, scalability, and long-term business growth.
                    Our team ensured seamless performance, modern UI design,
                    and future-ready architecture.
                  </p>
                </div>

                {/* FEATURES */}
                <div className="
                  bg-[#1F6677]/10
                  p-6
                  rounded-xl
                  border border-[#1F6677]/20
                ">
                  <h3 className="font-semibold mb-3 text-[#1F6677]">
                    Key Features
                  </h3>

                  <ul className="space-y-2 text-black/70">
                    {project.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                </div>

              </div>

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
      "Enterprise retail solution enabling fleet tracking, expense reporting, and large-scale operational control. Built to handle enterprise-scale logistics and improve operational visibility across locations.",
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
      "Centralized CRM unifying operations across multiple companies with real-time data insights and streamlined communication between departments.",
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
      "Modern ecommerce platform for sports retail featuring a seamless shopping experience, fast performance, and secure transactions.",
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
      "Sales management platform that empowers teams with insights, real-time tracking, and improved conversion strategies.",
    features: [
      "Lead management",
      "Sales pipeline tracking",
      "Live reports",
      "Access control",
    ],
  },

  {
    title: "CRM Innovation HRMS",
    image: "/images/projects/project5555.png",
    overview:
      "Comprehensive HR management solution simplifying employee lifecycle management and internal processes.",
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
      "Corporate website built to showcase sustainable water solutions with a strong brand story and modern UI.",
    features: [
      "SEO-optimized design",
      "Responsive layout",
      "Modern UI/UX",
      "Brand storytelling",
    ],
  },
];
