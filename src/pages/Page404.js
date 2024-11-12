import "../style/Page404.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="error404">
      <NavBar />
      <div className="main-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
