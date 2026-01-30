"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Studio", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

// ✅ Pages that are DARK
const darkRoutes = ["/", "/works", "/about"];

export default function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  /* ===========================
     THEME DETECTION
  =========================== */
  useEffect(() => {
    setIsDark(darkRoutes.includes(pathname));
  }, [pathname]);

  /* ===========================
     SCROLL SHOW / HIDE
  =========================== */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] pointer-events-auto transition-transform duration-500 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        color: isDark ? "#ffffff" : "#000000",
      }}
    >
      <div className="w-full px-[6vw] h-[95px] flex items-center justify-between bg-transparent">

        {/* LEFT — Logo */}
        <div className="flex items-center gap-4">
          <span
            className="text-[14px] tracking-[0.4em] uppercase font-semibold"   // 🔥 bigger + bold
            style={{ color: isDark ? "#ffffff" : "#000000" }}
          >
            NOVA
          </span>

          <span
            className="w-[8px] h-[8px] rounded-full"   // 🔥 bigger dot
            style={{ backgroundColor: isDark ? "#ffffff" : "#000000" }}
          ></span>
        </div>

        {/* RIGHT — Menu */}
        <div
          className="
            flex 
            items-center 
            gap-[3.2vw] 
            text-[14px]              /* 🔥 bigger text */
            tracking-[0.28em]
            uppercase
            font-semibold            /* 🔥 bold */
          "
        >
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative flex items-center gap-2 transition-opacity duration-300"
                style={{
                  color: isDark ? "#ffffff" : "#000000",
                  opacity: active ? 1 : 0.78,
                }}
              >
                {/* Active dot */}
                {active && (
                  <span
                    className="absolute -left-4 text-[14px] leading-none font-bold"  // 🔥 bigger active dot
                    style={{ color: isDark ? "#ffffff" : "#000000" }}
                  >
                    •
                  </span>
                )}

                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
