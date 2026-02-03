export default function ServicesList() {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Designing intuitive, human-centered digital experiences that balance aesthetics and usability."
    },
    {
      title: "Web Development",
      desc: "High-performance websites built for speed, scalability, and seamless interaction."
    },
    {
      title: "Brand Identity",
      desc: "Crafting visual systems and identities that express meaning and build recognition."
    },
    {
      title: "Digital Products",
      desc: "From MVP to full platforms — we design and build scalable digital products."
    },
    {
      title: "Motion Design",
      desc: "Cinematic motion systems that enhance storytelling and brand presence."
    },
    {
      title: "Strategy",
      desc: "Research-driven design decisions aligned with business and user goals."
    },
  ];

  return (
    <section className="
      w-full
      bg-white
      px-5 sm:px-10 lg:px-[6vw]
      py-[14vh] sm:py-[18vh]
    ">
      <div className="max-w-[1400px] mx-auto">

        {/* Section label */}
        <p className="
          text-sm
          uppercase
          tracking-[0.35em]
          text-black/50
          mb-[10vh]
        ">
          Services
        </p>

        {/* Services grid */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-y-[8vh]
          gap-x-[8vw]
        ">
          {services.map((s, i) => (
            <div key={i} className="group">

              <h3 className="
                text-[28px] sm:text-[32px]
                font-semibold
                mb-4
                transition-all
                duration-300
                group-hover:tracking-wide
              ">
                {s.title}
              </h3>

              <p className="
                text-black/70
                leading-[1.9]
                max-w-[520px]
              ">
                {s.desc}
              </p>

              {/* subtle divider */}
              <div className="
                w-12 h-[1px]
                bg-black/20
                mt-6
                group-hover:w-20
                transition-all
                duration-300
              "/>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
