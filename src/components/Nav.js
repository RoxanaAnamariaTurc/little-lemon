import { useState } from 'react';
import '../App.css';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { LogoutButton } from './Login';

const Nav = ({ isLoggedIn, username, onLogout }) =>
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

    const styledLinks = css`
    text-decoration: none;
    padding: 15px;
    display: in-line block;
    background-color: var(--green);
    color:var(--yellow);
    border-radius: 20px;

    &:hover{
        background-color: var(--yellow);
        color: var(--green);
    }
    `
    const StyledLink = styled(Link)`
        ${styledLinks}
    `


    return (
        <>
            <header className='nav-header'>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>

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

                    <ul className={`main-ul ${isOpen ? "open" : ""} `}>
                        <li>
                            <StyledLink to="/" > Home</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/about" >About</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/menu" >Menu</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/reservation"  >Reservation</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/order" >Order online</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/login" >Login</StyledLink>
                        </li>
                        <li>
                            {isLoggedIn && (
                                <>
                                    <span>Hello, {username}</span>
                                    <LogoutButton onClick={onLogout}>Logout</LogoutButton>
                                </>
                            )}
                        </li>
                    </ul>
                </nav>
            </header >


        </>
    )
}

export default Nav;