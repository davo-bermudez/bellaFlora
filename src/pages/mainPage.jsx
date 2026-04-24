import NavBar from "../components/navBar"
import Texto from "../components/text"
import "../styles/mainPage.css"

function MainPage(){

    return(
        <div className="main-page">
            <section>
                <NavBar/>
            </section>
            <div className="flex flex-row">
                <Texto/>
            </div>
        </div>
    )
}

export default MainPage