import AddToCart from "./addToCart"
import { formatPrice } from "../data/products"
import "../styles/searchResults.css"

function SearchResults({searchList = [], onAdd}){
   
    return(
        <section>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30 justify-items-center ">
                {searchList.map((i) => (
                    <li className="flex flex-col h-220 w-120 gap-4 justify-center items-center " key={i.id}>
                        <p className="texto text-3xl font-bold">{i.name}</p>
                        <img className="product-image h-170 w-120 hover:scale-120 transition delay-150 duration-300 ease-in-out " src={i.image} alt={i.name} />
                        <p className="texto ">{i.description}</p>
                        <p className="bg-green-900 p-3 px-4 text-2xl flex items-center justify-center text-white rounded">{formatPrice(i.price)}</p>
                        <div>
                        <AddToCart product={i} onAdd={onAdd} />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )

}

export default SearchResults