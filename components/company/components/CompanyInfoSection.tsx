"use client";

interface CompanyInfoSectionProps {
  companyName: string;
  domicile: string;
  ownerName: string;
  website: string;
  address: string;
  description: string;
  onChange: (field: string, value: string) => void;
}

export default function CompanyInfoSection({
  companyName,
  domicile,
  ownerName,
  website,
  address,
  description,
  onChange,
}: CompanyInfoSectionProps) {
  const inputClass =
    "w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all bg-white";
  const labelClass = "text-xs font-semibold text-ink";

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Section Header */}
      <div>
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Informasi perusahaan
        </h2>
        <p className="text-xs text-ink-muted mt-0.5">
          Lengkapi informasi perusahaan Anda. * Wajib diisi.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1: Nama Perusahaan & Domisili */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company-name" className={labelClass}>
              Nama perusahaan *
            </label>
            <input
              id="company-name"
              type="text"
              value={companyName}
              onChange={(e) => onChange("companyName", e.target.value)}
              placeholder="Contoh: Nusa Studio"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company-domicile" className={labelClass}>
              Domisili *
            </label>
            <input
              id="company-domicile"
              type="text"
              value={domicile}
              onChange={(e) => onChange("domicile", e.target.value)}
              placeholder="Contoh: Bandung, Indonesia"
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 2: Nama Pemilik & Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company-owner-name" className={labelClass}>
              Nama pemilik *
            </label>
            <input
              id="company-owner-name"
              type="text"
              value={ownerName}
              onChange={(e) => onChange("ownerName", e.target.value)}
              placeholder="Contoh: Aditya Pratama"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company-website" className={labelClass}>
              Website perusahaan (opsional)
            </label>
            <input
              id="company-website"
              type="url"
              value={website}
              onChange={(e) => onChange("website", e.target.value)}
              placeholder="https://perusahaan.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 3: Alamat Lengkap */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company-address" className={labelClass}>
            Alamat lengkap (opsional)
          </label>
          <input
            id="company-address"
            type="text"
            value={address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="Jl. Cimanuk No. 18, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40115"
            className={inputClass}
          />
        </div>

        {/* Row 4: Deskripsi Perusahaan */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company-description" className={labelClass}>
            Deskripsi perusahaan (opsional)
          </label>
          <textarea
            id="company-description"
            rows={5}
            value={description}
            onChange={(e) => onChange("description", e.target.value)}
            placeholder="Ceritakan tentang perusahaan, visi, dan layanan Anda..."
            className={`${inputClass} resize-none leading-relaxed`}
          />
          <p className="text-xs text-ink-muted mt-1">
            Ceritakan tentang perusahaan, layanan, dan cara tim Anda bekerja.
          </p>
        </div>
      </div>
    </div>
  );
}

