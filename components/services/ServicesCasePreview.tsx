import Image from "next/image";

export default function ServicesCasePreview() {
  return (
    <section className="w-full py-[10vh]">
      <Image
        src="/images/services/case.png"
        alt="Case"
        width={3000}
        height={1500}
        className="w-full object-cover"
      />
    </section>
  );
}
