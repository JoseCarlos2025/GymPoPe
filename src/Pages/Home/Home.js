import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import imagen from '../../img/image 1.png';
import './Home.css'


function Home() {
    return (
        <>
            <Header />
            <div id="Contenedor-home">
                <div class="texto">
                    <p>The gym is our temple and sweat is our offering to the father of iron!</p>
                    <a href="/prices" class="boton-precios">Ir a precios</a>
                </div>
                <div class="imagen">
                    <img src={imagen} alt="papa haciendo pesas" />
                </div>
            </div>
            <Footer />
        </>
    );
}


export default Home;