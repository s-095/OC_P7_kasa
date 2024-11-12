import React, { useState } from 'react';
import "../style/Slide.scss";

function Slide({ logement }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = logement.pictures

    const clickPreviousArrow = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    const clickNextArrow = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    if (pictures.length === 0) return null;

    const currentPicture = pictures[currentIndex];
    const altText = `Slide ${currentIndex + 1}`;

    return (
        <div className="slide">
            {pictures.length > 1 && (
                <div className="slide__arrow slide__arrow--left" onClick={clickPreviousArrow}>
                    <img src="/assets/images/arrow-left.svg" alt="Previous" />
                </div>
            )}
            <img src={currentPicture} alt={altText} className="slide__image" />
            {pictures.length > 1 && (
                <div className="slide__arrow slide__arrow--right" onClick={clickNextArrow}>
                    <img src="/assets/images/arrow-right.svg" alt="Next" />
                </div>
            )}

            {pictures.length > 1 && (
                <div className="slide-counter">
                    {currentIndex + 1}/{pictures.length}
                </div>
            )}
        </div>
    );
}

export default Slide;
