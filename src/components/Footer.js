import '../App.css';
import logo from '../assets/lemon.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
const Footer = () =>
{
    return (
        <>
            <main className="footer">
                <section className="footer-logo">
                    <img src={logo} alt='logo' />
                </section>
                <section className="footer-nav">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservation</li>
                            <li>Order online</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                </section>
                <section className="footer-contact">
                    <h2>Contact</h2>
                    <p>Address: 1 Avenue way, CA</p>
                    <p>Phone: +1234 555 779</p>
                </section>
                <section className="footer-links">
                    <nav>
                        <ul>
                            <li>
                                <img src={instagram} alt="instagram link" />
                            </li>
                            <li>
                                <img src={facebook} alt="facebook link" />
                            </li>
                        </ul>
                    </nav>
                </section>
            </main>
        </>
    )
}

export default Footer;