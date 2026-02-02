"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current.querySelectorAll(".reveal"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <main
      ref={pageRef}
      className="light-theme bg-gradient-to-b from-white to-gray-100 text-black min-h-screen"
    >
      {/* HERO */}
      <section className="text-center px-[6vw] pt-[18vh] pb-[10vh]">

        <p className="reveal uppercase tracking-[0.4em] text-sm text-black/50 mb-6">
          CONTACT NOVA STUDIO
        </p>

        <h1 className="reveal text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05]">
          Let’s Build the Future
          <br />
          Together
        </h1>

        <p className="reveal mt-6 text-black/60 max-w-[640px] mx-auto text-lg">
          Connect with our creative team to craft meaningful digital
          experiences and high-impact brand identities.
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-[6vw] pb-[12vh]">

        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[12vw] items-start">

          {/* FORM */}
          <div className="reveal bg-white shadow-lg border border-black/5 rounded-2xl p-10">

            <h3 className="text-xl font-semibold mb-8">
              Send Us a Message
            </h3>

            <div className="space-y-6">

              <input
                placeholder="Full Name"
                className="w-full border border-black/20 rounded-md px-4 py-3 outline-none focus:border-black transition"
              />

              <input
                placeholder="Email Address"
                type="email"
                className="w-full border border-black/20 rounded-md px-4 py-3 outline-none focus:border-black transition"
              />

              <input
                placeholder="Company (Optional)"
                className="w-full border border-black/20 rounded-md px-4 py-3 outline-none focus:border-black transition"
              />

              <textarea
                rows={4}
                placeholder="Project Details"
                className="w-full border border-black/20 rounded-md px-4 py-3 outline-none resize-none focus:border-black transition"
              />

              <button className="w-full bg-black text-white py-4 rounded-md hover:bg-blue-600 transition">
                Submit Inquiry
              </button>

            </div>
          </div>

          {/* INFO */}
          <div className="reveal pt-6">

            <h3 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h3>

            <p className="text-black/60 mb-10">
              Our experts are ready to collaborate on your next
              creative project.
            </p>

            <div className="space-y-8">

              <div>
                <p className="text-sm text-blue-600 uppercase mb-2">
                  Email
                </p>
                <p className="text-lg font-medium">
                  hello@novastudio.com
                </p>
              </div>

              <div>
                <p className="text-sm text-blue-600 uppercase mb-2">
                  Phone
                </p>
                <p className="text-lg font-medium">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-sm text-blue-600 uppercase mb-2">
                  Location
                </p>
                <p className="text-lg font-medium">
                  Mumbai, Maharashtra, India
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="reveal px-[6vw] pb-[18vh]">

        <div className="max-w-[1200px] mx-auto">

          <div className="rounded-2xl overflow-hidden shadow-xl border border-black/10">

            <iframe
              src="https://www.google.com/maps?q=Mumbai,Maharashtra,India&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>

        </div>
      </section>

    </main>
  );
}
