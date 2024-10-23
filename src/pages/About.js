import NavBar from "../components/NavBar"
import BannerAbout from "../components/BannerAbout"
import Footer from "../components/Footer"
import CollapseAboutContainer from "../components/CollapseAboutContainer"

function About() {
    return (
        <div className="about">
            <NavBar />
            <BannerAbout />
            <CollapseAboutContainer />
            <Footer />
        </div>
    )
}

export default About