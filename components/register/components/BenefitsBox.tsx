import { FaRegBuilding } from "react-icons/fa";
import { BenefitsBoxProps } from "./props";
import { FiGift } from "react-icons/fi";

export default function BenefitsBox({
    title,
    description,
    subtitle1,
    subdesc1,
    subtitle2,
    subdesc2,
}: BenefitsBoxProps) {
    return (
        <div className="flex flex-col h-fit gap-4 p-8 max-w-[28vw] bg-[#EEF7F5] rounded-2xl">
            <div>
                <p className="font-rethink-sans font-medium text-teal text-[14px]">
                    LANGKAH BARU DIMULAI DI SINI
                </p>
            </div>
            <div className="max-w-70">
                <p className="font-rethink-sans font-semibold text-[36px] leading-10">
                    {title}
                </p>
            </div>
            <div className="">
                <p className="text-[12px] text-ink-muted">
                    {description}
                </p>
            </div>
            <div className="w-full h-px bg-line"/>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <FiGift className="text-teal text-[20px]"/>
                    <p className="font-rethink-sans font-bold text-[16px]">{subtitle1}</p>
                    <p className="text-[12px] text-ink-muted">{subdesc1}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <FaRegBuilding className="text-teal text-[20px]"/>
                    <p className="font-rethink-sans font-bold text-[16px]">{subtitle2}</p>
                    <p className="text-[12px] text-ink-muted">{subdesc2}</p>
                </div>
            </div>
            <div className="w-full h-px bg-line"/>
            <div>
                <p className="font-rethink-sans text-[14px] text-teal font-bold">Find Your Next Talent — FYNT</p>
            </div>
        </div>
    )
}