import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Pages/Home';

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path ="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
