import React, { useContext, useEffect, useState } from 'react';
import './Shop.css';
import data from '../../../fakeData';
import Product from '../../Product/Product';
import Cart from '../../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import fakeData from '../../../fakeData';
const Shop = () => {
    const first10 = data.slice(0,10);
    const [cart, setCart] = useState([])
    const updateHandleCart = (product) => {
        const matchProduct = cart.find(pd => pd.key === product.key)
        let count = 1;
        let newCart
        if(matchProduct){
            count = matchProduct.quantity + 1;
            matchProduct.quantity = count;
            const otherProducts = cart.filter(pd => pd.key !== product.key)
            newCart = [...otherProducts, matchProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }
    useEffect(()=>{
        const cartData = getDatabaseCart();
        const productKeys = Object.keys(cartData)
        const products = productKeys.map(key => {
            const product = fakeData.find(product => product.key === key)
            product.quantity = cartData[key]
            return product;
        })
        setCart(products);
    }, [])
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