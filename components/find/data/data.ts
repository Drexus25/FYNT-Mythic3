import { JobCardProps } from "@/components/shared/JobCard";

// ─── Shared types ────────────────────────────────────────────────────────────

export interface JobQuestion {
  id: number;
  question: string;
}

// ─── JobItem: single source of truth for both the find grid and detail pages ──

export interface JobItem extends JobCardProps {
  id: number | string;
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
    coinCost: 1,
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
    coinCost: 1,
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
  {
    id: 7,
    slug: "senior-frontend-engineer-stripe",
    logo: "S",
    logoColor: "bg-violet-600",
    company: "Stripe",
    isVerified: true,
    title: "Senior Frontend Engineer",
    location: "San Francisco, CA",
    workplaceType: "Remote",
    type: "Remote",
    salary: "Rp32–44 juta / bulan",
    tags: ["Full-time", "Senior", "React", "TypeScript"],
    slotsfilled: 12,
    slotsTotal: 20,
    coinCost: 1,
    closingDate: "30 Okt 2026",
    postedAt: "1 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Senior level",
    postedAtFull: "15 Oktober 2026",
    closingDateFull: "30 Oktober 2026",
    description: `<p>Stripe adalah platform infrastruktur keuangan untuk internet. Jutaan perusahaan—mulai dari startup paling ambisius hingga perusahaan Fortune 500 terbesar—menggunakan software Stripe untuk menerima pembayaran, menambah pendapatan, dan mempercepat peluang bisnis.</p><p>Kami mencari Senior Frontend Engineer untuk merancang antarmuka dashboard keuangan yang andal, sangat responsif, dan memberikan pengalaman pengguna kelas dunia.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Merancang dan membangun arsitektur antarmuka web modern dengan React, TypeScript, dan sistem desain canggih.</li><li>Mengoptimalkan performa halaman dan interaksi pengguna hingga latensi sub-milidetik.</li><li>Berkolaborasi erat dengan desainer produk, product manager, dan tim platform API untuk menghadirkan fitur-fitur baru.</li><li>Menjaga standar kualitas kode, menulis automated tests, dan membimbing anggota tim lainnya.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 5+ tahun membangun aplikasi web berskala besar menggunakan React dan ekosistem TypeScript modern.</li><li>Pemahaman mendalam tentang arsitektur frontend, state management, web performance, dan aksesibilitas (a11y).</li><li>Portofolio atau rekam jejak dalam membangun UI produk yang elegan dan intuitif.</li><li>Kemampuan komunikasi teknis yang jelas dalam lingkungan kerja terdistribusi global.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Ceritakan arsitektur frontend berskala besar yang pernah kamu rancang dan kendala terbesar yang kamu hadapi." },
      { id: 2, question: "Bagaimana pendekatanmu dalam memastikan kualitas kode, performa tinggi, dan pengujian otomatis?" },
    ],
    companyIndustry: "Financial Technology & Infrastructure",
    companySize: "7000+ karyawan di seluruh dunia.",
    companyWebsite: "stripe.com",
    companyVerifiedAt: "15 Oktober 2026",
    companyDescription: "Infrastruktur keuangan untuk internet. Membantu bisnis dari semua ukuran menerima pembayaran dan mengoperasikan sistem keuangan mereka secara global.",
  },
  {
    id: 8,
    slug: "product-designer-notion",
    logo: "N",
    logoColor: "bg-gray-900",
    company: "Notion",
    isVerified: true,
    title: "Product Designer",
    location: "New York, NY",
    workplaceType: "Hybrid",
    type: "Hybrid",
    salary: "Rp24–32 juta / bulan",
    tags: ["Full-time", "Mid-Senior", "Figma", "UI/UX"],
    slotsfilled: 37,
    slotsTotal: 50,
    coinCost: 1,
    closingDate: "27 Okt 2026",
    postedAt: "3 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Mid-Senior level",
    postedAtFull: "12 Oktober 2026",
    closingDateFull: "27 Oktober 2026",
    description: `<p>Notion adalah workspace kolaboratif all-in-one tempat jutaan tim dan individu menulis, merencanakan, dan mengorganisasi ide-ide mereka. Kami percaya bahwa perangkat lunak yang hebat harus dapat disesuaikan dan memberdayakan pengguna seperti kanvas kosong.</p><p>Sebagai Product Designer di Notion, kamu akan bekerja untuk memecahkan masalah interaksi kompleks dan mendesain fitur kolaborasi yang terasa mulus dan alami bagi pengguna.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Mendesain antarmuka yang fleksibel, intuitif, dan kaya fungsi mulai dari konsep wireframe hingga visual akhir.</li><li>Berkolaborasi aktif dengan tim engineering untuk memastikan implementasi desain sesuai dengan standar kualitas tertinggi.</li><li>Memperluas dan menyempurnakan sistem desain Notion untuk konsistensi di seluruh web dan desktop app.</li><li>Melakukan usability testing dan mendengarkan masukan komunitas pengguna aktif Notion.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 3–5 tahun dalam mendesain produk digital yang kompleks (SaaS atau produktivitas).</li><li>Kemampuan craft visual yang tajam serta pemahaman mendalam tentang prinsip interaksi manusia-komputer.</li><li>Keahlian mendalam dalam menggunakan Figma, prototyping interaktif, dan micro-interactions.</li><li>Semangat tinggi terhadap tipografi, kesederhanaan, dan detail estetika perangkat lunak.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Bagaimana caramu menyederhanakan alur kerja yang kompleks ke dalam antarmuka yang intuitif dan mudah dipelajari?" },
      { id: 2, question: "Berikan contoh konkret di mana kamu harus menyeimbangkan antara estetika minimalis dan kedalaman fitur." },
    ],
    companyIndustry: "Productivity & Collaboration Software",
    companySize: "500–1000 orang di New York, San Francisco, dan global.",
    companyWebsite: "notion.so",
    companyVerifiedAt: "12 Oktober 2026",
    companyDescription: "Workspace terhubung yang memadukan catatan, dokumen, manajemen proyek, dan AI ke dalam satu ruang kerja yang fleksibel.",
  },
  {
    id: 9,
    slug: "staff-backend-engineer-linear",
    logo: "L",
    logoColor: "bg-teal",
    company: "Linear",
    isVerified: true,
    title: "Staff Backend Engineer",
    location: "Remote · Worldwide",
    workplaceType: "Remote",
    type: "Remote",
    salary: "Rp36–48 juta / bulan",
    tags: ["Full-time", "Staff", "Node.js", "PostgreSQL", "Realtime"],
    slotsfilled: 8,
    slotsTotal: 10,
    coinCost: 1,
    closingDate: "25 Okt 2026",
    postedAt: "2 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Staff level",
    postedAtFull: "10 Oktober 2026",
    closingDateFull: "25 Oktober 2026",
    description: `<p>Linear adalah alat pelacak isu dan manajemen produk yang dirancang khusus untuk kecepatan, keindahan, dan efisiensi alur kerja software modern. Kami berfokus pada performa realtime dan sinkronisasi data instan di seluruh dunia.</p><p>Kami mencari Staff Backend Engineer yang berpengalaman dalam merancang backend terdistribusi dengan latensi sangat rendah dan keandalan tinggi.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Mengembangkan dan mengoptimalkan protokol sinkronisasi realtime klien-server berbasis WebSocket dan GraphQL.</li><li>Mendesain skema database dan strategi caching untuk mendukung jutaan kueri konkuren tanpa degradasi performa.</li><li>Mengarahkan arsitektur teknis backend tim dan menetapkan praktik terbaik untuk keandalan infrastruktur.</li><li>Mengidentifikasi bottleneck performa dan melakukan profil sistem secara proaktif.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 6+ tahun membangun sistem backend berkinerja tinggi menggunakan Node.js, TypeScript, dan PostgreSQL.</li><li>Pemahaman mendalam mengenai arsitektur event-driven, sinkronisasi realtime, dan konkurensi data terdistribusi.</li><li>Keahlian dalam optimasi kueri basis data dan arsitektur database relasional berskala besar.</li><li>Mampu bekerja mandiri dan memimpin proyek teknis strategis dari konsep hingga produksi.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Jelaskan pengalamanmu dalam mendesain sistem sinkronisasi realtime atau offline-first dengan latensi sangat rendah." },
      { id: 2, question: "Bagaimana strategimu dalam mengelola skalabilitas basis data relasional di bawah beban transaksi tinggi?" },
    ],
    companyIndustry: "Software Development Tools",
    companySize: "Tim terdistribusi global, 50–100 orang berdedikasi tinggi.",
    companyWebsite: "linear.app",
    companyVerifiedAt: "10 Oktober 2026",
    companyDescription: "Sistem pelacak isu dan alur kerja berkecepatan tinggi yang dipercaya oleh tim engineering terkemuka dunia.",
  },
  {
    id: 10,
    slug: "ai-ml-research-engineer-anthropic",
    logo: "A",
    logoColor: "bg-amber-500",
    company: "Anthropic",
    isVerified: true,
    title: "AI/ML Research Engineer",
    location: "San Francisco, CA",
    workplaceType: "Hybrid",
    type: "Hybrid",
    salary: "Rp40–60 juta / bulan",
    tags: ["Full-time", "Research", "Python", "PyTorch", "LLM"],
    slotsfilled: 3,
    slotsTotal: 15,
    coinCost: 1,
    closingDate: "1 Nov 2026",
    postedAt: "1 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Lead / Research",
    postedAtFull: "16 Oktober 2026",
    closingDateFull: "1 November 2026",
    description: `<p>Anthropic adalah organisasi riset dan keselamatan kecerdasan buatan (AI) yang berfokus pada pengembangan sistem AI yang dapat dipercaya, dapat diinterpretasikan, dan bermanfaat bagi kemanusiaan.</p><p>Kami mencari AI/ML Research Engineer untuk berpartisipasi dalam pelatihan, evaluasi, dan penyelarasan model bahasa besar (LLM) generasi mendatang.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Mengimplementasikan dan melatih arsitektur model transformer berskala besar menggunakan kluster komputasi terdistribusi tinggi.</li><li>Mengeksplorasi teknik-teknik baru dalam RLHF (Reinforcement Learning from Human Feedback) dan Constitutional AI.</li><li>Menganalisis perilaku model, mendeteksi halusinasi, dan merumuskan metrik evaluasi keselamatan model.</li><li>Menerbitkan temuan riset dan berkolaborasi dengan komunitas ilmiah terbuka.</li></ul><h3>Kualifikasi</h3><ul><li>Gelar Master/Ph.D atau pengalaman setara di bidang Computer Science, Machine Learning, atau bidang kuantitatif terkait.</li><li>Kemampuan pemrograman yang sangat kuat dengan Python, PyTorch, dan framework komputasi paralel (JAX, DeepSpeed).</li><li>Pemahaman mendalam tentang prinsip scaling laws, arsitektur transformer, dan optimasi model AI terkini.</li><li>Rekam jejak riset atau kontribusi dalam proyek model bahasa berskala besar.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Apa tantangan terbesar yang kamu amati dalam penyelarasan (alignment) dan evaluasi keamanan model AI modern?" },
      { id: 2, question: "Jelaskan proyek riset machine learning atau scaling eksperimen yang pernah kamu pimpin secara mandiri." },
    ],
    companyIndustry: "Artificial Intelligence Research & Safety",
    companySize: "500+ peneliti dan engineer kelas dunia di San Francisco.",
    companyWebsite: "anthropic.com",
    companyVerifiedAt: "16 Oktober 2026",
    companyDescription: "Perusahaan keselamatan dan riset AI yang membangun AI yang dapat diandalkan, dapat dipahami, dan selaras dengan nilai manusia.",
  },
  {
    id: 11,
    slug: "devops-platform-engineer-vercel",
    logo: "V",
    logoColor: "bg-gray-950",
    company: "Vercel",
    isVerified: true,
    title: "DevOps Platform Engineer",
    location: "Remote · US",
    workplaceType: "Remote",
    type: "Remote",
    salary: "Rp28–38 juta / bulan",
    tags: ["Full-time", "Senior", "Kubernetes", "AWS", "CI/CD"],
    slotsfilled: 20,
    slotsTotal: 30,
    coinCost: 1,
    closingDate: "28 Okt 2026",
    postedAt: "4 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Senior level",
    postedAtFull: "11 Oktober 2026",
    closingDateFull: "28 Oktober 2026",
    description: `<p>Vercel adalah platform cloud terkemuka untuk developer frontend yang memungkinkan peluncuran aplikasi web tanpa konfigurasi server yang rumit, dengan Next.js sebagai inti fondasi teknologinya.</p><p>Kami mencari DevOps Platform Engineer untuk memperkuat platform edge network dan pipeline continuous deployment kami yang melayani miliaran request setiap hari.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Mengelola dan mengotomatisasi infrastruktur cloud multi-region menggunakan Kubernetes, Terraform, dan AWS.</li><li>Membangun pipeline CI/CD yang cepat, aman, dan dapat diandalkan untuk deployment edge functions secara global.</li><li>Memantau keandalan sistem (SRE), menerapkan observabilitas terpadu (metrics, logs, traces), dan memimpin respon insiden.</li><li>Menyempurnakan protokol keamanan infrastruktur jaringan dan manajemen secrets cloud.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 4+ tahun dalam DevOps, Platform Engineering, atau Site Reliability Engineering (SRE).</li><li>Penguasaan mendalam atas Kubernetes, Docker, Terraform, dan penyedia cloud (AWS atau GCP).</li><li>Pemahaman kuat tentang jaringan internet, DNS, CDN, anycast routing, dan TLS.</li><li>Pengalaman dalam otomasi CI/CD tingkat lanjut (GitHub Actions, ArgoCD, dsb).</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Bagaimana caramu mendesain arsitektur CI/CD multi-region dengan strategi zero-downtime deployment?" },
      { id: 2, question: "Ceritakan insiden infrastruktur kritis yang pernah kamu tangani dan langkah pencegahan permanen yang kamu terapkan." },
    ],
    companyIndustry: "Cloud Computing & Frontend Platforms",
    companySize: "Tim global terdistribusi, 500+ orang.",
    companyWebsite: "vercel.com",
    companyVerifiedAt: "11 Oktober 2026",
    companyDescription: "Platform developer terdepan untuk menghadirkan pengalaman web terbaik dengan framework Next.js dan edge infrastructure.",
  },
  {
    id: 12,
    slug: "ux-researcher-figma",
    logo: "F",
    logoColor: "bg-pink-500",
    company: "Figma",
    isVerified: true,
    title: "UX Researcher",
    location: "San Francisco, CA",
    workplaceType: "Remote",
    type: "Remote",
    salary: "Rp22–30 juta / bulan",
    tags: ["Full-time", "Mid level", "User Research", "Interviews"],
    slotsfilled: 5,
    slotsTotal: 8,
    coinCost: 1,
    closingDate: "3 Nov 2026",
    postedAt: "5 hari lalu",
    // Detail
    employmentType: "Full-time",
    level: "Mid level",
    postedAtFull: "10 Oktober 2026",
    closingDateFull: "3 November 2026",
    description: `<p>Figma adalah platform desain kolaboratif pertama berbasis cloud yang mengubah cara tim mendesain, membuat prototipe, dan membangun software bersama. Di Figma, riset pengguna adalah kunci dalam melahirkan produk yang menyenangkan dan revolusioner.</p><p>Sebagai UX Researcher, kamu akan memimpin penelitian mendalam untuk memahami alur kerja tim desain dan developer, serta menerjemahkan wawasan tersebut menjadi arah strategi produk.</p><h3>Yang akan kamu kerjakan</h3><ul><li>Merencanakan dan memimpin riset kualitatif serta kuantitatif (wawancara mendalam, diary studies, survei pengguna).</li><li>Menganalisis pola perilaku desainer profesional dan tim pengembang di berbagai belahan dunia.</li><li>Bekerja sama erat dengan tim product management dan tim desain untuk menyusun roadmap produk berbasis bukti nyata.</li><li>Mempresentasikan temuan riset dalam format narasi yang menarik dan mudah ditindaklanjuti oleh stakeholder lintas divisi.</li></ul><h3>Kualifikasi</h3><ul><li>Pengalaman 3+ tahun sebagai UX Researcher atau Design Researcher pada produk digital/software B2B.</li><li>Keahlian mendalam dalam berbagai metodologi riset pengguna, baik format formatif maupun evaluatif.</li><li>Kemampuan komunikasi interpersonal dan storytelling data yang sangat persuasif.</li><li>Familiar dengan ekosistem tools desain, prototyping, dan workflow handoff developer.</li></ul>`,
    essayQuestions: [
      { id: 1, question: "Metode riset apa yang paling kamu andalkan saat meneliti kebutuhan pengguna untuk fitur kolaboratif baru dan mengapa?" },
      { id: 2, question: "Bagaimana caramu mengomunikasikan temuan riset kualitatif kepada tim teknik dan pimpinan produk secara efektif?" },
    ],
    companyIndustry: "Design Software & Creative Collaboration",
    companySize: "1000+ karyawan di seluruh dunia.",
    companyWebsite: "figma.com",
    companyVerifiedAt: "10 Oktober 2026",
    companyDescription: "Platform desain kolaboratif berbasis browser yang menghubungkan tim desain dan pengembang dalam satu alur kerja yang mulus.",
  },
];
