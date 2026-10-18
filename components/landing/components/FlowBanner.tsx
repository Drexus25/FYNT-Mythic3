import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function FlowBanner() {
    return (
        <section className="flex flex-col w-full mx-auto gap-12">
            <div className="flex flex-col gap-4 px-12">
                <div>
                    <p className="text-[32px] font-semibold">Dari kenalan, jadi kesempatan.</p>
                </div>
                <div className="flex flex-row gap-16">
                    <div className="flex flex-col gap-2">
                        <p className="text-teal text-[24px]">
                            01
                        </p>
                        <div className="w-full h-px bg-line"/>
                        <p className="font-semibold text-[20px]">
                            Pilih peranmu
                        </p>
                        <p className="text-ink-soft text-[16px]">
                            Daftar sebagai pencari kerja atau pembuka lowongan. Bonus koin langsung masuk ke akun.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-teal text-[24px]">
                            02
                        </p>
                        <div className="w-full h-px bg-line"/>
                        <p className="font-semibold text-[20px]">
                            Tunjukkan potensimu
                        </p>
                        <p className="text-ink-soft text-[16px]">
                            Lengkapi profil dan CV, atau verifikasi perusahaan lalu susun lowongan yang informatif.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-teal text-[24px]">
                            03
                        </p>
                        <div className="w-full h-px bg-line"/>
                        <p className="font-semibold text-[20px]">
                            Mulai koneksi yang tepat
                        </p>
                        <p className="text-ink-soft text-[16px]">
                            Periksa biaya koin, kirim lamaran, dan kenali kandidat lewat pengalaman serta jawaban essay.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-teal flex flex-row justify-between items-center p-8">
                <div className="flex flex-col">
                    <p className="text-[28px] text-white font-semibold">Potensimu layak mendapat peluang.</p>
                    <p className="text-[14px] text-line">Mulai perjalanan karier atau bangun tim berikutnya bersama FYNT.</p>
                </div>
                <div className="flex flex-row gap-4">
                    <Link href="/register/seeker" className="p-4 bg-white rounded-lg cursor-pointer hover:bg-line transition-all duration-300">
                        <p className="font-semibold">Daftar Gratis</p>
                    </Link>
                    <Link href="/register/recruiter" className="p-4 border border-line text-white flex flex-row justify-center items-center gap-2 rounded-lg cursor-pointer hover:bg-white hover:text-teal transition-all duration-300">
                        <p className="">Saya ingin merekrut</p><FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    )
}