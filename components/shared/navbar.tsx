"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "features" },
  { label: "Pricing", href: "pricing" },
  { label: "About", href: "about" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center transition-all duration-500 ease-in-out"
      style={{ paddingTop: scrolled ? "0px" : "20px" }}
    >
      <div
        className="border border-line bg-paper/80 backdrop-blur-md transition-all duration-500 ease-in-out"
        style={{
          width: "100%",
          maxWidth: scrolled ? "100%" : "80%",
          borderRadius: scrolled ? "0px" : "9999px",
        }}
      >
      <nav className="mx-auto flex items-center justify-between px-8 py-4">
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-ink transition-opacity hover:opacity-80"
        >
          FYNT
        </Link>

        <ul className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative rounded-lg px-4 py-2 text-md font-medium transition-colors ${
                  active === link.label
                    ? "text-teal"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
                {active === link.label && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-teal" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/login"
          className="rounded-xl bg-teal px-5 py-2 text-md font-semibold text-paper shadow-sm transition-all hover:bg-teal/70 hover:shadow-md active:scale-95"
        >
          Log in
        </Link>
      </nav>
      </div>
    </header>
  );
}
