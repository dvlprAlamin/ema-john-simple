import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = ({cart,shop}) => {
    const total = cart.reduce((total, item) => total + item.price, 0);
    let shipping = 0;
    total > 50 ? shipping = 0 : total > 20 ? shipping = 6.99 : total > 0 && (shipping = 12.99);
    const tax = total / 10;
    const grandTotal = total + shipping + tax;
    const roundFruction = amout => amout.toFixed(2);
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item ordered:</th>
                        <td>{cart.length}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Items cost:</th>
                        <td>${roundFruction(total)}</td>
                    </tr>
                    <tr>
                        <th>Shipping cost:</th>
                        <td>${roundFruction(shipping)}</td>
                    </tr>
                    <tr>
                        <th>Total before tax:</th>
                        <td>${roundFruction(total + shipping)}</td>
                    </tr>
                    <tr>
                        <th>Tax:</th>
                        <td>${roundFruction(tax)}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="grand-total">
                        <th>Grand Total: </th>
                        <td>${roundFruction(grandTotal)}</td>
                    </tr>
                </tfoot>
            </table>
            {shop ? <Link to="/order"><button className='color-btn'>Review your order</button></Link> : <Link to="/proceed"><button className='color-btn'>Place order</button></Link>}
        </div>
    );
};

export default Cart;