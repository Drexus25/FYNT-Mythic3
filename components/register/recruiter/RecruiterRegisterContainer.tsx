import BenefitsBox from "../components/BenefitsBox";
import RegistrationForm from "../components/RegistrationForm";
import { BenefitsBoxRecruiter, RecruiterFormProps } from "../components/props";

export default function RecruiterRegisterContainer() {
    return (
        <div className="min-h-screen pt-30 px-42 pb-20 flex flex-row justify-center mx-auto gap-6">
                    <BenefitsBox {...BenefitsBoxRecruiter} />
                    <RegistrationForm {...RecruiterFormProps} />
                </div>
    )
}