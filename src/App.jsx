import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Pages/Home';
import { RecipeDetail } from './Pages/RecipeDetail';
import { DietaryRestrictions } from './Pages/DietaryRestrictions';

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route path="/recipedetails" element={<RecipeDetail />} />
        <Route path="/dietaryrestrictions" element={<DietaryRestrictions />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
