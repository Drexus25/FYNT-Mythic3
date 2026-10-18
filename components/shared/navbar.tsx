"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import LogoFYNT from "@/public/shared/logo-fynt-clean.svg"


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
    <header className="fixed top-0 z-50 flex w-full justify-center transition-all duration-500 ease-in-out"
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
          className="flex flex-row justify-center items-center gap-2 text-3xl font-black tracking-tight text-ink transition-opacity hover:opacity-80"
        >
          <Image src={LogoFYNT} alt="FYNT" width={30} height={30} />
          <span className="font-rethink-sans">FYNT</span>
        </Link>

        <Link
          href="/login"
          className="rounded-xl bg-teal px-8 py-2 text-md font-semibold text-paper shadow-sm transition-all hover:bg-teal/70 hover:shadow-md active:scale-95"
        >
          Log in
        </Link>
      </nav>
      </div>
    </header>
  );
}
