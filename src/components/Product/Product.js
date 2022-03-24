import React from 'react';
import './Product.css'

const Product = (props) => {
    //console.log(props);
    const {name, img, seller, price,ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p>Model: {name}</p>
            <p>Brand Name: {seller}</p>
            <p>Price: ${price}</p>
            <p>Ratings: {ratings} Stars</p>

            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;