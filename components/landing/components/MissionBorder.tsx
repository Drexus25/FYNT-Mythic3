import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbHexagonLetterF } from "react-icons/tb";
import { GrDocumentUser } from "react-icons/gr";
import { MdPeopleOutline } from "react-icons/md";


export default function MissionBorder() {
    return (
        <div className="w-full flex flex-row justify-between items-center border-y px-8 py-4 border-line">
            <div className="flex flex-row justify-center items-center gap-2 text-teal">
                <MdOutlineVerifiedUser />
                <p className="text-[16px]">Perusahaan Terverifikasi</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 text-teal">
                <TbHexagonLetterF />
                <p className="text-[16px]">Biaya Transparan</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 text-teal">
                <GrDocumentUser />
                <p className="text-[16px]">Profil Potensial</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 text-teal">
                <MdPeopleOutline />
                <p className="text-[16px]">Talenta Perusahaan</p>
            </div>
        </div>
    )
}