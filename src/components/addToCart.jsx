import { useEffect, useState } from "react"

// light = versión blanca, para fondos oscuros
function AddToCart({ product, onAdd, light = false }) {

    const [added, setAdded] = useState(false)

    // Vuelve al texto normal 1,5 s después de agregar
    useEffect(() => {
        if (!added) return
        const timer = setTimeout(() => setAdded(false), 1500)
        return () => clearTimeout(timer)
    }, [added])

    function handleClick() {
        onAdd(product)
        setAdded(true)
    }

    return (
        <button
            className={`${
                added
                    ? "bg-emerald-500 text-white"
                    : light
                        ? "bg-white text-green-950"
                        : "bg-green-950 text-white"
            } h-12 px-5 rounded-xl font-semibold hover:scale-105 transition duration-300 ease-in-out`}
            onClick={handleClick}
        >
            {added ? "Agregado ✓" : "Agregar al carrito"}
        </button>
    )
}

export default AddToCart
