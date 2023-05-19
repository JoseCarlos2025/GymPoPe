import './Header.css';
import logo from '../../img/logo.png';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header id="Header">
      <div className="Enlaces">
        <img src={logo} alt="logo" />
        <a href="/">Home</a>
        <a href="/prices">Prices</a>
        <a href="/contact">Contact us</a>
        <a href="/Comentarios">Comments</a>
        <a href="/News">News</a> 
      </div>
      <div className={`iconos ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="/">Home</a>
        <a href="/prices">Prices</a>
        <a href="/contact">Contact us</a>
        <a href="/Comentarios">Comments</a>
        <a href="/News">News</a>
        <button className="menu-close-button" onClick={handleMenuClose}>
          Close Menu
        </button>
      </div>
      <div className={`mobile-menu-icon ${menuOpen ? 'mobile-menu-open' : ''}`} onClick={handleMenuClick}>
        <ion-icon name="menu"></ion-icon>
      </div>
    </header>
  );
}

export default Header;
