import "../style/RentInfos.scss";
import Collapse from "./Collapse";
import RentTags from "./RentTags";
import Ratings from "./Ratings";

function RentInfos({ logement }) {
    return (
        <div className="rent__infos">
            <div className="container1">
                <div className="container2">
                    <h2>{logement.title}</h2>
                    <p className="rent__location">{logement.location}</p>
                    <RentTags tags={logement.tags} />
                </div>
                <div className="container3">
                    <div className="rent__host-ratings">
                        <div className="rent__host">
                            <img src={logement.host.picture} alt={logement.host.name} className="host__image" />
                            <span className="host__name">{logement.host.name}</span>
                        </div>
                        <Ratings rating={logement.rating} />
                    </div>
                </div>
            </div>
            <div className="rent__collapse">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                } />
            </div>
        </div>
    );
}

export default RentInfos;
