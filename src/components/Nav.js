import { useState } from 'react';
import '../App.css';
import logo from '../assets/Logo.svg';
const Nav = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () =>
    {
        setIsOpen(!isOpen)
    }

    const handleMouseOver = () =>
    {
        setIsOpen(true);
    };

    const handleMouseLeave = () =>
    {
        setIsOpen(false);
    };

    return (
        <>
            <header className='nav-header'>
                <img src={logo} alt="logo" />
                <nav className='main-nav'>
                    <div className="hamburger"
                        role="button"
                        aria-label="Toggle navigation menu"
                        onClick={toggleNav}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </div>

                    <ul className={`main-ul ${isOpen ? "open" : ""}`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservation</li>
                        <li>Order online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>


        </>
    )
}

export default Nav;