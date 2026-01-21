export default function Hero({ t }) {
    return (
        <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-aqua-500/20 via-black to-black"></div>

            <div className="relative z-10 max-w-4xl animate-fadeIn">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    <span className="text-aqua-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.35)]">
                        Buildora
                    </span>{" "}
                    {t.heroTitle}
                </h2>

                <p className="text-gray-300 text-lg mb-10">{t.heroDesc}</p>

                <a
                    href="#contact"
                    className="inline-block bg-aqua-400 text-black px-10 py-4 rounded-xl font-bold shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:scale-110 transition"
                >
                    Free Consultation
                </a>
            </div>
        </section>
    );
}
