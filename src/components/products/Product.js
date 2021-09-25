import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    // console.log(props.product);
    const { name, img, seller, price, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <img src={img} alt="" />

            <div>
                <h4 className="product-name">{name}</h4>
                <div className="display-style">
                    <div>
                        <p><small>by:{seller}</small></p>
                        <p>{price}</p>
                        <p><small>only {stock} left in stock - order soon

                        </small>
                        </p>
                    </div>
                    <div className="rating-style">
                        <Rating className="star"
                            initialRating={props.product.star}

                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"></Rating>
                        <h3>Features</h3>
                    </div>

                </div>

                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-purchase">{element} add to cart</button>

            </div>

        </div>
    );
};

export default Product;