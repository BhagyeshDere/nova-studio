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
            w-full
            h-[60px] sm:h-[70px] md:h-[80px]
            flex items-center

            px-4 sm:px-6 md:px-[6vw] lg:px-[7vw]

            backdrop-blur-md
            bg-white/70
            border-b border-black/5

            ${textColor}
          `}
        >
          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo4.png"
              alt="Logo"
              width={500}
              height={500}
              priority
              className="w-[40px] sm:w-[50px] md:w-[58px] h-auto"
            />
          </Link>

          {/* MENU */}
          <div
            className="
              hidden md:flex
              flex-1
              items-center
              justify-center
              gap-8 lg:gap-10
            "
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-[12px] lg:text-[13px] tracking-[0.18em] uppercase font-medium"
                >
                  <span className="opacity-80 group-hover:opacity-100 transition">
                    {link.name}
                  </span>

                  {/* ACTIVE DOT */}
                  {active && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-1.5 h-1.5 rounded-full bg-[#1F6677]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SPACER */}
          <div className="hidden md:block w-[40px] sm:w-[50px] md:w-[58px]" />

          {/* MOBILE MENU BUTTON */}
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
    </>
  );
}
