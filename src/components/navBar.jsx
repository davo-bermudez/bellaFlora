import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenu, IoClose } from "react-icons/io5";
import { useCart } from "../contexts/CartContext";
import brandImage from '../images/brand.jpeg'

// Páginas del menú. Para agregar una, solo se suma aquí.
const pages = [
    { to: "/", label: "Inicio" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
]

function NavBar(){

    const [menuOpen, setMenuOpen] = useState(false)
    const { itemCount } = useCart()

    // Cierra el menú móvil con la tecla Esc
    useEffect(() => {
        if (!menuOpen) return
        function handler(e) {
            if (e.key === "Escape") setMenuOpen(false)
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [menuOpen])

    // Estilo de cada enlace: NavLink nos dice si es la página actual (isActive)
    const desktopLink = ({ isActive }) =>
        `relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
            isActive
                ? "bg-green-950 text-white"
                : "text-neutral-600 hover:text-green-950 hover:bg-emerald-50"
        }`

    const mobileLink = ({ isActive }) =>
        `flex items-center justify-between px-5 py-3 rounded-xl text-base font-semibold transition-colors duration-200 ${
            isActive
                ? "bg-white text-green-950"
                : "text-white hover:bg-white/10"
        }`

    return(
        <header className="relative">
            <nav
                className="flex items-center justify-between gap-4 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 sm:px-6 py-3"
                aria-label="Menú principal"
            >
                {/* Logo: lleva al inicio */}
                <Link to="/" className="group flex items-center gap-3 shrink-0">
                    <img
                        src={brandImage}
                        alt=""
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-emerald-100 group-hover:ring-emerald-500 group-hover:scale-110 transition duration-300 ease-in-out"
                    />
                    <span className="text-xl font-bold text-green-950 tracking-tight">
                        Bella <span className="font-light">Flora</span>
                    </span>
                </Link>

                {/* Enlaces (solo en pantallas grandes) */}
                <ul className="hidden lg:flex items-center gap-1 bg-neutral-100 rounded-full p-1">
                    {pages.map(page => (
                        <li key={page.to}>
                            <NavLink to={page.to} end className={desktopLink}>
                                {page.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Carrito + botón del menú */}
                <div className="flex items-center gap-2">
                    <NavLink
                        to="/cart"
                        aria-label={`Carrito, ${itemCount} productos`}
                        className={({ isActive }) =>
                            `relative h-11 w-11 flex items-center justify-center rounded-full text-2xl transition-colors duration-300 ${
                                isActive ? "bg-green-950 text-white" : "text-green-950 hover:bg-emerald-50"
                            }`
                        }
                    >
                        <AiOutlineShoppingCart />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center ring-2 ring-white">
                                {itemCount > 99 ? "99+" : itemCount}
                            </span>
                        )}
                    </NavLink>

                    <button
                        className="lg:hidden h-11 w-11 flex items-center justify-center rounded-full text-2xl text-green-950 hover:bg-emerald-50 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-controls="menu-movil"
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {menuOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </nav>

            {/* Menú móvil: se despliega debajo de la barra */}
            <div
                id="menu-movil"
                inert={!menuOpen}
                className={`lg:hidden absolute left-0 right-0 top-full mt-2 z-40 grid transition-all duration-300 ease-in-out ${
                    menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <ul className="flex flex-col gap-1 bg-green-950 rounded-2xl shadow-2xl p-3">
                        {pages.map(page => (
                            <li key={page.to}>
                                <NavLink
                                    to={page.to}
                                    end
                                    className={mobileLink}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {page.label}
                                    <span aria-hidden="true">›</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar
