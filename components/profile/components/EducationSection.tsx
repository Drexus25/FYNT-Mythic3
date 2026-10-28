"use client";

import { useState } from "react";
import { FiEdit2, FiPlus, FiTrash2, FiCheck } from "react-icons/fi";
import { Education } from "../data/profileTypes";

interface EducationSectionProps {
  educations: Education[];
  onAdd: () => string;
  onUpdate: (id: string, field: keyof Education, value: string) => void;
  onRemove: (id: string) => void;
}

export default function EducationSection({
  educations,
  onAdd,
  onUpdate,
  onRemove,
}: EducationSectionProps) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const inputClass =
    "w-full px-3 py-2 rounded-lg border border-line text-ink text-xs placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all bg-white";

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Section Header */}
      <h2 className="text-base md:text-lg font-semibold text-ink">
        Pendidikan
      </h2>

      {/* Education List */}
      <div className="flex flex-col gap-4">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="border border-line rounded-xl p-4 flex flex-col gap-3 transition-all"
          >
            {editingId === edu.id ? (
              /* Edit mode */
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-ink">Gelar / Program studi</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => onUpdate(edu.id, "degree", e.target.value)}
                    placeholder="Contoh: S1 Desain Komunikasi Visual"
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-ink">Institusi</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => onUpdate(edu.id, "institution", e.target.value)}
                      placeholder="Contoh: Universitas Cakrawala"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-ink">Tahun</label>
                    <input
                      type="text"
                      value={edu.period}
                      onChange={(e) => onUpdate(edu.id, "period", e.target.value)}
                      placeholder="Contoh: 2019–2023"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    id={`btn-remove-edu-${edu.id}`}
                    onClick={() => onRemove(edu.id)}
                    className="flex items-center gap-1.5 text-xs text-danger hover:text-red-700 transition-colors cursor-pointer"
                  >
                    <FiTrash2 className="w-3.5 h-3.5" />
                    Hapus pendidikan
                  </button>
                  <button
                    type="button"
                    id={`btn-done-edu-${edu.id}`}
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
                  <p className="text-sm font-semibold text-ink">{edu.degree}</p>
                  <p className="text-xs text-ink-muted">
                    {edu.institution} · {edu.period}
                  </p>
                </div>
                <button
                  type="button"
                  id={`btn-edit-edu-${edu.id}`}
                  onClick={() => setEditingId(edu.id)}
                  className="text-teal hover:text-teal-dark transition-colors cursor-pointer shrink-0 mt-0.5"
                  title="Edit"
                  aria-label="Edit pendidikan"
                >
                  <FiEdit2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Education Button */}
      <button
        type="button"
        id="btn-add-education"
        onClick={() => {
          const newId = onAdd();
          setEditingId(newId);
        }}
        className="flex items-center gap-2 text-xs font-semibold text-ink border border-dashed border-line hover:border-teal hover:text-teal hover:bg-[#f0f9f6] transition-all px-4 py-3 rounded-xl cursor-pointer w-full justify-center"
      >
        <FiPlus className="w-4 h-4" />
        Tambah pendidikan
      </button>
    </div>
  );
}
