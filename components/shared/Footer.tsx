import Image from "next/image";
import LogoFYNT from "@/public/shared/logo-fynt-clean.svg"

export default function Footer() {
    return(
        <div className="flex flex-col gap-12 px-12 py-6 border-t border-line">
            <div className="flex flex-row justify-center items-center gap-12">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-4">
                        <Image src={LogoFYNT} alt="FYNT" width={60} height={60} />
                        <div className="flex flex-col">
                            <p className="font-rethink-sans font-black text-[28px]">FYNT</p>
                            <p className="text-ink-muted">Find Your Next Talent</p>
                        </div>
                    </div>
                    <div className="w-full max-w-xl">
                        <p className="text-ink-soft">
                            Platform pencarian kerja yang membantu pencari kerja menemukan peluang dan perusahaan menemukan talenta yang tepat.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col bg-[#F4FAF8] p-8 border border-line gap-2 w-full h-fit rounded-lg">
                    <div className="bg-teal rounded-full py-2 px-4 w-fit">
                        <p className="text-white font-bold text-[12px]">Misi FYNT</p>
                    </div>
                    <p className="font-bold text-[20px]">
                        Membantu setiap pencari kerja menemukan peluang yang tepat.
                    </p>
                    <p className="text-[16px] text-ink-soft">
                        FYNT dirancang untuk mempertemukan pencari kerja dan perusahaan dengan lebih cepat, lebih transparan, dan lebih sesuai dengan kebutuhan masing-masing.
                    </p>
                </div>
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-line to-transparent"/>
            <div className="flex flex-row justify-center items-center text-center">
                <p className="text-[14px] text-ink-soft">© 2026 FYNT. Semua hak dilindungi.</p>
            </div>
        </div>
    )
}