import { DataProvider } from "./context/DataContext"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MissingPage from "./pages/MissingPage"
import RecipePage from "./pages/RecipePage"
import Header from "./components/Header"
import FavouritePage from "./pages/FavouritePage"
import SearchRecipe from "./components/SearchRecipe"
import './styles/App.css'


function App() {

  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="recipe-details/:id" element={<RecipePage/>}/>
        <Route path="favourite" element={<FavouritePage/>}/>
        <Route path="*" element={<MissingPage/>}/>
      </Routes>
    </DataProvider>
  )
}

export default App
