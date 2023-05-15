import { useState } from "react";

const Test = () =>
{

    const [confirmation, setConfirmation] = useState(false);


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setConfirmation(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="email" />
                <input type="password" />
                <button type="submit">Submit</button>
                {confirmation && (

                    <div className="modal">
                        <div className="modal-content">
                            <h2>Reservation Confirmed</h2>
                            <p>Thank you for reserving a table with us! We look forward to seeing you.</p>
                            <button
                                onClick={() =>
                                {

                                    setConfirmation(false)

                                }
                                }>Close</button>
                        </div>
                    </div>)
                }
            </form>
        </>

    )
}

export default Test;


// import image from '../assets/restauranfood.jpg';
// import Dropdown from './Dropdown';
// import '../App.css';
// import { useState, useReducer } from 'react';
// import styled from '@emotion/styled';
// import Test from './Test';
// import { Formik, Form, Field, useFormik } from "formik";
// import * as Yup from "yup";


// const Reservation = () =>
// {
//     const defaultDate = new Date().toISOString().slice(0, 10);
//     const [reservation, setReservation] = useState({
//         guests: '',
//         date: defaultDate,
//         time: '',
//         sittingPreference: '',
//         name: '',
//         phone: ''
//     })

//     const [showError, setShowError] = useState(false);


//     const availableTimes = [
//         { time: '12:00', date: '2023-05-15' },
//         { time: '14:00', date: '2023-05-15' },
//         { time: '16:00', date: '2023-05-16' },
//         { time: '18:00', date: '2023-05-16' },
//         { time: '19:00', date: '2023-05-16' },
//         { time: '21:00', date: '2023-05-17' },
//         { time: '21:00', date: '2023-05-18' },
//         { time: '21:00', date: '2023-05-18' },
//         { time: '21:00', date: '2023-05-20' },
//         { time: '21:00', date: '2023-05-20' },
//     ];
//     const reducer = (state, action) =>
//     {
//         switch (action.type)
//         {
//             case 'SET_DATE':
//                 return { ...state, date: action.payload }
//             case "SHOW_CONFIRMATION":
//                 return {
//                     ...state,
//                     showConfirmation: true,
//                 };
//             default:
//                 return state;
//         }

//     }
//     const [state, dispatch] = useReducer(reducer, { date: defaultDate, showConfirmation: false });



//     const filteredTimes = availableTimes.filter((time) => time.date === state.date);

//     const validationSchema = Yup.object({
//         guests: Yup.number().min(1).required('Required'),
//         date: Yup.date().required('Required'),
//         time: Yup.string().required('Required'),
//         sittingPreference: Yup.string().required('Required'),
//         name: Yup.string().required('Required'),
//         phone: Yup.string()
//             .matches(
//                 /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
//                 'Please enter a valid phone number in the format XXX-XXX-XXXX'
//             )
//             .required('Required'),
//     });
//     const handleSubmit = (values) =>
//     {
//         formik.validateForm().then((errors) =>
//         {
//             if (Object.keys(errors).length === 0)
//             {
//                 setShowError(false);
//                 dispatch({ type: 'SHOW_CONFIRMATION' });
//             } else
//             {
//                 setShowError(true);
//             }
//         });
//     };

//     const formik = useFormik({
//         initialValues: {
//             guests: '',
//             date: defaultDate,
//             time: '',
//             sittingPreference: '',
//             name: '',
//             phone: '',
//         },
//         validationSchema: validationSchema,
//         onSubmit: handleSubmit,
//     });


//     const handleChange = (e) =>
//     {
//         dispatch({ type: 'SET_DATE', payload: e.target.value });
//         formik.setFieldValue('date', e.target.value);
//         formik.handleChange(e);
//     };

//     const resetForm = () =>
//     {
//         setReservation({
//             guests: '',
//             date: defaultDate,
//             time: '',
//             sittingPreference: '',
//             name: '',
//             phone: ''
//         });
//         dispatch({ type: "SHOW_CONFIRMATION" });
//     };



