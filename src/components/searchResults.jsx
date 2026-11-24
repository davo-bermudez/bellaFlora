import AddToCart from "./addToCart"
import { formatPrice } from "../data/products"
import "../styles/searchResults.css"

function SearchResults({ searchList = [], onAdd, query = "" }) {

    if (searchList.length === 0) {
        return (
            <div className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow p-10 text-center">
                <p className="text-4xl" aria-hidden="true">🌸</p>
                <p className="text-xl font-semibold text-green-950">
                    No encontramos ramos con "{query}"
                </p>
                <p className="text-neutral-600">Prueba con otro nombre o borra la búsqueda.</p>
            </div>
        )
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
            {searchList.map((i) => (
                <li
                    key={i.id}
                    className="flex flex-col bg-white rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                    <div className="bg-neutral-100 overflow-hidden">
                        <img
                            className="w-full aspect-square object-contain p-4 hover:scale-110 transition-transform duration-300 ease-in-out"
                            src={i.image}
                            alt={i.name}
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col gap-3 p-5 flex-1">
                        <p className="texto text-xl font-bold">{i.name}</p>
                        <p className="text-neutral-600 text-sm line-clamp-3">{i.description}</p>

                        <div className="mt-auto pt-2 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-2xl font-bold text-green-950">{formatPrice(i.price)}</p>
                            <AddToCart product={i} onAdd={onAdd} />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default SearchResults
