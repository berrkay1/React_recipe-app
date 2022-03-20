import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import logo from './logo/recipes-logo.svg';
function App() {

  const appId = 'e8f4c56d';
  const appKey = 'c8789c2ea41938f7bc8161b580fbf128';

  const [recipe,setRecibe] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');


  const getApi = async ()=>{
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
    const data = await response.data.hits;
    setRecibe(data);
    console.log(data);
  }

  useEffect(()=>{
    getApi()
    
  },[query])

  const updateSearch = (e)=>{
    setSearch(e.target.value);
    
  }

  const getSaerch = (e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }



  return (
    <div className="App">
      <header>
      <img src={logo}/>
      <form className='search-form' onSubmit={getSaerch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-btn' type='submit'>Search</button>
      </form>
      </header>
      
      <div className='recipes'>
      {recipe.map((recipeItem,idx) =>(
        <Recipe key={idx}
         title={recipeItem.recipe.label} 
         calories={recipeItem.recipe.calories}
         image={recipeItem.recipe.image}
         ingredients={recipeItem.recipe.ingredients}
         />
      ))}
      </div>
      
    </div>
  );
}

export default App;
