export default function Contact({ t }) {
    return (
        <section id="contact" className="py-24 text-center px-6">
            <h3 className="text-4xl font-bold mb-6">{t.contactTitle}</h3>
            <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-2xl shadow-xl">
                <p>Email: info@buildora.nl</p>
                <p>Phone: +31 XX XXX XXXX</p>
                <p>Netherlands</p>
            </div>
        </section>
    );
}
