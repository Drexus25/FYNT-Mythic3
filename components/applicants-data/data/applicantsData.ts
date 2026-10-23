export type ApplicantStatus = "Not Reviewed" | "Shortlist" | "Rejected";

export interface ApplicantDocument {
  name: string;
  size: string;
  type: string;
  sentAt: string;
  url?: string;
}

export interface EssayAnswer {
  question: string;
  answer: string;
}

export interface Applicant {
  id: string;
  initials: string;
  name: string;
  role: string;
  experience: string;
  location: string;
  appliedDate: string;
  status: ApplicantStatus;
  email: string;
  phone: string;
  summary: string;
  tags: string[];
  documents: ApplicantDocument[];
  portfolioUrl?: string;
  essayAnswers: EssayAnswer[];
  internalNote?: string;
}

export interface JobWithApplicants {
  slug: string;
  title: string;
  company: string;
  location: string;
  workplaceType: string;
  employmentType: string;
  applicants: Applicant[];
}

export const APPLICANTS_DATA: JobWithApplicants[] = [
  {
    slug: "product-designer-nusa-studio",
    title: "Product Designer",
    company: "Nusa Studio",
    location: "Jakarta Selatan",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    applicants: [
      {
        id: "a1",
        initials: "NP",
        name: "Nadine Putri",
        role: "Product Designer",
        experience: "3 tahun",
        location: "Jakarta Selatan",
        appliedDate: "12 Okt 2026",
        status: "Not Reviewed",
        email: "nadine.putri@email.com",
        phone: "0813 4567 8901",
        summary:
          "3 tahun pengalaman merancang produk B2B dan aplikasi layanan digital. Berfokus pada riset, alur pengguna, dan sistem desain.",
        tags: ["Figma", "UX Research", "Prototyping", "Design System"],
        documents: [
          {
            name: "CV_Nadine_Putri.pdf",
            size: "1,6 MB",
            type: "PDF",
            sentAt: "12 Oktober 2026",
          },
          {
            name: "Portfolio_Nadine.pdf",
            size: "4,2 MB",
            type: "PDF",
            sentAt: "12 Oktober 2026",
          },
        ],
        portfolioUrl: "nadine.design.example",
        essayAnswers: [
          {
            question:
              "Ceritakan proyek desain yang paling menantang dan bagaimana kamu menyelesaikannya.",
            answer:
              "Saya merancang ulang dashboard operasional yang memiliki banyak data tetapi sulit diprioritaskan. Melalui wawancara dengan tim operasional, saya menemukan tugas utama yang perlu ditampilkan lebih awal. Saya menyederhanakan navigasi dan menguji prototipe dengan pengguna sebelum tim engineering mengimplementasikannya.",
          },
          {
            question:
              "Bagaimana kamu menggunakan riset pengguna untuk memengaruhi keputusan desain?",
            answer:
              "Saya menghubungkan temuan riset dengan masalah produk yang disepakati tim. Hasil observasi saya kelompokkan menjadi pola, lalu saya susun rekomendasi beserta bukti dan trade-off. Setelah itu, saya membuat prototipe untuk menguji apakah perubahan benar-benar membantu pengguna menyelesaikan tugasnya.",
          },
        ],
        internalNote: "",
      },
      {
        id: "a2",
        initials: "FM",
        name: "Fajar Mahendra",
        role: "UI/UX Designer",
        experience: "4 tahun",
        location: "Bandung",
        appliedDate: "12 Okt 2026",
        status: "Shortlist",
        email: "fajar.mahendra@email.com",
        phone: "0821 3456 7890",
        summary:
          "4 tahun pengalaman di desain UI/UX untuk produk SaaS dan e-commerce. Terbiasa bekerja lintas tim dengan pendekatan desain berbasis data.",
        tags: ["Figma", "Atomic Design", "User Testing", "Tailwind"],
        documents: [
          {
            name: "CV_Fajar_Mahendra.pdf",
            size: "1,1 MB",
            type: "PDF",
            sentAt: "12 Oktober 2026",
          },
          {
            name: "Portfolio_Fajar.pdf",
            size: "3,5 MB",
            type: "PDF",
            sentAt: "12 Oktober 2026",
          },
        ],
        portfolioUrl: "fajar.design.example",
        essayAnswers: [
          {
            question:
              "Ceritakan proyek desain yang paling menantang dan bagaimana kamu menyelesaikannya.",
            answer:
              "Saya memimpin redesain modul onboarding di platform HR. Tantangan utamanya adalah menyeimbangkan kebutuhan admin dan karyawan baru. Saya melakukan sesi contextual inquiry lalu membuat dua prototipe berbeda yang diuji bersama masing-masing kelompok sebelum keputusan final diambil.",
          },
          {
            question:
              "Bagaimana kamu menggunakan riset pengguna untuk memengaruhi keputusan desain?",
            answer:
              "Saya selalu mulai dari data sebelum desain. Temuan dari sesi usability testing saya dokumentasikan dengan severity rating agar tim produk bisa memprioritaskan perbaikan berdasarkan dampaknya, bukan preferensi subjektif.",
          },
        ],
        internalNote:
          "Portfolio menunjukkan proses riset yang terstruktur. Bahas lebih lanjut pengalaman kolaborasi dengan engineering pada tahap berikutnya.",
      },
      {
        id: "a3",
        initials: "PA",
        name: "Putri Anindya",
        role: "Product Designer",
        experience: "2 tahun",
        location: "Jakarta Pusat",
        appliedDate: "12 Okt 2026",
        status: "Not Reviewed",
        email: "putri.anindya@email.com",
        phone: "0812 9876 5432",
        summary:
          "2 tahun pengalaman sebagai product designer di startup fintech. Berfokus pada desain mobile-first dan pengujian kegunaan berkala.",
        tags: ["Figma", "Mobile Design", "Usability Testing"],
        documents: [
          {
            name: "CV_Putri_Anindya.pdf",
            size: "0,9 MB",
            type: "PDF",
            sentAt: "12 Oktober 2026",
          },
          {
            name: "Portfolio_Putri.pdf",
            size: "2,8 MB",
            type: "PDF",
            sentAt: "12 Oktober 2026",
          },
        ],
        portfolioUrl: "putri.design.example",
        essayAnswers: [
          {
            question:
              "Ceritakan proyek desain yang paling menantang dan bagaimana kamu menyelesaikannya.",
            answer:
              "Saya bekerja pada fitur verifikasi KYC yang tingkat gagalnya cukup tinggi. Melalui analisis drop-off dan wawancara pengguna, saya menemukan bahwa instruksi dokumen terlalu teknis. Saya menyederhanakan copy dan menambahkan ilustrasi langkah per langkah, yang menurunkan tingkat kegagalan sebesar 30%.",
          },
          {
            question:
              "Bagaimana kamu menggunakan riset pengguna untuk memengaruhi keputusan desain?",
            answer:
              "Riset pengguna adalah fondasi utama pekerjaan saya. Setiap keputusan desain saya kaitkan langsung dengan temuan riset, baik dari wawancara maupun analisis perilaku di aplikasi.",
          },
        ],
        internalNote: "",
      },
      {
        id: "a4",
        initials: "DP",
        name: "Dimas Pratama",
        role: "UI Designer",
        experience: "3 tahun",
        location: "Tangerang",
        appliedDate: "11 Okt 2026",
        status: "Not Reviewed",
        email: "dimas.pratama@email.com",
        phone: "0818 2345 6789",
        summary:
          "3 tahun di desain UI untuk aplikasi consumer dan B2B. Terampil membangun design system dan panduan visual merek.",
        tags: ["Figma", "Design System", "Visual Design", "Branding"],
        documents: [
          {
            name: "CV_Dimas_Pratama.pdf",
            size: "1,2 MB",
            type: "PDF",
            sentAt: "11 Oktober 2026",
          },
        ],
        portfolioUrl: "dimas.design.example",
        essayAnswers: [
          {
            question:
              "Ceritakan proyek desain yang paling menantang dan bagaimana kamu menyelesaikannya.",
            answer:
              "Saya membangun design system dari nol untuk perusahaan dengan 4 produk berbeda. Tantangannya adalah membuat komponen yang fleksibel namun tetap konsisten. Saya mendokumentasikan setiap keputusan desain dan mengadakan sesi review rutin bersama tim engineering.",
          },
          {
            question:
              "Bagaimana kamu menggunakan riset pengguna untuk memengaruhi keputusan desain?",
            answer:
              "Saya berkolaborasi erat dengan UX researcher untuk menerjemahkan temuan riset ke dalam keputusan visual. Saya memastikan setiap perubahan komponen memiliki alasan yang dapat dipertanggungjawabkan.",
          },
        ],
        internalNote: "",
      },
      {
        id: "a5",
        initials: "RK",
        name: "Rani Kusuma",
        role: "UX Designer",
        experience: "2 tahun",
        location: "Depok",
        appliedDate: "11 Okt 2026",
        status: "Not Reviewed",
        email: "rani.kusuma@email.com",
        phone: "0857 6543 2109",
        summary:
          "2 tahun pengalaman sebagai UX designer di agensi digital. Berpengalaman mengelola proyek desain dari riset hingga handoff.",
        tags: ["UX Research", "Wireframing", "Figma", "Information Architecture"],
        documents: [
          {
            name: "CV_Rani_Kusuma.pdf",
            size: "1,0 MB",
            type: "PDF",
            sentAt: "11 Oktober 2026",
          },
          {
            name: "Portfolio_Rani.pdf",
            size: "3,1 MB",
            type: "PDF",
            sentAt: "11 Oktober 2026",
          },
        ],
        portfolioUrl: "rani.design.example",
        essayAnswers: [
          {
            question:
              "Ceritakan proyek desain yang paling menantang dan bagaimana kamu menyelesaikannya.",
            answer:
              "Saya mendesain ulang arsitektur informasi portal layanan pemerintah daerah. Tantangannya adalah beragamnya profil pengguna dari lansia hingga profesional muda. Saya menerapkan card sorting dan tree testing untuk menemukan struktur yang paling intuitif.",
          },
          {
            question:
              "Bagaimana kamu menggunakan riset pengguna untuk memengaruhi keputusan desain?",
            answer:
              "Saya menggunakan campuran riset kualitatif dan kuantitatif. Temuan saya sajikan dalam format yang mudah dipahami stakeholder non-teknis agar keputusan desain mendapat dukungan yang tepat.",
          },
        ],
        internalNote: "",
      },
      {
        id: "a6",
        initials: "AW",
        name: "Aditya Wicaksono",
        role: "Product Designer",
        experience: "5 tahun",
        location: "Jakarta Selatan",
        appliedDate: "11 Okt 2026",
        status: "Shortlist",
        email: "aditya.wicaksono@email.com",
        phone: "0811 3456 7890",
        summary:
          "5 tahun pengalaman product design di startup teknologi. Pernah memimpin tim desain dan berpengalaman dalam strategi produk.",
        tags: ["Product Strategy", "Design Leadership", "Figma", "Agile"],
        documents: [
          {
            name: "CV_Aditya_Wicaksono.pdf",
            size: "1,4 MB",
            type: "PDF",
            sentAt: "11 Oktober 2026",
          },
          {
            name: "Portfolio_Aditya.pdf",
            size: "5,0 MB",
            type: "PDF",
            sentAt: "11 Oktober 2026",
          },
        ],
        portfolioUrl: "aditya.design.example",
        essayAnswers: [
          {
            question:
              "Ceritakan proyek desain yang paling menantang dan bagaimana kamu menyelesaikannya.",
            answer:
              "Memimpin redesain produk utama perusahaan dengan 200k+ pengguna aktif dalam waktu 3 bulan. Saya mengatur prioritas fitur bersama PM, membangun sistem desain modular, dan menjaga komunikasi harian dengan engineering agar tidak ada gap antara desain dan implementasi.",
          },
          {
            question:
              "Bagaimana kamu menggunakan riset pengguna untuk memengaruhi keputusan desain?",
            answer:
              "Saya membangun budaya riset di tim dengan mengadakan sesi observasi pengguna rutin setiap dua sprint. Temuan langsung masuk ke backlog produk dengan prioritas berdasarkan frekuensi dan dampak terhadap pengalaman pengguna.",
          },
        ],
        internalNote: "Kandidat senior dengan track record kepemimpinan yang kuat.",
      },
    ],
  },
];
