"use client";

import { useState } from "react";
import { useCurrentUser, DUMMY_USERS } from "@/data/users";
import {
  INITIAL_JOB_FORM_DATA,
  JobFormData,
} from "../data/createApplicationTypes";

// Section Components
import CreateJobHeader from "../components/CreateJobHeader";
import JobInfoSection from "../components/JobInfoSection";
import JobDescriptionEditorSection from "../components/JobDescriptionEditorSection";
import EssayQuestionsSection from "../components/EssayQuestionsSection";
import PublishDurationSection from "../components/PublishDurationSection";
import PublishSidebar from "../components/PublishSidebar";
import PublishSuccessModal from "../components/PublishSuccessModal";

export default function CreateApplicationContainer() {
  const currentUser = useCurrentUser();
  const recruiterUser =
    currentUser && currentUser.role === "recruiter"
      ? currentUser
      : DUMMY_USERS.find((u) => u.role === "recruiter") || null;

  const companyName = recruiterUser?.company || "Nusa Studio";

  // Form State (initialized completely empty without dummy data)
  const [formData, setFormData] = useState<JobFormData>(INITIAL_JOB_FORM_DATA);
  const [hasAgreed, setHasAgreed] = useState(true);
  const [availableCoins, setAvailableCoins] = useState(10);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [isDraftSaving, setIsDraftSaving] = useState(false);

  // Coin cost calculation:
  // Base cost = 5 coins for 1 month
  // If > 1 month, 5 coins + 1 coin per additional week
  const isCustomDuration = formData.durationMonths > 1;
  const additionalWeeks = formData.additionalWeeks || 1;
  const coinCost = isCustomDuration ? 5 + additionalWeeks : 5;

  // Field change handler
  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "slot" ? Math.max(1, parseInt(value, 10) || 1) : value,
    }));
  };

  // Essay handlers
  const handleAddQuestion = () => {
    setFormData((prev) => ({
      ...prev,
      essayQuestions: [...prev.essayQuestions, ""],
    }));
  };

  const handleUpdateQuestion = (index: number, text: string) => {
    setFormData((prev) => {
      const updated = [...prev.essayQuestions];
      updated[index] = text;
      return {
        ...prev,
        essayQuestions: updated,
      };
    });
  };

  const handleRemoveQuestion = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      essayQuestions: prev.essayQuestions.filter((_, i) => i !== index),
    }));
  };

  // Duration selection
  const handleSelectDuration = (months: number) => {
    setFormData((prev) => ({
      ...prev,
      durationMonths: months,
    }));
  };

  const handleAdditionalWeeksChange = (weeks: number) => {
    setFormData((prev) => ({
      ...prev,
      additionalWeeks: weeks,
    }));
  };

  // Validation
  const canPublish =
    formData.title.trim().length > 0 &&
    formData.category.length > 0 &&
    formData.employmentType.length > 0 &&
    formData.location.trim().length > 0 &&
    formData.workplaceType.length > 0 &&
    hasAgreed &&
    availableCoins >= coinCost;

  // Publish handler
  const handlePublish = () => {
    if (!canPublish) return;
    setIsPublishing(true);
    setTimeout(() => {
      setAvailableCoins((prev) => Math.max(0, prev - coinCost));
      setIsPublishing(false);
      setIsPublished(true);
    }, 600);
  };

  // Save draft handler
  const handleSaveDraft = () => {
    setIsDraftSaving(true);
    setTimeout(() => {
      setIsDraftSaving(false);
      alert("Draf lowongan berhasil disimpan!");
    }, 400);
  };

  return (
    <div className="w-full min-h-screen bg-paper pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Top Header & Breadcrumb */}
        <CreateJobHeader
          onSaveDraft={handleSaveDraft}
          isDraftSaving={isDraftSaving}
        />

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
          {/* Left Column: Form Sections */}
          <div className="flex flex-col gap-5">
            {/* 1. Informasi Pekerjaan */}
            <JobInfoSection
              title={formData.title}
              category={formData.category}
              employmentType={formData.employmentType}
              location={formData.location}
              workplaceType={formData.workplaceType}
              salary={formData.salary}
              slot={formData.slot}
              onChange={handleFieldChange}
            />

            {/* 2. Deskripsi Pekerjaan (TipTap Rich Text Editor) */}
            <JobDescriptionEditorSection
              content={formData.descriptionHtml}
              onChange={(html) => handleFieldChange("descriptionHtml", html)}
            />

            {/* 3. Pertanyaan Essay */}
            <EssayQuestionsSection
              questions={formData.essayQuestions}
              onAddQuestion={handleAddQuestion}
              onUpdateQuestion={handleUpdateQuestion}
              onRemoveQuestion={handleRemoveQuestion}
            />

            {/* 4. Durasi Publikasi */}
            <PublishDurationSection
              durationMonths={formData.durationMonths}
              additionalWeeks={formData.additionalWeeks}
              onSelectDuration={handleSelectDuration}
              onAdditionalWeeksChange={handleAdditionalWeeksChange}
            />
          </div>

          {/* Right Column: Sticky Summary & Publish Sidebar */}
          <div className="lg:sticky lg:top-24">
            <PublishSidebar
              jobTitle={formData.title}
              companyName={companyName}
              location={formData.location}
              availableCoins={availableCoins}
              coinCost={coinCost}
              durationMonths={formData.durationMonths}
              additionalWeeks={formData.additionalWeeks}
              hasAgreed={hasAgreed}
              onToggleAgree={() => setHasAgreed((prev) => !prev)}
              onPublish={handlePublish}
              isPublishing={isPublishing}
              canPublish={canPublish}
            />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isPublished && (
        <PublishSuccessModal
          jobTitle={formData.title || "Pekerjaan Baru"}
          companyName={companyName}
          remainingCoins={availableCoins}
          usedCoins={coinCost}
        />
      )}
    </div>
  );
}