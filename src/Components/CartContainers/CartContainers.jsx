import './CartContainer.css'
import About from '../About/About'
import Cart from '../Cart/Cart'
const CartContainers = ({ handleIsActiveStstues, isActive, selectedProducts }) => {
    return (
        <div>
            <h2 className='text-3xl'>Cart Items</h2>

            <div className='flex gap-16 mt-8'>
                <div
                    onClick={() => handleIsActiveStstues('cart')}
                    className={`${isActive.status === 'cart' ? 'btn active' : 'btn'} cursor-pointer`}
                >
                    Cart
                </div>

                <div
                    onClick={() => handleIsActiveStstues('about')}
                    className={`${isActive.status === 'about' ? 'btn active' : 'btn'} cursor-pointer`}
                >
                    About
                </div>
            </div>

            {/* Cart বা About দেখাবে status অনুযায়ী */}
            {isActive.status === 'cart' ? <Cart selectedProducts={selectedProducts} /> : <About />}
        </div>
    )
}

export default CartContainers
