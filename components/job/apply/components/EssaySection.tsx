"use client";

import { JobQuestion } from "@/components/find/data/data";

interface EssaySectionProps {
  questions: JobQuestion[];
  companyName: string;
  answers: Record<number, string>;
  onAnswerChange: (questionId: number, value: string) => void;
}

export default function EssaySection({
  questions,
  companyName,
  answers,
  onAnswerChange,
}: EssaySectionProps) {
  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-3">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Pertanyaan essay
        </h2>
        <p className="text-xs text-ink-muted">
          Lowongan ini tidak memerlukan jawaban essay tambahan.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Pertanyaan essay
        </h2>
        <p className="text-xs text-ink-muted leading-relaxed">
          {questions.length} pertanyaan wajib dari {companyName}. Jawabanmu membantu perusahaan mengenal proses berpikirmu.
        </p>
      </div>

      {/* Questions list */}
      <div className="flex flex-col gap-5">
        {questions.map((q) => (
          <div key={q.id} className="flex flex-col gap-2">
            <label
              htmlFor={`essay-question-${q.id}`}
              className="text-xs font-semibold text-ink leading-relaxed"
            >
              {q.question} <span className="text-danger">*</span>
            </label>
            <textarea
              id={`essay-question-${q.id}`}
              rows={4}
              onChange={(e) => onAnswerChange(q.id, e.target.value)}
              placeholder="Tuliskan jawabanmu secara jelas dan ringkas..."
              className="w-full p-3.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none leading-relaxed transition-all resize-y min-h-[110px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
