import { useState } from 'react';
import "../style/Collapse.scss";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const stateCollapse = () => {
        setIsOpen(!isOpen);
    };

    const arrowClassName = isOpen ? "collapse-arrows open" : "collapse-arrows";
    const contentClassName = isOpen ? "collapse-content open" : "collapse-content";

    return (
        <div className="collapse">
            <div className="collapse-title-container" onClick={stateCollapse}>
                <div className="collapse-title">
                    {title}
                </div>
                <div className={arrowClassName}>
                    <img src="/assets/images/arrow-up.svg" alt="flèche" />
                </div>
            </div>
            <div className={contentClassName}>
                {content}
            </div>
        </div>
    );
}

export default Collapse;
