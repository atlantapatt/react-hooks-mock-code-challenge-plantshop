import React, {useState} from "react";

function Search({onSearch, search, setSearch}) {
  const [currentSearch, setCurrentSearch] = useState("")

  // function handleSearch(e) {
  //   e.preventDefault()
  //   onSearch(currentSearch)
  // }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
