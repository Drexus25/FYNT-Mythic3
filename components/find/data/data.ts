import { JobCardProps } from "@/components/shared/JobCard";

// ─── Shared types ────────────────────────────────────────────────────────────

export interface JobQuestion {
  id: number;
  question: string;
}

// ─── JobItem: single source of truth for both the find grid and detail pages ──

export interface JobItem extends JobCardProps {
  id: number;
  slug: string;
  logo: string;
  logoColor: string;
  company: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  slotsfilled: number;
  slotsTotal: number;
  coinCost: number;
  closingDate: string;
  // Card / search metadata
  workplaceType?: "Hybrid" | "Remote" | "On-site";
  isVerified?: boolean;
  tags?: string[];
  postedAt?: string;
  // Detail page fields
  employmentType?: string;
  level?: string;
  postedAtFull?: string;    // long-form date, e.g. "10 Oktober 2026"
  closingDateFull?: string; // long-form date, e.g. "10 November 2026"
  description: string;      // Satu kolom HTML string dari rich-text editor
  essayQuestions?: JobQuestion[];
  // Company info (detail sidebar)
  companyIndustry?: string;
  companySize?: string;
  companyWebsite?: string;
  companyVerifiedAt?: string;
  companyDescription?: string;
}

// ─── Re-export alias used by JobDetailContainer ───────────────────────────────

export type JobDetailItem = Required<
  Pick<
    JobItem,
    | "id" | "slug" | "logo" | "logoColor" | "company" | "title" | "location"
    | "workplaceType" | "isVerified" | "salary" | "coinCost" | "slotsfilled"
    | "slotsTotal" | "closingDate" | "employmentType" | "level"
    | "postedAtFull" | "closingDateFull" | "description"
    | "essayQuestions" | "companyIndustry" | "companySize"
    | "companyWebsite" | "companyVerifiedAt" | "companyDescription"
  >
>;

// ─── Data ─────────────────────────────────────────────────────────────────────

