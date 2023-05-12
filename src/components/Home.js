import { Link } from 'react-router-dom';
import owners from '../assets/Mario and Adrian A.jpg';
import About from './About';
import '../App.css';

const Home = () =>
{
    return (
        <>
            <header>
                <section>
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
                    <header>
                        <h2>Specials</h2>
                        <Link to="/order">Order Online</Link>
                    </header>
                    <section>
                        <article>
                            <img />
                        </article>
                        <article>
                            <img />
                        </article>
                        <article>
                            <img />
                        </article>
                    </section>
                </section>
                <section>
                    <header>Testimonials</header>
                    <article>

                    </article>
                    <article>

                    </article>
                    <article>

                    </article>
                </section>

            </main>
            <About />
        </>
    )
}

export default Home;