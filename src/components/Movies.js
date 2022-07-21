import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList=movies.map((movie)=>(
    <div key={movie.title}>
      {/* renders each movie's title and time */}
      <h2>{movie.title}</h2>
      <p>Runtime:{movie.time} min.</p>
      {/*renders a <li /> for each genre */}
      <ul>{movie.genres.map((genre)=>(
        <li key={genre}>{genre}</li>
      ))}</ul> 
    </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;
