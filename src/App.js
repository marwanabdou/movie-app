

import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
import './App.css';


 
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const API_IMG = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const DEFAULT_IMAGE = 'https://images.cdn4.stockunlimited.net/preview1300/movie-time-wallpaper_1804982.jpg'





const App = () => {

const [title, setTitle] = useState("");
const [overview, setOverview] = useState("");
const [rating, setRating] = useState("");

const handleAddMovie = (e) => {
  e.preventDefault();
  const newMovie = { title, overview, rating, poster: DEFAULT_IMAGE };
  setMovies([...movies, newMovie]);
  setTitle("");
  setOverview("");
  setRating("");
};
  
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect (() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => 
    {
      setMovies(data.results);
    })
  }, []);

  const handleOnSubmit = (e) => {
e.preventDefault();

fetch(SEARCH_API + searchTerm)
    .then((res) => res.json())
    .then((data) => 
    {

      setMovies(data.results);
    })
    setSearchTerm('')
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  };

  return (<>
    <header>
      <form onSubmit={handleOnSubmit}>
      <input className='search' 
      type='text' 
      placeholder='Search'
      value={searchTerm}
      onChange={handleOnChange}/>

      </form>
  </header>
     <div className='movie-container'>
     
      {movies.length > 0 && movies.map(movies => (
        <Movie key={movies.id} {...movies} />
        ))}
    </div>

    <div className='add_movie'>
      <form onSubmit={handleAddMovie}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Overview"
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
    </div>
    </>
  )
}

export default App
