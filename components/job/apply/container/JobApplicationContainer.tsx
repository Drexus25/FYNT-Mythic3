"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { DUMMY_JOBS, JobItem } from "@/components/find/data/data";
import {
  INITIAL_USER_PROFILE,
  UserDocument,
} from "../data/userProfile";

// Section Components
import ApplyHeader from "../components/ApplyHeader";
import ApplicantInfoSection from "../components/ApplicantInfoSection";
import DocumentsSection from "../components/DocumentsSection";
import EssaySection from "../components/EssaySection";
import ConfirmationSection from "../components/ConfirmationSection";
import ApplySidebar from "../components/ApplySidebar";
import DocumentPreviewModal from "../components/DocumentPreviewModal";
import ApplicationSuccessModal from "../components/ApplicationSuccessModal";

interface JobApplicationContainerProps {
  slug?: string;
}

export default function JobApplicationContainer({
  slug: propSlug,
}: JobApplicationContainerProps) {
  const params = useParams();
  const slug = (propSlug || params?.slug) as string;

  // Find job from dummy data, fallback to first job if not found or product designer
  const job: JobItem =
    DUMMY_JOBS.find((j) => j.slug === slug) ||
    DUMMY_JOBS[0];

  // State management
  const [profile] = useState(INITIAL_USER_PROFILE);
  const [userCoins, setUserCoins] = useState(INITIAL_USER_PROFILE.coins);
  const [cvFiles, setCvFiles] = useState<UserDocument[]>(INITIAL_USER_PROFILE.cvFiles);
  const [portfolioFiles, setPortfolioFiles] = useState<UserDocument[]>(
    INITIAL_USER_PROFILE.portfolioFiles
  );
  const [portfolioUrl, setPortfolioUrl] = useState(INITIAL_USER_PROFILE.portfolioUrl);
  const [essayAnswers, setEssayAnswers] = useState<Record<number, string>>({});

  // Checkbox state (initially checked as shown in mockup)
  const [confirmedCorrect, setConfirmedCorrect] = useState(true);
  const [confirmedPayment, setConfirmedPayment] = useState(true);

  // Action states
  const [previewDocument, setPreviewDocument] = useState<UserDocument | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handlers for CV
  const handleAddCv = (newDoc: UserDocument) => {
    setCvFiles((prev) => [...prev, newDoc]);
  };

  const handleDeleteCv = (id: string) => {
    setCvFiles((prev) => prev.filter((d) => d.id !== id));
  };

  // Handlers for Portfolio
  const handleAddPortfolio = (newDoc: UserDocument) => {
    setPortfolioFiles((prev) => [...prev, newDoc]);
  };

  const handleDeletePortfolio = (id: string) => {
    setPortfolioFiles((prev) => prev.filter((d) => d.id !== id));
  };

  // Handlers for Essay
  const handleEssayChange = (questionId: number, value: string) => {
    setEssayAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // Check if all essay questions are filled
  const questions = job.essayQuestions || [];
  const areAllEssaysFilled = questions.every(
    (q) => essayAnswers[q.id] && essayAnswers[q.id].trim().length > 0
  );

  // Submission validation
  const canSubmit =
    confirmedCorrect &&
    confirmedPayment &&
    areAllEssaysFilled &&
    cvFiles.length > 0 &&
    userCoins >= job.coinCost;

  // Submit handler
  const handleSubmit = () => {
    if (!canSubmit) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setUserCoins((prev) => Math.max(0, prev - job.coinCost));
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full min-h-screen bg-paper pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Top Header / Breadcrumb */}
        <ApplyHeader
          jobTitle={job.title}
          companyName={job.company}
          jobSlug={job.slug}
        />

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
          {/* Left Column: Form Sections */}
          <div className="flex flex-col gap-5">
            {/* 1. Informasi Pelamar (Read-only) */}
            <ApplicantInfoSection profile={profile} />

            {/* 2. CV & Portofolio (Auto-filled, Add/Delete allowed) */}
            <DocumentsSection
              cvFiles={cvFiles}
              portfolioFiles={portfolioFiles}
              portfolioUrl={portfolioUrl}
              onUpdatePortfolioUrl={setPortfolioUrl}
              onAddCvFile={handleAddCv}
              onDeleteCvFile={handleDeleteCv}
              onAddPortfolioFile={handleAddPortfolio}
              onDeletePortfolioFile={handleDeletePortfolio}
              onViewDocument={(doc) => setPreviewDocument(doc)}
            />

            {/* 3. Pertanyaan Essay (Specific to this job) */}
            <EssaySection
              questions={questions}
              companyName={job.company}
              answers={essayAnswers}
              onAnswerChange={handleEssayChange}
            />

            {/* 4. Konfirmasi Sebelum Mengirim */}
            <ConfirmationSection
              jobSlug={job.slug}
              companyName={job.company}
              coinCost={job.coinCost}
              userCoins={userCoins}
              confirmedCorrect={confirmedCorrect}
              confirmedPayment={confirmedPayment}
              onToggleCorrect={() => setConfirmedCorrect((prev) => !prev)}
              onTogglePayment={() => setConfirmedPayment((prev) => !prev)}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              canSubmit={canSubmit}
            />
          </div>

          {/* Right Column: Sticky Sidebar Summary */}
          <div className="lg:sticky lg:top-24">
            <ApplySidebar job={job} userCoins={userCoins} />
          </div>
        </div>
      </div>

      {/* Modals */}
      <DocumentPreviewModal
        document={previewDocument}
        onClose={() => setPreviewDocument(null)}
      />

      {isSubmitted && (
        <ApplicationSuccessModal
          job={job}
          remainingCoins={userCoins}
        />
      )}
    </div>
  );
}