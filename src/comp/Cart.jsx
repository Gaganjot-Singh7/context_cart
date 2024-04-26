import React from 'react'
import { useCart } from '../context/Context.jsx'

function Cart(props) {
    const values=useCart();
    ;
  return (
    <>
     <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-2">{props.name}</h1>
            <h2 className="text-lg text-gray-700">${props.price}</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-2 rounded" onClick={(e)=>{e.preventDefault(); values.setItem([ ...values.item, {name : props.name , price :props.price}])}}>
                Add to cart
            </button>
         
        </div>
    
    </>
  )
}

export default Cart