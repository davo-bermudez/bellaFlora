import { useState } from "react"
import NavBar from "../components/navBar"
import CartSummary from "../components/cartSummary"
import { useCart } from "../contexts/CartContext"
import "../styles/cart.css"

function Cart(){

    const { cart, removeFromCart } = useCart()

    return(
        <section className="cart-main flex flex-row items-center">
            <section>
                <NavBar/>
            </section>

            <div className="bg-green-950/60 h-20 w-90 flex justify-center items-center rounded-full">
                <h1 className="text-white text-3xl font-bold">Carrito de Compras</h1>
            </div>
            <CartSummary
            cartList={cart}
            deleted={removeFromCart}
            />
        </section>
    )

}

export default Cart