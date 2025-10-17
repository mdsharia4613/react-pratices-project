import React, { useEffect, useState } from 'react';
import SingalProduct from '../SingalProduct/SingalProduct';

const AllProduct = ({ handleSelectProduct, handleDuplicatRemove }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fackData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div>
            <h2 className='text-3xl '>All Products</h2>
            <SingalProduct  product={products}></SingalProduct>
            {
                products.map(p => <SingalProduct handleDuplicatRemove={handleDuplicatRemove} handleSelectProduct={handleSelectProduct} key={p.id} product={p}></SingalProduct>)
            }
        </div>
    );
};

export default AllProduct;