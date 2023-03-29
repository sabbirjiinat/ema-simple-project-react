import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
   

    const { img, name, price, ratings, seller } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 className='product-name'>{name}</h5>
            <div className='product-info'>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} star</p>
         </div>
            <button onClick={() => handleAddToCart(props.product)} className='add-to-cart-btn'>
                Add to Cart
            <span className='shopping-cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></span>
            </button>
        </div>
    );
};

export default Product;