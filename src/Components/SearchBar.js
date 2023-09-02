import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const { existingId, optionType } = props;
  const [option, setOption] = useState(optionType);
  const [id, setId] = useState(existingId);
  const navigate = useNavigate();

  function Search() {
    navigate(`/${option}/${id}`);
  }

  return (
    <>
      <label htmlFor="star-wars">Search for: </label>
      <select
        name="star-wars"
        id="star-wars"
        defaultValue={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="people">people</option>
        <option value="planets">planets</option>
        <option value="starships">starships</option>
      </select>
      <label htmlFor="id">ID: </label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={Search}>Search</button>
    </>
  );
};

export default SearchBar;
