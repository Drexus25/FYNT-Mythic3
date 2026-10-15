import LoginForm from "@/components/login/LoginForm";

export const metadata = {
  title: "Sign In · FYNT",
  description: "Sign in to your FYNT account to browse and apply for jobs.",
};

export default function LoginPage() {
  return (
    <main className="flex-1 bg-paper flex items-center justify-center px-4 py-16">
      {/* Decorative background blob */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, var(--color-teal) 0%, transparent 70%)",
          }}
        />
      </div>

      <LoginForm />
    </main>
  );
}