//     const Button = styled.button`
//         background-color: var(--yellow);
//         width: 150px;
//         height: 50px;
//         border-radius: 15px;

//     `
//     const ErrorMessage = styled.p`
//     color: red;
// `

//     return (
//         <>
//             <header className='main-header'>
//                 <h2 id="title">Reserve a Table</h2>
//                 <img src={image} alt="logo" />
//             </header>
//             <form onSubmit={formik.handleSubmit}>
//                 <main className='main-section'>
//                     <Dropdown />
//                     <section className={`main-body ${formik.errors.guests && formik.touched.guests ? 'error' : ''}`}>
//                         <p>Number of guests</p>
//                         <label>
//                             <input type="radio" id="guests-2" name="guests" value="2" onChange={formik.handleChange} checked={formik.values.guests === '2'} />
//                             <span>2</span>
//                         </label>
//                         <label>
//                             <input type="radio" id="guests-4" name="guests" value="4" onChange={formik.handleChange} checked={formik.values.guests === '4'} />
//                             <span>4</span>
//                         </label>
//                         <label>
//                             <input type="radio" id="guests-6" name="guests" value="6" onChange={formik.handleChange} checked={formik.values.guests === '6'} />
//                             <span>6</span>
//                         </label>
//                         <label>
//                             <input type="radio" id="guests-10" name="guests" value="10" onChange={formik.handleChange} checked={formik.values.guests === '10'} />
//                             <span>10</span>
//                         </label>
//                         {formik.errors.guests && formik.touched.guests && <span className="error-message">{formik.errors.guests}</span>}
//                     </section>

//                     <section className={`main-body ${formik.errors.date && formik.touched.date ? 'error' : ''}`}>
//                         <p>Reservation date</p>
//                         <label>
//                             <input type="date" id='date' name="date" value={formik.values.date} onChange={formik.handleChange} /><br />
//                         </label>
//                         {filteredTimes.length > 0 ? (
//                             filteredTimes.map((time) =>
//                                 <Button key={time.time} >{time.time}</Button>
//                             )) : (
//                             <ErrorMessage>No available times for selected date</ErrorMessage>
//                         )}

//                     </section>
//                     <section className={`main-body ${formik.errors.sittingPreference && formik.touched.sittingPreference ? 'error' : ''}`}>
//                         <p>Sitting preferences</p>
//                         <label>
//                             <input type="radio" name="sittingPreference" value="outdoors" onChange={formik.handleChange} checked={formik.values.sittingPreference === 'outdoors'} />
//                             Outdoors
//                         </label>
//                         <label>
//                             <input type="radio" name="sittingPreference" value="indoors" onChange={formik.handleChange} checked={formik.values.sittingPreference === 'indoors'} />
//                             Indoors
//                         </label>
//                         {formik.errors.sittingPreference && formik.touched.sittingPreference && <span className="error-message">{formik.errors.sittingPreference}</span>}
//                     </section>
//                     <section className={`main-body ${formik.errors.name && formik.touched.name ? 'error' : ''}`}>
//                         <p>Booking details</p>
//                         <label>

//                             Name
//                             <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
//                             {formik.errors.name && formik.touched.name && <span className="error-message">{formik.errors.name}</span>}

//                         </label><br />
//                         <label>
//                             Phone
//                             <input type="text" min="11" max="12" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
//                             {formik.errors.phone && formik.touched.phone && <span className="error-message">
//                                 {formik.errors.phone}</span>}

//                         </label>

//                     </section>
//                     <button type="submit">Reserve now!</button>

//                 </main>
//                 {state.showConfirmation && formik.submitCount > 0 && (

//                     <div className="modal">
//                         <div className="modal-content">
//                             <h2>Reservation Confirmed</h2>
//                             <p>Thank you for reserving a table with us! We look forward to seeing you.</p>
//                             <button
//                                 onClick={formik.resetForm}>Close</button>
//                         </div>
//                     </div>)
//                 }
//             </form>
//         </>
//     )
// }

// export default Reservation;