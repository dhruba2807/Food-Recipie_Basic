import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css'; 

function App() {
  const APP_ID = 'fa6fdf86';  // Replace with your actual App ID
  const APP_KEY= '83c74dd3d52d4f1f5af6dbc83bbcbb30';  // Replace with your actual App Key
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('chicken'); // Default to 'chicken' to ensure initial search

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setQuery(search);
      setSearch('');
    }
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          className="search-bar"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))
        ) : (
          <p>No recipes found. Try a different search term!</p>
        )}
      </div>
    </div>
  );
}

export default App;
