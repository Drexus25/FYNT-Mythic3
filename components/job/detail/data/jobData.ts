export interface JobQuestion {
  id: number;
  question: string;
}

export interface JobDetailItem {
  id: number;
  slug: string;
  logo: string;
  logoColor: string;
  company: string;
  isVerified: boolean;
  title: string;
  location: string;
  workplaceType: "Hybrid" | "Remote" | "On-site";
  employmentType: string;
  level: string;
  salary: string;
  postedAt: string;
  closingDate: string;
  coinCost: number;
  slotsfilled: number;
  slotsTotal: number;
  // Satu kolom rich text HTML string dari Tiptap editor
  description: string;
  essayQuestions: JobQuestion[];
  // Company info
  companyIndustry: string;
  companySize: string;
  companyWebsite: string;
  companyVerifiedAt: string;
  companyDescription: string;
}

export const DUMMY_JOB_DETAILS: JobDetailItem[] = [
  {
    id: 1,
    slug: "product-designer-nusa-studio",
    logo: "N",
    logoColor: "bg-teal",
    company: "Nusa Studio",
    isVerified: true,
    title: "Product Designer",
    location: "Jakarta Selatan",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    level: "Mid level",
    salary: "Rp8–12 juta / bulan",
    postedAt: "10 Oktober 2026",
    closingDate: "10 November 2026",
    coinCost: 1,
    slotsfilled: 8,
    slotsTotal: 10,
    description: `<p>Nusa Studio adalah studio produk digital yang membantu bisnis membangun pengalaman pengguna yang lebih bermakna. Kami mencari Product Designer yang nyaman berpikir strategis, bereksperimen, dan berkolaborasi lintas tim.</p><p>Kamu akan terlibat dari penemuan masalah hingga desain siap dikembangkan, bersama tim produk dan engineering.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Menerjemahkan kebutuhan pengguna menjadi alur, wireframe, dan prototipe yang mudah dipahami.</li><li>Merancang antarmuka web dan mobile dengan sistem desain yang konsisten.</li><li>Melakukan riset ringan dan uji kegunaan untuk memvalidasi keputusan desain.</li><li>Berkolaborasi dengan product manager dan developer hingga proses handoff.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 2–4 tahun dalam desain produk digital atau UI/UX.</li><li>Terampil menggunakan Figma, prototyping, dan komponen sistem desain.</li><li>Portofolio yang menunjukkan proses berpikir dan dampak keputusan desain.</li><li>Mampu menyampaikan ide dengan jelas dan terbuka terhadap umpan balik.</li></ul>`,
    essayQuestions: [
      {
        id: 1,
        question:
          "Ceritakan proyek desain yang paling menantang dan bagaimana kamu menyelesaikannya.",
      },
      {
        id: 2,
        question:
          "Bagaimana kamu menggunakan riset pengguna untuk memengaruhi keputusan desain?",
      },
    ],
    companyIndustry: "Desain & teknologi",
    companySize: "Tim 11–50 orang, berlokasi di Jakarta Selatan.",
    companyWebsite: "nusastudio.example",
    companyVerifiedAt: "10 Oktober 2026",
    companyDescription:
      "Studio desain & teknologi produk digital. Tim 11–50 orang, berlokasi di Jakarta Selatan.",
  },
  {
    id: 2,
    slug: "frontend-developer-akar-digital",
    logo: "A",
    logoColor: "bg-teal",
    company: "Akar Digital",
    isVerified: true,
    title: "Frontend Developer",
    location: "Bandung",
    workplaceType: "Remote",
    employmentType: "Full-time",
    level: "Mid level",
    salary: "Rp9–14 juta / bulan",
    postedAt: "8 Oktober 2026",
    closingDate: "8 November 2026",
    coinCost: 1,
    slotsfilled: 14,
    slotsTotal: 20,
    description: `<p>Akar Digital adalah perusahaan teknologi yang fokus pada pengembangan produk web berkualitas tinggi. Kami sedang mencari Frontend Developer yang bersemangat dalam membangun antarmuka yang cepat, aksesibel, dan estetis.</p><p>Kamu akan bekerja bersama tim desain dan backend untuk mewujudkan produk digital yang berdampak nyata bagi pengguna.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Mengembangkan komponen UI yang reusable menggunakan React dan TypeScript.</li><li>Memastikan performa, aksesibilitas, dan kompatibilitas lintas browser.</li><li>Berkolaborasi dengan tim desain untuk mengimplementasikan desain secara pixel-perfect.</li><li>Melakukan code review dan menjaga standar kualitas kode.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 2–4 tahun dalam pengembangan frontend dengan React.</li><li>Menguasai TypeScript, CSS modern, dan tooling seperti Vite atau Next.js.</li><li>Memahami prinsip aksesibilitas web (WCAG).</li><li>Berpengalaman menggunakan Git dan workflow kolaborasi tim.</li></ul>`,
    essayQuestions: [
      {
        id: 1,
        question:
          "Bagaimana kamu memastikan performa halaman web yang kamu bangun tetap optimal?",
      },
      {
        id: 2,
        question:
          "Ceritakan pengalamanmu bekerja dalam tim yang menggunakan metode agile.",
      },
    ],
    companyIndustry: "Teknologi & software",
    companySize: "Tim 50–100 orang, berlokasi di Bandung.",
    companyWebsite: "akardigital.example",
    companyVerifiedAt: "8 Oktober 2026",
    companyDescription:
      "Perusahaan pengembangan produk digital dengan fokus pada kualitas dan pengalaman pengguna.",
  },
];
