import "../style/NavBar.scss"
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
            <img src='assets/images/logo.svg' alt="Logo" />
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A Propos</Link></li>
            </ul>
        </div>
    )
}

export default NavBar