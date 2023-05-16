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
    const [errors, setErrors] = useState({});

    // const handleSubmit = (e) =>
    // {
    //     e.preventDefault();
    //     setConfirmation(true);
    // }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length === 0)
        {
            setErrors({});
            setConfirmation(true);
            form.reset();
        } else
        {
            setErrors(validationErrors);
        }
    };

    const validate = (data) =>
    {
        const errors = {};
        if (!data['res-name'])
        {
            errors['res-name'] = 'Reservation Name is required';
        } if (!data['res-phone'])
        {
            errors['res-phone'] = 'Reservation phone is required';
        } if (!data['res-guests'])
        {
            errors['res-guests'] = 'Please select the number of guests';
        } if (!data['res-date'])
        {
            errors['res-date'] = "Please select the Reservation date";
        } if (!data['res-sitting'])
        {
            errors['res-sitting'] = 'Please choose your preferred sitting area';
        }

        return errors;
    };


    const handleReset = () =>
    {
        const form = document.getElementById("reservation-form");
        form.reset();
        setErrors({});
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
                        className={errors['res-name'] ? 'error' : ''}
                    />
                    {errors['res-name'] && <div className='error-message'>{errors['res-name']}</div>}
                </div>

                <div className='main-body'>
                    <label htmlFor="res-phone">Reservation Contact Number</label><br />
                    <input
                        type="number"
                        id="res-phone"
                        name="res-phone"
                        required
                        className={errors['res-phone'] ? 'error' : ''}
                    />
                    {errors['res-phone'] && <div className='error-message'>{errors['res-phone']}</div>}
                </div>
                <div className='main-body'>
                    <label htmlFor="res-guests">Number of Guests</label><br />
                    <select
                        id="res-guests"
                        required
                        name="res-guests"
                        className={errors['res-guests'] ? 'error' : ''}
                    >
                        <option value="">--Select--</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                    </select>
                    {errors['res-guests'] && <div className='error-message'>{errors['res-guests']}</div>}
                </div>

                <div className='main-body'>
                    <label htmlFor="res-date">Select Reservation Date</label><br />
                    <input
                        type="date"
                        id="res-date"
                        required
                        name="res-date"
                        className={errors['res-date'] ? 'error' : ''}

                    />
                    {errors['res-date'] && <div className='error-message'>{errors['res-date']}</div>}
                </div>

                <div className='main-body'>
                    <label htmlFor="res-sitting">Sitting Preferences</label><br />
                    <select
                        id="res-sitting"
                        required
                        name="res-sitting"
                        className={errors['res-sitting'] ? 'error' : ''}

                    >
                        <option value="">--Select--</option>
                        <option value="outdoors">Outdoors</option>
                        <option value="indoors">Indoors</option>

                    </select>
                    {errors['res-sitting'] && <div className='error-message'>{errors['res-sitting']}</div>}
                </div>

                <button type="submit" disabled={Object.keys(errors).length > 0}>Reserve now!</button>
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
