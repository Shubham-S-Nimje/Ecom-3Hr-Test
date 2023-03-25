import React, { useContext } from 'react'
import ContextData from '../ContextData'

const ButtonData = (props) => {
    // const [inputdata , setinputdata] = useState()
    const {totalcartvalue} = useContext(ContextData)

    const AddtoCartHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        // const ClickO1 = event.target.value;
        // setinputdata(ClickO1)
        totalcartvalue(+1)

        const obj = {
          medicinename: props.medicinename,
          describtion: props.describtion,
          price: props.price,
          Quantity: props.Quantity-1
        }
        const cartobj = {
          medicinename: props.medicinename,
          describtion: props.describtion,
          price: props.price,
          Quantity: +1
        }
        
        console.log(props.id)

        fetch(`https://crudcrud.com/api/34387772987544cf83d20067e27fefb0/Products/${props.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        fetch(`https://crudcrud.com/api/34387772987544cf83d20067e27fefb0/Cart`,
        {
          method: 'POST',
          body: JSON.stringify(cartobj),
          headers: {
            "Content-Type": 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

  return (
    <div>
      <button onClick={AddtoCartHandler}>Add to Cart</button>
    </div>
  )
}

export default ButtonData
