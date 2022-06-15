import React, {useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [search, setSearch] = useState("")

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }
  return (
    <div className="app">
      <Header  />
      <PlantPage onSearch={handleSearch} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
