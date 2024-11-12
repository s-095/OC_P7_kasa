import NavBar from "../components/NavBar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import CollapseAboutContainer from "../components/CollapseAboutContainer"

function About() {
    return (
        <div className="about">
            <NavBar />
            <Banner/>
            <CollapseAboutContainer />
            <Footer />
        </div>
    )
}

export default About