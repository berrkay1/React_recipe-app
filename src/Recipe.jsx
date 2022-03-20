import React from 'react'

function Recipe({title,calories,image,ingredients}) {
  return (
    <div className='recipe'>
        <h1 >{title}</h1>
        <ul>
           {ingredients.map(ingredient => (
               <li>{ingredient.text}</li>
           ))} 
        </ul>
        <p className='kcal'>Calorie : {calories.toFixed(0)} kcal</p>
        <img src={image} alt={title} />
        
    </div>
  )
}

export default Recipe