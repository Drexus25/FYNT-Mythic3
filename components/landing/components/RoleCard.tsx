import { LuUserRoundSearch } from "react-icons/lu";
import { FaArrowRight, FaRegBuilding } from "react-icons/fa";


export default function RoleCard() {
    return (
        <div className="flex flex-row justify-center items-center w-fit px-12 gap-12">
            <div className="flex flex-col gap-4 bg-[#F8FAF9] border border-line rounded-lg p-7">
                <div className="flex flex-row justify-between items-center">
                    <LuUserRoundSearch className="text-teal size-6" />
                    <div className="flex items-center gap-1 px-4 py-1 bg-teal/10 w-fit rounded-full">
                        <p className="text-[13px] text-teal font-semibold">2 Koin gratis saat mendaftar</p>
                    </div>
                </div>
                <p className="text-[24px] font-semibold text-ink">
                    Untuk pencari kerja
                </p>
                <p className="text-[15px] text-ink-soft">
                    Bawa keahlianmu ke tempat yang tepat. Lengkapi profil, pilih peluang, dan melamar dengan koin.
                </p>
                <p className="text-teal font-semibold flex flex-row items-center gap-2 cursor-pointer hover:text-teal-dark">
                    Temukan pekerjaan <FaArrowRight className="text-teal" />
                </p>
            </div>
            <div className="flex flex-col gap-4 bg-[#F8FAF9] border border-line rounded-lg p-7">
                <div className="flex flex-row justify-between items-center">
                    <FaRegBuilding className="text-teal size-6" />
                    <div className="flex items-center gap-1 px-4 py-1 bg-teal/10 w-fit rounded-full">
                        <p className="text-[13px] text-teal font-semibold">5 Koin gratis saat mendaftar</p>
                    </div>
                </div>
                <p className="text-[24px] font-semibold text-ink">
                    Untuk pembuka lowongan
                </p>
                <p className="text-[15px] text-ink-soft">
                    Bangun tim dengan talenta yang sesuai. Publikasikan lowongan dan kenali kandidat melalui pertanyaan essay.                </p>
                <p className="text-teal font-semibold flex flex-row items-center gap-2 cursor-pointer hover:text-teal-dark">
                    Mulai rekrutmen <FaArrowRight className="text-teal" />
                </p>
            </div>
        </div>
    )
}