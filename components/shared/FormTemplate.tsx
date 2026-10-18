"use client";

import { useState } from "react";
import { FiEye, FiEyeOff, FiChevronDown } from "react-icons/fi";
import { FormFieldConfig, RegistrationFormProps } from "../register/components/props";

// ─── Single field renderer ────────────────────────────────────────────────────

interface FieldProps {
    field: FormFieldConfig;
    index: number;
    value: string;
    onChange: (index: number, value: string) => void;
}

function FormField({ field, index, value, onChange }: FieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    const baseInput =
        "w-full bg-white border border-[#D9E8E5] rounded-xl px-4 py-3 text-[14px] text-ink outline-none " +
        "focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all placeholder:text-ink-muted/50";

    return (
        <div className="flex flex-col gap-1.5">
            {/* Label row */}
            <div className="flex items-center gap-2">
                <label
                    htmlFor={`field-${index}`}
                    className="font-rethink-sans font-semibold text-[13px] text-ink"
                >
                    {field.label}
                </label>
                {field.isOptional && (
                    <span className="text-[11px] text-ink-muted font-normal">
                        (optional)
                    </span>
                )}
            </div>

            {/* Field description */}
            {field.fieldDescription && (
                <p className="text-[11px] text-ink-muted leading-snug">
                    {field.fieldDescription}
                </p>
            )}

            {/* Input */}
            {field.isDropdown ? (
                <div className="relative">
                    <select
                        id={`field-${index}`}
                        value={value}
                        onChange={(e) => onChange(index, e.target.value)}
                        className={`${baseInput} appearance-none pr-10 cursor-pointer`}
                    >
                        <option value="" disabled>
                            {field.placeholder ?? `Pilih ${field.label}`}
                        </option>
                        {field.options?.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted text-[16px]" />
                </div>
            ) : field.isPassword ? (
                <div className="relative">
                    <input
                        id={`field-${index}`}
                        type={showPassword ? "text" : "password"}
                        value={value}
                        onChange={(e) => onChange(index, e.target.value)}
                        placeholder={field.placeholder ?? `Masukkan ${field.label.toLowerCase()}`}
                        className={`${baseInput} pr-11`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-teal transition-colors"
                        tabIndex={-1}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <FiEyeOff className="text-[18px]" />
                        ) : (
                            <FiEye className="text-[18px]" />
                        )}
                    </button>
                </div>
            ) : (
                <input
                    id={`field-${index}`}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(index, e.target.value)}
                    placeholder={field.placeholder ?? `Masukkan ${field.label.toLowerCase()}`}
                    className={baseInput}
                />
            )}
        </div>
    );
}

// ─── Form template ────────────────────────────────────────────────────────────

export default function FormTemplate({
    formTitle,
    formDescription,
    fields = [],
    submitLabel = "Daftar",
    onSubmit,
}: RegistrationFormProps) {
    const [values, setValues] = useState<Record<number, string>>(
        Object.fromEntries(fields.map((_, i) => [i, ""]))
    );

    const handleChange = (index: number, value: string) => {
        setValues((prev) => ({ ...prev, [index]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data: Record<string, string> = {};
        fields.forEach((field, i) => {
            data[field.label] = values[i] ?? "";
        });
        onSubmit?.(data);
    };

    const isOdd = fields.length % 2 !== 0;

    return (
        <div className="flex flex-col gap-3 w-full">
            {/* Header */}
            {(formTitle || formDescription) && (
                <div className="flex flex-col gap-1.5">
                    {formTitle && (
                        <h2 className="font-rethink-sans font-bold text-[24px] text-ink leading-tight">
                            {formTitle}
                        </h2>
                    )}
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Grid of fields */}
                <div className="grid grid-cols-2 gap-4">
                    {fields.map((field, i) => {
                        const isLastAndAlone = isOdd && i === fields.length - 1;
                        const isSpanTwo = field.colSpan === 2 || isLastAndAlone;
                        return (
                            <div
                                key={i}
                                className={isSpanTwo ? "col-span-2" : "col-span-1"}
                            >
                                <FormField
                                    field={field}
                                    index={i}
                                    value={values[i] ?? ""}
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-teal text-white font-rethink-sans font-semibold text-[14px] py-3 rounded-xl
                               hover:bg-teal/90 active:scale-[0.99] transition-all duration-150"
                >
                    {submitLabel}
                </button>
            </form>
        </div>
    );
}
