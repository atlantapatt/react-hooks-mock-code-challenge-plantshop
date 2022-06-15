import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({search}) {
const [plants, setPlants] = useState([])
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((r) => r.json())
    .then((plants) => setPlants(plants))
  }, [])

 const filteredList = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })


  const listOfPlants = filteredList.map((plantObj) => {
    return <PlantCard plants={plantObj}/>
  })
 
  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
