"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiAlertCircle, FiUser, FiBriefcase, FiCheck } from "react-icons/fi";
import FormTemplate from "@/components/shared/FormTemplate";
import { RegistrationFormProps } from "@/components/register/components/props";
import { LoginFormProps } from "./props";
import { authenticateUser, setCurrentUser, DUMMY_USERS } from "@/data/users";

export default function LoginForm(props?: Partial<RegistrationFormProps>) {
    const router = useRouter();
    const [authError, setAuthError] = useState<string | null>(null);
    const [demoValues, setDemoValues] = useState<Record<string, string> | undefined>(undefined);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const handleLogin = async (data: Record<string, unknown>) => {
        setAuthError(null);
        const email = String(data.email ?? "").trim();
        const password = String(data.password ?? "");

        const user = authenticateUser(email, password);

        if (!user) {
            setAuthError("Email atau kata sandi tidak cocok. Silakan gunakan akun demo di bawah.");
            return;
        }

        // Simpan sesi user dummy di localStorage
        setCurrentUser(user);

        // Arahkan berdasarkan role
        if (user.role === "recruiter") {
            router.push("/recruiter/dashboard");
        } else {
            router.push("/dashboard");
        }
    };

    const handleSelectDemo = (role: "recruiter" | "seeker") => {
        const dummy = DUMMY_USERS.find((u) => u.role === role);
        if (dummy) {
            setDemoValues({
                email: dummy.email,
                password: dummy.password,
            });
            setSelectedRole(role);
            setAuthError(null);
        }
    };

    return (
        <div className="flex flex-col w-full gap-4">
            <div>
                <h1 className="font-rethink-sans font-bold text-[32px] text-ink leading-tight">
                    Masuk ke Akun FYNT
                </h1>
                <p className="text-[14px] text-ink-muted mt-1">
                    Belum punya akun?{" "}
                    <Link href="/register/seeker" className="text-teal font-medium hover:underline">
                        Daftar di sini
                    </Link>
                </p>
            </div>

            {/* Error Notification */}
            {authError && (
                <div className="flex items-center gap-2.5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-600 text-[13px] animate-fadeIn">
                    <FiAlertCircle className="text-[18px] shrink-0" />
                    <span>{authError}</span>
                </div>
            )}

            {/* Quick Demo Account Selector */}
            <div className="p-3.5 bg-[#F0F8F6] border border-[#D0EBE5] rounded-xl flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-teal tracking-wide uppercase font-rethink-sans">
                        Akun Demo (Klik untuk Isi Cepat)
                    </span>
                    <span className="text-[11px] text-teal/80">Siap Digunakan</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-left">
                    <button
                        type="button"
                        onClick={() => handleSelectDemo("recruiter")}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col gap-0.5 ${
                            selectedRole === "recruiter"
                                ? "bg-white border-teal shadow-xs ring-1 ring-teal"
                                : "bg-white/70 border-[#D9E8E5] hover:bg-white hover:border-teal/50"
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-[12px] font-bold text-ink flex items-center gap-1.5">
                                <FiBriefcase className="text-teal text-[13px]" /> Recruiter
                            </span>
                            {selectedRole === "recruiter" && <FiCheck className="text-teal text-[12px]" />}
                        </div>
                        <span className="text-[11px] text-ink-muted truncate">recruiter@fynt.id</span>
                        <span className="text-[10px] text-teal/80 font-mono mt-0.5">pass: FyntSecure@2026</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSelectDemo("seeker")}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col gap-0.5 ${
                            selectedRole === "seeker"
                                ? "bg-white border-teal shadow-xs ring-1 ring-teal"
                                : "bg-white/70 border-[#D9E8E5] hover:bg-white hover:border-teal/50"
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-[12px] font-bold text-ink flex items-center gap-1.5">
                                <FiUser className="text-teal text-[13px]" /> Seeker (Pelamar)
                            </span>
                            {selectedRole === "seeker" && <FiCheck className="text-teal text-[12px]" />}
                        </div>
                        <span className="text-[11px] text-ink-muted truncate">seeker@fynt.id</span>
                        <span className="text-[10px] text-teal/80 font-mono mt-0.5">pass: FyntSecure@2026</span>
                    </button>
                </div>
            </div>

            {/* Form */}
            <FormTemplate
                {...LoginFormProps}
                {...props}
                defaultValues={demoValues}
                onSubmit={props?.onSubmit ?? handleLogin}
            />

            <div className="w-full h-px bg-line my-1" />

            <p className="text-[14px] text-ink-muted">
                Lupa password?{" "}
                <Link href="/register/seeker" className="text-teal font-medium hover:underline">
                    Klik di sini
                </Link>
            </p>
        </div>
    );
}