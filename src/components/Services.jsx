const services = [
    "Laminate Flooring",
    "Tile Installation",
    "Plastering",
    "Drywall (Gypsum Board)",
];

export default function Services({ t }) {
    return (
        <section id="services" className="py-24 max-w-7xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-14">
                <span className="text-aqua-400">{t.servicesTitle}</span>
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="group bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] hover:-translate-y-3 transition-all duration-300 text-center"
                    >
                        <div className="w-12 h-12 mx-auto mb-4 bg-aqua-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                            🛠️
                        </div>
                        <h4 className="font-semibold text-xl">{s}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
