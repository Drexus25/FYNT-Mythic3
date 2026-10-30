import SeekerDashboardContainer from "@/components/dashboard/seeker/container/SeekerDashboardContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Lamaran Saya · FYNT",
  description: "Pantau perkembangan lamaran kerja dan status seleksi terkini di FYNT.",
};

export default function SeekerDashboardPage() {
  return <SeekerDashboardContainer />;
}
