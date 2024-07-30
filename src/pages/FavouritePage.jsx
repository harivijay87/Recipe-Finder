import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import RecipeCart from '../components/RecipeCart'
import { VscEmptyWindow } from 'react-icons/vsc'

const FavouritePage = () => {
  const {favourite} = useContext(DataContext)
  
  return (
    <main>
      <h1 className='favourite-title'>Favourites</h1>
      <div className='favourite-container'>      
        {favourite.length
        ? favourite.map((favourite) => (
            <RecipeCart recipe={favourite} key={favourite.id}/>
        )) 
        : 
          <div className='error'><VscEmptyWindow/><span>No Favourites</span></div>
        }
      </div>
      
    </main>
  )
}

export default FavouritePage
