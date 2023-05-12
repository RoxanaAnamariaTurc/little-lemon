import { useState } from 'react';
import '../App.css';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
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
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservation" >Reservation</Link>
                        </li>
                        <li>
                            <Link to="/order">Order online</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>


        </>
    )
}

export default Nav;