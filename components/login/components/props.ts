import { FormFieldConfig, RegistrationFormProps } from "@/components/register/components/props";

export const LoginFormFields: FormFieldConfig[] = [
    {
        label: "Email",
        placeholder: "Masukkan email kamu",
        colSpan: 2,
    },
    {
        label: "Kata Sandi",
        placeholder: "Masukkan kata sandi",
        isPassword: true,
        colSpan: 2,
    },
];

export const LoginFormProps: RegistrationFormProps = {
    fields: LoginFormFields,
    submitLabel: "Masuk",
};
