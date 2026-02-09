"use client";

import Hero from "@/components/home/Hero";
import WorksShowcase from "@/components/home/WorksShowcase";
import About from "@/components/home/About";




import BlurText from "@/reactbits/BlurText";
import ScrollReveal from "@/reactbits/ScrollReveal";
import ServicesFlowing from "@/components/home/ServicesFlowing";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">

      <Hero />

      <WorksShowcase />

      {/* ABOUT */}
<section className="w-full bg-white text-black px-6 sm:px-10 lg:px-[8vw] pt-[4vh] sm:pt-[6vh] pb-[8vh] sm:pb-[10vh]">

  <ScrollReveal>
    <span
      className="
        block
        font-semibold
        leading-[1.2]
        tracking-[-0.02em]
        text-black
        text-[clamp(2.4rem,6vw,4.5rem)]
        max-w-[1200px] xl:max-w-[1400px]
      "
    >
      Qiro Tech delivers smart software solutions that help businesses
      innovate, automate, and grow in the digital era.
    </span>
  </ScrollReveal>

  <div className="mt-[5vh] sm:mt-[6vh]">
    <About />
  </div>

</section>


      

      {/* CINEMATIC LINE */}
      <section
        className="
          w-full
          bg-white
          text-black
          px-6 sm:px-10 lg:px-[8vw]
          pt-0 pb-[6vh] sm:pb-[8vh] lg:pb-[10vh]
        "
      >
        <div className="max-w-[1500px] mx-auto">

          <BlurText
            text="We build future-ready software for modern businesses."
            animateBy="words"
            direction="top"
            className="
              font-black
              uppercase
              tracking-[-0.02em]
              leading-[1.05]
              text-[clamp(2.6rem,7vw,5.5rem)]
              max-w-[1100px]
            "
          />

          <div
            className="
              mt-[3vh] sm:mt-[4vh] lg:mt-[5vh]
              max-w-[720px]
              space-y-6
              text-black/70
              leading-[1.9]
              text-[16px]
              sm:text-[18px]
              lg:text-[19px]
            "
          >
            <p>
              At Qiro Tech, we specialize in Website Development, UI/UX Design,
              Custom Software, Mobile & Web Applications, and enterprise-grade
              digital solutions.
            </p>

            <p>
              From AI-ML systems and IoT platforms to infrastructure management
              and long-term support, we create reliable technology that scales
              with your business.
            </p>
          </div>

        </div>
      </section>

      <ServicesFlowing />
      
      

    </main>
  );
}
