import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function KasaRouter() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<div>coucou</div>} />
        </Routes>
      </Router>
    )
  }
  export default KasaRouter