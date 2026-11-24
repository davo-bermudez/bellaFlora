import { formatPrice } from "../data/products"

function CartSummary({ items = [], onIncrease, onDecrease, onRemove }) {
    return (
        <ul className="flex flex-col gap-4 w-full">
            {items.map((i) => (
                <li
                    key={i.id}
                    className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl shadow p-4"
                >
                    <img
                        className="h-28 w-28 object-contain shrink-0"
                        src={i.image}
                        alt={i.name}
                    />

                    <div className="flex-1 text-center sm:text-left">
                        <p className="text-lg font-bold text-green-950">{i.name}</p>
                        <p className="text-neutral-600">{formatPrice(i.price)} c/u</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            className="h-9 w-9 rounded-full bg-neutral-200 text-xl font-bold hover:bg-neutral-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
                            onClick={() => onDecrease(i.id)}
                            disabled={i.quantity <= 1}
                            aria-label={`Quitar una unidad de ${i.name}`}
                        >
                            −
                        </button>
                        <span className="w-8 text-center text-lg font-semibold" aria-live="polite">
                            {i.quantity}
                        </span>
                        <button
                            className="h-9 w-9 rounded-full bg-neutral-200 text-xl font-bold hover:bg-neutral-300 transition"
                            onClick={() => onIncrease(i.id)}
                            aria-label={`Agregar una unidad de ${i.name}`}
                        >
                            +
                        </button>
                    </div>

                    <p className="w-32 text-center sm:text-right text-lg font-bold text-green-950">
                        {formatPrice(i.price * i.quantity)}
                    </p>

                    <button
                        className="text-red-700 hover:text-white hover:bg-red-700 border border-red-700 rounded-lg px-3 py-1 transition"
                        onClick={() => onRemove(i.id)}
                    >
                        Eliminar
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default CartSummary
