import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"

function KasaRouter() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
      </Router>
    )
  }
  export default KasaRouter