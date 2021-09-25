import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../products/Product';
import './Shop.css';

const Shop = () => {
    console.log('produc API called');
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                console.log('Products received');
            });

    }, [])
    useEffect(() => {
        console.log('local storag called')
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }
    }, [products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        //save to local storage
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);

    }
    return (
        <div>
            <div className="search-container">
                <input className="input-text"
                    type="text"
                    onChange={handleSearch}
                    placeholder="search product" />

            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}

                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Shop;