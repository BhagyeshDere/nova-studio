"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const darkRoutes: string[] = [];

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
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`
            relative
            w-full 
            px-4 sm:px-6 md:px-[6vw]
            h-[65px] sm:h-[75px] md:h-[80px]

            flex items-center

            backdrop-blur-md
            bg-white/70
            border-b border-black/5

            ${textColor}
          `}
        >
          {/* LOGO */}
          <Link href="/" className="group shrink-0 z-10">
            <Image
              src="/images/logo4.png"
              alt="Logo"
              width={400}
              height={400}
              priority
              className="
                w-[44px] sm:w-[52px] md:w-[58px]
                h-auto
                transition-transform duration-300 
                group-hover:scale-105
              "
            />
          </Link>

          {/* CENTER MENU */}
          <div
            className={`
              hidden md:flex items-center
              gap-[2.6vw]
              text-[12px] lg:text-[13px]
              tracking-[0.18em]
              uppercase font-medium

              absolute left-1/2 -translate-x-1/2
              ${textColor}
            `}
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  <span className="opacity-80 group-hover:opacity-100 transition">
                    {link.name}
                  </span>

                  {/* ACTIVE UNDERLINE */}
                  {active && (
                    <span className="
                      absolute left-0 -bottom-2
                      w-full h-[2px]
                      bg-[#1F6677]
                    " />
                  )}
                </Link>
              );
            })}
          </div>

          {/* HAMBURGER */}
          <button
            className={`md:hidden ml-auto ${textColor}`}
            onClick={() => setMenuOpen(true)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-[2px] bg-current"></span>
              <span className="block w-6 h-[2px] bg-current"></span>
              <span className="block w-6 h-[2px] bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] transition-opacity duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[75%] max-w-[420px] bg-[#071A1F] text-white z-[999] transform transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <div className="flex flex-col justify-center items-center h-full gap-8 text-[18px] tracking-[0.2em] uppercase font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#4DA6B8] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
