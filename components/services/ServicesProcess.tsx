export default function ServicesProcess() {
  return (
    <section className="w-full px-[6vw] py-[18vh] grid grid-cols-1 lg:grid-cols-2 gap-[8vw]">

      {/* Left visual block */}
      <div className="relative h-[500px] border border-black/20">
        {/* abstract geometry visuals later */}
      </div>

      {/* Right content */}
      <div>
        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-semibold mb-[6vh]">
          How we collaborate
        </h2>

        <div className="space-y-[6vh]">

          <div>
            <h3 className="font-semibold text-xl">Discovery + Strategy</h3>
            <p className="mt-3 text-black/70">
              We dive deep into the project’s universe...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Branding</h3>
            <p className="mt-3 text-black/70">
              We create identities that communicate essence...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">UX + UI</h3>
            <p className="mt-3 text-black/70">
              We design functional and inspiring interfaces...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Motion Design</h3>
            <p className="mt-3 text-black/70">
              We bring ideas to life with animations...
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
