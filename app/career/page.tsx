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
      className="bg-white text-black overflow-x-hidden text-[14px] sm:text-[15px] md:text-[16px]"
    >

{/* ================= HERO ================= */}
<section className="
  relative
  min-h-[80vh]
  flex items-center justify-center
  text-center
  bg-white
">

  <div className="
    w-full
    max-w-[1000px]
    mx-auto
    px-6 sm:px-10 lg:px-[8vw]
  ">

    {/* CAREERS LABEL */}
    <p className="
      uppercase
      tracking-[0.35em]
      text-[12px]
      text-[#1F6677]
      mb-6
    ">
      CAREERS
    </p>

    {/* 2-LINE HEADING */}
    <h1 className="
      font-semibold
      leading-[1.05]
      tracking-[-0.02em]
    ">

      {/* LINE 1 */}
      <span className="
        block
        text-[clamp(3rem,6vw,5.8rem)]
        bg-gradient-to-r
        from-[#071A1F]
        via-[#1F6677]
        to-[#4DA6B8]
        bg-clip-text
        text-transparent
      ">
        Build technology
      </span>

      {/* LINE 2 */}
      <span className="
        block
        text-[clamp(2.8rem,5.5vw,5.3rem)]
        text-black
      ">
        that shapes the future.
      </span>

    </h1>

    {/* SUBTEXT */}
    <p className="
      mt-8
      max-w-[560px]
      mx-auto
      text-black/60
      text-[16px]
      leading-[1.8]
    ">
      Join Qiro Tech and work on real-world software solutions.
    </p>

  </div>

</section>




{/* ================= JOIN OUR TEAM ================= */}
<section className="px-4 sm:px-8 md:px-12 lg:px-[8vw] py-[10vh] sm:py-[12vh] lg:py-[16vh] bg-[#F6FBFC]">

  <div className="max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-14 items-center">

    <div className="reveal">
      <h2 className="text-[clamp(1.8rem,5vw,4rem)] font-semibold leading-tight">
        Join <span className="text-[#1F6677]">Our Team</span>
      </h2>

      <p className="mt-5 sm:mt-6 text-black/70 leading-[1.9] max-w-[520px]">
        At Qiro Tech, you’ll work on impactful projects,
        collaborate with talented people and grow your career
        in a culture that values innovation and learning.
      </p>

      <p className="mt-4 text-black/60 leading-[1.9] max-w-[520px]">
        We believe great products are built by great teams.
        If you love solving problems and building technology,
        you’ll feel at home here.
      </p>
    </div>

    <div className="reveal relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
      <Image
        src="/images/careers/team2.png"
        alt="Join our team"
        fill
        className="object-cover"
      />
    </div>

  </div>

</section>


{/* ================= WHY JOIN QIRO TECH ================= */}
<section className="px-4 sm:px-8 md:px-12 lg:px-[8vw] py-[10vh] sm:py-[12vh] lg:py-[16vh] bg-white">

  <div className="max-w-[1000px] mx-auto text-center">

    <h2 className="reveal text-[clamp(1.8rem,5vw,4rem)] font-semibold">
      Why Join <span className="text-[#1F6677]">Qiro Tech Innovation?</span>
    </h2>

    <p className="reveal mt-5 sm:mt-6 text-black/70 leading-[1.9] max-w-[720px] mx-auto">
      We create an environment where creativity meets technology.
      Our teams work on cutting-edge solutions across AI,
      cloud and enterprise platforms.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-12 sm:mt-14 text-left">

      <div className="reveal">
        <h4 className="font-semibold text-[#1F6677] mb-2">Growth</h4>
        <p className="text-black/70 leading-[1.8]">
          Continuous learning, mentorship and real-world
          project experience.
        </p>
      </div>

      <div className="reveal">
        <h4 className="font-semibold text-[#1F6677] mb-2">Innovation</h4>
        <p className="text-black/70 leading-[1.8]">
          Work on modern technologies and
          forward-thinking solutions.
        </p>
      </div>

      <div className="reveal">
        <h4 className="font-semibold text-[#1F6677] mb-2">Culture</h4>
        <p className="text-black/70 leading-[1.8]">
          A collaborative and transparent workplace
          that values ideas.
        </p>
      </div>

    </div>

  </div>

</section>


{/* ================= OPEN ROLES ================= */}
<section className="px-4 sm:px-8 md:px-12 lg:px-[8vw] py-[10vh] sm:py-[12vh] lg:py-[16vh] bg-gradient-to-br from-[#071A1F] via-[#0E3A43] to-[#1F6677] text-white">

  <div className="mb-[8vh] sm:mb-[10vh]">
    <p className="reveal uppercase tracking-[0.3em] text-xs sm:text-sm text-[#1F6677] mb-4">
      Open Roles
    </p>

    <h2 className="reveal text-[clamp(2rem,6vw,5rem)] font-semibold">
      Join Qiro Tech
    </h2>
  </div>

  <div className="max-w-[1100px] mx-auto">
    {jobs.map((job,i)=>(
      <div key={i} className="reveal border-t border-white/20 py-6 sm:py-8">

        <div
          onClick={() => toggleJob(i)}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 cursor-pointer"
        >
          <div>
            <h3 className="text-[clamp(1.5rem,4vw,2.6rem)] font-semibold">
              {job.role}
            </h3>

            <p className="mt-2 sm:mt-3 text-white/70 max-w-[520px] leading-[1.8]">
              {job.desc}
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="uppercase text-xs tracking-[0.3em] text-white">
              {job.type}
            </span>

            <span className={`text-xl transition ${openIndex === i ? "rotate-90" : ""}`}>
              →
            </span>
          </div>
        </div>

        {openIndex === i && (
          <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-6 sm:gap-10 bg-white text-black p-5 sm:p-6 rounded-xl shadow-md">

            <div>
              <h4 className="font-semibold mb-2 text-[#1F6677]">Responsibilities</h4>
              <ul className="space-y-2 text-black/70">
                {job.responsibilities.map((r,idx)=>(
                  <li key={idx}>• {r}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-[#1F6677]">Requirements</h4>
              <ul className="space-y-2 text-black/70">
                {job.requirements.map((r,idx)=>(
                  <li key={idx}>• {r}</li>
                ))}
              </ul>

              <a
                href="mailto:careers@qirotech.com"
                className="inline-block mt-5 sm:mt-6 px-6 py-3 bg-[#1F6677] text-white rounded-full hover:opacity-90 transition"
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


{/* ================= CTA ================= */}
<section className="bg-[#F6FBFC] px-4 sm:px-8 md:px-12 lg:px-[8vw] py-[10vh] sm:py-[12vh] lg:py-[16vh]">

  <div className="max-w-[900px] mx-auto text-center text-black">

    <p className="reveal uppercase tracking-[0.3em] text-xs sm:text-sm text-[#1F6677] mb-5 sm:mb-6">
      Careers
    </p>

    <h2 className="reveal text-[clamp(2rem,6vw,5rem)] font-semibold mb-6 sm:mb-8">
      Don’t see your role?
    </h2>

    <p className="reveal text-black/70 text-sm sm:text-base md:text-lg leading-[1.8] max-w-[520px] mx-auto mb-10 sm:mb-12">
      We’re always looking for talented engineers and innovators.
    </p>

    <a
      href="mailto:hr@qirotec.com"
      className="reveal inline-flex items-center gap-3 px-8 sm:px-10 py-4 border border-[#1F6677] text-[#1F6677] rounded-full hover:bg-[#1F6677] hover:text-white transition"
    >
      hr@qirotec.com →
    </a>

  </div>

</section>

</main>
  );
}
