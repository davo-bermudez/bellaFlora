import "../styles/catalogo.css"
import { useState } from "react"
import NavBar from "../components/navBar"
import Searchbox from "../components/searchBox"
import SearchResults from "../components/searchResults"
import { useRef, useEffect } from "react"
import { useCart } from "../contexts/CartContext"
import { products } from "../data/products"

function Catalogo() {

    const inputRef = useRef(null)

    const [input, setInput] = useState("")
    const { addToCart } = useCart()


    const filtered = products.filter(result =>
        result.name.toLowerCase().includes(input.toLowerCase())
    )

    const focus = () => {
        inputRef.current.focus()
    }

    const deleteAndF = () => {
        setInput("")
        focus()
    }


    useEffect(()=>{

    function handler(e){
        if(e.key === "Escape"){
            console.log("Esc presionado")
            deleteAndF()
        }
        if(e.key === "/"){
            console.log("/ presionado")
            focus()
            e.preventDefault()
        }
    }
    window.addEventListener("keydown", handler)

    return ()=>{
        window.removeEventListener("keydown", handler)
    }

    })

    return(
        <section className="catalogo">
            <section className="navB">
                <NavBar/>
            </section>
            <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-10 flex flex-col items-center gap-8">
                <div className="bg-green-950/60 h-20 w-full max-w-90 flex justify-center items-center rounded-full">
                    <h1 className="text-white text-3xl font-bold">CATÁLOGO FLORAL</h1>
                </div>
                <div className="bg-green-950/60 h-20 w-full max-w-90 flex justify-center items-center rounded-full">
                    <Searchbox
                        input={input}
                        setImput={setInput}
                        deleteAndF={deleteAndF}
                        inputRef={inputRef}/>
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