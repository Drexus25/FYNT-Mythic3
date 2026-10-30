

export interface BenefitsBoxProps {
    title?: string;
    description?: string;
    subtitle1?: string;
    subdesc1?: string;
    subtitle2?: string;
    subdesc2?: string;
}

export const BenefitsBoxRecruiter: BenefitsBoxProps = {
    title: "Bangun tim. Buka banyak kemungkinan.",
    description: "Temukan talenta yang tepat untuk perusahaanmu. Mulai perjalanan rekrutmen dengan satu akun FYNT.",
    subtitle1: "5 koin gratis untuk memulai",
    subdesc1: "Dapatkan 5 koin gratis setelah pendaftaran. Membuka satu lowongan selama satu bulan memerlukan 5 koin.",
    subtitle2: "Perusahaan yang tepercaya",
    subdesc2: "Setelah akun dibuat, lanjutkan verifikasi validitas perusahaan. Pendaftaran akun tidak berarti perusahaan sudah terverifikasi.",
};

export const BenefitsBoxSeeker: BenefitsBoxProps = {
    title: "Bangun profil. Buka banyak kemungkinan.",
    description: "Temukan peluang yang sesuai dengan potensi dan pengalamanmu. Mulai perjalanan karier dengan satu akun FYNT.",
    subtitle1: "2 koin gratis untuk memulai",
    subdesc1: "Dapatkan 2 koin gratis setelah pendaftaran. Gunakan koin untuk melamar lowongan yang sesuai dengan tujuan kariermu.",
    subtitle2: "Profil yang lebih terlihat",
    subdesc2: "Lengkapi profil, CV, dan portofolio untuk menampilkan pengalaman, keterampilan, dan potensi yang kamu miliki.",
};

// ─── RegistrationForm types ───────────────────────────────────────────────────

export interface FormFieldConfig {
    name?: string;
    label: string;
    placeholder?: string;
    isDropdown?: boolean;
    options?: string[];
    isOptional?: boolean;
    isPassword?: boolean;
    fieldDescription?: string;
    colSpan?: 1 | 2;
}

export interface RegistrationFormProps {
    formTitle?: string;
    formDescription?: string;
    fields?: FormFieldConfig[];
    submitLabel?: string;
    /** Key that maps to a Zod schema inside FormTemplate — safe to pass across the Server/Client boundary */
    schemaKey?: "login" | "seeker-register" | "recruiter-register";
    defaultValues?: Record<string, string>;
    onSubmit?: (data: Record<string, unknown>) => void | Promise<void>;
}

export const SeekerFormFields: FormFieldConfig[] = [
    {
        name: "firstName",
        label: "Nama Depan",
        placeholder: "Masukkan nama depan",
    },
    {
        name: "lastName",
        label: "Nama Belakang",
        placeholder: "Masukkan nama belakang",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Masukkan alamat email",
    },
    {
        name: "phoneNumber",
        label: "No. Telepon",
        placeholder: "Contoh: +62 812 3456 7890",
        isOptional: true,
    },
    {
        name: "password",
        label: "Kata Sandi",
        placeholder: "Masukkan kata sandi",
        isPassword: true,
    },
    {
        name: "confirmPassword",
        label: "Konfirmasi Kata Sandi",
        placeholder: "Ulangi kata sandi",
        isPassword: true,
    },
];

export const RecruiterFormFields: FormFieldConfig[] = [
    {
        name: "companyName",
        label: "Nama Perusahaan",
        placeholder: "Masukkan nama perusahaan",
    },
    {
        name: "industry",
        label: "Bidang Industri",
        isDropdown: true,
        options: [
            "Teknologi Informasi",
            "Kesehatan & Medis",
            "Keuangan, Akuntansi, & Bisnis",
        ],
    },
    {
        name: "city",
        label: "Kota / Kabupaten",
        placeholder: "Masukkan kota atau kabupaten",
    },
    {
        name: "website",
        label: "Website Perusahaan",
        placeholder: "https://perusahaan.com",
        isOptional: true,
    },
    {
        name: "address",
        label: "Alamat Perusahaan",
        placeholder: "Masukkan alamat lengkap perusahaan",
    },
    {
        name: "picName",
        label: "Nama Lengkap Penanggung Jawab",
        placeholder: "Masukkan nama lengkap",
    },
    {
        name: "companyEmail",
        label: "Email Perusahaan",
        placeholder: "Masukkan email perusahaan",
    },
    {
        name: "phoneNumber",
        label: "Nomor Telepon",
        placeholder: "Contoh: +62 812 3456 7890",
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Masukkan password",
        isPassword: true,
    },
    {
        name: "confirmPassword",
        label: "Konfirmasi Password",
        placeholder: "Ulangi password",
        isPassword: true,
    },
];

export const SeekerFormProps: RegistrationFormProps = {
    formTitle: "Data Diri",
    fields: SeekerFormFields,
    schemaKey: "seeker-register",
};

export const RecruiterFormProps: RegistrationFormProps = {
    formTitle: "Data Perusahaan",
    fields: RecruiterFormFields,
    schemaKey: "recruiter-register",
};



