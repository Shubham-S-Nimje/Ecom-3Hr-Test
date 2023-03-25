import React, { useContext, useState } from 'react'
import ContextData from '../ContextData'
import './FormData.css'

const FormData = () => {
    const [medicinename, Setmedicinename] = useState('')
    const {addtocart ,totalquantity} = useContext(ContextData)
    const NameChangeHandler = (event) => {
        Setmedicinename(event.target.value)
        // console.log(event.target.value)
    }

    const [describtion, Setdescribtion] = useState('')
    const describtionChangeHandler = (event) => {
        Setdescribtion(event.target.value)
        // console.log(event.target.value)
    }

    const [price, Setprice] = useState('')
    const priceChangeHandler = (event) => {
        Setprice(event.target.value)
        // console.log(event.target.value)
    }

    const [Quantity, SetQuantity] = useState('')
    const QuantityChangeHandler = (event) => {
        SetQuantity(event.target.value)
        // console.log(event.target.value)
    }

    const OnSubmitHandler = (event) => {
        event.preventDefault();
        console.log(medicinename)
        console.log(describtion)
        console.log(price)
        console.log(Quantity)
        const key = Math.random().toString();

        

        const obj = {
          key: key,
          medicinename: medicinename,
          describtion: describtion,
          price: price,
          Quantity: Quantity
        }

        addtocart(medicinename,describtion,price,Quantity,key)

        fetch(`https://crudcrud.com/api/34387772987544cf83d20067e27fefb0/Products`,
        {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  return (
    <div className="form">
      <h1>Form</h1>
      <label>Medicine Name : </label>
      <input type="text" value={medicinename} onChange={NameChangeHandler}></input>
      <br />
      <label>Describtion : </label>
      <input type="text" value={describtion} onChange={describtionChangeHandler}></input>
      <br />
      <label>Price : </label>
      <input type="number" value={price} onChange={priceChangeHandler}></input>
      <br />
      <label>Quantity : </label>
      <input type="number" value={Quantity} onChange={QuantityChangeHandler}></input>
      <br />
      <button type='Submit' onClick={OnSubmitHandler}>Add</button>
    </div>
  );
}

export default FormData;
