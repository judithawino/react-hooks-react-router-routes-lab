import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList=directors.map((director)=>(
    <div key={director.name}>
      <h1>{director.name}</h1>

      <ul>{director.movies.map((dirMovies)=>(
      <li key={dirMovies}>{dirMovies}</li>
    ))}</ul>
      
    </div>
    
  ))
  return <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>;
}

export default Directors;
