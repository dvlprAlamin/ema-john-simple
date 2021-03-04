import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className='product'>
            <div className="product-thumb">
                <img src={img} alt=""/>
            </div>
            <div className="description">
                <h4><Link to={'/product/'+key}>{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                <h3>${price}</h3>
                <p><small>only {stock}  left in stock - order soon</small></p>
                {props.showAddToCart && <button 
                className="color-btn"
                onClick={() => props.updateHandleCart(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;