import { useState } from "react";
import Create from "./components/Create"
import List from "./components/List"
import Seeker from "./components/Seeker"

function App() {

    const [listState, setListState] = useState([]);

    return (
        <div className="layout">
            {/* <!--Cabecera--> */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                
                <h1>MisPelis</h1>
            </header>

            {/* <!--Barra de navegación--> */}
            <nav className="nav">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Peliculas</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>

            {/* <!--Contenido principal--> */}
            <section id="content" className="content">

                {/* <!--aqui van las peliculas--> */}
            <List listState={listState} setListState={setListState}></List>

            </section>

            {/* <!--Barra lateral--> */}
            <aside className="lateral">
                <Seeker listState={listState} setListState={setListState}></Seeker>

                <Create setListState={setListState}></Create>
            </aside>

            {/* <!--Pie de página--> */}
            <footer className="footer">
                &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
            </footer>

        </div>
    )
}

export default App
