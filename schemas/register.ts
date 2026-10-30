import { z } from "zod";

export const seekerRegisterSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, "Nama depan wajib diisi"),
    lastName: z
      .string()
      .trim()
      .min(1, "Nama belakang wajib diisi"),
    email: z
      .string()
      .trim()
      .min(1, "Email wajib diisi")
      .email("Format email tidak valid"),
    phoneNumber: z
      .string()
      .trim()
      .optional()
      .or(z.literal(""))
      .refine(
        (val) => !val || /^[0-9+\-\s()]{8,20}$/.test(val),
        { message: "Nomor telepon tidak valid (minimal 8 digit)" }
      ),
    password: z
      .string()
      .min(1, "Kata sandi wajib diisi")
      .min(8, "Kata sandi minimal 8 karakter"),
    confirmPassword: z
      .string()
      .min(1, "Konfirmasi kata sandi wajib diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi kata sandi tidak cocok",
    path: ["confirmPassword"],
  });

export type SeekerRegisterInput = z.infer<typeof seekerRegisterSchema>;

// General register schema alias for job seeker
export const registerSchema = seekerRegisterSchema;
export type RegisterInput = SeekerRegisterInput;

export const recruiterRegisterSchema = z
  .object({
    companyName: z
      .string()
      .trim()
      .min(1, "Nama perusahaan wajib diisi"),
    industry: z
      .string()
      .trim()
      .min(1, "Bidang industri wajib dipilih"),
    city: z
      .string()
      .trim()
      .min(1, "Kota atau kabupaten wajib diisi"),
    website: z
      .string()
      .trim()
      .optional()
      .or(z.literal(""))
      .refine(
        (val) => {
          if (!val) return true;
          try {
            const url =
              val.startsWith("http://") || val.startsWith("https://")
                ? val
                : `https://${val}`;
            new URL(url);
            return true;
          } catch {
            return false;
          }
        },
        { message: "Format website tidak valid (contoh: https://perusahaan.com)" }
      ),
    address: z
      .string()
      .trim()
      .min(1, "Alamat perusahaan wajib diisi"),
    picName: z
      .string()
      .trim()
      .min(1, "Nama penanggung jawab wajib diisi"),
    companyEmail: z
      .string()
      .trim()
      .min(1, "Email perusahaan wajib diisi")
      .email("Format email perusahaan tidak valid"),
    phoneNumber: z
      .string()
      .trim()
      .min(1, "Nomor telepon wajib diisi")
      .refine(
        (val) => /^[0-9+\-\s()]{8,20}$/.test(val),
        { message: "Nomor telepon tidak valid (minimal 8 digit)" }
      ),
    password: z
      .string()
      .min(1, "Password wajib diisi")
      .min(8, "Password minimal 8 karakter"),
    confirmPassword: z
      .string()
      .min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  });

export type RecruiterRegisterInput = z.infer<typeof recruiterRegisterSchema>;
