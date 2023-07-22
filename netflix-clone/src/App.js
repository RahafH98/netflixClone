import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NavB from "./components/navB/NavB";
import FavList from "./components/favList/FavList";

import './App.css';
import './components/home/Home.css'
import './components/movie/Movie.css'
import './components/navB/NavB.css'
import './components/movieList/MovieList.css'
import './components/modalMovie/ModalMovie.css'
import './components/favList/FavList.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router> 
      <div className="App">
        <NavB/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorite" element={<FavList />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
