import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/navBar.css"
import brandImage from '../images/brand.jpeg'
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

{/* <IoMdSunny /> */}

function NavBar(){

    const [menuOpen, setMenuOpen] = useState(false)

    function desplegarMenu(){
        const toggle = setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    const navigate = useNavigate()

    function goToCatalogo(){
        navigate("/catalogo")
    }
    
    function goToPrincipal(){
        navigate("/")
    }

    function goToCart(){
        navigate("/cart")
    }
    
    function goToNosotros(){
        navigate("/nosotros")
    }

    function goToContacto(){
        navigate("/contacto")
    } 

    return(
        <section>
            <section className="nav-bar justify-between">
                <div>
                    <img src={brandImage} alt="Bella Flora Brand" className="h-10 w-10 rounded-full" />
                    <h1 className="hidden lg:flex">Bella Flora</h1>
                </div>

                <div>
                    <button className="hidden lg:flex" onClick={goToPrincipal} >principal</button>
                    <button className="hidden lg:flex" onClick={goToNosotros}>nosotros</button>
                    <button className="hidden lg:flex" onClick={goToCatalogo}>catalogo</button>
                    <button className="hidden lg:flex" onClick={goToContacto}>contacto</button>
                </div>

                <div>
                    {/* <button><AiOutlineUser/></button> */}
                    <button onClick={goToCart}><AiOutlineShoppingCart/></button>
                    <button className="flex lg:hidden" onClick={desplegarMenu}><IoMenu /></button>
                </div>
            </section>
             <section id="menuP" className={` bg-green-950 transition delay-150 block align-items-center gap-4 p-4 shadow-xl ${menuOpen ? 'h-40 opacity-100' : 'h-0 opacity-0 '} transform transition-all duration-300 ease-in-out overflow-hidden flex lg:hidden items-center justify-center`}>
                <div className="flex flex-col justify-center items-center gap-3">
                    <button className="flex lg:hidden text-white hover:text-emerald-700 transition delay-150 transition-all duration-300 ease-in-out" onClick={goToPrincipal} >principal</button>
                    <button className="flex lg:hidden text-white hover:text-emerald-700 transition delay-150 transition-all duration-300 ease-in-out" onClick={goToCatalogo}>catalogo</button>
                    <button className="flex lg:hidden text-white hover:text-emerald-700 transition delay-150 transition-all duration-300 ease-in-out" onClick={goToNosotros}>nosotros</button>
                    <button className="flex lg:hidden text-white hover:text-emerald-700 transition delay-150 transition-all duration-300 ease-in-out" onClick={goToContacto}>contacto</button>
                </div>
            </section>

        </section>
    )
}

export default NavBar