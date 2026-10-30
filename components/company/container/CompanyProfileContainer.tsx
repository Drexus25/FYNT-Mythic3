"use client";

import { useState } from "react";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import {
  CompanyProfile,
  INITIAL_COMPANY_PROFILE,
} from "../data/companyTypes";
import CompanySidebar from "../components/CompanySidebar";
import CompanyInfoSection from "../components/CompanyInfoSection";

export default function CompanyProfileContainer() {
  const [profile, setProfile] = useState<CompanyProfile>(INITIAL_COMPANY_PROFILE);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleFieldChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleLogoChange = (logoUrl: string) => {
    setProfile((prev) => ({ ...prev, logo: logoUrl }));
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }, 500);
  };

  const handleCancel = () => {
    setProfile(INITIAL_COMPANY_PROFILE);
    setIsSaved(false);
  };

  return (
    <div className="w-full min-h-screen bg-paper pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-[13px] text-ink-muted">
          <Link
            href="/recruiter/dashboard"
            className="hover:text-teal transition-colors"
          >
            Perusahaan
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">Profil perusahaan</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5 max-w-4xl">
            <h1 className="text-3xl md:text-4xl text-ink tracking-tight font-rethink-sans font-bold">
              Profil yang mewakili perusahaan Anda.
            </h1>
            <p className="text-sm md:text-base text-ink-muted leading-relaxed">
              Perbarui identitas dan cerita perusahaan agar talenta mengenal Anda lebih dekat.
            </p>
          </div>
          <button
            type="button"
            id="btn-save-company-top"
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-teal hover:bg-teal-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer shrink-0"
          >
            <FiCheck className="w-4 h-4" />
            {isSaved ? "Tersimpan" : isSaving ? "Menyimpan..." : "Simpan perubahan"}
          </button>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 items-start">
          {/* Left Column: Sidebar */}
          <div className="lg:sticky lg:top-24">
            <CompanySidebar
              companyName={profile.companyName}
              domicile={profile.domicile}
              description={profile.description}
              website={profile.website}
              logo={profile.logo}
              onLogoChange={handleLogoChange}
            />
          </div>

          {/* Right Column: Form Sections */}
          <div className="flex flex-col gap-5">
            <CompanyInfoSection
              companyName={profile.companyName}
              domicile={profile.domicile}
              ownerName={profile.ownerName}
              website={profile.website}
              address={profile.address}
              description={profile.description}
              onChange={handleFieldChange}
            />
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex justify-end items-center gap-3 pt-2 border-t border-line">
          <button
            type="button"
            id="btn-cancel-company"
            onClick={handleCancel}
            className="text-sm font-medium text-ink hover:text-teal transition-colors px-5 py-2.5 rounded-xl hover:bg-[#f0f9f6] cursor-pointer"
          >
            Batalkan
          </button>
          <button
            type="button"
            id="btn-save-company-bottom"
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-teal hover:bg-teal-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <FiCheck className="w-4 h-4" />
            {isSaved ? "Tersimpan" : isSaving ? "Menyimpan..." : "Simpan perubahan"}
          </button>
        </div>
      </div>
    </div>
  );
}

