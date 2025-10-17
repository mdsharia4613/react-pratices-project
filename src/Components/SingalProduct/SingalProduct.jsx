

const       SingalProduct = ({ product, handleDuplicatRemove }) => {
    const { img, name, des, price} = product ;
    return (
        <div className='border  p-4 text-center m-4 shadow-xl shadow-gray-600 rounded-lg'>
            <img className="w-32 mx-auto" src={img} alt="" />
            <h4 className='text-xl font-semibold'>{name}</h4>
            <p>{des}</p>
            <span>${price}</span>
            <div>
                <button onClick={() => handleDuplicatRemove(product)} className='bg-gray-400 mb-4 p-2 rounded-xl' type="button">Add to Cart</button>
            </div>
        </div>
    );
}

export default SingalProduct;