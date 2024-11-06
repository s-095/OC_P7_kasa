import React from 'react';
import "../style/Ratings.scss";

function Ratings({ rating }) {
    return (
        <div className="ratings">
            {Array.from({ length: 5 }, (_, starIndex) => (
                <img
                    key={starIndex}
                    src={starIndex < rating ? "/assets/images/filled-star.svg" : "/assets/images/empty-star.svg"}
                    alt={starIndex < rating ? "Filled Star" : "Empty Star"}
                    className="star"
                />
            ))}
        </div>
    );
}

export default Ratings;
