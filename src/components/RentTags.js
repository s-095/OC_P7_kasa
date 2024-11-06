import data from "./data/rent-data.json";
import { useParams } from "react-router-dom"
import "../style/RentTags.scss";

function RentTags() {
    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);

    return (

        <div className="rent__tags">
            {logement.tags.map((tag, index) => (
                <span key={index} className="rent__tag">{tag}</span>
            ))}
        </div>
    )
}

export default RentTags;