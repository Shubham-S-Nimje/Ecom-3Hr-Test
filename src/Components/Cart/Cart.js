import React, {useContext, useEffect, useState} from 'react'
import ContextData from '../ContextData'

const Cart = () => {
    const {cartdata} = useContext(ContextData);

    const [products, Setproducts] = useState([])

    useEffect(() => {
      fetch(`https://crudcrud.com/api/34387772987544cf83d20067e27fefb0/Cart`)
          .then(res => res.json())
          .then(data => Setproducts(data))
      },[])

    // const {inputdata} = useContext(ContextData);

//   const numberOfCartItems = cartCtx.items.reduce(
//     (currentNo, item) => {
//     return currentNo + item.inputdata;
//   }, 0);
// console.log(cartdata)

  return (
    <div>
      <h1>Cart</h1>
      <h2>{products.length}</h2>
      <div>
      {products.map(pro => {
        return(
        <p>{pro.medicinename} - {pro.describtion} - Rs. {pro.price}</p>
      )})}
      </div>
    </div>
  )
}

export default Cart
