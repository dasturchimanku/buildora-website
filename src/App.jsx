import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
    Layout,
    Layers,
    Grid,
    CheckCircle2,
    Phone,
    Mail,
    ChevronRight,
    Star,
    Instagram,
    MessageCircle,
} from "lucide-react";

const translations = {
    en: {
        heroTitle: "Elegance in Every Millimeter",
        heroSub:
            "Buildora B.V. – Expert interior finishing in the Netherlands. We turn empty shells into premium living spaces.",
        services: "Craftsmanship",
        pricing: "Tarieven",
        portfolio: "Projects",
        cta: "Start Your Project",
        contactTitle: "Get in Touch",
        items: {
            laminate: "Premium Laminate",
            plaster: "Master Plastering",
            tiles: "Expert Tiling",
            gips: "Wall Systems",
        },
    },
    nl: {
        heroTitle: "Elegantie in Elke Millimeter",
        heroSub:
            "Buildora B.V. – Uw partner in hoogwaardige afwerking. Wij transformeren ruimtes tot luxe leefomgevingen.",
        services: "Vakmanschap",
        pricing: "Tarieven",
        portfolio: "Projecten",
        cta: "Project Starten",
        contactTitle: "Contact Opnehmen",
        items: {
            laminate: "Luxe Laminaat",
            plaster: "Stucwerk",
            tiles: "Tegelwerken",
            gips: "Gipsplaten",
        },
    },
    ru: {
        heroTitle: "Элегантность в каждом миллиметре",
        heroSub:
            "Buildora B.V. – Экспертная отделка в Нидерландах. Мы создаем премиальный уют из пустых стен.",
        services: "Мастерство",
        pricing: "Цены",
        portfolio: "Работы",
        cta: "Начать проект",
        contactTitle: "Связаться с нами",
        items: {
            laminate: "Ламинат",
            plaster: "Штукатурка",
            tiles: "Плитка",
            gips: "Гипсокартон",
        },
    },
};

const App = () => {
    const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
    const t = translations[lang];
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const serviceData = [
        {
            title: t.items.laminate,
            icon: <Layers />,
            price: "18",
            desc: "Slab & Click systems",
        },
        {
            title: t.items.plaster,
            icon: <Layout />,
            price: "25",
            desc: "Smooth & Decorative",
        },
        {
            title: t.items.tiles,
            icon: <Grid />,
            price: "45",
            desc: "Ceramic & Porcelain",
        },
        {
            title: t.items.gips,
            icon: <CheckCircle2 />,
            price: "22",
            desc: "Partition & Ceilings",
        },
    ];

    return (
        <div className="relative overflow-hidden bg-[#030303] text-white">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* Navbar */}
            <nav className="fixed w-full z-50 px-6 py-4 lg:px-20 flex justify-between items-center backdrop-blur-xl border-b border-white/10 bg-black/50">
                <div className="flex items-center group cursor-pointer">
                    <div className="relative flex items-end">
                        <span className="text-3xl font-black tracking-tighter text-stroke-aqua aqua-glow-strong uppercase group-hover:text-cyan-400 transition-all duration-500">
                            Buildora
                        </span>
                        <span className="text-xl font-bold bg-cyan-500 text-black px-2 py-0.5 ml-1 rounded shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                            .nl
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <select
                        className="bg-transparent text-cyan-400 border border-cyan-500/30 rounded-lg px-2 py-1 text-sm font-bold outline-none cursor-pointer hover:bg-cyan-500/10"
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                    >
                        <option value="en" className="bg-black">
                            EN
                        </option>
                        <option value="nl" className="bg-black">
                            NL
                        </option>
                        <option value="ru" className="bg-black">
                            RU
                        </option>
                    </select>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.08),transparent_70%)]"
                />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative z-10"
                >
                    <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-none italic uppercase">
                        Build<span className="text-cyan-400">ora</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 font-light italic">
                        {t.heroSub}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-cyan-500 text-black px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest flex items-center gap-2"
                        >
                            {t.cta} <ChevronRight size={18} />
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Services */}
            <section className="py-24 px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceData.map((item, idx) => (
                        <div
                            key={idx}
                            className="premium-glass p-8 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all duration-500 group"
                        >
                            <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-2xl font-mono text-cyan-400">
                                €{item.price}
                                <span className="text-xs text-gray-500">
                                    {" "}
                                    /m²
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer & Contacts */}
            <footer className="relative bg-[#050505] border-t border-cyan-900/30 pt-20 pb-10 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Logo & About */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <span className="text-4xl font-black tracking-tighter text-stroke-aqua aqua-glow-strong uppercase">
                                Buildora
                            </span>
                            <span className="text-xl font-bold bg-cyan-500 text-black px-2 ml-1 rounded">
                                .nl
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm italic">
                            Crafting premium interiors with Dutch precision. We
                            are your partner in high-end renovation.
                        </p>
                    </div>

                    {/* Contact Details - Endi aniq ko'rinadi */}
                    <div className="space-y-6">
                        <h4 className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm">
                            {t.contactTitle}
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:info@buildora.nl"
                                className="flex items-center gap-4 text-white hover:text-cyan-400 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20">
                                    <Mail size={18} className="text-cyan-400" />
                                </div>
                                <span className="font-mono text-lg">
                                    info@buildora.nl
                                </span>
                            </a>
                            <a
                                href="tel:+31612345678"
                                className="flex items-center gap-4 text-white hover:text-cyan-400 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20">
                                    <Phone
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                </div>
                                <span className="font-mono text-lg">
                                    +31 6 34886358
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Social Media - WhatsApp & Instagram */}
                    <div className="space-y-6">
                        <h4 className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm">
                            Social Presence
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://wa.me/31634886358"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                            >
                                <MessageCircle size={28} />
                            </a>
                            <a
                                href="https://instagram.com/buildora.nl"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-2xl bg-[#E1306C]/10 border border-[#E1306C]/30 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(225,48,108,0.2)]"
                            >
                                <Instagram size={28} />
                            </a>
                        </div>
                        <p className="text-xs text-gray-600 font-mono mt-4 uppercase tracking-tighter">
                            Available 24/7 for inquiries
                        </p>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-xs tracking-widest uppercase">
                    © 2026 Buildora.nl | All Rights Reserved | KVK 12345678
                </div>
            </footer>
        </div>
    );
};

export default App;
