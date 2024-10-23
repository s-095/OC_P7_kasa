import "../style/CollapseAboutContainer.scss"
import Collapse from "./Collapse"
import aboutData from "../components/data/about-data.json";

function CollapseAboutContainer() {
    return (

        <div className="collapse-container">

            {aboutData.map((values) => (
                < Collapse
                    key={values.id}
                    id={values.id}
                    title={values.title}
                    content={values.content}

                />
            ))}
        </div>
    )
}

export default CollapseAboutContainer