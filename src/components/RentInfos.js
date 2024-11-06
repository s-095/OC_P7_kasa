import "../style/RentInfos.scss";
import data from "./data/rent-data.json";
import { useParams } from "react-router-dom"
import Collapse from "./Collapse";
import RentTags from "./RentTags";
import Ratings from "./Ratings";

function RentInfos() {
    const { id } = useParams();

    const logement = data.find(logement => logement.id === id);


    return (
        <div className="rent__infos">

            <h2>{logement.title}</h2>
            <p className="rent__location">{logement.location}</p>

            <RentTags />
            <div className="rent__host">
                <img src={logement.host.picture} alt={logement.host.name} className="host__image" />
                <span className="host__name">{logement.host.name}</span>
            </div>
            <div className="rent__ratings">
                <Ratings rating={logement.rating} />
            </div>
            <div className="rent__collapse">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={logement.equipments} />
            </div>

        </div>

    )
}

export default RentInfos;