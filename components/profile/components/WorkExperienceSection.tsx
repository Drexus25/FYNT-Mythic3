"use client";

import { useState } from "react";
import { FiEdit2, FiPlus, FiTrash2, FiCheck } from "react-icons/fi";
import { WorkExperience } from "../data/profileTypes";

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
  onAdd: () => string;
  onUpdate: (id: string, field: keyof WorkExperience, value: string) => void;
  onRemove: (id: string) => void;
}

export default function WorkExperienceSection({
  experiences,
  onAdd,
  onUpdate,
  onRemove,
}: WorkExperienceSectionProps) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const inputClass =
    "w-full px-3 py-2 rounded-lg border border-line text-ink text-xs placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all bg-white";

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Section Header */}
      <h2 className="text-base md:text-lg font-semibold text-ink">
        Pengalaman kerja
      </h2>

      {/* Experience List */}
      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="border border-line rounded-xl p-4 flex flex-col gap-3 transition-all"
          >
            {editingId === exp.id ? (
              /* Edit mode */
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-ink">Posisi</label>
                    <input
                      type="text"
                      value={exp.title}
                      onChange={(e) => onUpdate(exp.id, "title", e.target.value)}
                      placeholder="Contoh: UI/UX Designer"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-ink">Perusahaan</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => onUpdate(exp.id, "company", e.target.value)}
                      placeholder="Contoh: Loka Digital"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-ink">Periode</label>
                  <input
                    type="text"
                    value={exp.period}
                    onChange={(e) => onUpdate(exp.id, "period", e.target.value)}
                    placeholder="Contoh: Jan 2024 – Sekarang"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-ink">Deskripsi</label>
                  <textarea
                    rows={3}
                    value={exp.description}
                    onChange={(e) => onUpdate(exp.id, "description", e.target.value)}
                    placeholder="Ceritakan tanggung jawab dan pencapaian kamu di peran ini."
                    className={`${inputClass} resize-none leading-relaxed`}
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    id={`btn-remove-exp-${exp.id}`}
                    onClick={() => onRemove(exp.id)}
                    className="flex items-center gap-1.5 text-xs text-danger hover:text-red-700 transition-colors cursor-pointer"
                  >
                    <FiTrash2 className="w-3.5 h-3.5" />
                    Hapus pengalaman
                  </button>
                  <button
                    type="button"
                    id={`btn-done-exp-${exp.id}`}
                    onClick={() => setEditingId(null)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-dark transition-colors cursor-pointer"
                  >
                    <FiCheck className="w-3.5 h-3.5" />
                    Selesai
                  </button>
                </div>
              </div>
            ) : (
              /* View mode */
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-ink">{exp.title}</p>
                  <p className="text-xs text-ink-muted">
                    {exp.company} · {exp.period}
                  </p>
                  {exp.description && (
                    <p className="text-xs text-ink-soft leading-relaxed mt-1">
                      {exp.description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  id={`btn-edit-exp-${exp.id}`}
                  onClick={() => setEditingId(exp.id)}
                  className="text-teal hover:text-teal-dark transition-colors cursor-pointer shrink-0 mt-0.5"
                  title="Edit"
                  aria-label="Edit pengalaman"
                >
                  <FiEdit2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Experience Button */}
      <button
        type="button"
        id="btn-add-experience"
        onClick={() => {
          const newId = onAdd();
          setEditingId(newId);
        }}
        className="flex items-center gap-2 text-xs font-semibold text-ink border border-dashed border-line hover:border-teal hover:text-teal hover:bg-[#f0f9f6] transition-all px-4 py-3 rounded-xl cursor-pointer w-full justify-center"
      >
        <FiPlus className="w-4 h-4" />
        Tambah pengalaman
      </button>
    </div>
  );
}
