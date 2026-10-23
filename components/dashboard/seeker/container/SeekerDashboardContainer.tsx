"use client";

import { useState } from "react";
import { useCurrentUser, DUMMY_USERS } from "@/data/users";
import {
  SEEKER_APPLICATIONS_DATA,
  SeekerApplication,
} from "../data/seekerDashboardData";

// Components
import SeekerDashboardHeader from "../components/SeekerDashboardHeader";
import ApplicationsTableSection from "../components/ApplicationsTableSection";
import ApplicationProgressSidebar from "../components/ApplicationProgressSidebar";
import ApplicationDetailModal from "../components/ApplicationDetailModal";

export default function SeekerDashboardContainer() {
  const currentUser = useCurrentUser();
  const [applications] = useState<SeekerApplication[]>(SEEKER_APPLICATIONS_DATA);
  const [selectedAppId, setSelectedAppId] = useState<string>(
    SEEKER_APPLICATIONS_DATA[0].id
  );
  const [viewingApp, setViewingApp] = useState<SeekerApplication | null>(null);

  const user =
    currentUser && currentUser.role === "seeker"
      ? currentUser
      : DUMMY_USERS.find((u) => u.role === "seeker") || null;

  const selectedApplication =
    applications.find((app) => app.id === selectedAppId) || applications[0];

  const userName = user?.name?.split(" ")[0] || "Ayu";

  return (
    <div className="w-full min-h-screen bg-paper pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Header Section */}
        <SeekerDashboardHeader userName={userName} />

        {/* Two-Column Grid: Applications Table + Dynamic Progress Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
          {/* Left: Applications Table */}
          <div className="flex flex-col gap-5">
            <ApplicationsTableSection
              applications={applications}
              selectedId={selectedAppId}
              onSelectApplication={(id) => setSelectedAppId(id)}
              onViewApplication={(app) => setViewingApp(app)}
            />
          </div>

          {/* Right: Sticky Application Progress Sidebar */}
          <div className="lg:sticky lg:top-24">
            <ApplicationProgressSidebar
              application={selectedApplication}
              onViewApplication={(app) => setViewingApp(app)}
            />
          </div>
        </div>
      </div>

      {/* Submitted Application Detail Modal */}
      <ApplicationDetailModal
        application={viewingApp}
        onClose={() => setViewingApp(null)}
      />
    </div>
  );
}
