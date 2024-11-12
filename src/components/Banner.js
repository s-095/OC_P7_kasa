import "../style/Banner.scss"

function Banner({ title }) {
    return (
        <div className={title ? "banner" : "about-banner"}>
            <img
                src={title ? "assets/images/homepage-banner.png" : "assets/images/about-banner.png"}
                alt="bannière"
            />
            {title && (
                <h1> Chez vous, <br/>partout et ailleurs</h1>
            )}
        </div>
    );
}

export default Banner;
