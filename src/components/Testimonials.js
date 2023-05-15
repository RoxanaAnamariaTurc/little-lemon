import { useState, useEffect } from 'react';
import testimonials from '../testimonials';

const Testimonials = () =>
{
    const [text, setText] = useState([]);
    useEffect(() =>
    {
        const randIndex = Math.floor(Math.random() * testimonials.length - 2)
        const newPrew = testimonials.slice(randIndex, randIndex + 3);
        setText(newPrew);
    }, [])
    return (
        <div className='main'>
            {text.map((item, id) => (
                <div className='testimonial-card' key={id}>
                    <div className='card-text'>
                        <img src={item.profileImg()} alt="user-profile" />
                        <h2>{item.name}</h2>
                        <p>{item.text}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default Testimonials;