import React from 'react';
import "../style/Ratings.scss";

function Ratings({ rating }) {
    
    const stars = [];
 
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push("filled"); 
        } else {
            stars.push("empty"); 
        }
    }

    return (
        
        <div className="ratings">
            {stars.map((type, index) => (
                <img 
                    key={index}
                    src={type === "filled" ? "/assets/images/filled-star.svg" : "/assets/images/empty-star.svg"} 
                    alt={type === "filled" ? "Filled Star" : "Empty Star"}
                    className="star"
                />
            ))}
        </div>
    );
}

export default Ratings;
