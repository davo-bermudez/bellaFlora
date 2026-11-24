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
        <section className="catalogo flex flex-row lg:flex-col gap-5">
            <section className="navB">
                <NavBar/>
            </section>
            <div className="p-10 flex flex-col items-center"> 
                <div className="bg-green-950/60 h-20 w-90 flex justify-center items-center rounded-full">
                    <h1 className="text-white text-3xl font-bold">CATALOGO FLORAL</h1>
                </div>
                <div className="p-5 flex flex-col items-center gap-20"> 
                    <div className="bg-green-950/60 h-20 w-90 flex justify-center items-center rounded-full">
                        <Searchbox 
                            input={input} 
                            setImput={setInput} 
                            deleteAndF={deleteAndF} 
                            inputRef={inputRef}/>
                    </div>
                    <div className="catalago-img">
                        <SearchResults 
                            searchList={filtered}
                            onAdd={addToCart}
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalogo