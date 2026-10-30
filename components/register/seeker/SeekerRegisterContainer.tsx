import BenefitsBox from "../components/BenefitsBox";
import RegistrationForm from "../components/RegistrationForm";
import { BenefitsBoxSeeker, SeekerFormProps } from "../components/props";

export default function SeekerRegisterContainer() {
    return (
        <div className="min-h-screen pt-30 px-42 pb-20 flex flex-row justify-center mx-auto gap-6">
            <BenefitsBox {...BenefitsBoxSeeker} />
            <RegistrationForm {...SeekerFormProps} />
        </div>
    )
}