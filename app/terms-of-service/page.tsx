"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="w-full bg-[#FAFCFD] text-[#071A1F] overflow-x-hidden">

      {/* HERO */}
      <section className="px-6 sm:px-10 lg:px-[8vw] pt-[16vh] pb-[10vh]">
        <div className="max-w-[1100px] mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-[clamp(2.8rem,6vw,5.5rem)]
              font-semibold
              leading-tight
              tracking-[-0.03em]
              mb-6
            "
          >
            <span className="bg-gradient-to-r from-[#071A1F] via-[#1F6677] to-[#4DA6B8] bg-clip-text text-transparent">
              Terms of Service
            </span>
          </motion.h1>

          <p className="text-black/50 text-sm">
            Last Updated: September 04, 2025
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 sm:px-10 lg:px-[8vw] pb-[4vh]">
        <div className="max-w-[900px] mx-auto text-[16px] leading-[1.9] text-black/70">
          <p>
            Welcome to QIRO TECH Innovation Pvt. Ltd. By accessing or using our
            Services, you agree to be bound by these Terms. If you do not
            agree, please do not use our Services.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="px-6 sm:px-10 lg:px-[8vw] pb-[14vh]">
        <div className="max-w-[900px] mx-auto space-y-8">

          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                bg-white
                p-7 sm:p-9
                rounded-2xl
                shadow-sm
                border border-black/5
                hover:shadow-md
                transition
              "
            >
              <h2 className="
                text-[22px]
                font-semibold
                mb-4
                flex items-center gap-3
              ">
                <span className="w-2 h-6 bg-[#1F6677] rounded-full"/>
                {sec.title}
              </h2>

              <div className="space-y-3 text-black/70 leading-[1.8]">
                {sec.content.map((c, idx) => (
                  <p key={idx}>{c}</p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              bg-gradient-to-br
              from-[#071A1F]
              via-[#0E3A43]
              to-[#1F6677]
              text-white
              p-10
              rounded-2xl
              shadow-lg
              space-y-4
            "
          >
            <h2 className="text-[24px] font-semibold mb-2">
              Contact Us
            </h2>

            <p className="text-white/80">QIRO TECH Innovation Pvt. Ltd.</p>

            <p className="text-white/80 leading-relaxed">
              Office No. 13, 3rd Floor, Shreya Business Hub, Pari Chowk,
              Near CNG Gas Station, Narhe, Pune, Maharashtra – 411041
            </p>

            <p className="text-white/90 font-medium">
              Email: hr@qirotec.com
            </p>

            <p className="text-white/90 font-medium">
              Phone: +91 8669086844, +91 9595505063
            </p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}


/* ================= DATA ================= */

const sections = [
  {
    title: "1. Ownership of Rights & Use of Content",
    content: [
      "All materials, content, logos, trademarks, software, code, designs, graphics, text, and data are the intellectual property of DW Innovation or its licensors.",
      "You may not copy, reproduce, modify, distribute, publish, or create derivative works without written consent.",
      "We grant a limited, non-exclusive license to use the Services for lawful business purposes.",
    ],
  },
  {
    title: "2. User Responsibilities",
    content: [
      "Do not use Services for unlawful or fraudulent activities.",
      "Do not attempt unauthorized access.",
      "Do not disrupt performance or security.",
      "Do not transmit malicious code.",
      "Respect intellectual property and privacy rights.",
    ],
  },
  {
    title: "3. Disclaimers of Warranties",
    content: [
      "Services are provided 'AS IS' without warranties.",
      "We disclaim express or implied warranties.",
      "We do not guarantee error-free or uninterrupted Services.",
    ],
  },
  {
    title: "4. Limitation of Liability",
    content: [
      "DW Innovation is not liable for indirect or consequential damages.",
      "Total liability shall not exceed fees paid in the last 12 months.",
    ],
  },
  {
    title: "5. Third-Party Content & Links",
    content: [
      "We are not responsible for third-party content.",
      "Accessing third-party links is at your own risk.",
    ],
  },
  {
    title: "6. Submissions & Transmitted Materials",
    content: [
      "Submissions are treated as non-confidential.",
      "You grant us a worldwide license to use submissions.",
    ],
  },
  {
    title: "7. Privacy",
    content: [
      "Use of Services is governed by our Privacy Policy.",
    ],
  },
  {
    title: "8. Termination",
    content: [
      "We may suspend or terminate Services if Terms are violated.",
      "All licenses end upon termination.",
    ],
  },
  {
    title: "9. Indemnification",
    content: [
      "You agree to indemnify DW Innovation against claims arising from misuse or violations.",
    ],
  },
  {
    title: "10. Changes to Terms",
    content: [
      "Terms may be updated anytime. Continued use implies acceptance.",
    ],
  },
  {
    title: "11. Governing Law & Jurisdiction",
    content: [
      "Governed by Indian law.",
      "Jurisdiction lies in Indian courts.",
    ],
  },
  {
    title: "12. Entire Agreement",
    content: [
      "These Terms and Privacy Policy form the entire agreement.",
    ],
  },
];
