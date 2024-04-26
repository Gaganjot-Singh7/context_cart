import { useState } from 'react'

import './App.css'
import { Context } from './context/Context.jsx'
import Cart from './comp/Cart.jsx'
import CartDashboard from './comp/CartDashboard.jsx'

function App() {
  const [item,setItem] = useState([])

  const ContextProvider=Context.Provider
  return (


<>

<ContextProvider value={{item,setItem}}>
    <Cart name="game" price={500}/>
    <Cart name="book" price={20}/>
    <CartDashboard/>
    </ContextProvider>
</>
  )
}

export default App
