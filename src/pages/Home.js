import NavBar from "../components/NavBar"
import Banner from "../components/Banner"
import RentGallery from "../components/RentGallery"
import Footer from "../components/Footer"

function Home() {
    return (
        <div className="home">
            <NavBar />
            <Banner />
            <RentGallery/>
            <Footer />
        </div>
    )
}

export default Home