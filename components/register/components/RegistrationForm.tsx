"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FormTemplate from "../../shared/FormTemplate";
import { LuUserRoundSearch } from "react-icons/lu";
import { FaArrowRight, FaRegBuilding, FaRegCircle, FaRegCheckCircle  } from "react-icons/fa";

import { RegistrationFormProps } from "./props";

export default function RegistrationForm(props: RegistrationFormProps) {
    const pathname = usePathname();
    const isSeeker = pathname === "/register/seeker";
    const isRecruiter = pathname === "/register/recruiter";
    return (
        <div className="flex flex-col w-full gap-4">
            <p className="text-[32px]">Buat Akun FYNT</p>
            <p className="text-[14px]">Sudah punya akun? <Link href="/login" className="text-teal">Masuk di sini</Link></p>
            <div className="flex flex-col gap-2">
                <p className="text-[14px] font-semibold">Saya ingin bergabung sebagai</p>
                <div className="flex flex-row gap-4">
                    <Link href="/register/seeker" className="w-full">
                        <div className={`w-full flex flex-col border border-line rounded-lg p-4 gap-2 ${isSeeker ? "bg-[#EEF7F5] border-2 border-teal" : ""}`}>
                            <div className="flex flex-row justify-between">
                                <LuUserRoundSearch className="text-teal"/>
                                {isSeeker ? <FaRegCheckCircle className="text-teal"/> : <FaRegCircle/>}
                            </div>
                            <p className="font-semibold text-[18px]">Pencari Kerja</p>
                            <p className="text-[14px]">Cari pekerjaan impian</p>
                            <div className="flex items-center gap-1 px-4 py-1 bg-teal/10 w-fit rounded-full">
                                <p className="text-[13px] text-teal font-semibold">2 Koin gratis</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/register/recruiter" className="w-full">
                        <div className={`w-full flex flex-col border border-line rounded-lg p-4 gap-2 ${isRecruiter ? "bg-[#EEF7F5] border-2 border-teal" : ""}`}>
                            <div className="flex flex-row justify-between">
                                <FaRegBuilding className="text-teal"/>
                                {isRecruiter ? <FaRegCheckCircle className="text-teal"/> : <FaRegCircle/>}
                            </div>
                            <p className="font-semibold text-[18px]">Perusahaan</p>
                            <p className="text-[14px]">Temukan talenta terbaik</p>
                            <div className="flex items-center gap-1 px-4 py-1 bg-teal/10 w-fit rounded-full">
                                <p className="text-[13px] text-teal font-semibold">5 Koin gratis</p>
                            </div>
                        </div>
                    </Link>
                </div>        
            </div>
            <FormTemplate {...props} />
        </div>
    )
}