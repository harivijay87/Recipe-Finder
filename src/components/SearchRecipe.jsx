import React, { useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import DataContext from '../context/DataContext'
import '../styles/SearchRecipe.css'

const SearchRecipe = () => {
  const {search, setSearch, searchRecipe} = useContext(DataContext)
  return (
    <form onSubmit={e => searchRecipe(e)}>
        <label htmlFor="search">Search Recipes</label>
        <div>
          <input 
            name='search'
            type="text" 
            placeholder='Search Recipe'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type='submit'><BsSearch/></button>
        </div>
    </form>
  )
}

export default SearchRecipe
