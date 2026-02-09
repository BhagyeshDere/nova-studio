"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // ✅ added

export default function WorksPage() {
  return (
    <main className="w-full bg-white text-[#071A1F] overflow-x-hidden">

      {/* HERO */}
      <section className="px-6 sm:px-10 lg:px-[8vw] pt-[16vh] pb-[10vh] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(3rem,6vw,6rem)] font-semibold tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#1F6677] to-[#4DA6B8] bg-clip-text text-transparent">
            Our Works
          </span>
        </motion.h1>

        <p className="text-black/60 mt-4 max-w-xl mx-auto">
          Custom Digital Products & Enterprise Solutions crafted with
          performance, scalability, and modern design.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="px-6 sm:px-10 lg:px-[8vw] pb-[14vh] space-y-28">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >

            {/* TEXT SIDE */}
            <div className="space-y-6">

              <h2 className="text-4xl font-semibold">
                {project.title}
              </h2>

              <div className="bg-[#1F6677]/10 p-6 rounded-xl border border-[#1F6677]/20">
                <h3 className="font-semibold mb-2 text-[#1F6677]">
                  Project Overview
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="bg-[#1F6677]/10 p-6 rounded-xl border border-[#1F6677]/20">
                <h3 className="font-semibold mb-2 text-[#1F6677]">
                  Key Features
                </h3>
                <ul className="text-sm space-y-2 text-black/70">
                  {project.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* IMAGE SIDE */}
            <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-xl border border-[#1F6677]/20">
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

      {/* CONTACT SECTION */}
      <section className="bg-[#E6F4F7] px-6 sm:px-10 lg:px-[8vw] py-[12vh] text-center text-[#071A1F]">

        <h2 className="text-4xl font-semibold mb-6">
          Let's Build Something Great
        </h2>

        <p className="text-black/60 mb-10">
          Have a project in mind? Reach out to Qiro Tech.
        </p>

        <div className="space-y-3 text-black/80 text-lg">
          <p>📧 hr@qirotec.com</p>
          <p>📞 +91 9284117439</p>
          <p>
            📍 Office No. 235, 2nd Floor, Xion Mall,  
            Hinjewadi Phase 1, Pune – 411057
          </p>
        </div>

        {/* ✅ Updated button */}
        <Link href="/contact">
          <button className="mt-10 bg-[#1F6677] hover:bg-[#4DA6B8] text-white px-8 py-4 rounded-full transition shadow-lg">
            Contact Us
          </button>
        </Link>

      </section>

    </main>
  );
}

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "P. N. Gadgil & Sons Ltd.",
    image: "/images/projects/project1.png",
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
    image: "/images/projects/project2.png",
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
    image: "/images/projects/project3.png",
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
    image: "/images/projects/project4.png",
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
    image: "/images/projects/project5.png",
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
    image: "/images/projects/project6.png",
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
