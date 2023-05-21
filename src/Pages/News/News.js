import "./News.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PISCINA from '../../img/PISCINA.jpg';
import monjas from '../../img/monjas.jpg';
import pesas from '../../img/pesas.jpg';
import capilla from '../../img/capilla.jpg';


function News() {
    return (
        <>
            <Header></Header>
            <div class="news-container">
                <div class="news-item">
                    <div class="image-container">
                        <img src={PISCINA} alt="Imagen Izquierda" />
                    </div>
                    <div class="text-container">
                        <h2>Piscina 100% de agua bendita</h2>
                        <h3>Una experiencia acuática espiritual y refrescante</h3>
                        <p>
                            A partir del lunes ya se podrá disfrutar de unos buenos largos en la piscina completamente llena de agua bendita. Esta innovadora iniciativa busca ofrecer a los nadadores una experiencia única y espiritual mientras se ejercitan. La piscina estará abierta al público a partir del próximo lunes, y aquellos interesados podrán disfrutar de sus beneficios tanto físicos como espirituales.
                        </p>
                    </div>
                </div>

                <div class="news-item">
                    <div class="text-container">
                        <h2>Ya se podrá disfrutar de las zonas de mujeres</h2>
                        <h3>Espacios exclusivos para comodidad y seguridad femenina</h3>
                        <p>
                        En una medida inclusiva, se informa que a partir de ahora será posible disfrutar de las zonas exclusivas para mujeres en nuestras instalaciones. Esta decisión tiene como objetivo brindar espacios cómodos y seguros para todas las mujeres que visiten nuestras instalaciones. Con esta medida, buscamos fomentar la igualdad y la comodidad de todas nuestras usuarias.
                        </p>
                    </div>
                    <div class="image-container">
                        <img src={monjas} alt="Imagen Derecha" />
                    </div>
                </div>

                <div class="news-item">
                    <div class="image-container">
                        <img src={pesas} alt="Imagen Izquierda" />
                    </div>
                    <div class="text-container">
                        <h2>Monitorización del papa durante los entrenamientos de pesas</h2>
                        <h3>Inspiración divina para un estilo de vida saludable</h3>
                        <p>
                        Todos los días, a partir de las 9 de la mañana, podrás disfrutar de la monitorización del Papa mientras realiza sus entrenamientos de pesas. Esta actividad especial busca promover un estilo de vida saludable y motivar a nuestros visitantes a seguir el ejemplo del Papa en su búsqueda de una buena condición física. No te pierdas la oportunidad de presenciar este inspirador espectáculo.
                        </p>
                    </div>
                </div>

                <div class="news-item">
                    <div class="text-container">
                        <h2>Misa con el Papa los domingos a las 10</h2>
                        <h3>Un encuentro sagrado para la comunidad religiosa</h3>
                        <p>
                        Los domingos a las 10 de la mañana, podrás asistir a una misa especial en compañía del Papa. Esta celebración religiosa se llevará a cabo en nuestra capilla y ofrece a los fieles la oportunidad de experimentar una experiencia espiritual única. Acompaña al Papa en este momento de oración y reflexión dominical.
                        </p>
                    </div>
                    <div class="image-container">
                        <img src={capilla} alt="Imagen Derecha" />
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default News;