import Link from "next/link";
import { TbHexagonLetterF } from "react-icons/tb";

export interface JobCardProps {
  id: number | string;
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
  slug?: string;
}

export default function JobCard({
  logo,
  logoColor,
  company,
  title,
  location,
  type,
  salary,
  slotsfilled,
  slotsTotal,
  coinCost,
  closingDate,
  slug,
}: JobCardProps) {
  const cardContent = (
    <div className="flex flex-col w-full h-full gap-4 p-5 bg-white border border-line rounded-3xl cursor-pointer hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
      <div className="flex flex-row items-center gap-3">
        <div
          className={`${logoColor} rounded-md w-10 h-10 flex items-center justify-center text-center text-white font-bold text-sm shrink-0`}
        >
          {logo}
        </div>
        <p className="text-[15px] font-medium text-ink">{company}</p>
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <p className="text-[18px] font-semibold text-ink leading-snug">{title}</p>
        <p className="text-[13px] text-ink-muted">{location} · {type}</p>
        <p className="text-[15px] font-semibold text-ink mt-0.5">{salary}</p>
        <p className="text-[13px] text-ink-soft">
          {slotsfilled} / {slotsTotal} Slot Filled
        </p>
      </div>

      {/* Divider */}
      <div className="w-full bg-line h-px" />

      {/* Footer */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-1 px-4 py-1 bg-teal/10 w-fit rounded-full">
          <TbHexagonLetterF className="text-teal" />
          <p className="text-[13px] text-teal font-semibold">{coinCost} Koin</p>
        </div>
        <p className="text-[13px] text-ink-muted">Tutup {closingDate}</p>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/job/${slug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}