import "../styles/text.css"
import rosasT from '../images/min.png'

function Texto(){
    return(
        <section className="texto-container flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col w-110 lg:w-200 h-100 gap-10 ">
                <div className="">
                    <h1>donde los mejores detalles se vuelven realidad</h1>
                </div>
                <div>
                    <h1>Elije y personaliza el tuyo</h1>
                </div>
                <div>
                    <h2>Ramo de 5 rosas eternas</h2>
                </div>
                <div className="text-align-start">
                    <p>un hermoso ramo de 5 rosas rojas eternas, perfecto para cualquier ocasion en donde impresionar y que ese alguien resalte sea prioridad</p>
                </div>
                <div className="flex flex-row gap-20 justify-center">
                    <h1>best seller</h1>
                    <h1>$45,000</h1>
                </div>
                <div>
                    <button>añadelo al carrito</button>
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center lg:flex-row">
                    <div><img src={rosasT} alt="" className='h-150 w-110'/></div>
                    <div className="rotate-0 lg:rotate-270  h-30 w-80 flex items-center justify-center"><h1 className="text-1xl">5 rosas rojas</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Texto