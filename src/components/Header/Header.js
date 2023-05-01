import './Header.css'
import logo from'../../img/icono.jpeg';

function Header() {
    return (
        <header id="Header">
            <div className="Enlaces">
                <img src={logo} alt="logo" />
                <a href="/">Home</a>
                <a href="/prices">Prices</a>
                <a href="/contact">Contact us</a>
            </div>
            <div className="iconos">
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
            </div>
        </header>
    );
}

export default Header;