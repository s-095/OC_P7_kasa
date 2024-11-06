import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useParams, Navigate } from "react-router-dom"
import Slide from "../components/Slide";
import data from "../components/data/rent-data.json";
import RentInfos from "../components/RentInfos";

function Rent() {
    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);

    if (!logement) {
        return <Navigate to="/Page404" replace={true} />;
    }

    return (
        <div className="rent">
            <NavBar />
            <Slide logement={logement} />
            <RentInfos logement={logement}/>
            <Footer />
        </div>
    )
}

export default Rent