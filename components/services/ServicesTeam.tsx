import Image from "next/image";

export default function ServicesTeam() {
  return (
    <section className="w-full py-[10vh]">
      <Image
        src="/images/services/team.png"
        alt="Team"
        width={3000}
        height={1500}
        className="w-full object-cover"
      />
    </section>
  );
}
