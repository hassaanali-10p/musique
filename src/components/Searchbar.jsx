import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

// import { searchSongs } from "./songsSlice";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
    dispatch(searchSongs(searchTerm));
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex items-center border-b border-teal-500 py-4 mb-2 mt-2">
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-7 h-5 ml-4 text-white" />
        <input
          type="search"
          id="search-field"
          autoComplete="off"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-4 leading-tight focus:outline-none"
        />
      </div>
    </form>
  );
};

export default SearchBar;
