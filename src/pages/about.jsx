import { Link } from "react-router-dom"
import NavBar from "../components/navBar"
import "../styles/about.css"
import rapunzel from "../images/rapunzel.jpeg"
import { FaLeaf, FaPalette, FaHandHoldingHeart, FaWhatsapp, FaArrowRight, FaSearch, FaGift } from "react-icons/fa"
import { FaWandMagicSparkles } from "react-icons/fa6"

const WHATSAPP_URL = "https://wa.me/573007450046"

// Lo que hace diferente a Bella Flora (tarjetas)
const valores = [
    {
        icon: FaLeaf,
        titulo: "Flores eternas",
        texto: "No se marchitan ni necesitan agua. Tu detalle se queda años, no días.",
    },
    {
        icon: FaPalette,
        titulo: "100 % personalizado",
        texto: "Tú eliges colores, temática y personajes: Clash Royale, Rapunzel o lo que imagines.",
    },
    {
        icon: FaHandHoldingHeart,
        titulo: "Hecho a mano",
        texto: "Armamos cada flor una por una, así que no hay dos ramos iguales.",
    },
]

// Pasos para hacer un pedido
const pasos = [
    {
        icon: FaSearch,
        titulo: "Elige tu ramo",
        texto: "Explora el catálogo y encuentra el que va con esa persona.",
    },
    {
        icon: FaWandMagicSparkles,
        titulo: "Personalízalo",
        texto: "Escríbenos los colores, el personaje o el mensaje que quieres incluir.",
    },
    {
        icon: FaGift,
        titulo: "Sorprende",
        texto: "Recibe tu ramo listo para regalar y mira la reacción.",
    },
]

function About() {
    return (
        <section className="about-main">
            <section className="about-nav">
                <NavBar />
            </section>

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 pb-20 flex flex-col gap-20">

                {/* ---------- HERO ---------- */}
                <div className="relative overflow-hidden bg-green-950 rounded-3xl px-6 py-12 sm:px-12 lg:py-16 grid lg:grid-cols-2 gap-12 items-center">
                    {/* círculos de luz decorativos */}
                    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
                    <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-pink-400/10 blur-3xl" aria-hidden="true" />

                    <div className="relative flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                        <span className="px-4 py-1 rounded-full bg-white/10 text-emerald-200 text-sm font-semibold tracking-widest uppercase">
                            Sobre Bella Flora
                        </span>
                        <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight">
                            Flores que no se marchitan,{" "}
                            <span className="text-emerald-300">detalles que no se olvidan.</span>
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Todo empieza con las ganas de sorprender a alguien. Somos un equipo de jóvenes
                            que convierte esa intención en un ramo hecho a mano con flores eternas, pensado
                            para la persona que lo va a recibir: sus colores, su personaje favorito y el
                            mensaje que le quieres dar.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Link
                                to="/catalogo"
                                className="group flex items-center gap-2 bg-white text-green-950 font-semibold px-6 py-3 rounded-full hover:bg-emerald-200 transition"
                            >
                                Ver catálogo
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition"
                            >
                                <FaWhatsapp className="text-xl" />
                                Escríbenos
                            </a>
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-600 rounded-3xl rotate-6" aria-hidden="true" />
                            <img
                                src={rapunzel}
                                alt="Ramo de flores eternas con temática de Rapunzel"
                                className="relative h-80 sm:h-96 w-auto rounded-3xl object-cover shadow-2xl -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <span className="absolute -top-4 -right-4 bg-white text-green-950 text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                                🌷 Hecho a mano
                            </span>
                            <span className="absolute -bottom-4 -left-4 bg-emerald-300 text-green-950 text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                                ♾️ Dura para siempre
                            </span>
                        </div>
                    </div>
                </div>

                {/* ---------- VALORES ---------- */}
                <div className="flex flex-col gap-10">
                    <div className="text-center flex flex-col gap-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-green-950">Lo que nos hace diferentes</h2>
                        <p className="text-neutral-600">Un ramo nuestro no es uno más.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {valores.map(({ icon: Icon, titulo, texto }) => (
                            <div
                                key={titulo}
                                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col gap-4 border-t-4 border-emerald-600"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-emerald-100 text-green-900 flex items-center justify-center text-2xl group-hover:bg-green-950 group-hover:text-white transition-colors duration-300">
                                    <Icon />
                                </div>
                                <h3 className="text-xl font-bold text-green-950">{titulo}</h3>
                                <p className="text-neutral-600 leading-relaxed">{texto}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------- CÓMO FUNCIONA ---------- */}
                <div className="flex flex-col gap-10">
                    <div className="text-center flex flex-col gap-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-green-950">Así de fácil es pedir</h2>
                        <p className="text-neutral-600">Tres pasos y tu detalle está en camino.</p>
                    </div>

                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
                        {/* línea que une los pasos (solo en pantallas medianas o más) */}
                        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-emerald-200" aria-hidden="true" />

                        {pasos.map(({ icon: Icon, titulo, texto }, index) => (
                            <li key={titulo} className="relative flex flex-col items-center text-center gap-3">
                                <div className="relative h-16 w-16 rounded-full bg-green-950 text-white flex items-center justify-center text-2xl shadow-lg ring-8 ring-white">
                                    <Icon />
                                    <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-emerald-400 text-green-950 text-xs font-bold flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-green-950">{titulo}</h3>
                                <p className="text-neutral-600 max-w-xs">{texto}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* ---------- LLAMADO A LA ACCIÓN ---------- */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-950 to-emerald-800 px-6 py-12 text-center flex flex-col items-center gap-6">
                    <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
                    <h2 className="relative text-white text-3xl sm:text-4xl font-bold">
                        ¿Ya sabes a quién vas a sorprender?
                    </h2>
                    <p className="relative text-white/80 max-w-xl">
                        Cuéntanos la ocasión y te ayudamos a crear el ramo perfecto.
                    </p>
                    <div className="relative flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/catalogo"
                            className="bg-white text-green-950 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
                        >
                            Ver catálogo
                        </Link>
                        <Link
                            to="/contacto"
                            className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-green-950 transition"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
