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

  // ✅ Dark page detection
  const isWorks = pathname.startsWith("/works");

  return (
    <>
      {/* Cursor */}
      <Cursor />

      {/* Navbar */}
      <Navbar />

      {/* Lenis Structure */}
      <div
        id="smooth-wrapper"
        className={isWorks ? "works-page" : ""}
      >
        <div id="smooth-content">

          {/* Page Content */}
          {children}

          {/* Global Cinematic Footer */}
          <SayHi />

        </div>
      </div>
    </>
  );
}
