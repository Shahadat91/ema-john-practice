import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    //console.log(props);
    // const {product,handleAddToCart} = props;
    const {name, img, seller, price,ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p>Model: {name}</p>
            <p>Brand Name: {seller}</p>
            <p>Price: ${price}</p>
            <p>Ratings: {ratings} Stars</p>

            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            
            
        </div>
    );
};

export default Product;