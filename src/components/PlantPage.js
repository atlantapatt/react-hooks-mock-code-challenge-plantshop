import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({onSearch, search, setSearch}) {
  const [plants, setPlants] = useState([])

  function addNewPlant(plant) {
    setPlants([...plants, plant])
  }
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} addNewPlant={addNewPlant} />
      <Search onSearch={onSearch} search={search} setSearch={setSearch}/>
      <PlantList search={search} plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
