import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

export default function HeroSection() {
    const [query, setQuery] = useState("");

    return (
        <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-4 text-center">
            <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 rounded-full opacity-[0.06]"
            style={{
                background:
                "radial-gradient(circle, var(--color-teal) 0%, transparent 70%)",
            }}
            />
            <div
            aria-hidden
            className="pointer-events-none absolute top-10 -right-32 w-96 h-96 rounded-full opacity-[0.04]"
            style={{
                background:
                "radial-gradient(circle, var(--color-coin) 0%, transparent 70%)",
            }}
            />

            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-md font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                <BsStars />
                Find Your Next Talent
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-[58px] text-ink leading-tight tracking-tight mb-4 max-w-3xl mx-auto">
                Langkah berikutnya,<br/><span className="text-teal">Peluang yang tepat.</span>
            </h1>
            <p className="text-ink-muted text-lg md:text-lg max-w-2xl mx-auto mb-10">
                Temukan pekerjaan yang sejalan dengan keahlianmu. Atau temukan talenta yang akan tumbuh bersama perusahaanmu — semuanya dimulai di FYNT.
            </p>

            {/* Search bar */}
            <form
            id="hero-search-form"
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full max-w-2xl mx-auto bg-white border border-line rounded-2xl overflow-hidden focus-within:border-teal/50 transition-colors"
            >
            {/* Search icon */}
            <div className="pl-5 text-teal">
                <FaSearch />
            </div>

            <input
                id="hero-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Posisi, keahlian, atau perusahaan..."
                className="flex-1 py-4 px-4 text-ink placeholder-ink-muted bg-transparent outline-none text-base"
            />

            <button
                id="hero-search-button"
                type="submit"
                className="m-2 bg-teal text-paper font-semibold px-8 py-3 rounded-xl text-sm cursor-pointer transition-all hover:bg-teal-dark active:scale-[0.97] shadow-sm"
            >
                Cari
            </button>
            </form>
            <div className="flex flex-row gap-2 mt-5 mx-auto justify-center items-center">
                <FaExclamationCircle className="text-teal" />
                <p className="text-ink-muted text-sm">Pastikan pekerjaan yang kamu cari sesuai dengan kemampuanmu!</p>
            </div>
      </section>
    )
}