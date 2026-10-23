"use client";

import { useState, useEffect } from "react";
import { FiEye, FiEyeOff, FiChevronDown } from "react-icons/fi";
import { FormFieldConfig, RegistrationFormProps } from "../register/components/props";
import { loginSchema, seekerRegisterSchema, recruiterRegisterSchema } from "@/schemas";

// ─── Schema lookup map (resolved client-side, never serialised over RSC boundary) ───
const SCHEMA_MAP = {
    "login": loginSchema,
    "seeker-register": seekerRegisterSchema,
    "recruiter-register": recruiterRegisterSchema,
} as const;

// ─── Single field renderer ────────────────────────────────────────────────────

interface FieldProps {
    field: FormFieldConfig;
    fieldKey: string;
    index: number;
    value: string;
    error?: string;
    onChange: (key: string, value: string) => void;
}

function FormField({ field, fieldKey, value, error, onChange }: FieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    const baseInput =
        `w-full bg-white border ${
            error
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/15"
                : "border-[#D9E8E5] focus:border-teal focus:ring-2 focus:ring-teal/10"
        } rounded-xl px-4 py-3 text-[14px] text-ink outline-none transition-all placeholder:text-ink-muted/50`;

    return (
        <div className="flex flex-col gap-1.5">
            {/* Label row */}
            <div className="flex items-center gap-2">
                <label
                    htmlFor={`field-${fieldKey}`}
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
                        id={`field-${fieldKey}`}
                        value={value}
                        onChange={(e) => onChange(fieldKey, e.target.value)}
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
                        id={`field-${fieldKey}`}
                        type={showPassword ? "text" : "password"}
                        value={value}
                        onChange={(e) => onChange(fieldKey, e.target.value)}
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
                    id={`field-${fieldKey}`}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(fieldKey, e.target.value)}
                    placeholder={field.placeholder ?? `Masukkan ${field.label.toLowerCase()}`}
                    className={baseInput}
                />
            )}

            {/* Validation error message */}
            {error && (
                <p className="text-[12px] text-red-500 font-medium leading-tight">
                    {error}
                </p>
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
    schemaKey,
    defaultValues,
    onSubmit,
}: RegistrationFormProps) {
    const getFieldKey = (field: FormFieldConfig, index: number) => {
        return field.name ?? field.label ?? `field_${index}`;
    };

    const [values, setValues] = useState<Record<string, string>>(() => ({
        ...Object.fromEntries(fields.map((f, i) => [getFieldKey(f, i), ""])),
        ...(defaultValues || {}),
    }));
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (defaultValues) {
            setValues((prev) => ({ ...prev, ...defaultValues }));
        }
    }, [defaultValues]);

    const handleChange = (key: string, value: string) => {
        setValues((prev) => ({ ...prev, [key]: value }));
        if (errors[key] || (key === "password" && errors["confirmPassword"])) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[key];
                if (key === "password") delete next["confirmPassword"];
                return next;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const schema = schemaKey ? SCHEMA_MAP[schemaKey] : undefined;

        if (schema) {
            const result = schema.safeParse(values);
            if (!result.success) {
                const newErrors: Record<string, string> = {};
                for (const issue of result.error.issues) {
                    const pathKey = String(issue.path[0]);
                    if (!newErrors[pathKey]) {
                        newErrors[pathKey] = issue.message;
                    }
                }
                setErrors(newErrors);
                return;
            }

            setErrors({});
            setIsSubmitting(true);
            try {
                await onSubmit?.(result.data as Record<string, unknown>);
            } finally {
                setIsSubmitting(false);
            }
            return;
        }

        // Fallback when schema is not provided
        const data: Record<string, string> = { ...values };
        fields.forEach((field, i) => {
            const key = getFieldKey(field, i);
            data[field.label] = values[key] ?? "";
            if (field.name) {
                data[field.name] = values[key] ?? "";
            }
        });

        setIsSubmitting(true);
        try {
            await onSubmit?.(data);
        } finally {
            setIsSubmitting(false);
        }
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
                        const fieldKey = getFieldKey(field, i);
                        return (
                            <div
                                key={fieldKey}
                                className={isSpanTwo ? "col-span-2" : "col-span-1"}
                            >
                                <FormField
                                    field={field}
                                    fieldKey={fieldKey}
                                    index={i}
                                    value={values[fieldKey] ?? ""}
                                    error={errors[fieldKey]}
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal text-white font-rethink-sans font-semibold text-[14px] py-3 rounded-xl
                               hover:bg-teal/90 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-150 cursor-pointer"
                >
                    {isSubmitting ? "Memproses..." : submitLabel}
                </button>
            </form>
        </div>
    );
}
