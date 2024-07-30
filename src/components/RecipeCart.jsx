import React, { useContext} from 'react'
import '../styles/RecipeCart.css'
import { Link, useParams } from 'react-router-dom'
import DataContext from '../context/DataContext'

const RecipeCart = ({recipe}) => {
  const {favourite, getFavourite, removeFavourite} = useContext(DataContext)
  const isFavouriteExists = favourite.some(favourite => recipe.id === favourite.id)
  const handleFavourite = (recipe) => {
    (isFavouriteExists) ? removeFavourite(recipe.id) : getFavourite(recipe)
  }
  return (
    <div className='recipe-card' key={recipe.id}>
        <img src={recipe.image} alt={recipe.title}/>
      <div className='recipe-details'>
        <h3 className='title'>{recipe.title}</h3>
        <p className='details'><Link to={`/recipe-details/${recipe.id}`} className='link'>More Details</Link></p>
        <button onClick={() => handleFavourite(recipe)}>
          {isFavouriteExists
          ? "Remove Favourite"
          : "Add to Favourite"
          } 
        </button>
      </div>
    </div>
  )
}

export default RecipeCart
