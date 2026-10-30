import type { Metadata } from "next";
import ProfileContainer from "@/components/profile/container/ProfileContainer";

export const metadata: Metadata = {
  title: "Profil Saya | FYNT",
  description: "Perbarui informasi pribadi, pengalaman kerja, pendidikan, serta CV dan portofolio profilmu di FYNT.",
};

export default function ProfilePage() {
    return (
        <ProfileContainer />
    )
}
