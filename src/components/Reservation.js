import image from '../assets/restauranfood.jpg';
import Dropdown from './Dropdown';
import '../App.css';

const Reservation = () =>
{
    return (
        <>
            <header className='main-header'>
                <h2>Reserve a Table</h2>
                <img src={image} alt="logo" />
            </header>
            <main className='main-section'>

                <Dropdown />
                <section className='main-body'>
                    <p>Number of guests</p>
                    <label>
                        <input type="radio" id="guests" />
                        <span>2</span>
                    </label>
                    <label>
                        <input type="radio" id="guests" />
                        <span>4</span>
                    </label>
                    <label>
                        <input type="radio" id="guests" />
                        <span>6</span>
                    </label>
                    <label>
                        <input type="radio" id="guests" />
                        <span>10</span>
                    </label>

                </section>

                <section className='main-body'>
                    <p>Reservation date</p>
                    <input type="date" />
                </section>
                <section className='main-body'>
                    <p>Sitting preferences</p>
                    <label>
                        <input type="radio" />
                        Outdoors
                    </label>
                    <label>
                        <input type="radio" />
                        Indoors
                    </label>
                </section>
                <section className='main-body'>
                    <p>Booking details</p>
                    <label>

                        Name
                        <input type="text" />

                    </label><br />
                    <label>
                        Phone
                        <input type="text" min="11" max="12" />

                    </label>

                </section>
                <button>Reserve now!</button>

            </main>

        </>
    )
}

export default Reservation;