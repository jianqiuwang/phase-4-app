import React,{useState} from "react";

function Search({onSearch}) {
  const [search, setSearch]=useState("")
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search your movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;