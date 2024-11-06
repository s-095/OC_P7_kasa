import "../style/Collapse.scss";
import React, { useState } from 'react';


function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);
    const stateCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className="collapse">
            <div className="collapse-title-container" onClick={stateCollapse} >
                <div className="collapse-title" >
                    {title}
                </div>
                <div className="collapse-arrows">
                    {isOpen ? <img src="../assets/images/arrow-down.svg" alt="flèche bas" /> : <img src="../assets/images/arrow-up.svg" alt="flèche haut" />}
                </div>
            </div>
            {isOpen && (
                <div className="collapse-content">
                    {content}
                </div>
            )}
        </div>
    );
}

export default Collapse;