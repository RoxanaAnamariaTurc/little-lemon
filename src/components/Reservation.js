import { useState } from 'react';
import Dropdown from './Dropdown';

const availableTimes = [
    {
        id: 1,
        time: '14:00',
        date: '15/05/2023'
    },
    {
        id: 2,
        time: '19:00',
        date: '17/05/2023'
    },
    {
        id: 3,
        time: '14:00',
        date: '17/05/2023'
    },
    {
        id: 4,
        time: '14:00',
        date: '16/05/2023'
    },
    {
        id: 5,
        time: '18:00',
        date: '16/05/2023'
    },
    {
        id: 6,
        time: '17:00',
        date: '15/05/2023'
    },
    {
        id: 7,
        time: '18:00',
        date: '18/05/2023'
    },
    {
        id: 8,
        time: '14:00',
        date: '18/05/2023'
    },
    {
        id: 9,
        time: '14:00',
        date: '19/05/2023'
    },
    {
        id: 10,
        time: '15:00',
        date: '19/05/2023'
    },
]

const Reservation = () =>
{

    const [confirmation, setConfirmation] = useState(false);


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setConfirmation(true);
    }
    const handleReset = () =>
    {
        const form = document.getElementById("reservation-form");
        form.reset();
    };

    return (
        <>
            <h2 className='reservationH2'>Reserve a Table</h2>
            <form className="reservation" id="reservation-form" onSubmit={handleSubmit}>
                <Dropdown />
                <div className='main-body'>
                    <label htmlFor="res-name">Reservation Name</label><br />
                    <input
                        type="text"
                        id="res-name"
                        name="res-name"
                        required
                    />
                </div>

                <div className='main-body'>
                    <label htmlFor="res-phone">Reservation Contact Number</label><br />
                    <input
                        type="number"
                        id="res-phone"
                        name="res-phone"
                        required
                    />
                </div>
                <div className='main-body'>
                    <label htmlFor="res-guests">Number of Guests</label><br />
                    <select
                        id="res-guests"
                        required
                    >
                        <option value="">--Select--</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                    </select>
                </div>

                <div className='main-body'>
                    <label htmlFor="res-date">Select Reservation Date</label><br />
                    <input
                        type="date"
                        id="res-date"
                        required

                    />
                </div>

                <div className='main-body'>
                    <label htmlFor="res-sitting">Sitting Preferences</label><br />
                    <select
                        id="res-sitting"
                        required

                    >
                        <option value="">--Select--</option>
                        <option value="outdoors">Outdoors</option>
                        <option value="indoors">Indoors</option>
                    </select>
                </div>

                <button type="submit">Reserve now!</button>
                {confirmation &&
                    <div className='modal'>
                        <div className='modal-content'>
                            <p>Reservation Successful</p>
                            <p>We are looking forward to seeing you soon!</p>
                            <button
                                onClick={() =>
                                {
                                    setConfirmation(false);
                                    handleReset()

                                }}

                            >Close</button>
                        </div>
                    </div>
                }
            </form>

        </>
    )
}


export default Reservation;
