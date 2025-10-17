const Cart = ({ selectedProducts }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mt-6">Your Shopping Cart</h2>
            {selectedProducts.map(product => (
                <div key={product.id} className="border-b py-4">
                    <img className="w-16 h-16 " src={product.img} alt="" />
                    <h3 className="text-xl">{product.name}</h3>
                    <span>${product.price}</span>
                </div>
            ))}
        </div>      
        
    );
};

export default Cart;
