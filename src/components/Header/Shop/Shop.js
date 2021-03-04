import React, { useState } from 'react';
import './Shop.css';
import data from '../../../fakeData';
import Product from '../../Product/Product';
import Cart from '../../Cart/Cart';
import { addToDatabaseCart } from '../../../utilities/databaseManager';
const Shop = () => {
    const first10 = data.slice(0,10);
    const [cart, setCart] = useState([])
    
    const updateHandleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        const matchProduct = newCart.filter(pd => pd.key === product.key)
        const count = matchProduct.length;
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="shop ">
            <div className="products">
                {
                    first10.map(productInfo => <Product 
                        showAddToCart={true}
                        product={productInfo}
                        key={productInfo.key}
                        updateHandleCart={updateHandleCart}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <Cart shop={true} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;