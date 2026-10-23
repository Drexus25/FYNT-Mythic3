"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardHeaderSection from "../../../dashboard/recruiter/components/DashboardHeaderSection";
import DashboardMetricsSection from "../../../dashboard/recruiter/components/DashboardMetricsSection";
import CompanyJobsSection from "../../../dashboard/recruiter/components/CompanyJobsSection";
import {
  RECRUITER_METRICS_DATA,
  COMPANY_JOBS_DATA,
} from "../data/recruiterDashboardData";
import { useCurrentUser, DUMMY_USERS } from "@/data/users";

export default function RecruiterDashboardContainer() {
  const router = useRouter();
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (currentUser && currentUser.role === "seeker") {
      router.replace("/dashboard");
    }
  }, [currentUser, router]);

  const user =
    currentUser && currentUser.role === "recruiter"
      ? currentUser
      : DUMMY_USERS.find((u) => u.role === "recruiter") || null;

  const handleOpenNewJob = () => {
    router.push("/recruiter/create-application");
  };

  const companyName = user?.company || "Nusa Studio";

  return (
    <div className="min-h-screen bg-[#FBFDFD] pt-24 pb-16 px-6 lg:px-14">
      <div className="max-w-[1140px] mx-auto flex flex-col gap-7">
        {/* Header Section */}
        <DashboardHeaderSection
          companyName={companyName}
          onOpenNewJob={handleOpenNewJob}
        />

        {/* 4 Metric Cards */}
        <DashboardMetricsSection metrics={RECRUITER_METRICS_DATA} />

        {/* Company Jobs Table Section */}
        <CompanyJobsSection jobs={COMPANY_JOBS_DATA} />
      </div>
    </div>
  );
}
