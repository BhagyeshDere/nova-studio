export default function ServicesProcess() {
  return (
    <section
      className="
        w-full
        bg-white
        px-5 sm:px-10 lg:px-[6vw]
        py-[14vh] sm:py-[18vh]
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-[8vw]
        items-center
      "
    >

      {/* LEFT — Visual Block */}
      <div
        className="
          relative
          w-full
          h-[320px] sm:h-[420px] lg:h-[520px]
          border border-black/20
          rounded-2xl
          overflow-hidden
          bg-gradient-to-br from-gray-100 to-gray-200
        "
      >
        {/* Placeholder cinematic visual */}
        <div className="absolute inset-0 flex items-center justify-center text-black/30 text-sm uppercase tracking-widest">
          Visual Area
        </div>
      </div>

      {/* RIGHT — Content */}
      <div>

        <h2
          className="
            text-[clamp(2.2rem,4vw,4rem)]
            font-semibold
            leading-[1.05]
            mb-10
          "
        >
          How we collaborate
        </h2>

        <div className="space-y-10">

          {[
            {
              title: "Discovery + Strategy",
              desc: "We dive deep into the project’s universe, understanding goals, users, and context before designing."
            },
            {
              title: "Branding",
              desc: "We create identities that communicate essence, values, and long-term positioning."
            },
            {
              title: "UX + UI",
              desc: "We design functional and inspiring interfaces focused on clarity and experience."
            },
            {
              title: "Motion Design",
              desc: "We bring ideas to life with cinematic motion and meaningful transitions."
            }
          ].map((item, i) => (
            <div key={i} className="group">

              <h3 className="
                font-semibold
                text-lg sm:text-xl
                transition-all
                duration-300
                group-hover:tracking-wide
              ">
                {item.title}
              </h3>

              <p className="
                mt-3
                text-black/70
                leading-[1.8]
                max-w-[520px]
              ">
                {item.desc}
              </p>

              {/* subtle divider */}
              <div className="
                w-10 h-[1px]
                bg-black/20
                mt-5
                group-hover:w-16
                transition-all
              "/>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
