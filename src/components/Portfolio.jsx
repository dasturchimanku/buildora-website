const works = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
];

export default function Portfolio({ t }) {
    return (
        <section id="portfolio" className="py-24 bg-white/5">
            <h3 className="text-4xl font-bold text-center mb-14">
                <span className="text-aqua-400">{t.portfolioTitle}</span>
            </h3>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
                {works.map((img, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-2xl shadow-xl hover:shadow-[0_0_40px_rgba(0,255,255,0.35)] transition"
                    >
                        <img
                            src={img}
                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
