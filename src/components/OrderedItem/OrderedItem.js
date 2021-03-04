import { Link } from 'react-router-dom';
import './OrderedItem.css'
const OrderedItem = ({product,handleRemove}) => {
    
    const {key, name, price, quantity, seller} = product;
    return (
        <div className="ordered-item">
            <h4><Link to={'/product/'+key}>{name}</Link></h4>
            <h3>${price}</h3>
            <p><small>Sold by: {seller}</small></p>
            <h3>Quantity: {quantity}</h3>
            <button onClick={() => handleRemove(key)} className="color-btn">Remove</button>
        </div>
    );
};

export default OrderedItem;