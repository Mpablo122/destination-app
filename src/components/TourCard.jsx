//"task 3 - Render the tour cards"

import React, {useState} from "react";

const TourCard = ({id, name, info, price, image, onRemove}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            <h3>{name}</h3>
            <h5>{info}</h5>
            <p>
                {readMore ? info : `${info.substring(0, 80)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "read more"}
                </button>
                <button className="delete-btn" onClick={() => onRemove(id)}>not interested</button>

            </p>
            <div className="tour-info">
                <h4>${price}</h4>
                <button className="delete-btn">not interested</button>
            </div>
            <img src={image} alt={name} />

        </article>    
    )
}

export default TourCard;