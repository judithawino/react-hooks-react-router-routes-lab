import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsList=actors.map((actor)=>(
    <div key={actor.name}>
      <h1>{actor.name}</h1>
      <ul>{actor.movies.map((actorsMovie)=>(
        <li key={actorsMovie}>{actorsMovie}</li>
      ))}</ul>
    </div>
  ))
  return <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>;
}

export default Actors;
