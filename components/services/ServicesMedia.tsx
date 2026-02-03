import Image from "next/image";

export default function ServicesMedia() {
  return (
    <section
      className="
        w-full
        flex justify-center
        bg-white
        px-5 sm:px-10 lg:px-[6vw]
        py-[14vh] sm:py-[18vh]
      "
    >
      <div className="
        relative
        w-full
        max-w-[1200px]
        h-[40vh]
        sm:h-[55vh]
        lg:h-[75vh]
        rounded-2xl
        overflow-hidden
        shadow-xl
      ">

        <Image
          src="/images/services/laptop.png"
          alt="Services preview"
          fill
          className="
            object-cover
            transition-transform
            duration-[1200ms]
            ease-out
            hover:scale-[1.05]
          "
        />

        {/* subtle cinematic overlay */}
        <div className="absolute inset-0 bg-black/10" />

      </div>
    </section>
  );
}
