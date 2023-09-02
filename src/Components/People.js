import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Error from "./Error";
import axios from "axios";

const People = () => {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((data) => setResult(data.data))
        .catch((error) => setError(error));
    }
  }, []);
  return (
    <>
      <SearchBar existingId={id} optionType={"people"} />
      {result && (
        <>
          <h3>{result.name}</h3>
          <p>Height: {result.height}</p>
          <p>Hair Color: {result.hair_color}</p>
          <p>Eye Color: {result.skin_color}</p>
          <p>Skin Color: {result.eye_color}</p>
        </>
      )}
      {error && <Error />}
    </>
  );
};

export default People;
