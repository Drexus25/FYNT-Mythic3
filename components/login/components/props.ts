import { FormFieldConfig, RegistrationFormProps } from "@/components/register/components/props";

export const LoginFormFields: FormFieldConfig[] = [
    {
        name: "email",
        label: "Email",
        placeholder: "Masukkan email kamu",
        colSpan: 2,
    },
    {
        name: "password",
        label: "Kata Sandi",
        placeholder: "Masukkan kata sandi",
        isPassword: true,
        colSpan: 2,
    },
];

export const LoginFormProps: RegistrationFormProps = {
    fields: LoginFormFields,
    submitLabel: "Masuk",
    schemaKey: "login",
};

