export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface ProfileDocument {
  id: string;
  name: string;
  type: "cv" | "portfolio";
  size: string;
  updatedAt: string;
}

export interface SeekerProfile {
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  domicile: string;
  about: string;
  avatar: string;
  workExperiences: WorkExperience[];
  educations: Education[];
  documents: ProfileDocument[];
  portfolioLink: string;
}

export const INITIAL_SEEKER_PROFILE: SeekerProfile = {
  fullName: "Ayu Prameswari",
  professionalTitle: "Product Designer",
  email: "ayu.prameswari@email.com",
  phone: "0812 3456 7890",
  domicile: "Jakarta Selatan, Indonesia",
  about:
    "Product Designer dengan pengalaman lebih dari dua tahun merancang pengalaman web dan mobile. Saya senang menghubungkan kebutuhan pengguna dan tujuan bisnis melalui riset, prototyping, serta kolaborasi yang terbuka.",
  avatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  workExperiences: [
    {
      id: "exp_01",
      title: "UI/UX Designer",
      company: "Loka Digital",
      period: "Jan 2024 – Sekarang",
      description:
        "Merancang alur onboarding, mengelola komponen UI, dan melakukan uji kegunaan untuk produk SaaS.",
    },
    {
      id: "exp_02",
      title: "Design Intern",
      company: "Rintis Kreatif",
      period: "Jul – Des 2023",
      description:
        "Mendukung riset pengguna, brief kreatif, dan aset visual kampanye digital.",
    },
  ],
  educations: [
    {
      id: "edu_01",
      degree: "S1 Desain Komunikasi Visual",
      institution: "Universitas Cakrawala",
      period: "2019–2023",
    },
  ],
  documents: [
    {
      id: "doc_cv",
      name: "CV_Ayu_Prameswari.pdf",
      type: "cv",
      size: "1,2 MB",
      updatedAt: "12 Oktober 2026",
    },
    {
      id: "doc_portfolio",
      name: "Portfolio_Ayu_2026.pdf",
      type: "portfolio",
      size: "3,8 MB",
      updatedAt: "12 Oktober 2026",
    },
  ],
  portfolioLink: "ayu.design.example",
};
