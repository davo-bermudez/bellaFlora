import { Route, Routes } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"
import MainPage from "./pages/mainPage"
import Catalogo from "./pages/catalogo"
import Cart from "./pages/cart"
import About from "./pages/about"
import Contact from "./pages/contact"
import './App.css'

function App(){

    return(
        <CartProvider>
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