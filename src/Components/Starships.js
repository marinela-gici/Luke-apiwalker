import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Error from "./Error";
import axios from "axios";

const Starships = () => {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://swapi.dev/api/starships/${id}`)
        .then((data) => setResult(data.data))
        .catch((error) => setError(error));
    }
  }, []);
  return (
    <>
      <SearchBar existingId={id} optionType={"starships"} />
      {result && (
        <>
          <h3>{result.name}</h3>
          <p>Length: {result.length}</p>
          <p>Cargo Capacity: {result.cargo_capacity}</p>
          <p>Starship Class: {result.starship_class}</p>
          <p>Created: {result.created}</p>
        </>
      )}
      {error && <Error />}
    </>
  );
};

export default Starships;
