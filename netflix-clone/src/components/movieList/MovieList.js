import React from "react";
import Movie from "../movie/Movie";

function MovieList({ data }) {
  function commentHandler(newMovie, id) {
    console.log(newMovie, id, "from movie List component");
    data.map((movies) => {
      if (movies.id === id) {
        movies.comment = newMovie.userComment;
        return movies;
      } else {
        return movies;
      }
    });
    console.log("comment handler ", data);
  }

  return (
    <div className="listDiv">
      {data.map((obj, i) => (
        <Movie commentHandler={commentHandler} data={obj} key={i} />
      ))}
    </div>
  );
}

export default MovieList;