import React, { useState, useEffect } from "react";
import { API_URL } from "../api"; // Ensure this path is correct
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";


const ProductMenu = () => {
    const [products, setProducts] = useState([]);
    const { firmId, firmName } = useParams();

    const productHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/product/${firmId}/products`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const newProductData = await response.json();
            setProducts(newProductData.products);
        } catch (error) {
            console.error("Product failed to fetch", error);
        }
    };

    useEffect(() => {
        productHandler();
    }, [firmId]);

    const addToCart = async (productId) => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error("User not authenticated");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, userId })
            });
            const data = await response.json();
            if (response.ok) {
                alert('Product added to cart');
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Failed to add product to cart');
            console.error('Error:', error);
        }
    };

    const addToWishlist = async (productId) => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error("User not authenticated");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/wishlist/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, userId })
            });
            const data = await response.json();
            if (response.ok) {
                alert('Product added to wishlist');
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Failed to add product to wishlist');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <TopBar />
            <div className="product-container">
                <h3 className="firm-title">{firmName}</h3>
                <div className="product-list">
                    {products.map((item) => (
                        <div key={item._id} className="product-card">
                            <div className="product-card-inner">
                                <img
                                    src={`${API_URL}/uploads/${item.image}`}
                                    alt={item.productName}
                                    className="product-img"
                                />
                                <div className="product-info">
                                    <h5 className="product-name"><strong>{item.productName}</strong></h5>
                                    <p className="product-price">₹{item.price}</p>
                                    <p className="product-description">{item.description}</p>
                                    <div className="button-group">
                                        <button
                                            className="button primary"
                                            onClick={() => addToCart(item._id)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            className="button secondary"
                                            onClick={() => addToWishlist(item._id)}
                                        >
                                            Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductMenu;
