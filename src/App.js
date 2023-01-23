


import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trailer from './components/Trailer';
import MovieList from './components/MovieList';




const App = () => {
  return (
    <div>
      <Router>
<Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/Trailer" element={<Trailer/>}/>
    </Routes>  
    </Router>  
    </div>
  )
}

export default App

