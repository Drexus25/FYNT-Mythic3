export interface JobFormData {
  title: string;
  category: string;
  employmentType: string;
  location: string;
  workplaceType: string;
  salary: string;
  slot: number;
  descriptionHtml: string;
  essayQuestions: string[];
  durationMonths: number;
  additionalWeeks: number;
}

export const INITIAL_JOB_FORM_DATA: JobFormData = {
  title: "",
  category: "",
  employmentType: "",
  location: "",
  workplaceType: "",
  salary: "",
  slot: 1,
  descriptionHtml: "",
  essayQuestions: [""], // 1 empty question card ready to be typed in without dummy answers
  durationMonths: 1,
  additionalWeeks: 1,
};

export const JOB_CATEGORIES = [
  "Desain & Kreatif",
  "Teknologi & Perangkat Lunak",
  "Pemasaran & Komunikasi",
  "Operasional & Bisnis",
  "Keuangan & Akuntansi",
  "Sumber Daya Manusia",
  "Penjualan & Pengembangan Bisnis",
];

export const EMPLOYMENT_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Internship",
];

export const WORKPLACE_TYPES = ["Hybrid", "On-site", "Remote"];
