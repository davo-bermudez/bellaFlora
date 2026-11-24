import { IoSearch, IoClose } from "react-icons/io5";

function Searchbox({ input, setImput, inputRef, deleteAndF }) {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
            role="search"
            className="relative w-full max-w-xl"
        >
            <label htmlFor="buscador" className="sr-only">Buscar ramos</label>

            <IoSearch
                className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-green-950/60 pointer-events-none"
                aria-hidden="true"
            />

            <input
                id="buscador"
                className="w-full h-14 pl-14 pr-14 rounded-full bg-white text-green-950 text-base sm:text-lg shadow-md border-2 border-transparent placeholder:text-neutral-400 outline-none focus:border-green-900 focus:shadow-lg transition duration-300 ease-in-out"
                onChange={(e) => setImput(e.target.value)}
                value={input}
                ref={inputRef}
                type="text"
                autoComplete="off"
                placeholder="Buscar ramos o flores…"
            />

            {input === "" ? (
                <kbd
                    className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-md border border-neutral-300 text-sm text-neutral-500 pointer-events-none"
                    title="Presiona / para buscar"
                >
                    /
                </kbd>
            ) : (
                <button
                    type="button"
                    onClick={deleteAndF}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full text-xl text-neutral-500 hover:bg-red-100 hover:text-red-700 transition duration-200"
                    aria-label="Borrar búsqueda"
                    title="Borrar (Esc)"
                >
                    <IoClose />
                </button>
            )}
        </form>
    )
}

export default Searchbox
