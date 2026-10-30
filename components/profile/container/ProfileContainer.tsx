"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronRight, FiCheck } from "react-icons/fi";
import {
  SeekerProfile,
  WorkExperience,
  Education,
  ProfileDocument,
  INITIAL_SEEKER_PROFILE,
} from "../data/profileTypes";
import ProfileSidebar from "../components/ProfileSidebar";
import PersonalInfoSection from "../components/PersonalInfoSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import EducationSection from "../components/EducationSection";
import CvSection from "../components/CvSection";
import PortfolioSection from "../components/PortfolioSection";

export default function ProfileContainer() {
  const [profile, setProfile] = useState<SeekerProfile>(INITIAL_SEEKER_PROFILE);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // ── Field change ──────────────────────────────────────────────────────────
  const handleFieldChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  // ── Work experience ───────────────────────────────────────────────────────
  const handleAddExperience = (): string => {
    const newExp: WorkExperience = {
      id: `exp_${Date.now()}`,
      title: "",
      company: "",
      period: "",
      description: "",
    };
    setProfile((prev) => ({
      ...prev,
      workExperiences: [...prev.workExperiences, newExp],
    }));
    setIsSaved(false);
    return newExp.id;
  };

  const handleUpdateExperience = (
    id: string,
    field: keyof WorkExperience,
    value: string
  ) => {
    setProfile((prev) => ({
      ...prev,
      workExperiences: prev.workExperiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
    setIsSaved(false);
  };

  const handleRemoveExperience = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      workExperiences: prev.workExperiences.filter((exp) => exp.id !== id),
    }));
    setIsSaved(false);
  };

  // ── Education ─────────────────────────────────────────────────────────────
  const handleAddEducation = (): string => {
    const newEdu: Education = {
      id: `edu_${Date.now()}`,
      degree: "",
      major: "",
      institution: "",
      period: "",
    };
    setProfile((prev) => ({
      ...prev,
      educations: [...prev.educations, newEdu],
    }));
    setIsSaved(false);
    return newEdu.id;
  };

  const handleUpdateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    setProfile((prev) => ({
      ...prev,
      educations: prev.educations.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
    setIsSaved(false);
  };

  const handleRemoveEducation = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      educations: prev.educations.filter((edu) => edu.id !== id),
    }));
    setIsSaved(false);
  };

  // ── Documents (CV & Portofolio) ───────────────────────────────────────────
  const handleUploadDocument = (type: "cv" | "portfolio", file: File) => {
    const sizeInMb =
      (file.size / (1024 * 1024)).toFixed(1).replace(".", ",") + " MB";
    const now = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

    const newDoc: ProfileDocument = {
      id: `doc_${type}_${Date.now()}`,
      name: file.name,
      type,
      size: sizeInMb,
      updatedAt: now,
    };

    setProfile((prev) => ({
      ...prev,
      documents: [...prev.documents.filter((d) => d.type !== type), newDoc],
    }));
    setIsSaved(false);
  };

  const handleRemoveDocument = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      documents: prev.documents.filter((doc) => doc.id !== id),
    }));
    setIsSaved(false);
  };

  // ── Save ──────────────────────────────────────────────────────────────────
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
    }, 600);
  };

  const handleCancel = () => {
    setProfile(INITIAL_SEEKER_PROFILE);
    setIsSaved(false);
  };

  return (
    <div className="w-full min-h-screen bg-paper pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-[13px] text-ink-muted">
        <Link href="/find" className="hover:text-teal transition-colors">
          Pencari kerja
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-soft">Profil saya</span>
      </nav>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-4xl">
            <h1 className="text-3xl md:text-4xl text-ink tracking-tight">
              Profil yang mewakili potensimu.
            </h1>
            <p className="text-sm md:text-base text-ink-muted leading-relaxed">
              Perbarui cerita, keahlian, dan karya terbaikmu untuk perusahaan.
            </p>
          </div>
          <button
            type="button"
            id="btn-save-profile-top"
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-teal hover:bg-teal-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer shrink-0"
          >
            {isSaved ? (
              <>
                <FiCheck className="w-4 h-4" />
                Tersimpan
              </>
            ) : (
              <>
                <FiCheck className="w-4 h-4" />
                {isSaving ? "Menyimpan..." : "Simpan perubahan"}
              </>
            )}
          </button>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 items-start">

          {/* Left: Sidebar */}
          <div className="lg:sticky lg:top-24">
            <ProfileSidebar
              avatar={profile.avatar}
              fullName={profile.fullName}
              professionalTitle={profile.professionalTitle}
              domicile={profile.domicile}
              about={profile.about}
              onAvatarChange={() => {}}
            />
          </div>

          {/* Right: Form Sections */}
          <div className="flex flex-col gap-5">
            {/* 1. Informasi Pribadi */}
            <PersonalInfoSection
              fullName={profile.fullName}
              professionalTitle={profile.professionalTitle}
              email={profile.email}
              phone={profile.phone}
              gender={profile.gender}
              birthDate={profile.birthDate}
              domicile={profile.domicile}
              about={profile.about}
              onChange={handleFieldChange}
            />

            {/* 2. Pengalaman Kerja */}
            <WorkExperienceSection
              experiences={profile.workExperiences}
              onAdd={handleAddExperience}
              onUpdate={handleUpdateExperience}
              onRemove={handleRemoveExperience}
            />

            {/* 3. Pendidikan */}
            <EducationSection
              educations={profile.educations}
              onAdd={handleAddEducation}
              onUpdate={handleUpdateEducation}
              onRemove={handleRemoveEducation}
            />

            {/* 4. Curriculum Vitae (CV) */}
            <CvSection
              cvDocument={profile.documents.find((d) => d.type === "cv")}
              onUploadCv={(file) => handleUploadDocument("cv", file)}
              onRemoveCv={handleRemoveDocument}
            />

            {/* 5. Portofolio */}
            <PortfolioSection
              portfolioLink={profile.portfolioLink}
              portfolioDocument={profile.documents.find(
                (d) => d.type === "portfolio"
              )}
              onPortfolioLinkChange={(val) =>
                handleFieldChange("portfolioLink", val)
              }
              onUploadPortfolio={(file) =>
                handleUploadDocument("portfolio", file)
              }
              onRemovePortfolio={handleRemoveDocument}
            />
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex justify-end items-center gap-3 pt-2 border-t border-line">
          <button
            type="button"
            id="btn-cancel-profile"
            onClick={handleCancel}
            className="text-sm font-medium text-ink hover:text-teal transition-colors px-5 py-2.5 rounded-xl hover:bg-[#f0f9f6] cursor-pointer"
          >
            Batalkan
          </button>
          <button
            type="button"
            id="btn-save-profile-bottom"
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-teal hover:bg-teal-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <FiCheck className="w-4 h-4" />
            {isSaving ? "Menyimpan..." : "Simpan perubahan"}
          </button>
        </div>
      </div>
    </div>
  );
}
