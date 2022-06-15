import React, {useState} from "react";


function PlantCard({plants}) {
  const {name, image, alt, price} = plants
  const [outOfStock, setOutOfStock] = useState(false)
  console.log(plants)

  function handleClick() {
    setOutOfStock(outOfStock => !outOfStock)
  }

  return (
    <li className="card">
      <img src={image} alt={alt}  />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {outOfStock === false ? (
        <button className="primary" onClick={handleClick} >In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