export const DUMMY_JOBS: JobItem[] = [
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
    type: "Hybrid",
    salary: "Rp8–12 juta / bulan",
    tags: ["Full-time", "Mid level", "Figma"],
    slotsfilled: 8,
    slotsTotal: 10,
    coinCost: 1,
    closingDate: "28 Okt 2026",
    postedAt: "2 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Mid level",
    postedAtFull: "10 Oktober 2026",
    closingDateFull: "10 November 2026",
    description: `<p>Nusa Studio adalah studio produk digital yang membantu bisnis membangun pengalaman pengguna yang lebih bermakna. Kami mencari Product Designer yang nyaman berpikir strategis, bereksperimen, dan berkolaborasi lintas tim.</p><p>Kamu akan terlibat dari penemuan masalah hingga desain siap dikembangkan, bersama tim produk dan engineering.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Menerjemahkan kebutuhan pengguna menjadi alur, wireframe, dan prototipe yang mudah dipahami.</li><li>Merancang antarmuka web dan mobile dengan sistem desain yang konsisten.</li><li>Melakukan riset ringan dan uji kegunaan untuk memvalidasi keputusan desain.</li><li>Berkolaborasi dengan product manager dan developer hingga proses handoff.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 2–4 tahun dalam desain produk digital atau UI/UX.</li><li>Terampil menggunakan Figma, prototyping, dan komponen sistem desain.</li><li>Portofolio yang menunjukkan proses berpikir dan dampak keputusan desain.</li><li>Mampu menyampaikan ide dengan jelas dan terbuka terhadap umpan balik.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Ceritakan proyek desain yang paling menantang dan bagaimana kamu menyelesaikannya." },
      { id: 2, question: "Bagaimana kamu menggunakan riset pengguna untuk memengaruhi keputusan desain?" },
    ],
    companyIndustry: "Desain & teknologi",
    companySize: "Tim 11–50 orang, berlokasi di Jakarta Selatan.",
    companyWebsite: "nusastudio.example",
    companyVerifiedAt: "10 Oktober 2026",
    companyDescription: "Studio desain & teknologi produk digital. Tim 11–50 orang, berlokasi di Jakarta Selatan.",
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
    type: "Remote",
    salary: "Rp9–14 juta / bulan",
    tags: ["Full-time", "Mid level", "React"],
    slotsfilled: 14,
    slotsTotal: 20,
    coinCost: 2,
    closingDate: "30 Okt 2026",
    postedAt: "3 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Mid level",
    postedAtFull: "8 Oktober 2026",
    closingDateFull: "8 November 2026",
    description: `<p>Akar Digital adalah perusahaan teknologi yang fokus pada pengembangan produk web berkualitas tinggi. Kami sedang mencari Frontend Developer yang bersemangat dalam membangun antarmuka yang cepat, aksesibel, dan estetis.</p><p>Kamu akan bekerja bersama tim desain dan backend untuk mewujudkan produk digital yang berdampak nyata bagi pengguna.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Mengembangkan komponen UI yang reusable menggunakan React dan TypeScript.</li><li>Memastikan performa, aksesibilitas, dan kompatibilitas lintas browser.</li><li>Berkolaborasi dengan tim desain untuk mengimplementasikan desain secara pixel-perfect.</li><li>Melakukan code review dan menjaga standar kualitas kode.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 2–4 tahun dalam pengembangan frontend dengan React.</li><li>Menguasai TypeScript, CSS modern, dan tooling seperti Vite atau Next.js.</li><li>Memahami prinsip aksesibilitas web (WCAG).</li><li>Berpengalaman menggunakan Git dan workflow kolaborasi tim.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Bagaimana kamu memastikan performa halaman web yang kamu bangun tetap optimal?" },
      { id: 2, question: "Ceritakan pengalamanmu bekerja dalam tim yang menggunakan metode agile." },
    ],
    companyIndustry: "Teknologi & software",
    companySize: "Tim 50–100 orang, berlokasi di Bandung.",
    companyWebsite: "akardigital.example",
    companyVerifiedAt: "8 Oktober 2026",
    companyDescription: "Perusahaan pengembangan produk digital dengan fokus pada kualitas dan pengalaman pengguna.",
  },
  {
    id: 3,
    slug: "digital-marketing-specialist-sela-kreatif",
    logo: "S",
    logoColor: "bg-teal",
    company: "Sela Kreatif",
    isVerified: true,
    title: "Digital Marketing Specialist",
    location: "Yogyakarta",
    workplaceType: "On-site",
    type: "On-site",
    salary: "Rp5–8 juta / bulan",
    tags: ["Full-time", "Junior", "SEO"],
    slotsfilled: 5,
    slotsTotal: 8,
    coinCost: 1,
    closingDate: "25 Okt 2026",
    postedAt: "1 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Junior",
    postedAtFull: "12 Oktober 2026",
    closingDateFull: "25 Oktober 2026",
    description: `<p>Sela Kreatif adalah agensi kreatif berbasis di Yogyakarta yang membantu brand lokal tumbuh melalui strategi pemasaran digital yang relevan dan terukur.</p><p>Kami mencari Digital Marketing Specialist yang passionate dalam dunia konten, SEO, dan media sosial untuk memperkuat kehadiran digital klien kami.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Merencanakan dan mengeksekusi strategi pemasaran digital lintas platform (Instagram, TikTok, Google).</li><li>Mengoptimalkan konten dan halaman web untuk meningkatkan peringkat mesin pencari (SEO).</li><li>Menganalisis performa kampanye dan menyusun laporan berbasis data.</li><li>Berkolaborasi dengan tim konten dan desainer untuk menghasilkan materi kampanye.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 1–2 tahun di bidang digital marketing atau peran serupa.</li><li>Memahami dasar-dasar SEO, SEM, dan media sosial marketing.</li><li>Familiar dengan tools seperti Google Analytics, Meta Ads Manager, atau Semrush.</li><li>Kemampuan komunikasi yang baik dan kemauan belajar cepat.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Ceritakan kampanye digital marketing yang pernah kamu jalankan dan hasilnya." },
      { id: 2, question: "Bagaimana kamu mengukur keberhasilan sebuah kampanye digital?" },
    ],
    companyIndustry: "Agensi kreatif & pemasaran",
    companySize: "Tim 10–30 orang, berlokasi di Yogyakarta.",
    companyWebsite: "selakrtatif.example",
    companyVerifiedAt: "12 Oktober 2026",
    companyDescription: "Agensi kreatif yang membantu brand lokal berkembang melalui strategi digital yang inovatif.",
  },
  {
    id: 4,
    slug: "data-analyst-titik-data",
    logo: "T",
    logoColor: "bg-teal",
    company: "Titik Data",
    isVerified: true,
    title: "Data Analyst",
    location: "Jakarta Pusat",
    workplaceType: "Hybrid",
    type: "Hybrid",
    salary: "Rp7–11 juta / bulan",
    tags: ["Full-time", "Mid level", "SQL"],
    slotsfilled: 9,
    slotsTotal: 15,
    coinCost: 2,
    closingDate: "29 Okt 2026",
    postedAt: "4 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Mid level",
    postedAtFull: "9 Oktober 2026",
    closingDateFull: "29 Oktober 2026",
    description: `<p>Titik Data adalah perusahaan konsultasi data yang membantu organisasi membuat keputusan lebih cerdas berdasarkan data yang akurat dan terstruktur.</p><p>Kami mencari Data Analyst yang mampu mengolah data mentah menjadi wawasan bermakna untuk mendukung strategi bisnis klien kami.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Mengumpulkan, membersihkan, dan menganalisis dataset dari berbagai sumber.</li><li>Membangun dashboard dan laporan interaktif menggunakan tools seperti Looker atau Tableau.</li><li>Mengidentifikasi tren dan pola data untuk mendukung keputusan bisnis.</li><li>Bekerja sama dengan tim produk dan operasional dalam mendefinisikan metrik kunci.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 2–4 tahun sebagai Data Analyst atau peran analitik serupa.</li><li>Menguasai SQL dan setidaknya satu bahasa pemrograman analitik (Python atau R).</li><li>Berpengalaman menggunakan tools visualisasi data seperti Tableau, Looker, atau Power BI.</li><li>Kemampuan komunikasi yang baik untuk menyampaikan temuan data kepada stakeholder non-teknis.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Ceritakan proyek analisis data yang paling kompleks yang pernah kamu kerjakan." },
      { id: 2, question: "Bagaimana kamu memastikan akurasi dan integritas data dalam analisismu?" },
    ],
    companyIndustry: "Konsultasi data & analitik",
    companySize: "Tim 20–60 orang, berlokasi di Jakarta Pusat.",
    companyWebsite: "titikdata.example",
    companyVerifiedAt: "9 Oktober 2026",
    companyDescription: "Perusahaan konsultasi data yang membantu organisasi mengambil keputusan berbasis data.",
  },
  {
    id: 5,
    slug: "content-writer-ruang-cerita",
    logo: "R",
    logoColor: "bg-teal",
    company: "Ruang Cerita",
    isVerified: false,
    title: "Content Writer",
    location: "Surabaya",
    workplaceType: "Remote",
    type: "Remote",
    salary: "Rp4–6 juta / bulan",
    tags: ["Kontrak", "Junior", "Writing"],
    slotsfilled: 4,
    slotsTotal: 6,
    coinCost: 1,
    closingDate: "24 Okt 2026",
    postedAt: "5 hari lalu",
    // Detail
    employmentType: "Kontrak",
    level: "Junior",
    postedAtFull: "8 Oktober 2026",
    closingDateFull: "24 Oktober 2026",
    description: `<p>Ruang Cerita adalah platform media digital yang menyajikan konten artikel, opini, dan storytelling untuk pembaca muda Indonesia.</p><p>Kami mencari Content Writer yang suka bercerita, kritis terhadap isu terkini, dan mampu menulis dengan gaya yang segar dan mudah dicerna.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Menulis artikel, opini, dan konten web sesuai panduan gaya Ruang Cerita.</li><li>Melakukan riset topik dan memastikan akurasi informasi sebelum publikasi.</li><li>Berkolaborasi dengan tim editorial untuk menjaga konsistensi konten.</li><li>Mengoptimalkan konten dengan prinsip dasar SEO on-page.</li></ul><h3>Kualifikasi</h3><ul><li>Portofolio tulisan yang menunjukkan kemampuan storytelling yang kuat.</li><li>Mampu menulis dalam Bahasa Indonesia yang baik, lugas, dan menarik.</li><li>Memahami dasar-dasar SEO untuk penulisan konten web.</li><li>Dapat bekerja mandiri dengan tenggat waktu yang ketat.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Kirimkan satu contoh tulisanmu yang paling kamu banggakan dan jelaskan mengapa." },
      { id: 2, question: "Bagaimana kamu menemukan ide tulisan ketika sedang tidak terinspirasi?" },
    ],
    companyIndustry: "Media & konten digital",
    companySize: "Tim 5–15 orang, berbasis remote.",
    companyWebsite: "ruangcerita.example",
    companyVerifiedAt: "-",
    companyDescription: "Platform media digital yang menghadirkan konten storytelling untuk pembaca muda Indonesia.",
  },
  {
    id: 6,
    slug: "people-operations-langkah-bersama",
    logo: "L",
    logoColor: "bg-teal",
    company: "Langkah Bersama",
    isVerified: true,
    title: "People Operations",
    location: "Tangerang",
    workplaceType: "On-site",
    type: "On-site",
    salary: "Rp6–9 juta / bulan",
    tags: ["Full-time", "Mid level", "HR"],
    slotsfilled: 3,
    slotsTotal: 5,
    coinCost: 1,
    closingDate: "31 Okt 2026",
    postedAt: "6 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Mid level",
    postedAtFull: "7 Oktober 2026",
    closingDateFull: "31 Oktober 2026",
    description: `<p>Langkah Bersama adalah perusahaan sosial yang bergerak di bidang pemberdayaan tenaga kerja dan pengembangan SDM. Kami percaya bahwa pertumbuhan bisnis yang berkelanjutan dimulai dari tim yang bahagia dan berkembang.</p><p>Kami mencari People Operations yang bersemangat membangun budaya kerja yang inklusif dan sistem HR yang efisien.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Mengelola proses rekrutmen dari pemasangan lowongan hingga onboarding karyawan baru.</li><li>Mengelola administrasi HR termasuk data karyawan, kontrak, dan kehadiran.</li><li>Mendukung inisiatif employee engagement dan program pengembangan tim.</li><li>Menjadi titik kontak utama karyawan untuk kebutuhan terkait SDM.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 2–3 tahun di bidang HR, People Ops, atau peran serupa.</li><li>Memahami regulasi ketenagakerjaan Indonesia.</li><li>Kemampuan komunikasi interpersonal yang kuat dan empati tinggi.</li><li>Terorganisir, detail, dan mampu mengelola banyak tugas secara bersamaan.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Bagaimana kamu membangun budaya kerja yang positif dalam sebuah tim?" },
      { id: 2, question: "Ceritakan situasi di mana kamu harus menangani konflik antarkaryawan." },
    ],
    companyIndustry: "SDM & pemberdayaan tenaga kerja",
    companySize: "Tim 30–70 orang, berlokasi di Tangerang.",
    companyWebsite: "langkahbersama.example",
    companyVerifiedAt: "7 Oktober 2026",
    companyDescription: "Perusahaan sosial yang fokus pada pemberdayaan SDM dan pengembangan budaya kerja yang inklusif.",
  },
];
