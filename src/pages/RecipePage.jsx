import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/RecipePage.css'

const RecipePage = () => {
  const {id} = useParams()
  const [recipe, setRecipe] = useState()

  useEffect(() => {
    const fetchRecipe = async() => {
      try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d125c3c5592c437fae4e663b6dc853f7`);
        setRecipe(response.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchRecipe();
  }, [])

  if (!recipe) return <div className='loading'><img src="/recipe-finder/public/Loading.gif" alt="" /></div>

  return (

    <main>
        <div className="recipe-info-container">
            <img src={recipe.image} alt="" />
            <div className="recipe-details">
                <h2>{recipe.title}</h2>
                <h3>Summary</h3>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                <h3>Instructions</h3>
                <div className='instruction' dangerouslySetInnerHTML={{ __html: recipe.instructions }}>
                </div>
            </div>
        </div>
    </main>
  )
}

export default RecipePage
