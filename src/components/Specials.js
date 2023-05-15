import { useEffect, useState } from "react";
import specials from "../specials";
import '../Specials.css';

const Specials = () =>
{

    const [previewItem, setPreviewItem] = useState([]);

    useEffect(() =>
    {
        const randomIndex = Math.floor(Math.random() * (specials.length - 2));
        const newPreview = specials.slice(randomIndex, randomIndex + 3);
        setPreviewItem(newPreview);
    }, [])
    return (
        <div className="main-card">
            {previewItem.map((item, id) =>
            (
                <div className="card" key={id}>
                    <img className="img-card" src={item.getImage()} alt={item.description} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            )
            )}
        </div>
    )
}

export default Specials;