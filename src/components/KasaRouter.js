import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Rent from "../pages/Rent"
import Page404 from '../pages/Page404'

function KasaRouter() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logements/:id" element={<Rent />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    )
  }
  export default KasaRouter