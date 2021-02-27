import React, { useState } from 'react';
import './Shop.css';
import data from '../../../fakeData';
import Product from '../../Product/Product';
import Cart from '../../Cart/Cart';
const Shop = () => {
    const first10 = data.slice(0,10);
    const [cart, setCart] = useState([])
    
    const updateHandleCart = (product) => {
        setCart([...cart, product])
    }
    return (
        <div className="shop ">
            <div className="products">
                {
                    first10.map(productInfo => <Product 
                        product={productInfo}
                        updateHandleCart={updateHandleCart}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;