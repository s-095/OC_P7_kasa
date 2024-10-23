import "../style/RentGallery.scss"
import RentCard from "./RentCard"
import dataBase from "./data/rent-data.json"

function RentGallery() {
    return (

        <div className="rent-gallery">

            {dataBase.map((appartement) => (
                <RentCard
                    key={appartement.id}
                    title={appartement.title}
                    id={appartement.id}
                    cover={appartement.cover}
                />
            ))}
        </div>

    )
}

export default RentGallery