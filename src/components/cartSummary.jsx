function CartSummary({cartList = [], deleted}){
    return(
        <section>
            <ul className="bg-green-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center p-10">
                {cartList.map((i) => (
                    <li className="flex flex-col p-10 h-220 w-120 gap-1 justify-center items-center bg-neutral-200 rounded-xl" key={i.id}>
                        <p>{i.name}</p>
                        <img className="product-image h-170 w-120 hover:scale-120 transition delay-150 duration-300 ease-in-out" src={i.image} alt={i.name} />
                        <p>{i.description}</p>
                        <p className="bg-green-900 p-3 w-30 text-2xl flex items-center justify-center text-white rounded">{i.price}</p>
                        <p>Cantidad: {i.quantity}</p>
                        <button className="bg-red-700 text-white p-3 rounded-xl hover:" onClick={() => deleted(i.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CartSummary