export type JobStatus = "Aktif" | "Tutup" | "Draf";

export interface CompanyJob {
  id: string;
  title: string;
  employmentType: string;
  workplaceType: string;
  status: JobStatus;
  applicantsCount: number | null;
  activePeriod: string;
  actionText: string;
  actionHref: string;
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: number | string;
  iconType: "briefcase" | "users" | "document" | "coin";
}

export const RECRUITER_METRICS_DATA: DashboardMetric[] = [
  {
    id: "active-jobs",
    label: "Lowongan aktif",
    value: 1,
    iconType: "briefcase",
  },
  {
    id: "total-applicants",
    label: "Total pelamar",
    value: 12,
    iconType: "users",
  },
  {
    id: "in-review",
    label: "Dalam tinjauan",
    value: 3,
    iconType: "document",
  }
];

export const COMPANY_JOBS_DATA: CompanyJob[] = [
  {
    id: "job-1",
    title: "Product Designer",
    employmentType: "Full-time",
    workplaceType: "Hybrid",
    status: "Aktif",
    applicantsCount: 12,
    activePeriod: "10 Okt – 10 Nov 2026",
    actionText: "Lihat pelamar",
    actionHref: "/recruiter/job/product-designer",
  },
  {
    id: "job-2",
    title: "Inovation Officer",
    employmentType: "Full-time",
    workplaceType: "On-Site",
    status: "Tutup",
    applicantsCount: 15,
    activePeriod: "2 Okt – 2 Nov 2026",
    actionText: "Lihat pelamar",
    actionHref: "/recruiter/job/inovation-officer",
  },
  {
    id: "job-3",
    title: "UX Researcher",
    employmentType: "Full-time",
    workplaceType: "Hybrid",
    status: "Draf",
    applicantsCount: null,
    activePeriod: "Belum dipublikasikan",
    actionText: "Lanjut edit",
    actionHref: "/recruiter/dashboard/jobs/ux-researcher/edit",
  },
  {
    id: "job-4",
    title: "Content Designer",
    employmentType: "Kontrak",
    workplaceType: "Remote",
    status: "Draf",
    applicantsCount: null,
    activePeriod: "Belum dipublikasikan",
    actionText: "Lanjut edit",
    actionHref: "/recruiter/dashboard/jobs/content-designer/edit",
  },
];
