"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("light-theme");

    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current.querySelectorAll(".reveal"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.9 }
    );

    return () => {
      document.body.classList.remove("light-theme");
    };
  }, []);

  return (
    <main ref={pageRef} className="bg-[#f3f4f6] text-black min-h-screen">

      {/* HERO */}
      <section className="text-center px-[6vw] pt-[14vh]">
        <p className="reveal uppercase tracking-[0.4em] text-sm text-black/60 mb-6">
          CONTACT NOVA STUDIO
        </p>

        <h1 className="reveal text-[clamp(3.5rem,8vw,7rem)] font-semibold">
          Let’s Build the Future
          <br /> Together
        </h1>

        <p className="reveal mt-6 text-black/60 max-w-[640px] mx-auto">
          Connect with our creative team to craft meaningful digital
          experiences and high-impact brand identities.
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-[6vw] py-[12vh]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[6vw]">

          {/* FORM */}
          <div className="reveal bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
            <h3 className="text-xl font-semibold mb-8">
              Send Us a Message
            </h3>

            <div className="space-y-6">

              <input placeholder="Full Name"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition" />

              <input placeholder="Email Address" type="email"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition" />

              <input placeholder="Company (Optional)"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition" />

              <textarea rows={4} placeholder="Project Details"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition resize-none" />

              <button className="w-full mt-4 bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition">
                Submit Inquiry
              </button>

            </div>
          </div>

          {/* INFO */}
          <div className="reveal pt-4">
            <h3 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h3>

            <p className="text-black/60 mb-10">
              Our experts are ready to collaborate on your next
              creative project.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-blue-600 uppercase mb-2">Email</p>
                <p className="text-lg font-medium">hello@novastudio.com</p>
              </div>

              <div>
                <p className="text-sm text-blue-600 uppercase mb-2">Phone</p>
                <p className="text-lg font-medium">+91 98765 43210</p>
              </div>

              <div>
                <p className="text-sm text-blue-600 uppercase mb-2">Location</p>
                <p className="text-lg font-medium">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
