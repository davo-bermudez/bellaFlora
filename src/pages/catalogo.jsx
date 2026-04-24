import "../styles/catalogo.css"
import { useState } from "react"
import royale from '../images/royale-transpa.png'
import lirios from '../images/lirios-azules-transpa.png'
import rapuzel from '../images/rapunzel-transpa.png'
import rosas from '../images/rosas-rojas-transpa.png'
import NavBar from "../components/navBar"
import Searchbox from "../components/searchBox"
import SearchResults from "../components/searchResults"
import { useRef, useEffect } from "react"
import { useCart } from "../contexts/CartContext"

function Catalogo() {

    const inputRef = useRef(null)

    const [input, setInput] = useState("")
    const { addToCart } = useCart()

    const [flower, setFlower] = useState([
        {
            id: 1, 
            name:"Ramo Clash Royale", 
            image:royale, 
            price:"$35.000", 
            quantity:1,
            description:"ramo de flores eternas en michelines con colores azules caracteristicos de clash royale, incluye imagenes de los personajes del juego y una tarjeta personalizada con el mensaje que quieras"
        },
        {
            id: 2, 
            name:"Lirios Azules", 
            image:lirios, 
            price:"$50.000", 
            quantity:1, 
            description:"lirios azules eternos de michelines en un ramo elegante, ideales para ocasiones especiales"
        },
        {
            id: 3, 
            name:"Ramo Rapuzel", 
            image:rapuzel,
            price:"$120.000", 
            quantity:1, 
            description:"ramo de flores eternas en michelines con diseño de rapuzel, incluye a pascal (el camaleon) y una tarjeta personalizada"
        },
        {
            id: 4, 
            name:"Ramo 5 Rosas Eternas", 
            image:rosas, 
            price:"$45.000", 
            quantity:1, 
            description:"ramo de 5 rosas eternas en liston, ideales para ocasiones romnticas o para regalar a esa persona especial"
        },
    ])

    const filtered = flower.filter(result =>
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