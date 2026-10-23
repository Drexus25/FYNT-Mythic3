"use client";

import { UserProfileData } from "../data/userProfile";

interface ApplicantInfoSectionProps {
  profile: Pick<UserProfileData, "fullName" | "email" | "phone" | "domicile">;
}

export default function ApplicantInfoSection({ profile }: ApplicantInfoSectionProps) {
  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Informasi pelamar
        </h2>
        <p className="text-xs text-ink-muted leading-relaxed">
          Data ini diambil langsung dari profilmu. Jika ada perubahan, perbarui profil sebelum mengirim lamaran.
        </p>
      </div>

      {/* Read-only Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nama Lengkap */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="applicant-name"
            className="text-xs font-semibold text-ink"
          >
            Nama lengkap
          </label>
          <input
            id="applicant-name"
            type="text"
            readOnly
            disabled
            value={profile.fullName}
            className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-[#f8f9fa] text-ink text-sm cursor-not-allowed select-none outline-none focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="applicant-email"
            className="text-xs font-semibold text-ink"
          >
            Email
          </label>
          <input
            id="applicant-email"
            type="email"
            readOnly
            disabled
            value={profile.email}
            className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-[#f8f9fa] text-ink text-sm cursor-not-allowed select-none outline-none focus:outline-none"
          />
        </div>

        {/* Nomor Telepon */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="applicant-phone"
            className="text-xs font-semibold text-ink"
          >
            Nomor telepon
          </label>
          <input
            id="applicant-phone"
            type="text"
            readOnly
            disabled
            value={profile.phone}
            className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-[#f8f9fa] text-ink text-sm cursor-not-allowed select-none outline-none focus:outline-none"
          />
        </div>

        {/* Domisili */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="applicant-domicile"
            className="text-xs font-semibold text-ink"
          >
            Domisili
          </label>
          <input
            id="applicant-domicile"
            type="text"
            readOnly
            disabled
            value={profile.domicile}
            className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-[#f8f9fa] text-ink text-sm cursor-not-allowed select-none outline-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
