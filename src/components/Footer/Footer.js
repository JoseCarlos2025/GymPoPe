import './Footer.css'

function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__section">
              <h3 className="footer__heading">Opening hours</h3>
              <p>Monday to Friday: 7:00 am - 10:00 pm</p>
              <p>Saturday: 8:00 am - 8:00 pm</p>
              <p>Sunday: 9:00 am - 6:00 pm</p>
            </div>
            <div className="footer__section">
              <a><h3 className="footer__heading">Contact us</h3></a>
              <p>123 Main St.</p>
              <p>Springfield, USA</p>
              <p>+1 (555) 555-5555</p>
              <p>gym@papafitness.com</p>
            </div>
            <div className="footer__section">
              <h3 className="footer__heading">Social media</h3>
              <ul className="footer__list">
                <li><a href="#"><ion-icon name="logo-facebook"></ion-icon> Facebook</a></li>
                <li><a href="#"><ion-icon name="logo-twitter"></ion-icon> Twitter</a></li>
                <li><a href="#"><ion-icon name="logo-instagram"></ion-icon> Instagram</a></li>
                <li><a href="#"><ion-icon name="logo-youtube"></ion-icon> YouTube</a></li>
              </ul>
            </div>
            <div className="footer__section">
              <h3 className="footer__heading">Subscribe</h3>
              <p>Subscribe to our newsletter for news and special offers!</p>
              <form>
                <div className="footer__form-group">
                  <input type="email" className="footer__form-control" placeholder="Enter your email address" />
                </div>
                <button type="submit" className="footer__btn">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer__copyright">
            <p>&copy; 2023 Gym of the Pope. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;