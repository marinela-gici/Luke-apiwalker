import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Error from "./Error";
import axios from "axios";

const Planets = () => {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((data) => setResult(data.data))
        .catch((error) => setError(error));
    }
  }, []);
  return (
    <>
      <SearchBar existingId={id} optionType={"planets"} />
      {result && (
        <>
          <h3>{result.name}</h3>
          <p>Climate: {result.climate}</p>
          <p>Terrain: {result.terrain}</p>
          <p>Surface Water: {result.surface_water}</p>
          <p>Population: {result.population}</p>
        </>
      )}
      {error && <Error />}
    </>
  );
};

export default Planets;
