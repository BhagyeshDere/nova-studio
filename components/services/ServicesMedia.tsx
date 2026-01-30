import Image from "next/image";

export default function ServicesMedia() {
  return (
    <section className="w-full py-[20vh] flex justify-center">
      <div className="relative w-[70vw] max-w-[1000px]">
        <Image
          src="/images/services/laptop.png"
          alt="Media"
          width={1600}
          height={900}
          className="w-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
