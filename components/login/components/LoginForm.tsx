"use client";

import Link from "next/link";
import FormTemplate from "@/components/shared/FormTemplate";
import { RegistrationFormProps } from "@/components/register/components/props";
import { LoginFormProps } from "./props";

export default function LoginForm(props?: Partial<RegistrationFormProps>) {
    return (
        <div className="flex flex-col w-full gap-4">
            <p className="text-[32px]">Masuk ke Akun FYNT</p>
            <p className="text-[14px]">
                Belum punya akun?{" "}
                <Link href="/register/seeker" className="text-teal hover:underline">
                    Daftar di sini
                </Link>
            </p>
            <FormTemplate {...LoginFormProps} {...props} />
            <div className="w-full h-px bg-line"/>
            <p className="text-[14px]">
                Lupa password?{" "}
                <Link href="/register/seeker" className="text-teal hover:underline">
                    Klik di sini
                </Link>
            </p>
        </div>
    );
}