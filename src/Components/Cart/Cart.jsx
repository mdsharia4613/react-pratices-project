const Cart = ({ selectedProducts, handleDeleteItem }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mt-6">Your Shopping Cart</h2>
            {selectedProducts.map(product => (
                <div key={product.id} className="border-b py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-16 h-16" src={product.img} alt={product.name} />
                        <div>
                            <h3 className="text-xl">{product.name}</h3>
                            <p>Quantity: {product.quantity}</p>
                            <span>${product.price}</span>
                        </div>
                    </div>
                    <button
                        onClick={() => handleDeleteItem(product.id)}
                        className="text-red-500 text-xl"
                    >
                        🗑️
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
