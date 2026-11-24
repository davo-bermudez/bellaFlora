import { createContext, useContext, useEffect, useState } from 'react'
import { getProduct } from '../data/products'

const CartContext = createContext()

const STORAGE_KEY = 'bella_flora_cart'

// En localStorage solo se guarda { id, quantity }. El nombre, precio e imagen
// se leen de products.js, así nunca quedan desactualizados.
function loadCart() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
        if (!Array.isArray(saved)) return []
        return saved.filter(item => getProduct(item.id) && item.quantity > 0)
    } catch {
        return []
    }
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(loadCart)

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
        } catch {
            // si el navegador no deja guardar, el carrito sigue funcionando en memoria
        }
    }, [cart])

    const addToCart = (product) => {
        setCart(prev => {
            const exist = prev.find(item => item.id === product.id)
            if (exist) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { id: product.id, quantity: 1 }]
        })
    }

    const increaseQuantity = (id) => {
        setCart(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    // No baja de 1: para quitar el producto está el botón Eliminar
    const decreaseQuantity = (id) => {
        setCart(prev => prev.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ))
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    // Carrito con los datos completos de cada producto
    const items = cart.map(item => ({ ...getProduct(item.id), quantity: item.quantity }))
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{
            items,
            itemCount,
            total,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
