function AddToCart({ product, onAdd }){
    return(
        <section>
            <button className="bg-green-950 h-12 p-3 rounded-xl text-white hover:scale-110 transition delay-150 duration-300 ease-in-out" onClick={() => onAdd(product)}>Agregar al carrito</button>
        </section>
    )
}

export default AddToCart