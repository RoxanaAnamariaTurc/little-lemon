import logo from '../assets/Logo.svg';
import Dropdown from './Dropdown';

const Main = () =>
{
    return (
        <>
            <header>
                <h2>Reserve a Table</h2>
                <img src={logo} alt="logo" />
            </header>
            <main>
                <form>
                    <Dropdown />
                    <section>
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

                    <section>
                        <p>Reservation date</p>
                        <input type="date" />
                    </section>
                    <section>
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
                    <section>
                        <p>Booking details</p>
                        <label>
                            <input type="text" />
                            Name
                        </label>
                        <label>
                            <input type="number" min="11" max="12" />
                            Phone
                        </label>

                    </section>
                    <button>Reserve now!</button>
                </form>
            </main>

        </>
    )
}

export default Main;