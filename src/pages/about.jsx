import NavBar from "../components/navBar"
import "../styles/about.css"
import rapunzel from "../images/rapunzel.jpeg"

function About(){
    return(
        <section className="about-main">
            <section>
                <NavBar/>
            </section>
            <div className="flex flex-row ">
                <div className="flex flex-col lg:flex-row bg-green-950 h-200 w-full p-20 rounded-xl gap-5 lg:gap-40">
                    <div className="w-75 lg:w-200 flex flex-col gap-10 lg:items-start items-center">

                        <h1 className="text-white text-4xl font-bold">Sobre Bella Flora</h1>
                        <p className="text-white">Todo empieza con la intencion de hacer un detalle, y nosotros somos epecialistas en ello, somos un equipo de jovenes dispuestos a entregar nuestro tiempo y calidad hacia nuestros clientes, brindandoles una experiencia y calidad unicas. </p>
                    </div>
                    <div className="bg-emerald-700 h-100 w-75 lg:w-200 lg:h-full rounded-xl flex items-center justify-center">

                        <img src={rapunzel} alt="" className="h-100 rounded-xl rotate-20 hover:scale-110 transition-transform duration-300 ease-in-out" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About