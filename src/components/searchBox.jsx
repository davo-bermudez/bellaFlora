function Searchbox({input, setImput, inputRef, deleteAndF}){

    function handleSubmit(e){
        e.preventDefault()
    }


    return(
        <section className="flex justify-center items-center w-full">
            <form
            onSubmit={handleSubmit}
            action="">
                <input className="hover:bg-white focus:bg-white focus:color-green-900 h-15 w-55 rounded-l-full transition delay-150 duration-300 ease-in-out"
                onChange= {(e)=>setImput(e.target.value)}
                value={input}
                ref={inputRef} 
                type="text"
                placeholder="busca algo en especifico"
                />
                <button className="rounded-r-full hover:bg-red-500 h-15 w-15 transition delay-150 duration-300 ease-in-out" onClick={deleteAndF}>clear</button>
            </form>
            
        </section>
    )

}


export default Searchbox