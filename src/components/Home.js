import { Link } from 'react-router-dom';
import owners from '../assets/Mario and Adrian A.jpg';
import About from './About';
import '../App.css';
import Specials from './Specials';
import Testimonials from './Testimonials';

const Home = () =>
{
    return (
        <>
            <header className='home-header'>
                <section className='home-section'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>A family owned restaurant tha offers Mediterranean dishes with a twist</p>
                    <Link to="/reservation" className='reserve-button'>Reserve a table</Link>
                </section>
                <section>
                    <img src={owners} alt="The two owners Mario and Adrian" />
                </section>
            </header>
            <main>
                <section>
                    <header className="specials-title">
                        <h2>Specials</h2>
                        <Specials />
                        <Link to="/order" className="order-online-btn">Order Online</Link>
                    </header>
                </section>
                <section className='testimonial-section'>
                    <header className='testimonial'>Testimonials</header>
                    <Testimonials />
                </section>

            </main>
            <About />
        </>
    )
}

export default Home;