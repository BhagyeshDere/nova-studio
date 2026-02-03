import Image from "next/image";

export default function ServicesTeam() {
  return (
    <section
      className="
        w-full
        bg-white
        px-5 sm:px-10 lg:px-[6vw]
        py-[14vh] sm:py-[18vh]
      "
    >
      <div
        className="
          relative
          w-full
          h-[45vh]
          sm:h-[60vh]
          lg:h-[85vh]
          rounded-2xl
          overflow-hidden
          shadow-xl
        "
      >
        <Image
          src="/images/services/team.png"
          alt="Our team"
          fill
          priority
          className="
            object-cover
            transition-transform
            duration-[1200ms]
            ease-out
            hover:scale-[1.05]
          "
        />

        {/* cinematic overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </section>
  );
}
