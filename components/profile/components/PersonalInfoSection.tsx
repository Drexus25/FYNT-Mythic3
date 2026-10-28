"use client";

interface PersonalInfoSectionProps {
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  domicile: string;
  about: string;
  onChange: (field: string, value: string) => void;
}

export default function PersonalInfoSection({
  fullName,
  professionalTitle,
  email,
  phone,
  domicile,
  about,
  onChange,
}: PersonalInfoSectionProps) {
  const inputClass =
    "w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all bg-white";
  const labelClass = "text-xs font-semibold text-ink";

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Section Header */}
      <h2 className="text-base md:text-lg font-semibold text-ink">
        Informasi pribadi
      </h2>

      <div className="flex flex-col gap-4">
        {/* Row 1: Nama & Posisi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="profile-full-name" className={labelClass}>
              Nama lengkap
            </label>
            <input
              id="profile-full-name"
              type="text"
              value={fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder="Nama lengkap kamu"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="profile-professional-title" className={labelClass}>
              Posisi profesional
            </label>
            <input
              id="profile-professional-title"
              type="text"
              value={professionalTitle}
              onChange={(e) => onChange("professionalTitle", e.target.value)}
              placeholder="Contoh: Product Designer"
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="profile-email" className={labelClass}>
              Email
            </label>
            <input
              id="profile-email"
              type="email"
              value={email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="kamu@email.com"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="profile-phone" className={labelClass}>
              Nomor telepon
            </label>
            <input
              id="profile-phone"
              type="tel"
              value={phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="08xx xxxx xxxx"
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 3: Domisili */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="profile-domicile" className={labelClass}>
            Domisili
          </label>
          <input
            id="profile-domicile"
            type="text"
            value={domicile}
            onChange={(e) => onChange("domicile", e.target.value)}
            placeholder="Contoh: Jakarta Selatan, Indonesia"
            className={inputClass}
          />
        </div>

        {/* Row 4: About */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="profile-about" className={labelClass}>
            Tentang saya
          </label>
          <textarea
            id="profile-about"
            rows={4}
            value={about}
            onChange={(e) => onChange("about", e.target.value)}
            placeholder="Ceritakan dirimu secara singkat — pengalaman, keahlian, dan apa yang kamu cari."
            className={`${inputClass} resize-none leading-relaxed`}
          />
        </div>
      </div>
    </div>
  );
}
