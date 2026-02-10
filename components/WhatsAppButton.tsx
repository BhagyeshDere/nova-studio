"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919860507744" // 👉 replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        z-50
        bg-[#25D366]
        hover:bg-[#20ba5a]
        text-white
        p-4
        rounded-full
        shadow-xl
        transition-all duration-300
        hover:scale-110
        animate-bounce
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
