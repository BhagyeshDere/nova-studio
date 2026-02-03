"use client";

export default function ServicesHero() {
  return (
    <section
      className="
        w-full
        flex items-center justify-center
        text-center
        px-5 sm:px-10 lg:px-[6vw]
        py-[16vh] sm:py-[20vh] lg:min-h-[90vh]
        bg-white
      "
    >
      <h1
        className="
          font-semibold
          leading-[1.05]
          text-[#2b2b2b]
          max-w-[1100px]
          text-[clamp(2.6rem,7vw,7rem)]
        "
      >
        We are a design studio that <br className="hidden sm:block" />
        loves to create together.
      </h1>
    </section>
  );
}
