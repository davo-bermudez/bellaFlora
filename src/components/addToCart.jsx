import { useEffect, useState } from "react"

function AddToCart({ product, onAdd }) {

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
            className={`${added ? "bg-emerald-600" : "bg-green-950"} h-12 px-5 rounded-xl text-white hover:scale-105 transition duration-300 ease-in-out`}
            onClick={handleClick}
        >
            {added ? "Agregado ✓" : "Agregar al carrito"}
        </button>
    )
}

export default AddToCart
