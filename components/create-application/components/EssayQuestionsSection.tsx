"use client";

import { FiTrash2, FiPlus, FiMenu } from "react-icons/fi";

interface EssayQuestionsSectionProps {
  questions: string[];
  onAddQuestion: () => void;
  onUpdateQuestion: (index: number, text: string) => void;
  onRemoveQuestion: (index: number) => void;
}

export default function EssayQuestionsSection({
  questions,
  onAddQuestion,
  onUpdateQuestion,
  onRemoveQuestion,
}: EssayQuestionsSectionProps) {
  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Pertanyaan essay
        </h2>
        <p className="text-xs text-ink-muted leading-relaxed">
          Kenali cara berpikir kandidat lewat pertanyaan yang relevan.
        </p>
      </div>

      {/* Questions list */}
      <div className="flex flex-col gap-4">
        {questions.length === 0 ? (
          <div className="border border-dashed border-line rounded-xl p-6 text-center text-xs text-ink-muted bg-gray-50/50 flex flex-col items-center gap-2">
            <p>Belum ada pertanyaan essay ditambahkan.</p>
            <p className="text-[11px] text-ink-muted/80">
              Pertanyaan essay opsional tetapi membantu menyaring kandidat terbaik.
            </p>
          </div>
        ) : (
          questions.map((q, index) => (
            <div
              key={index}
              className="border border-line rounded-xl p-4 sm:p-5 flex flex-col gap-3 bg-white hover:border-ink/20 transition-all"
            >
              {/* Card Top Action Bar */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium bg-gray-100 text-ink-muted px-2 py-0.5 rounded">
                  Essay
                </span>
                <div className="flex items-center gap-2 text-ink-muted">
                  <span
                    className="p-1 text-ink-muted/60 cursor-grab hover:text-ink"
                    title="Urutkan"
                  >
                    <FiMenu className="w-3.5 h-3.5" />
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemoveQuestion(index)}
                    title="Hapus pertanyaan"
                    className="p-1 hover:text-danger hover:bg-danger/10 rounded transition-colors"
                  >
                    <FiTrash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Textarea Input (Empty by default) */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={`essay-question-${index}`}
                  className="text-xs font-semibold text-ink"
                >
                  Pertanyaan untuk pelamar
                </label>
                <textarea
                  id={`essay-question-${index}`}
                  rows={3}
                  value={q}
                  onChange={(e) => onUpdateQuestion(index, e.target.value)}
                  placeholder="Tuliskan pertanyaan essay untuk kandidat..."
                  className="w-full p-3 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all resize-y min-h-[80px]"
                />
              </div>
            </div>
          ))
        )}

        {/* Add Question Button */}
        <div>
          <button
            type="button"
            onClick={onAddQuestion}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-line hover:border-teal text-ink hover:text-teal rounded-xl text-xs font-semibold transition-all hover:bg-teal/5 cursor-pointer"
          >
            <FiPlus className="w-3.5 h-3.5" />
            <span>Tambah pertanyaan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
