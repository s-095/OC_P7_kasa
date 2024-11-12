import "../style/RentCard.scss"

function RentCard({ id, cover, title }) {
    
    return (

        <div className="rent-card" key={id} >
            <a href={`/logements/${id}`} >
                <img src={cover} alt="Photo appartment" />
                <h2>{title}</h2>
            </a>
        </div >

    )
}

export default RentCard