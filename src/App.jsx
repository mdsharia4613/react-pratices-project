
import { useState } from 'react'
import './App.css'
import AllProduct from './Components/AllProducts/AllProduct'
import CartContainers from './Components/CartContainers/CartContainers'
import Navber from './Components/Navber/Navber'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'cart'
  })

  const handleIsActiveStstues = (status) => {
    if(status === 'cart'){
      setIsActive({
        cart: true,
        status: 'cart'
      })
    }
    else{
      setIsActive({
        cart: false,
        status: 'about'
      })
    }
  }
  

  return (
    <>
      <Navber></Navber>

      <div className='flex items-center justify-around mt-12'>
        <AllProduct></AllProduct>
        <CartContainers isActive={isActive} handleIsActiveStstues={handleIsActiveStstues}></CartContainers>
      </div>
     
      
      
    </>
  )

}

export default App
