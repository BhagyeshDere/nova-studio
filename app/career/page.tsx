"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function CareersPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current.querySelectorAll(".reveal"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  const jobs = [
    {
      role: "Software Engineer",
      type: "Full-time",
      desc: "Build scalable applications and APIs.",
      responsibilities: [
        "Develop scalable backend services",
        "Write clean and maintainable code",
        "Collaborate with cross-functional teams",
        "Participate in code reviews",
      ],
      requirements: [
        "2+ years experience in development",
        "Strong JS/TS knowledge",
        "API & database experience",
        "Problem-solving mindset",
      ],
    },
    {
      role: "Frontend Developer",
      type: "Full-time",
      desc: "Create modern responsive interfaces.",
      responsibilities: [
        "Build responsive UI",
        "Optimize performance",
        "Work with design systems",
      ],
      requirements: [
        "React/Next.js experience",
        "Good CSS/Tailwind skills",
        "UI/UX understanding",
      ],
    },
    {
      role: "AI/ML Engineer",
      type: "Full-time",
      desc: "Develop intelligent AI-driven solutions.",
      responsibilities: [
        "Build ML models",
        "Deploy AI services",
        "Analyze datasets",
      ],
      requirements: [
        "Python & ML frameworks",
        "Data analysis skills",
        "AI deployment knowledge",
      ],
    },
    {
      role: "DevOps Engineer",
      type: "Full-time",
      desc: "Manage cloud infrastructure and CI/CD.",
      responsibilities: [
        "Maintain CI/CD pipelines",
        "Cloud deployments",
        "Infrastructure monitoring",
      ],
      requirements: [
        "AWS/GCP/Azure experience",
        "Docker & CI/CD knowledge",
        "Security best practices",
      ],
    },
  ];

  const toggleJob = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <main
      ref={pageRef}
      className="bg-white text-black overflow-x-hidden text-[15px] sm:text-[16px]"
    >

{/* ================= HERO ================= */}
<section className="relative min-h-[70vh] sm:min-h-[80vh] lg:h-[90vh] flex items-center justify-center text-center bg-white">

  <div className="relative z-10 px-5 sm:px-10 lg:px-[8vw] text-black">
    <p className="reveal uppercase tracking-[0.35em] text-xs sm:text-sm text-[#1F6677] mb-6">
      CAREERS
    </p>

    <h1 className="reveal text-[clamp(2.4rem,9vw,6rem)] font-semibold leading-[1.05]">

      {/* GRADIENT PART */}
      <span className="
        block
        bg-gradient-to-r
        from-[#071A1F]
        via-[#1F6677]
        to-[#4DA6B8]
        bg-clip-text text-transparent
      ">
        Build technology
      </span>

      {/* BLACK PART */}
      <span className="block text-black">
        that shapes the future.
      </span>

    </h1>

    <p className="reveal mt-6 max-w-[620px] mx-auto text-black/70 text-[16px] sm:text-lg leading-[1.8]">
      Join Qiro Tech and work on real-world software solutions.
    </p>
  </div>
</section>

{/* ================= OPEN ROLES ================= */}
<section className="px-5 sm:px-10 lg:px-[8vw] py-[16vh] bg-gradient-to-br from-[#071A1F] via-[#0E3A43] to-[#1F6677] text-white">

  <div className="mb-[10vh]">
    <p className="reveal uppercase tracking-[0.35em] text-sm text-[#1F6677] mb-4">
      Open Roles
    </p>

    <h2 className="reveal text-[clamp(2.4rem,7vw,5rem)] font-semibold">
      Join Qiro Tech
    </h2>
  </div>

  <div className="max-w-[1100px] mx-auto">

    {jobs.map((job,i)=>(
      <div key={i} className="reveal border-t border-white/20 py-8">

        <div
          onClick={() => toggleJob(i)}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 cursor-pointer group"
        >
          <div>
            <h3 className="text-[clamp(1.8rem,5vw,2.6rem)] font-semibold">
              {job.role}
            </h3>

            <p className="mt-3 text-white/70 max-w-[520px] leading-[1.8]">
              {job.desc}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="uppercase text-xs tracking-[0.3em] text-white">
              {job.type}
            </span>

            <span className={`text-xl text-white transition ${openIndex === i ? "rotate-90" : ""}`}>
              →
            </span>
          </div>
        </div>

        {openIndex === i && (
          <div className="mt-8 grid md:grid-cols-2 gap-10 bg-white text-black p-6 rounded-xl shadow-md">

            <div>
              <h4 className="font-semibold mb-3 text-[#1F6677]">
                Responsibilities
              </h4>
              <ul className="space-y-2 text-black/70">
                {job.responsibilities.map((r,idx)=>(
                  <li key={idx}>• {r}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#1F6677]">
                Requirements
              </h4>
              <ul className="space-y-2 text-black/70">
                {job.requirements.map((r,idx)=>(
                  <li key={idx}>• {r}</li>
                ))}
              </ul>

              <a
                href="mailto:careers@qirotech.com"
                className="inline-block mt-6 px-6 py-3 bg-[#1F6677] text-white rounded-full hover:opacity-90 transition"
              >
                Apply Now
              </a>
            </div>

          </div>
        )}

      </div>
    ))}

  </div>
</section>

{/* ================= TEAM IMAGE ================= */}
<section className="relative w-full py-[12vh] bg-white">
  <div className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[100vh] overflow-hidden">
    <Image
      src="/images/careers/team1.png"
      alt="Team"
      fill
      className="object-cover transition duration-[1400ms] hover:scale-105"
    />
  </div>
</section>

{/* ================= CTA ================= */}
<section className="bg-[#F6FBFC] px-5 sm:px-10 lg:px-[8vw] py-[16vh] sm:py-[18vh] lg:py-[22vh]">

  <div className="max-w-[900px] mx-auto text-center text-black">

    <p className="reveal uppercase tracking-[0.35em] text-sm text-[#1F6677] mb-6">
      Careers
    </p>

    <h2 className="reveal text-[clamp(2.4rem,7vw,5rem)] font-semibold mb-8">
      Don’t see your role?
    </h2>

    <p className="reveal text-black/70 text-[16px] sm:text-[18px] leading-[1.8] max-w-[520px] mx-auto mb-12">
      We’re always looking for talented engineers and innovators.
    </p>

    <a
      href="mailto:hr@qirotec.com"
      className="
        reveal inline-flex items-center gap-3
        px-10 py-4
        border border-[#1F6677]
        text-[#1F6677]
        rounded-full
        text-[15px]
        transition
        hover:bg-[#1F6677]
        hover:text-white
      "
    >
      hr@qirotec.com
      <span>→</span>
    </a>

  </div>

</section>

    </main>
  );
}
