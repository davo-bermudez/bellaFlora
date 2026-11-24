import { useState } from "react"
import NavBar from "../components/navBar"
import "../styles/contact.css"
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"

const WHATSAPP_NUMBER = "573007450046"

// Redes (círculos de arriba del formulario)
const redes = [
    { icon: FaWhatsapp, label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/bell.aflora/" },
    { icon: BiLogoGmail, label: "Correo", href: "mailto:info@bell.aflora.com" },
    { icon: FaPhoneAlt, label: "Llamar", href: "tel:+573007450046" },
]

const formularioVacio = { name: "", email: "", message: "" }

function Contact(){

    // Un solo estado para los tres campos
    const [form, setForm] = useState(formularioVacio)
    const [sent, setSent] = useState(false)

    // Sirve para los tres campos: usa el atributo "name" del input
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        setSent(false)
    }

    // Arma el mensaje y abre WhatsApp con el texto listo para enviar
    function handleSubmit(e) {
        e.preventDefault()
        const text = [
            `Hola Bella Flora, soy ${form.name.trim()}.`,
            `Correo: ${form.email.trim()}`,
            "",
            form.message.trim(),
        ].join("\n")

        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener,noreferrer"
        )
        setSent(true)
        setForm(formularioVacio)
    }

    const inputClass =
        "w-full rounded-lg bg-neutral-100 px-4 py-3 text-green-950 placeholder:text-neutral-400 outline-none border-2 border-transparent focus:border-emerald-500 focus:bg-white transition duration-200"

    return(
        <section className="contact-main">
            <section className="contact-nav">
                <NavBar/>
            </section>

            <div className="motion-safe:animate-pagina w-full px-4 sm:px-8 pb-16 flex justify-center">
                <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

                    {/* ---------- Formulario ---------- */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center justify-center gap-5 px-6 py-12 sm:px-14"
                    >
                        <h1 className="text-4xl font-extrabold text-green-950">Contáctanos</h1>

                        <ul className="flex gap-3">
                            {redes.map(({ icon: Icon, label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        title={label}
                                        className="h-11 w-11 flex items-center justify-center rounded-xl border border-neutral-300 text-lg text-green-950 hover:bg-green-950 hover:text-white hover:border-green-950 hover:-translate-y-0.5 transition duration-200"
                                    >
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <p className="text-sm text-neutral-500">o escríbenos tu mensaje aquí</p>

                        <div className="w-full flex flex-col gap-3">
                            <label htmlFor="name" className="sr-only">Nombre</label>
                            <input
                                className={inputClass}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Tu nombre"
                                value={form.name}
                                onChange={handleChange}
                                autoComplete="name"
                                required
                            />

                            <label htmlFor="email" className="sr-only">Correo electrónico</label>
                            <input
                                className={inputClass}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Tu correo electrónico"
                                value={form.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                            />

                            <label htmlFor="message" className="sr-only">Tu mensaje</label>
                            <textarea
                                className={`${inputClass} h-32 resize-none`}
                                name="message"
                                id="message"
                                placeholder="Tu mensaje"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {sent && (
                            <p className="w-full text-center text-sm font-medium text-emerald-800 bg-emerald-50 rounded-lg py-2" aria-live="polite">
                                ¡Listo! Se abrió WhatsApp con tu mensaje, solo dale enviar.
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-2 px-12 py-3 rounded-lg bg-green-950 text-white text-sm font-bold tracking-widest uppercase shadow-lg hover:bg-emerald-700 hover:-translate-y-0.5 transition duration-200"
                        >
                            Enviar
                        </button>
                    </form>

                    {/* ---------- Panel de color con la curva ---------- */}
                    <div className="order-first lg:order-none relative overflow-hidden flex flex-col items-center justify-center gap-6 text-center px-8 py-14 sm:px-14 bg-gradient-to-br from-emerald-600 via-green-800 to-green-950 text-white rounded-b-[4rem] lg:rounded-b-none lg:rounded-l-[8rem]">
                        {/* círculos decorativos */}
                        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10" aria-hidden="true" />
                        <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-white/5" aria-hidden="true" />

                        <h2 className="relative text-4xl font-extrabold">¡Hola, amigo!</h2>
                        <p className="relative text-white/85 max-w-xs leading-relaxed">
                            ¿Tienes una idea para un ramo o alguna pregunta? Escríbenos y te ayudamos a crear el detalle perfecto.
                        </p>

                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-green-950 transition duration-200"
                        >
                            <FaWhatsapp className="text-lg" />
                            WhatsApp
                        </a>

                        <ul className="relative flex flex-col gap-2 text-sm text-white/80 mt-2">
                            <li className="flex items-center justify-center gap-2"><FaPhoneAlt /> +57 300 745 0046</li>
                            <li className="flex items-center justify-center gap-2"><FaInstagram /> @bell.aflora</li>
                            <li className="flex items-center justify-center gap-2"><BiLogoGmail /> info@bell.aflora.com</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
