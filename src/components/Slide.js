import React, { useState, useEffect } from 'react';
import "../style/Slide.scss";
import data from "./data/rent-data.json";

function Slide({ id }) {
    const [pictures, setPictures] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const logement = data.find(item => item.id === id);
        if (logement && logement.pictures) {
            setPictures(logement.pictures);
        }
    });

    const handleArrowLeft = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleArrowRight = () => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    if (pictures.length === 0) return null;

    return (
        <div className="slide">

            {pictures.length > 1 && (
                <div className="slide__arrow slide__arrow--left" onClick={handleArrowLeft}>
                    <img src="/assets/images/arrow-left.svg" alt="Previous" />
                </div>
            )}

            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide__image" />

            {pictures.length > 1 && (
                <div className="slide__arrow slide__arrow--right" onClick={handleArrowRight}>
                    <img src="/assets/images/arrow-right.svg" alt="Next" />
                </div>
            )}
        </div>
    );
}

export default Slide;
