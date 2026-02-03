"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Cursor from "@/components/layout/Cursor";
import SayHi from "@/components/SayHi";

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
          overflow-x-hidden
          ${isDarkPage ? "bg-[#2f3437]" : "bg-white"}
        `}
      >
        <div
          id="smooth-content"
          className="
            min-h-screen
            flex
            flex-col
          "
        >

          {/* Page Content */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* Global Footer / CTA */}
          <SayHi />

        </div>
      </div>
    </>
  );
}
