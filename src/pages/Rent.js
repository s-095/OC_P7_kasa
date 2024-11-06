import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"
import Slide from "../components/Slide";
import data from "../components/data/rent-data.json";
import RentInfos from "../components/RentInfos";
import Page404 from "./Page404"

function Rent() {
    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);

    if (!logement) {
        return <Page404 />
    }

    return (
        <div className="rent">
            <NavBar />
            {/* <Navigate to= "/" replace={true}/> */}
            <Slide id={id} />
            <RentInfos />
            <Footer />
        </div>
    )
}

export default Rent