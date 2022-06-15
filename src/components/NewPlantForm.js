import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [formData, setFormData] = useState({
  name: "",
  image: "",
  price: ""
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const plantData = {
    "name": formData.name,
    "image": formData.image,
    "price": formData.price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData)
    })
    .then((r) => r.json())
    .then((newPlant) => addNewPlant(newPlant))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={formData.name} type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input value={formData.image} type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input value={formData.price} type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
