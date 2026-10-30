"use client";

import { useRef } from "react";
import { FiMapPin } from "react-icons/fi";

interface CompanySidebarProps {
  companyName: string;
  domicile: string;
  description: string;
  website: string;
  logo: string;
  onLogoChange?: (logoUrl: string) => void;
}

export default function CompanySidebar({
  companyName,
  domicile,
  description,
  website,
  logo,
  onLogoChange,
}: CompanySidebarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Compute initials (e.g. Nusa Studio -> NS)
  const getInitials = (name: string) => {
    if (!name) return "CO";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onLogoChange) {
      const url = URL.createObjectURL(file);
      onLogoChange(url);
    }
  };

  const cleanWebsite = website.replace(/^https?:\/\//i, "").replace(/\/$/, "");

  return (
    <div className="flex flex-col gap-2">
      {/* Sidebar Card */}
      <div className="bg-white border border-line rounded-2xl p-6 flex flex-col items-center gap-4 shadow-xs">
        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Logo / Initials */}
        {logo ? (
          <img
            src={logo}
            alt={companyName}
            className="w-20 h-20 rounded-2xl object-cover border border-line shadow-xs"
          />
        ) : (
          <div className="w-20 h-20 rounded-2xl bg-[#EAF5F3] flex items-center justify-center text-teal font-rethink-sans font-bold text-2xl tracking-wide select-none">
            {getInitials(companyName)}
          </div>
        )}

        {/* Company Name & Tagline */}
        <div className="flex flex-col items-center gap-0.5 text-center">
          <h3 className="text-base font-bold text-ink leading-snug">
            {companyName || "Nama Perusahaan"}
          </h3>
          <p className="text-xs text-ink-muted font-medium">Profil perusahaan</p>
        </div>

        {/* Change Logo Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="text-xs font-medium text-ink border border-line px-4 py-1.5 rounded-lg hover:border-teal/50 hover:text-teal hover:bg-[#f0f9f6] transition-all cursor-pointer"
        >
          Ganti logo
        </button>

        {/* Helper Note */}
        {!logo && (
          <p className="text-[11px] text-ink-muted text-center leading-normal">
            Belum ada logo. Inisial ditampilkan sebagai pengganti.
          </p>
        )}

        {/* Divider */}
        <div className="w-full border-t border-line pt-4 flex flex-col gap-3">
          {/* Domicile */}
          {domicile && (
            <div className="flex items-center gap-1.5 text-xs text-ink-muted">
              <FiMapPin className="w-3.5 h-3.5 text-ink-muted shrink-0" />
              <span>{domicile}</span>
            </div>
          )}

          {/* Description Excerpt */}
          {description && (
            <p className="text-xs text-ink-soft leading-relaxed text-left line-clamp-4">
              {description}
            </p>
          )}

          {/* Website Link */}
          {website && (
            <a
              href={website.startsWith("http") ? website : `https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-teal font-medium hover:underline break-all truncate block"
            >
              {cleanWebsite}
            </a>
          )}
        </div>
      </div>

      {/* Footer Disclaimer */}
      <p className="text-xs text-ink-muted px-1 text-left">
        Data contoh untuk pratinjau profil perusahaan.
      </p>
    </div>
  );
}

