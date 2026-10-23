"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbHexagonLetterF } from "react-icons/tb";
import { FiChevronDown, FiLogOut, FiGrid, FiUser } from "react-icons/fi";
import LogoFYNT from "@/public/shared/logo-fynt-clean.svg";
import { getCurrentUser, logoutUser, User } from "@/data/users";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync auth state
  useEffect(() => {
    const syncUser = () => {
      setUser(getCurrentUser());
    };

    syncUser();

    // Listen for custom login/logout events or cross-tab storage changes
    window.addEventListener("fynt_auth_change", syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("fynt_auth_change", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setDropdownOpen(false);
    router.push("/login");
  };

  const firstName = user?.name ? user.name.trim().split(" ")[0] : "";
  const dashboardHref =
    user?.role === "recruiter" ? "/recruiter/dashboard" : "/dashboard";

  return (
    <header
      className="fixed top-0 z-50 flex w-full justify-center transition-all duration-500 ease-in-out"
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
        <nav className="mx-auto flex items-center justify-between px-8 py-3.5">
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-3xl font-black tracking-tight text-ink transition-opacity hover:opacity-80"
          >
            <Image src={LogoFYNT} alt="FYNT" width={30} height={30} />
            <span className="font-rethink-sans">FYNT</span>
          </Link>

          {user ? (
            /* Logged in state */
            <div className="flex items-center gap-3">
              {/* Coin Badge */}
              <div
                title="Saldo Koin FYNT"
                className="flex items-center gap-2 px-3.5 py-1.5 bg-[#EEF7F5] text-[#10766B] rounded-full text-[13px] font-semibold transition-all shadow-2xs hover:bg-[#10766B] hover:text-white cursor-pointer"
              >
                <TbHexagonLetterF className="text-[15px]" />
                <span className="font-rethink-sans">
                  {user.coins ?? 5} Koin
                </span>
              </div>

              <p className="text-line text-2xl"> | </p>

              {/* Profile Menu Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2.5 pl-1.5 pr-3 py-1 bg-white hover:bg-white/90 border border-[#D9E8E5] hover:border-teal/50 rounded-full transition-all shadow-2xs cursor-pointer group"
                >
                  {/* Foto Profil */}
                  <img
                    src={
                      user.avatar ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.name
                      )}&background=0f766e&color=fff`
                    }
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-teal/20 shrink-0"
                  />

                  {/* Nama Pertama */}
                  <span className="font-rethink-sans font-semibold text-[14px] text-ink group-hover:text-teal transition-colors">
                    {firstName}
                  </span>

                  <FiChevronDown
                    className={`text-ink-muted text-[15px] transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-teal" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-[#E5E9EB] rounded-2xl p-2 shadow-xl animate-fadeIn z-50">
                    <div className="px-3.5 py-2.5 border-b border-line/60 flex flex-col gap-0.5">
                      <p className="font-rethink-sans font-bold text-[14px] text-ink truncate">
                        {user.name}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-bold uppercase rounded-md">
                          {user.role === "recruiter" ? "Recruiter" : "Job Seeker"}
                        </span>
                        <span className="text-[11px] text-ink-muted truncate">
                          {user.email}
                        </span>
                      </div>
                    </div>

                    <div className="py-1">
                      <Link
                        href={dashboardHref}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium text-ink hover:text-teal hover:bg-[#F0F8F6] rounded-xl transition-colors"
                      >
                        <FiGrid className="text-[16px] text-teal" />
                        <span>Buka Dashboard</span>
                      </Link>

                      {user.role === "seeker" && (
                        <Link
                          href="/find"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium text-ink hover:text-teal hover:bg-[#F0F8F6] rounded-xl transition-colors"
                        >
                          <FiUser className="text-[16px] text-teal" />
                          <span>Cari Lowongan</span>
                        </Link>
                      )}
                    </div>

                    <div className="pt-1 border-t border-line/60">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer text-left"
                      >
                        <FiLogOut className="text-[16px]" />
                        <span>Keluar (Log out)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Logged out state */
            <Link
              href="/login"
              className="rounded-xl bg-teal px-8 py-2 text-md font-semibold text-paper shadow-sm transition-all hover:bg-teal/70 hover:shadow-md active:scale-95"
            >
              Log in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
