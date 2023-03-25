import React, { useEffect, useState } from 'react'
import ButtonData from '../Model/ButtonData';

const Display = () => {
    const [products, Setproducts] = useState([])
    useEffect(() => {
    fetch(`https://crudcrud.com/api/34387772987544cf83d20067e27fefb0/Products`)
        .then(res => res.json())
        .then(data => Setproducts(data))
    },[])
    console.log(products.length);

  return (
    <div>
      <h1>Diplay</h1>
      {products.map(pro => {
        return(
        <p>{pro.medicinename} - {pro.describtion} - Rs. {pro.price} - {pro.Quantity}
        <ButtonData id={pro._id} Quantity={pro.Quantity} medicinename={pro.medicinename} describtion={pro.describtion} price={pro.price}/> </p>
      )})}

    </div>
  )
}

export default Display;