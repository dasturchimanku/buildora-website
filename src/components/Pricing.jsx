export default function Pricing({ t }) {
    return (
        <section id="pricing" className="py-24 max-w-4xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-14">
                <span className="text-aqua-400">{t.pricingTitle}</span>
            </h3>

            <div className="space-y-6">
                {[
                    ["Laminate", "€15–25 / m²"],
                    ["Tile", "€30–45 / m²"],
                    ["Plaster", "€10–18 / m²"],
                    ["Drywall", "€25–40 / m²"],
                ].map((item, i) => (
                    <div
                        key={i}
                        className="flex justify-between items-center bg-black/70 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition"
                    >
                        <span>{item[0]}</span>
                        <span className="text-aqua-400 font-bold">
                            {item[1]}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
