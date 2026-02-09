"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Cursor from "@/components/layout/Cursor";
import Footer from "@/components/Footer"; // ✅ FIXED IMPORT

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Dark theme pages
  const isDarkPage =
    pathname.startsWith("/works") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/career");

  return (
    <>
      {/* Custom Cursor */}
      <Cursor />

      {/* Navbar */}
      <Navbar />

      {/* Smooth Scroll Wrapper */}
      <div
        id="smooth-wrapper"
        className={`
          relative
          w-full
          max-w-[100vw]
          overflow-x-hidden
          min-h-[100dvh]
          ${isDarkPage ? "bg-[#2f3437]" : "bg-white"}
        `}
      >
        <div
          id="smooth-content"
          className="
            min-h-[100dvh]
            flex
            flex-col
            w-full
          "
        >

          {/* Page Content */}
          <main className="
            flex-1
            w-full
            max-w-[100vw]
            overflow-x-hidden
          ">
            {children}
          </main>

          {/* Global Footer / CTA */}
          <Footer />

        </div>
      </div>
    </>
  );
}
