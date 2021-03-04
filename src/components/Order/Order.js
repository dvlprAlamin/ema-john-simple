import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import OrderedItem from '../OrderedItem/OrderedItem';
import './Order.css'
const Order = () => {

    const [cart, setCart] = useState([])
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
    const handleRemove =(key) => {
        setCart(cart.filter(product => product.key !== key))
        removeFromDatabaseCart(key);
    }
    const totalItem = cart.reduce((total, product) => total + product.quantity,0)
    const placeOrderHandler = () => {
        setCart([])
        processOrder();
    }
    return (
        <div className="order">
        <div className="ordered-items">
            <h1>Total ordered quantity: {totalItem}</h1>
            {
                cart.map(product => <OrderedItem 
                    key={product.key} 
                    product={product}
                    handleRemove={handleRemove}
                    />)
            }
        </div>
        <div className="cart">
            <Cart placeOrderHandler={placeOrderHandler} cart={cart}/>
        </div>
        </div>
    );
};

export default Order;