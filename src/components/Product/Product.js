import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props.product);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div className="product-thumb">
                <img src={img} alt=""/>
            </div>
            <div className="description">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <h3>${price}</h3>
                <p><small>only {stock}  left in stock - order soon</small></p>
                <button 
                className="add-cart-btn"
                onClick={() => props.updateHandleCart(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;