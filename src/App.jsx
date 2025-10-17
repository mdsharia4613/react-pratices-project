
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
  
 

  // card item add and duplicate remove function
  const [cartItem, setCartItem] = useState([]);
  const handleDuplicatRemove = (product) => {
    const exists = cartItem.find(item => item.id === product.id);

    if(exists){
      const updateCart = cartItem.map(item => {
        if(item.id === product.id){
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      })
      setCartItem(updateCart);
      Swal.fire("Product quantity updated in cart successfully");
    }
    else{
      const newProduct = {...product, quantity: 1};
      setCartItem([...cartItem, newProduct]);
      Swal.fire("Product added to cart successfully");
    } 
  }

  // Delete item from cart
  const handleDeleteItem = (id) => {
    const updatedCart = cartItem.filter(item => item.id !== id);
    setCartItem(updatedCart);
    Swal.fire("Product removed from cart");
  }
  return (
    <>
      <Navber></Navber>

      <div className='flex  justify-around mt-12'>
        <AllProduct handleDuplicatRemove={handleDuplicatRemove} ></AllProduct>
        <CartContainers handleDeleteItem={handleDeleteItem} isActive={isActive} handleIsActiveStstues={handleIsActiveStstues} selectedProducts={cartItem}></CartContainers>
      </div>
     
      
      
    </>
  )

}

export default App
