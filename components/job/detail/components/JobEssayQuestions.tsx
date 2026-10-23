import { FiInfo } from "react-icons/fi";
import { JobQuestion } from "@/components/find/data/data";

interface JobEssayQuestionsProps {
  questions: JobQuestion[];
  companyName: string;
}

export default function JobEssayQuestions({
  questions,
  companyName,
}: JobEssayQuestionsProps) {
  return (
    <div className="bg-white border border-line rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-ink">
          Pertanyaan essay dari perusahaan
        </h3>
        <p className="text-xs text-ink-muted">
          {questions.length} pertanyaan wajib. Siapkan jawabanmu sebelum mengirim
          lamaran.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {questions.map((q) => (
          <p key={q.id} className="text-sm text-ink-muted leading-relaxed">
            {q.question}
          </p>
        ))}
      </div>

      <div className="flex items-start gap-2 bg-teal/5 border border-teal/20 rounded-xl p-3">
        <FiInfo className="w-4 h-4 text-teal mt-0.5 shrink-0" />
        <p className="text-xs text-teal leading-relaxed">
          Jawaban diisi pada formulir lamaran dan akan dibaca oleh tim rekrutmen{" "}
          {companyName}.
        </p>
      </div>
    </div>
  );
}
