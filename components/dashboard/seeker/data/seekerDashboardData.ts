export type ApplicationStatus = "Ditinjau" | "Diterima" | "Tidak diterima";
export type ApplicationTab = "all" | "active" | "completed";

export interface TimelineStep {
  title: string;
  date?: string;
  statusLabel?: string;
  description: string;
  state: "completed" | "current" | "pending";
  variant?: "teal" | "amber" | "rose";
}

export interface SeekerApplication {
  id: string;
  slug: string;
  logo: string;
  logoColor?: string;
  title: string;
  company: string;
  location: string;
  workplaceType: "Hybrid" | "Remote" | "On-site";
  employmentType: string;
  appliedDate: string;
  status: ApplicationStatus;
  group: "active" | "completed";
  decisionStage?: string;
  timeline: TimelineStep[];
  submittedDocuments: {
    cvName: string;
    portfolioName?: string;
    portfolioUrl?: string;
  };
}

export const SEEKER_APPLICATIONS_DATA: SeekerApplication[] = [
  {
    id: "app-1",
    slug: "product-designer-nusa-studio",
    logo: "N",
    logoColor: "bg-teal",
    title: "Product Designer",
    company: "Nusa Studio",
    location: "Jakarta Selatan",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    appliedDate: "20 Okt 2026",
    status: "Ditinjau",
    group: "active",
    decisionStage: "Menunggu keputusan",
    submittedDocuments: {
      cvName: "CV_Iqbal_Sandika.pdf",
      portfolioName: "Portfolio_Iqbal_2026.pdf",
      portfolioUrl: "Iqbal.design.example",
    },
    timeline: [
      {
        title: "Lamaran terkirim",
        date: "20 Okt 2026",
        description: "Profil, CV, portofolio, dan jawaban essay berhasil dikirim ke Nusa Studio.",
        state: "completed",
      },
      {
        title: "Dokumen ditinjau",
        date: "21 Okt 2026",
        description: "Dokumen lamaran telah ditinjau oleh tim rekrutmen Nusa Studio.",
        state: "completed",
      },
      {
        title: "Menunggu keputusan",
        statusLabel: "Sedang diproses",
        description: "FYNT hanya menampilkan status diterima atau tidak diterima setelah keputusan keluar.",
        state: "current",
        variant: "amber",
      },
    ],
  },
  {
    id: "app-2",
    slug: "ui-ux-designer-orbit-digital",
    logo: "O",
    logoColor: "bg-teal",
    title: "UI/UX Designer",
    company: "Orbit Digital",
    location: "Jakarta",
    workplaceType: "Remote",
    employmentType: "Full-time",
    appliedDate: "19 Okt 2026",
    status: "Ditinjau",
    group: "active",
    decisionStage: "Menunggu keputusan",
    submittedDocuments: {
      cvName: "CV_Iqbal_Sandika.pdf",
      portfolioUrl: "Iqbal.design.example",
    },
    timeline: [
      {
        title: "Lamaran terkirim",
        date: "19 Okt 2026",
        description: "Profil dan CV telah terkirim kepada tim Orbit Digital.",
        state: "completed",
      },
      {
        title: "Dokumen ditinjau",
        date: "20 Okt 2026",
        description: "Tim rekrutmen Orbit Digital sedang meninjau kelengkapan portofolio dan profilmu.",
        state: "completed",
      },
      {
        title: "Menunggu keputusan",
        statusLabel: "Sedang diproses",
        description: "FYNT hanya menampilkan status diterima atau tidak diterima setelah keputusan keluar.",
        state: "current",
        variant: "amber",
      },
    ],
  },
  {
    id: "app-3",
    slug: "product-designer-akar-tech",
    logo: "A",
    logoColor: "bg-teal",
    title: "Product Designer",
    company: "Akar Tech",
    location: "Bandung",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    appliedDate: "18 Okt 2026",
    status: "Ditinjau",
    group: "active",
    decisionStage: "Menunggu keputusan",
    submittedDocuments: {
      cvName: "CV_Iqbal_Sandika.pdf",
      portfolioName: "Portfolio_Iqbal_2026.pdf",
    },
    timeline: [
      {
        title: "Lamaran terkirim",
        date: "18 Okt 2026",
        description: "Lamaran beserta berkas pendukung berhasil dikirim ke Akar Tech.",
        state: "completed",
      },
      {
        title: "Dokumen ditinjau",
        date: "19 Okt 2026",
        description: "Dokumen lamaranmu sudah lolos verifikasi awal oleh tim rekrutmen Akar Tech.",
        state: "completed",
      },
      {
        title: "Menunggu keputusan",
        statusLabel: "Sedang diproses",
        description: "FYNT hanya menampilkan status diterima atau tidak diterima setelah keputusan keluar.",
        state: "current",
        variant: "amber",
      },
    ],
  },
  {
    id: "app-4",
    slug: "ux-researcher-ruang-karya",
    logo: "R",
    logoColor: "bg-teal",
    title: "UX Researcher",
    company: "Ruang Karya",
    location: "Jakarta",
    workplaceType: "On-site",
    employmentType: "Full-time",
    appliedDate: "16 Okt 2026",
    status: "Ditinjau",
    group: "active",
    decisionStage: "Menunggu keputusan",
    submittedDocuments: {
      cvName: "CV_Iqbal_Sandika.pdf",
      portfolioName: "Portfolio_Iqbal_2026.pdf",
    },
    timeline: [
      {
        title: "Lamaran terkirim",
        date: "16 Okt 2026",
        description: "Profil dan portofolio riset berhasil dikirim ke Ruang Karya.",
        state: "completed",
      },
      {
        title: "Dokumen ditinjau",
        date: "18 Okt 2026",
        description: "Studi kasus UX dan portofolio telah ditinjau oleh Lead UX Ruang Karya.",
        state: "completed",
      },
      {
        title: "Menunggu keputusan",
        statusLabel: "Sedang diproses",
        description: "FYNT hanya menampilkan status diterima atau tidak diterima setelah keputusan keluar.",
        state: "current",
        variant: "amber",
      },
    ],
  },
  {
    id: "app-5",
    slug: "ui-designer-sora-digital",
    logo: "S",
    logoColor: "bg-teal",
    title: "UI Designer",
    company: "Sora Digital",
    location: "Yogyakarta",
    workplaceType: "Remote",
    employmentType: "Full-time",
    appliedDate: "12 Okt 2026",
    status: "Diterima",
    group: "completed",
    decisionStage: "Diterima",
    submittedDocuments: {
      cvName: "CV_Iqbal_Sandika.pdf",
      portfolioUrl: "Iqbal.design.example",
    },
    timeline: [
      {
        title: "Lamaran terkirim",
        date: "12 Okt 2026",
        description: "Profil dan portofolio desain terkirim ke Sora Digital.",
        state: "completed",
      },
      {
        title: "Dokumen ditinjau",
        date: "14 Okt 2026",
        description: "Dokumen dan karya desain telah ditinjau oleh Art Director Sora Digital.",
        state: "completed",
      },
      {
        title: "Lamaran diterima",
        date: "17 Okt 2026",
        statusLabel: "Selamat!",
        description: "Selamat! Lamaranmu telah diterima oleh Sora Digital. Tim HR akan menghubungi melalui email untuk langkah selanjutnya.",
        state: "completed",
        variant: "teal",
      },
    ],
  },
  {
    id: "app-6",
    slug: "product-designer-kawan-app",
    logo: "K",
    logoColor: "bg-teal",
    title: "Product Designer",
    company: "Kawan App",
    location: "Jakarta",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    appliedDate: "10 Okt 2026",
    status: "Tidak diterima",
    group: "completed",
    decisionStage: "Tidak diterima",
    submittedDocuments: {
      cvName: "CV_Iqbal_Sandika.pdf",
      portfolioName: "Portfolio_Iqbal_2026.pdf",
    },
    timeline: [
      {
        title: "Lamaran terkirim",
        date: "10 Okt 2026",
        description: "Profil pelamar berhasil dikirim ke Kawan App.",
        state: "completed",
      },
      {
        title: "Dokumen ditinjau",
        date: "12 Okt 2026",
        description: "Dokumen lamaran telah ditinjau oleh tim rekrutmen Kawan App.",
        state: "completed",
      },
      {
        title: "Tidak diterima",
        date: "15 Okt 2026",
        statusLabel: "Selesai",
        description: "Terima kasih atas minatmu. Saat ini Kawan App belum dapat melanjutkan proses ke tahap berikutnya.",
        state: "completed",
        variant: "rose",
      },
    ],
  },
];
