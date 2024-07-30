import React, {useContext} from 'react'
import SearchRecipe from '../components/SearchRecipe'
import DataContext from '../context/DataContext'
import RecipeCart from '../components/RecipeCart'
import { MdNetworkCheck, MdNoFood } from 'react-icons/md'

const HomePage = () => {
  const {search, recipes, networkError} = useContext(DataContext)

  

  return (
    <main>
      <SearchRecipe />
      {recipes 
      ?
      (<div className='home-container'>
      {recipes.length 
        ? recipes.map((recipe) => (
            <RecipeCart recipe={recipe} key={recipe.id}/>
        ))
        : <div className='loading'><img src="/recipe-finder/Loading.gif" alt="" /></div>
      }
      </div>)
      :
      networkError 
      ? <div className='error'><MdNetworkCheck/><span>Check Your Network Connection</span></div>
      : <div className='error'><MdNoFood/><span>No Recipe Found, Try New Recipe...</span></div>
    }
    </main>
  )
}

export default HomePage