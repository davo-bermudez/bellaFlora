import { useNavigate } from "react-router-dom"
import NavBar from "../components/navBar"
import CartSummary from "../components/cartSummary"
import { useCart } from "../contexts/CartContext"
import { formatPrice } from "../data/products"
import "../styles/cart.css"

const WHATSAPP_NUMBER = "573007450046"

function Cart() {

    const navigate = useNavigate()
    const {
        items,
        itemCount,
        total,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
    } = useCart()

    // Arma el mensaje del pedido para enviarlo por WhatsApp
    function finishOrder() {
        const lines = items.map(i =>
            `- ${i.quantity} x ${i.name} (${formatPrice(i.price * i.quantity)})`
        )
        const message = [
            "Hola Bella Flora, quiero hacer este pedido:",
            ...lines,
            `Total: ${formatPrice(total)}`,
        ].join("\n")

        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
            "_blank",
            "noopener,noreferrer"
        )
    }

    return (
        <section className="cart-main">
            <section>
                <NavBar />
            </section>

            <div className="flex flex-col items-center gap-8 px-4 pb-16">
                <div className="bg-green-950/60 h-20 w-full max-w-90 flex justify-center items-center rounded-full">
                    <h1 className="text-white text-3xl font-bold">Carrito de Compras</h1>
                </div>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center gap-4 bg-white rounded-xl shadow p-10 text-center">
                        <p className="text-5xl" aria-hidden="true">🛒</p>
                        <p className="text-xl font-semibold text-green-950">Tu carrito está vacío</p>
                        <p className="text-neutral-600">Mira nuestros ramos y elige el detalle perfecto.</p>
                        <button
                            className="bg-green-950 text-white rounded-xl px-6 py-3 hover:bg-green-800 transition"
                            onClick={() => navigate("/catalogo")}
                        >
                            Ver catálogo
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl items-start">
                        <div className="flex-1 w-full">
                            <CartSummary
                                items={items}
                                onIncrease={increaseQuantity}
                                onDecrease={decreaseQuantity}
                                onRemove={removeFromCart}
                            />
                        </div>

                        <aside className="w-full lg:w-80 bg-white rounded-xl shadow p-6 flex flex-col gap-4 lg:sticky lg:top-4">
                            <h2 className="text-xl font-bold text-green-950">Resumen</h2>
                            <div className="flex justify-between text-neutral-600">
                                <span>Productos</span>
                                <span>{itemCount}</span>
                            </div>
                            <div className="flex justify-between text-2xl font-bold text-green-950 border-t pt-4">
                                <span>Total</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                            <button
                                className="bg-green-950 text-white rounded-xl py-3 font-semibold hover:bg-green-800 transition"
                                onClick={finishOrder}
                            >
                                Finalizar pedido por WhatsApp
                            </button>
                            <button
                                className="text-neutral-600 hover:text-green-950 underline transition"
                                onClick={() => navigate("/catalogo")}
                            >
                                Seguir comprando
                            </button>
                            <button
                                className="text-red-700 hover:underline text-sm"
                                onClick={clearCart}
                            >
                                Vaciar carrito
                            </button>
                        </aside>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Cart
