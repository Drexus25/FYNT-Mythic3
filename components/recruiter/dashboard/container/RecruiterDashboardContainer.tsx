"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardHeaderSection from "../components/DashboardHeaderSection";
import DashboardMetricsSection from "../components/DashboardMetricsSection";
import CompanyJobsSection from "../components/CompanyJobsSection";
import {
  RECRUITER_METRICS_DATA,
  COMPANY_JOBS_DATA,
} from "../data/recruiterDashboardData";
import { getCurrentUser, User, DUMMY_USERS } from "@/data/users";

export default function RecruiterDashboardContainer() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const current = getCurrentUser();
    if (current && current.role === "recruiter") {
      setUser(current);
    } else if (current && current.role === "seeker") {
      router.replace("/dashboard");
    } else {
      const defaultRecruiter =
        DUMMY_USERS.find((u) => u.role === "recruiter") || null;
      setUser(defaultRecruiter);
    }
  }, [router]);

  const handleOpenNewJob = () => {
    alert("Formulir pembukaan lowongan baru akan segera tersedia!");
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
