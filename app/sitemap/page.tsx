"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SitemapPage() {
  return (
    <main className="w-full bg-white text-[#071A1F] overflow-x-hidden">

      {/* HERO */}
      <section className="px-5 sm:px-8 lg:px-[8vw] pt-[12vh] sm:pt-[14vh] lg:pt-[16vh] pb-[8vh] sm:pb-[10vh] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-[clamp(2.2rem,7vw,5.5rem)]
            font-semibold
            tracking-[-0.03em]
            mb-4
          "
        >
          <span className="bg-gradient-to-r from-[#071A1F] via-[#1F6677] to-[#4DA6B8] bg-clip-text text-transparent">
            Sitemap
          </span>
        </motion.h1>

        <p className="text-black/50 text-sm sm:text-base">
          Explore all pages of Qiro Tech
        </p>
      </section>

      {/* SITEMAP GRID */}
      <section className="px-5 sm:px-8 lg:px-[8vw] pb-[10vh] sm:pb-[12vh] lg:pb-[14vh]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {sitemap.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                bg-[#F6FBFC]
                p-6 sm:p-7 lg:p-8
                rounded-2xl
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 text-[#071A1F]">
                {group.title}
              </h3>

              <ul className="space-y-2 sm:space-y-3">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="
                        text-black/70
                        hover:text-[#1F6677]
                        transition
                        text-sm sm:text-base
                        break-words
                      "
                    >
                      → {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}


/* ================= DATA ================= */

const sitemap = [
  {
  title: "Home",
  links: [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/about" },
    { name: "Our Expertise", href: "/services" },
  ],
},


  {
    title: "Services",
    links: [
      { name: "Website Development & SEO Services", href: "/services" },
    { name: "UI & UX Design", href: "/services" },
    { name: "Custom Software Development", href: "/services" },
    { name: "Mobile & Web App", href: "/services" },
    { name: "Software Maintenance and Support", href: "/services" },
    { name: "IoT Application Development", href: "/services" },
    { name: "AI-ML Solutions", href: "/services" },
    { name: "Infrastructure Management Services", href: "/services" },
    ],
  },

  {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Who We Are", href: "/about" },
      { name: "Mission and Vision", href: "/about" },
    ],
  },

  {
    title: "Works",
    links: [
      { name: "Our Projects", href: "/works" },
     
    ],
  },

  {
    title: "Career",
    links: [
      { name: "Join Our Team", href: "/career" },
      { name: "Current Openings", href: "/career" },
    ],
  },

  {
    title: "Contact",
    links: [
      { name: "Find Location", href: "/contact" },
      { name: "Request for Services", href: "/contact" },
    ],
  },
];
