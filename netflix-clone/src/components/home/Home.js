import React, { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState([]);

  async function getTrendingMovies() {
    const url = process.env.REACT_APP_DB_URL;
    const response = await fetch(`${url}/trending`);
    const trendingMovies = await response.json();
    setData(trendingMovies);
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  console.log(data);
  return (
    <div className="homeDiv">
      <MovieList data={data} />
    </div>
  );
}