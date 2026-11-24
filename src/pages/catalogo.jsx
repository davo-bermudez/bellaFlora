import "../styles/catalogo.css"
import { useState, useRef, useEffect } from "react"
import NavBar from "../components/navBar"
import Searchbox from "../components/searchBox"
import SearchResults from "../components/searchResults"
import { useCart } from "../contexts/CartContext"
import { products } from "../data/products"

function Catalogo() {

    const inputRef = useRef(null)

    const [input, setInput] = useState("")
    const { addToCart } = useCart()


    // Quita tildes y mayúsculas: "Catálogo" -> "catalogo"
    const normalize = (text) =>
        text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    const query = normalize(input.trim())

    // Busca en el nombre y en la descripción
    const filtered = products.filter(product =>
        normalize(product.name).includes(query) ||
        normalize(product.description).includes(query)
    )

    const focus = () => {
        inputRef.current.focus()
    }

    const deleteAndF = () => {
        setInput("")
        focus()
    }


    useEffect(() => {

        function handler(e) {
            const escribiendo = document.activeElement === inputRef.current

            if (e.key === "Escape" && escribiendo) {
                setInput("")
            }
            // "/" lleva al buscador, salvo que ya estés escribiendo en él
            if (e.key === "/" && !escribiendo) {
                e.preventDefault()
                inputRef.current.focus()
            }
        }
        window.addEventListener("keydown", handler)

        return () => {
            window.removeEventListener("keydown", handler)
        }

    }, [])

    return(
        <section className="catalogo">
            <section className="navB">
                <NavBar/>
            </section>
            <div className="motion-safe:animate-pagina w-full max-w-7xl mx-auto px-4 py-8 sm:px-10 flex flex-col items-center gap-8">
                <div className="bg-green-950/60 h-20 w-full max-w-90 flex justify-center items-center rounded-full">
                    <h1 className="text-white text-3xl font-bold">CATÁLOGO FLORAL</h1>
                </div>
                <div className="w-full flex flex-col items-center gap-2">
                    <Searchbox
                        input={input}
                        setImput={setInput}
                        deleteAndF={deleteAndF}
                        inputRef={inputRef}/>
                    <p className="text-sm text-neutral-500" aria-live="polite">
                        {query === ""
                            ? `${products.length} ramos disponibles`
                            : `${filtered.length} ${filtered.length === 1 ? "resultado" : "resultados"} para "${input.trim()}"`}
                    </p>
                </div>
                <div className="catalago-img w-full flex justify-center">
                    <SearchResults
                        searchList={filtered}
                        onAdd={addToCart}
                        query={input}
                        />
                </div>
            </div>
        </section>
    )
}

export default Catalogo