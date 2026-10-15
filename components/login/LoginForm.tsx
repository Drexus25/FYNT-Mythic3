"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up auth logic
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Card */}
      <div className="bg-paper border border-line rounded-2xl shadow-feature p-5">

        {/* Header */}
        <div className="text-center mb-5">
          <Link
            href="/"
            className="inline-block text-4xl font-black text-ink tracking-tight mb-1 hover:opacity-80 transition-opacity"
          >
            FYNT
          </Link>
          <h1 className="text-xl font-bold text-ink">Welcome back</h1>
          <p className="text-ink-muted text-sm mt-0.5">
            Sign in to your account to continue
          </p>
        </div>

        {/* Email / Password form */}
        <form id="login-form" onSubmit={handleSubmit} className="space-y-3">
          {/* Email */}
          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-semibold text-ink mb-1"
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                id="login-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line bg-white text-ink placeholder-ink-muted text-sm outline-none focus:border-teal/60 focus:ring-2 focus:ring-teal/10 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label
                htmlFor="login-password"
                className="block text-sm font-semibold text-ink"
              >
                Password
              </label>
              <button
                type="button"
                id="login-forgot-password"
                className="text-xs font-medium text-teal hover:text-teal-dark transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-line bg-white text-ink placeholder-ink-muted text-sm outline-none focus:border-teal/60 focus:ring-2 focus:ring-teal/10 transition-all"
              />
              <button
                type="button"
                id="login-toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            id="login-submit-button"
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-teal text-paper font-semibold py-2.5 rounded-xl text-sm mt-1 transition-all hover:bg-teal-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
          >
            {loading ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Signing in…
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-4 mb-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-xs text-ink-muted font-medium">
            or continue with
          </span>
          <div className="h-px flex-1 bg-line" />
        </div>

        {/* Google button */}
        <button
          id="login-google-button"
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-line rounded-xl py-2.5 px-4 text-sm font-semibold text-ink hover:bg-line/40 active:scale-[0.98] transition-all"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-ink-muted mt-4">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            id="login-register-link"
            className="font-semibold text-teal hover:text-teal-dark transition-colors"
          >
            Create one free
          </Link>
        </p>
      </div>
    </div>
  );
}
