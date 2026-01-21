export default function Navbar({ t, lang, setLang }) {
    return (
        <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.15)]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-extrabold tracking-wide text-aqua-400">
                    BUILDORA
                </h1>

                <div className="hidden md:flex gap-8 text-sm">
                    {t.nav.map((item, i) => (
                        <a
                            key={i}
                            href={
                                [
                                    "#services",
                                    "#portfolio",
                                    "#pricing",
                                    "#contact",
                                ][i]
                            }
                            className="relative hover:text-aqua-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-aqua-400 hover:after:w-full after:transition-all"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    className="bg-black/50 border border-aqua-400/50 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-400"
                >
                    <option value="en">EN</option>
                    <option value="nl">NL</option>
                    <option value="ru">RU</option>
                </select>
            </div>
        </nav>
    );
}
