import { useState } from 'react';

const Dropdown = () =>
{
    const [occasion, setOccasion] = useState("");

    const handleOccasion = (event) =>
    {
        setOccasion(event.target.value);
    }

    return (
        <>
            <section className='main-body'>
                <label htmlFor="occasion-selection">What's the occasion?</label><br />
                <select
                    id="occasion-selection"
                    value={occasion} onChange={handleOccasion}
                >
                    <option value="">Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                </select >
            </section>

        </>
    )
}

export default Dropdown;