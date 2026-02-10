"use client";

import Hero from "@/components/home/Hero";
import WorksShowcase from "@/components/home/WorksShowcase";
import About from "@/components/home/About";

import BlurText from "@/reactbits/BlurText";
import ScrollReveal from "@/reactbits/ScrollReveal";
import ServicesFlowing from "@/components/home/ServicesFlowing";

export default function Home() {
  return (
    <main
      className="
        relative
        w-full
        max-w-[100vw]
        overflow-x-hidden
      "
    >

      <Hero />

      <WorksShowcase />

      {/* ABOUT */}
      <section
        className="
          w-full
          bg-white
          text-black
          px-5 sm:px-8 md:px-10 lg:px-[8vw]
          pt-[4vh] sm:pt-[5vh] lg:pt-[6vh]
          pb-[8vh] sm:pb-[9vh] lg:pb-[10vh]
        "
      >

        <div className="max-w-[1600px] mx-auto w-full">

          <ScrollReveal>
            <span
              className="
                block
                font-semibold
                leading-[1.2]
                tracking-[-0.02em]
                text-black
                text-[clamp(2.2rem,6vw,4.5rem)]
                max-w-[1200px] xl:max-w-[1400px]
              "
            >
              Qiro Tech delivers smart software solutions that help businesses
              innovate, automate, and grow in the digital era.
            </span>
          </ScrollReveal>

          <div className="mt-[5vh] sm:mt-[6vh] lg:mt-[7vh]">
            <About />
          </div>

        </div>

      </section>

      {/* CINEMATIC LINE */}
      <section
        className="
          relative
          w-full
          bg-white
          text-black
          px-5 sm:px-8 md:px-10 lg:px-[8vw]
          pt-0
          pb-[6vh] sm:pb-[8vh] lg:pb-[10vh]
          overflow-hidden
        "
      >

        {/* ANIMATED BUBBLES */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="bubble bubble1" />
          <div className="bubble bubble2" />
          <div className="bubble bubble3" />
          <div className="bubble bubble4" />
          <div className="bubble bubble5" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <BlurText
            text="We build future-ready software for modern businesses."
            animateBy="words"
            direction="top"
            className="
              font-black
              uppercase
              tracking-[-0.02em]
              leading-[1.05]
              text-[clamp(2.3rem,7vw,5.5rem)]
              w-full
            "
          />

          <div
            className="
              mt-[3vh] sm:mt-[4vh] lg:mt-[5vh]
              w-full
              space-y-6
              text-black/70
              leading-[1.9]
              text-[15px]
              sm:text-[17px]
              lg:text-[19px]
              max-w-[1100px]
            "
          >
            <p>
              At Qiro Tech, we specialize in Website Development, UI/UX Design,
              Custom Software, Mobile & Web Applications, and enterprise-grade
              digital solutions. From AI-ML systems and IoT platforms to
              infrastructure management and long-term support, we design
              technology that is scalable, secure, and built for real-world
              performance.
            </p>

            <p>
              We partner with startups, enterprises, and growing businesses to
              transform ideas into powerful digital products. Whether launching
              a new platform or modernizing existing systems, Qiro Tech becomes
              your long-term technology partner — helping you innovate,
              automate, and grow in a fast-moving digital world.
            </p>

          </div>

        </div>

      </section>

      <ServicesFlowing />

    </main>
  );
}
