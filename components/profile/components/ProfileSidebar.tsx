"use client";

import { FiMapPin, FiCamera } from "react-icons/fi";

interface ProfileSidebarProps {
  avatar: string;
  fullName: string;
  professionalTitle: string;
  domicile: string;
  about: string;
  onAvatarChange: () => void;
}

export default function ProfileSidebar({
  avatar,
  fullName,
  professionalTitle,
  domicile,
  about,
}: ProfileSidebarProps) {
  const displayAbout =
    about.length > 120 ? about.slice(0, 120).trimEnd() + "..." : about;

  return (
    <div className="bg-white border border-line rounded-2xl p-6 flex flex-col items-center gap-4 shadow-xs">
      {/* Avatar */}
      <div className="relative group">
        <img
          src={
            avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=0f766e&color=fff&size=200`
          }
          alt={fullName}
          className="w-24 h-24 rounded-full object-cover border-2 border-teal/20 shadow-sm"
        />
        <button
          type="button"
          id="btn-change-avatar"
          className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all cursor-pointer"
          title="Ganti foto"
          aria-label="Ganti foto"
        >
          <FiCamera className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Name & Title */}
      <div className="flex flex-col items-center gap-0.5 text-center">
        <h3 className="text-base font-bold text-ink leading-snug">
          {fullName || "Nama Lengkap"}
        </h3>
        <p className="text-xs text-ink-muted font-medium">
          {professionalTitle || "Posisi profesional"}
        </p>
      </div>

      {/* Change Photo Button */}
      <button
        type="button"
        id="btn-change-avatar-text"
        className="text-xs font-medium text-ink border border-line px-4 py-1.5 rounded-lg hover:border-teal/50 hover:text-teal hover:bg-[#f0f9f6] transition-all cursor-pointer"
      >
        Ganti foto
      </button>

      {/* Domicile */}
      {domicile && (
        <div className="flex items-center gap-1.5 text-xs text-ink-muted">
          <FiMapPin className="w-3.5 h-3.5 text-teal shrink-0" />
          <span>{domicile}</span>
        </div>
      )}

      {/* About excerpt */}
      {about && (
        <p className="text-xs text-ink-soft leading-relaxed text-center border-t border-line pt-4 w-full">
          {displayAbout}
        </p>
      )}
    </div>
  );
}
