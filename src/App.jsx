import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"
import MainPage from "./pages/mainPage"
import Catalogo from "./pages/catalogo"
import Cart from "./pages/cart"
import About from "./pages/about"
import Contact from "./pages/contact"
import './App.css'

// Cada vez que cambia la página, vuelve arriba del todo
function ScrollToTop(){
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }, [pathname])

    return null
}

function App(){

    return(
        <CartProvider>
            <ScrollToTop/>
            <section>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/catalogo" element={<Catalogo/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/nosotros" element={<About/>}/>
                    <Route path="/contacto" element={<Contact/>}/>
                </Routes>
            </section>
        </CartProvider>
    )
}

export default App
