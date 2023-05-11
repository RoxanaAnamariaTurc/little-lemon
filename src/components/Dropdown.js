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
            <label htmlFor="occasion-selection">What's the occasion?</label>
            <select
                id="occasion-selection"
                value={occasion} onChange={handleOccasion}
            >
                <option value="">Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
            </select >
        </>
    )
}

export default Dropdown;