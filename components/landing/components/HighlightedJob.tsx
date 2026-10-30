import Link from "next/link";
import JobCarousel from "@/components/shared/JobCarousel";
import { HIGHLIGHTED_JOBS } from "../data/data";
import { FaArrowRight } from "react-icons/fa";

export default function HighlightedJob() {
  return (
    <section className="highlight-section w-full mx-auto px-12">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="highlight-header-info flex flex-col"> 
          <p className="text-[28px] font-semibold">Lowongan Unggulan</p>
          <p className="text-[14px] text-ink-soft">Temukan peluang terbaik yang paling sesuai dengan keahlian dan minat Anda.</p>
        </div>
        <Link 
          href="/find"
          className="highlight-header-action py-4 px-4 flex flex-row justify-center items-center gap-2 rounded-md border border-line cursor-pointer hover:bg-line/60 transition-all duration-300"
        >
          <FaArrowRight className="text-teal" />
          <p className="font-semibold">Lihat Semua Lowongan</p>
        </Link>
      </div>

      <div className="highlight-carousel">
        <JobCarousel jobs={HIGHLIGHTED_JOBS} />
      </div>
    </section>
  );
}
