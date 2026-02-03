"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Studio", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const darkRoutes = ["/", "/works", "/about", "/career"];

export default function Navbar() {
  const pathname = usePathname();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(darkRoutes.includes(pathname));
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 100) setShow(false);
      else setShow(true);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const textColor = isDark ? "text-white" : "text-black";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-transform duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        
        <div
          className={`
            relative
            w-full px-5 md:px-[6vw]
            h-[90px] md:h-[110px]
            flex items-center justify-between
            ${textColor}
          `}
        >
          {/* ===== LOGO ===== */}
<Link href="/" className="group">
  <div
    className="
      p-[6px]
      rounded-lg
      border border-[#1F6677]/40
      transition-all duration-300
      group-hover:border-[#1F6677]
    "
  >
    <Image
      src="/images/logo3.png"
      alt="Logo"
      width={40}
      height={40}
      priority
      className="
        transition-transform duration-300
        group-hover:scale-105
      "
    />
  </div>
</Link>



          {/* ===== DESKTOP MENU ===== */}
          <div
            className={`
              hidden md:flex items-center gap-[3vw]
              text-[13px] tracking-[0.28em]
              uppercase font-semibold
              ${textColor}
            `}
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    relative
                    hover:text-[#1F6677]
                    transition
                  "
                  style={{ opacity: active ? 1 : 0.7 }}
                >
                  {active && (
                    <span className="absolute -left-4 text-[#1F6677]">•</span>
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ===== HAMBURGER ===== */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMenuOpen(true)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-current"></span>
              <span className="block w-6 h-[2px] bg-current"></span>
              <span className="block w-6 h-[2px] bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* ===== OVERLAY ===== */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] transition-opacity duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[420px] bg-[#071A1F] text-white z-[999] transform transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <div className="flex flex-col justify-center items-center h-full gap-10 text-[20px] tracking-[0.25em] uppercase font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#1F6677] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
