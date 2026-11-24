import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHandHoldingHeart, FaHeart, FaArrowRight } from "react-icons/fa"
import { useCart } from "../contexts/CartContext"
import { products, getProduct, formatPrice } from "../data/products"
import AddToCart from "./addToCart"

function Hero() {

    const { addToCart } = useCart()

    // Producto que se muestra en grande. Empieza con el ramo de rosas (id 4)
    const [selectedId, setSelectedId] = useState(4)
    const selected = getProduct(selectedId)

    return (
        <section className="relative w-full overflow-hidden">

            {/* Fondo: la misma imagen del producto, gigante y difuminada */}
            <img
                key={`fondo-${selected.id}`}
                src={selected.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-150 blur-3xl opacity-15 lg:opacity-25 animate-aparecer pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_35%)]"
            />

            {/* Panel verde vertical de la derecha con el nombre corto */}
            <div className="hidden lg:flex absolute top-0 right-0 h-full w-56 xl:w-64 bg-emerald-700 rounded-l-[3rem] items-center justify-end pr-4" aria-hidden="true">
                <span
                    key={`panel-${selected.id}`}
                    className="[writing-mode:vertical-rl] rotate-180 text-7xl xl:text-8xl font-black tracking-wider text-white/90 animate-aparecer"
                >
                    {selected.shortName}
                </span>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">

                {/* ---------- Columna de texto ---------- */}
                <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                    <p className="text-emerald-300 font-bold tracking-[0.3em] text-sm sm:text-base">
                        BELLA FLORA ES…
                    </p>

                    <h1 className="text-white uppercase leading-none text-5xl sm:text-6xl xl:text-7xl">
                        <span className="font-light">Puro </span>
                        <span className="font-black">amor</span>
                        <br />
                        <span className="font-light">en </span>
                        <span className="font-black">flores</span>
                    </h1>

                    <p className="text-white/70 text-lg max-w-md">
                        Ramos de flores eternas hechos a mano y personalizados para esa persona especial.
                    </p>

                    {/* Píldoras: precio + beneficio */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <div className="flex flex-col items-center justify-center px-6 py-2 rounded-full bg-green-900/80 border-2 border-emerald-400/40 text-white">
                            <span key={`precio-${selected.id}`} className="text-2xl font-black leading-tight animate-aparecer">
                                {formatPrice(selected.price)}
                            </span>
                            <span className="text-[10px] font-bold tracking-widest text-emerald-300">
                                {selected.name.toUpperCase()}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white text-green-950">
                            <FaHandHoldingHeart className="text-3xl" />
                            <span className="text-sm font-black leading-tight text-left">
                                HECHO<br />A MANO
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                        <AddToCart product={selected} onAdd={addToCart} light />
                        <Link
                            to="/catalogo"
                            className="group flex items-center gap-2 text-white font-semibold hover:text-emerald-300 transition"
                        >
                            Ver catálogo
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Miniaturas: al hacer clic cambian el producto destacado */}
                    <div className="flex flex-col gap-3 items-center lg:items-start mt-4">
                        <div className="flex gap-3 sm:gap-4">
                            {products.map(product => {
                                const active = product.id === selectedId
                                return (
                                    <button
                                        key={product.id}
                                        onClick={() => setSelectedId(product.id)}
                                        aria-pressed={active}
                                        aria-label={`Ver ${product.name}`}
                                        className={`h-16 w-16 sm:h-20 sm:w-20 rounded-2xl p-1 transition duration-300 ${
                                            active
                                                ? "bg-emerald-600 ring-2 ring-white scale-110"
                                                : "bg-white/10 hover:bg-white/20 hover:-translate-y-1"
                                        }`}
                                    >
                                        <img src={product.image} alt="" className="h-full w-full object-contain" />
                                    </button>
                                )
                            })}
                        </div>
                        <p className="text-white/50 text-xs font-semibold tracking-[0.3em] sm:tracking-[0.5em]">
                            BELLA FLORA · RAMOS ETERNOS
                        </p>
                    </div>
                </div>

                {/* ---------- Columna de la imagen ---------- */}
                <div className="relative order-first lg:order-none flex justify-center lg:justify-end lg:pr-24 xl:pr-32">
                    <img
                        key={`producto-${selected.id}`}
                        src={selected.image}
                        alt={selected.name}
                        className="relative z-10 h-72 sm:h-[28rem] lg:h-[34rem] w-auto object-contain drop-shadow-2xl animate-aparecer hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <span className="absolute z-20 top-1/2 right-4 sm:right-1/4 lg:right-16 xl:right-24 h-12 w-12 rounded-full bg-white text-emerald-600 flex items-center justify-center text-xl shadow-lg" aria-hidden="true">
                        <FaHeart />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero
