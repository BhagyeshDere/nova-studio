import Image from "next/image";

export default function ServicesCasePreview() {
  return (
    <section className="w-full py-[12vh] sm:py-[14vh] lg:py-[18vh] bg-white">

      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[85vh]">

        <Image
          src="/images/services/case.png"
          alt="Case Preview"
          fill
          priority
          className="
            object-cover
            transition-transform
            duration-[1200ms]
            ease-out
            hover:scale-[1.04]
          "
        />

        {/* subtle cinematic overlay */}
        <div className="absolute inset-0 bg-black/10" />

      </div>

    </section>
  );
}
