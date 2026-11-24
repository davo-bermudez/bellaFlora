import NavBar from "../components/navBar"
import Hero from "../components/hero"
import "../styles/mainPage.css"

function MainPage(){

    return(
        <div className="main-page">
            <section className="main-nav">
                <NavBar/>
            </section>
            <Hero/>
        </div>
    )
}

export default MainPage
