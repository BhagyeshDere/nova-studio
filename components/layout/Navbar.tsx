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
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Detect dark pages */
  useEffect(() => {
    setIsDark(darkRoutes.includes(pathname));
  }, [pathname]);

  /* Hide/show on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-transform duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ color: isDark ? "#fff" : "#000" }}
      >
        <div className="w-full px-5 md:px-[6vw] h-[70px] md:h-[95px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src={isDark ? "/images/logo2.png" : "/images/logo1.png"}
              alt="NOVA Logo"
              width={140}
              height={60}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div
            className="hidden md:flex items-center gap-[3vw] text-[13px] tracking-[0.28em] uppercase font-semibold"
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative hover:opacity-100 transition"
                  style={{ opacity: active ? 1 : 0.6 }}
                >
                  {active && (
                    <span className="absolute -left-4 font-bold">•</span>
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden"
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

      {/* ================= OVERLAY ================= */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] transition-opacity duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[420px] bg-black text-white z-[999] transform transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        {/* LINKS */}
        <div className="flex flex-col justify-center items-center h-full gap-10 text-[20px] tracking-[0.25em] uppercase font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-60 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
