import React from 'react'
import { useCart } from '../context/Context.jsx'

function CartDashboard() {
    const values = useCart();

    console.log(values.item);
    const sum=values.item.reduce((a,b)=>a+b.price,0)
    return (
        <>
            <div>CartDashboard:
                value is :
                {values && values.item ? (values.item.map((c) => {
                    return <li>${c.name} - ${c.price}</li>
                })) : <li>0</li>
                }

            </div>


            <div><button type="disabled"> `total amount :${sum}`</button></div>
        </>
    )
}

export default CartDashboard