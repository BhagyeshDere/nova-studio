"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-[#FAFCFD] text-[#071A1F] overflow-x-hidden">

      {/* HERO */}
      <section className="px-4 sm:px-8 lg:px-[8vw] pt-[12vh] sm:pt-[14vh] lg:pt-[16vh] pb-[8vh] sm:pb-[10vh]">
        <div className="max-w-[1100px] mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-[clamp(2.2rem,7vw,5.5rem)]
              font-semibold
              leading-tight
              tracking-[-0.03em]
              mb-5 sm:mb-6
            "
          >
            <span className="bg-gradient-to-r from-[#071A1F] via-[#1F6677] to-[#4DA6B8] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </motion.h1>

          <p className="text-black/50 text-xs sm:text-sm">
            Last Updated: February 01, 2026
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="px-4 sm:px-8 lg:px-[8vw] pb-[3vh] sm:pb-[4vh]">
        <div className="max-w-[900px] mx-auto text-[14px] sm:text-[16px] leading-[1.9] text-black/70">
          <p>
            QIRO TECH Innovation Pvt. Ltd. is committed to respecting your privacy and protecting your
            personal information. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your personal data in compliance with applicable data protection and
            privacy laws.
          </p>
        </div>
      </section>

      {/* SINGLE POLICY BOX */}
      <section className="px-4 sm:px-8 lg:px-[8vw] pb-[10vh] sm:pb-[12vh] lg:pb-[14vh]">
        <div className="max-w-[900px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white
              p-6 sm:p-8 lg:p-10
              rounded-2xl
              shadow-md
              border border-black/5
              space-y-8
            "
          >

            {sections.map((sec, i) => (
              <div key={i}>

                <h2 className="
                  text-[18px] sm:text-[20px] lg:text-[22px]
                  font-semibold
                  mb-3 sm:mb-4
                  flex items-center gap-3
                ">
                  <span className="w-2 h-5 sm:h-6 bg-[#1F6677] rounded-full"/>
                  {sec.title}
                </h2>

                <div className="space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] lg:text-[16px] text-black/70 leading-[1.8]">
                  {sec.content.map((c, idx) => (
                    <p key={idx}>{c}</p>
                  ))}
                </div>

              </div>
            ))}

          </motion.div>

          {/* CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-10
              bg-gradient-to-br
              from-[#071A1F]
              via-[#0E3A43]
              to-[#1F6677]
              text-white
              p-6 sm:p-8 lg:p-10
              rounded-2xl
              shadow-lg
              space-y-3 sm:space-y-4
            "
          >
            <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold mb-1 sm:mb-2">
              Contact Us
            </h2>

            <p className="text-white/80 text-sm sm:text-base">
              QIRO TECH Innovation Pvt. Ltd.
            </p>

            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              Office No. 13, 3rd Floor, Shreya Business Hub, Pari Chowk,
              Near CNG Gas Station, Narhe, Pune, Maharashtra – 411041
            </p>

            <p className="text-white/90 font-medium text-sm sm:text-base break-all">
              Email: hr@qirotec.com
            </p>

            <p className="text-white/90 font-medium text-sm sm:text-base">
              Phone: +91 9860507744, +91 9113882782
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
    title: "1. Objective",
    content: [
      "This Privacy Policy provides an overview of our privacy practices regarding personal information that we collect and process through our websites, services, applications, and other interactions with you.",
      "Our goal is to ensure transparency, accountability, and security in how we handle your data.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "Website & Device Data: IP address, browser type, device information, operating system, usage statistics, cookies, and tracking technologies.",
      "Contact & Identity Information: Name, job title, email address, phone number, company details, address, LinkedIn or professional profiles.",
      "Account & Login Data: Username and authentication details.",
      "Communications & Feedback: Inquiries, comments, feedback.",
      "Marketing Preferences: Subscriptions and opt-in or opt-out choices.",
      "Event/Media Information: Photos, recordings, participation details.",
      "Business & Contractual Data: Client, vendor, or partner data.",
    ],
  },
  {
    title: "3. How We Collect Information",
    content: [
      "Directly from you via forms, emails, calls, and events.",
      "Through websites using cookies and analytics.",
      "From third-party partners or affiliates.",
      "Public sources like social media or directories.",
    ],
  },
  {
    title: "4. How We Use Your Information",
    content: [
      "Provide and improve services.",
      "Respond to inquiries.",
      "Manage contracts and accounts.",
      "Personalize user experience.",
      "Send updates and marketing (with consent).",
      "Analytics and research.",
      "Security and fraud prevention.",
      "Event management.",
      "Legal compliance and dispute resolution.",
    ],
  },
  {
    title: "5. Legal Basis for Processing",
    content: [
      "Contractual necessity.",
      "Legitimate interest.",
      "Consent.",
      "Legal obligations.",
    ],
  },
  {
    title: "6. Data Sharing & Transfers",
    content: [
      "We do not sell personal data.",
      "Data may be shared with employees, partners, vendors, advisors, or authorities when required.",
      "International transfers follow legal safeguards.",
    ],
  },
  {
    title: "7. Data Security",
    content: [
      "We use encryption, secure servers, access controls, and audits to protect data.",
    ],
  },
  {
    title: "8. Data Retention",
    content: [
      "Data is kept only as long as necessary and then deleted or anonymized.",
    ],
  },
  {
    title: "9. Your Rights",
    content: [
      "Access, correct, or delete data.",
      "Restrict processing.",
      "Withdraw consent.",
      "Data portability.",
      "Lodge complaints with authorities.",
    ],
  },
  {
    title: "10. Cookies & Tracking",
    content: [
      "Cookies improve functionality and analytics. You can control them in your browser.",
    ],
  },
  {
    title: "11. Children’s Privacy",
    content: [
      "We do not knowingly collect data from children under 16.",
    ],
  },
  {
    title: "12. Third-Party Links",
    content: [
      "We are not responsible for external websites' privacy practices.",
    ],
  },
  {
    title: "13. Updates to This Policy",
    content: [
      "Policy updates will appear here with a revised date.",
    ],
  },
];
