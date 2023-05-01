import prices from '../../components/prices.json';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './contact.css';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="contacto-container">
                <h1>Contacta con nosotros</h1>
                <p>Si tienes alguna duda o comentario, por favor no dudes en ponerte en contacto con nosotros.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="correo">Correo electrónico:</label>
                        <input type="email" id="correo" name="correo" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;