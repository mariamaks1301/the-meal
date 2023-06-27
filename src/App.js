import './styles/style.scss';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import CategoryMeals from './pages/CategoryMeals/CategoryMeals';
import Recipe from './pages/Recipe/Recipe';
import IngridientsMeals from './pages/IngridientsMeals/IngridientsMeals';
import Catalog from './pages/Catalog/Catalog';
import AreaCatalog from './pages/AreaCatalog/AreaCatalog';



function App() {
  return (
    <div className="App">
     <Routes basename='/the-meal'>
        <Route path={''} element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog/search/:title" element={<Catalog/>}/>
          <Route path="/catalog/area/:area" element={<AreaCatalog/>}/>
          <Route path="/catalog/:name" element={<CategoryMeals/>}/>
          <Route path="/recipe/:id" element={<Recipe/>}/> 
          <Route path="/catalog/ingridient/:ingridient" element={<IngridientsMeals/>}/> 
        </Route>
     </Routes>
      
    </div>
  );
}

export default App;
