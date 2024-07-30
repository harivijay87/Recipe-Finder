import { createContext, useEffect, useState } from "react"
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [favourite, setFavourite] = useState(JSON.parse(localStorage.getItem('favourite')) || []);
  const [networkError, SetNetworkError] = useState(false)
  useEffect(() => {
    const fetchData = async() => {
      const list = ["biryani", "pasta", "pizza", "burger"]
      const randomFood = list[Math.floor(Math.random() * (list.length)) + 0]
      try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${randomFood}&apiKey=d125c3c5592c437fae4e663b6dc853f7`)
        setRecipes(response.data.results)
        SetNetworkError(false)
      } catch(err){
        if(err.message === "Network Error"){
          SetNetworkError(true)
        }  
        setRecipes(null)
      }
    }
    fetchData()
    return () => {
      setRecipes([])
    }
  }, [])
  useEffect (() => {
    saveFavouriteToStorage(favourite)
  }, [favourite])

  const searchRecipe = async(e) => {
    setRecipes([])
    e.preventDefault()
    try{
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=d125c3c5592c437fae4e663b6dc853f7`)
      setRecipes(response.data.results)
      if(!response.data.results.length) setRecipes(null)
      SetNetworkError(false)
    } catch(err){
      setRecipes(null)
      if(err.message === "Network Error"){
        SetNetworkError(true)
      }
    }
    setSearch('')
  }
  const saveFavouriteToStorage = (value) => {
    localStorage.setItem('favourite', JSON.stringify(value))
  }
  const getFavourite = (recipe) => {
    setFavourite([...favourite, recipe])
  }
  const removeFavourite = (id) => {
    setFavourite(favourite.filter(recipe => recipe.id !== id))
  }

  return (
    <DataContext.Provider value={{ search, setSearch, searchRecipe, recipes,
      getFavourite, favourite, removeFavourite, networkError
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;