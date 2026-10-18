import { FaArrowUpRightDots } from "react-icons/fa6";

export default function LoginBanner() {
    return (
        <div className="flex flex-col h-fit gap-4 p-8 w-full max-w-[28vw] bg-[#EEF7F5] rounded-2xl">
            <div>
                <p className="font-rethink-sans font-medium text-teal text-[14px]">
                    TERHUBUNG KEMBALI DENGAN FYNT
                </p>
            </div>
            <div className="max-w-70">
                <p className="font-rethink-sans font-semibold text-[36px] leading-10">
                    Selamat datang kembali di FYNT.
                </p>
            </div>
            <div className="">
                <p className="text-[12px] text-ink-muted">
                    Masuk ke akunmu dan lanjutkan perjalanan yang sudah kamu mulai.
                </p>
            </div>
            <div className="w-full h-px bg-line"/>
            <FaArrowUpRightDots className="text-teal/30 ml-auto text-[230px]"/>
            <div className="w-full h-px bg-line"/>
            <div>
                <p className="font-rethink-sans text-[14px] text-teal font-bold">Find Your Next Talent — FYNT</p>
            </div>
        </div>
    )
}