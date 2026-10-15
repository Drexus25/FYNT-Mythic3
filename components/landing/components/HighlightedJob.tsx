import JobCarousel from "@/components/shared/JobCarousel";
import { HIGHLIGHTED_JOBS } from "../data/data";
import { FaArrowRight } from "react-icons/fa";

export default function HighlightedJob() {
  return (
    <section className="w-full mx-auto px-12">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex flex-col"> 
          <p className="text-[28px] font-semibold">Lowongan Unggulan</p>
          <p className="text-[14px] text-ink-soft">Temukan peluang terbaik yang paling sesuai dengan keahlian dan minat Anda.</p>
        </div>
        <div className="py-4 px-4 flex flex-row justify-center items-center gap-2 rounded-md border border-line cursor-pointer hover:bg-line/60 transition-all duration-300">
          <FaArrowRight className="text-teal" />
          <p className="font-semibold">Lihat Semua Lowongan</p>
        </div>
      </div>

      <JobCarousel jobs={HIGHLIGHTED_JOBS} />
    </section>
  );
}
