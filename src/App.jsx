
import { useState } from 'react'
import './App.css'
import AllProduct from './Components/AllProducts/AllProduct'
import CartContainers from './Components/CartContainers/CartContainers'
import Navber from './Components/Navber/Navber'
import Swal from 'sweetalert2'

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
  


  // Duplicate item remove
  const [cartItem, setCartItem] = useState([]);
  const handleDuplicatRemove = (product) => {
    const exists = cartItem.find(item => item.id === product.id);
    if(!exists){
      setCartItem([...cartItem, product]);
      Swal.fire("Product added to cart successfully");
    }
    else{
      Swal.fire("Cart is already added this product");
      
    }
  }
  return (
    <>
      <Navber></Navber>

      <div className='flex  justify-around mt-12'>
        <AllProduct handleDuplicatRemove={handleDuplicatRemove} ></AllProduct>
        <CartContainers isActive={isActive} handleIsActiveStstues={handleIsActiveStstues} selectedProducts={cartItem}></CartContainers>
      </div>
     
      
      
    </>
  )

}

export default App
