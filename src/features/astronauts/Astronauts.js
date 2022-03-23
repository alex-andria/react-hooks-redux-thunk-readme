import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAstronauts } from "./astronautsSlice";

function Astronauts() {
  const dispatch = useDispatch();

  const astronauts = useSelector((state) => state.astronauts.entities);
  //alex code for load state
  const loading = useSelector((state) => state.astronauts.status);

  function handleClick() {
    // dispatch the action creator (see below!)
    dispatch(fetchAstronauts());
  }

  const astronautsList = astronauts.map((astro) => (
    <li key={astro.name}>{astro.name}</li>
  ));

  return (
    <>
      <div>
        <button onClick={handleClick}>Get Astronauts</button>
        {astronautsList}
      </div>
      <div>
        <p>status: {loading}</p>
      </div>
    </>
  )
}

export default Astronauts;
