import NavBar from "../components/navBar"
import "../styles/contact.css"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Contact(){
    return(
        <section className="contact-main flex flex-col items-center">
            <section>
                <NavBar/>
            </section>
            <div className="flex flex-row gap-5 justify-center bg-green-950 p-10 rounded-lg">
                <div id="first-contact" className="flex h-140 w-120 rounded-lg gap-5 flex flex-col items-center">
                    <h1 className="font-bold">Contactanos</h1>
                    <p>¿Tienes alguna pregunta? ¡Contáctanos!</p>
                    <label htmlFor="name">nombre</label>
                    <input className="rounded-full h-10 w-100" type="text" name="name" id="name" placeholder="Tu nombre" />
                    <label htmlFor="email">correo electrónico</label>
                    <input className="rounded-full h-10 w-100" type="email" name="email" id="email" placeholder="Tu correo electrónico" />
                    <label htmlFor="message">tu mensaje</label>
                    <textarea className="rounded-full h-20 w-100" name="message" id="message" placeholder="Tu mensaje"></textarea>
                    <button className=" rounded h-10 w-100" type="submit">Enviar</button>
                </div>
                <div id="second-contact" className="flex h-140 w-120 rounded-lg gap-10 flex flex-col items-center">
                    <h1 className="text-2xl font-bold">O si lo prefieres, contáctanos por:</h1>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col items-center">
                            <i><FaPhoneAlt className="h-10 w-10"/></i>
                            <span className="ml-2">Teléfono</span>
                            <p>+57 300 745 0046</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i><BiLogoGmail className="h-10 w-10"/></i>
                            <span className="ml-2">Correo electrónico</span>
                            <p className="">info@bell.aflora.com</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i><FaSquareInstagram className="h-10 w-10"/></i>
                            <a href="https://www.instagram.com/bell.aflora/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <p>@bell.aflora</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i><FaSquareWhatsapp className="h-10 w-10"/></i>
                            <a href="https://wa.me/573007450046" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <p>+57 300 745 0046</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}  

export default Contact