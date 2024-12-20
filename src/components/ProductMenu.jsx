{/*import React, { useState, useEffect } from "react";
import { API_URL } from "../api"; // Ensure this path is correct
import { useParams,useNavigate} from "react-router-dom";



const ProductMenu = () => {
    const [products, setProducts] = useState([]);
    const { firmId, firmName } = useParams();
    const [activeRegion, setActiveRegion] = useState('all');
    const navigate = useNavigate();
    const handleSelect = (path) => {
        navigate(path); 
      };

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
                body: JSON.stringify({ productId, userId,firmName,firmId})
            });
            const data = await response.json();
            if (response.ok) {
                alert('Product added to cart');
                navigate('/cart')
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
    }
    const filterHandler = ( region) => {
        setActiveCategory(region);
    };

    return (
       
             <div className="firm-container">
            <h1 className="firm-title">{firmName}</h1>
            <div className="filter-buttons">
                <button onClick={() => filterHandler("All", 'all')} className={`filter-btn ${activeRegion === 'all' ? 'active' : ''}`}>All</button>
                <button onClick={() => filterHandler("veg",'veg')} className={`filter-btn ${activeRegion === 'veg' ? 'active' : ''}`}>Veg</button>
                <button onClick={() => filterHandler("non-veg")} className={`filter-btn ${activeRegion === 'non-veg' ? 'active' : ''}`}>Nonveg</button>
                <button onClick={() => filterHandler("chicken")} className={`filter-btn ${activeRegion === 'chicken' ? 'active' : ''}`}>Chicken</button>
                <button onClick={() => filterHandler("mutton")} className={`filter-btn ${activeRegion === 'mutton' ? 'active' : ''}`}>Mutton</button>
                <button onClick={() => filterHandler("fish")} className={`filter-btn ${activeRegion === 'fish' ? 'active' : ''}`}>Fish</button>
                <button onClick={() => filterHandler("biriyanies")} className={`filter-btn ${activeRegion === 'biriyanies' ? 'active' : ''}`}>biriyanies</button>
                <button onClick={() => filterHandler("tiffins",'tiffins')} className={`filter-btn ${activeRegion === 'tiffins' ? 'active' : ''}`}>tiffins</button>
                <button onClick={() => filterHandler("roties")} className={`filter-btn ${activeRegion === 'roties' ? 'active' : ''}`}>roties</button>
                <button onClick={() => filterHandler("desserts&icecreams")} className={`filter-btn ${activeRegion === 'desserts&icecreams' ? 'active' : ''}`}>desserts&icecreams</button>
                <button onClick={() => filterHandler("smoothies")} className={`filter-btn ${activeRegion === 'smoothies' ? 'active' : ''}`}>smoothies</button>
                <button onClick={() => filterHandler("meals")} className={`filter-btn ${activeRegion === 'meals' ? 'active' : ''}`}>meals</button>
                </div>
            <section className="product-container">
                
                <div className="product-list">
                    {products.map((vendor) => vendor.product.map((item) => {
                    if (selectedRegion === "All" || item.region.includes(selectedRegion.toLowerCase())) {
                        return (
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
                                    <p className="product-description">{firmId}</p>
                                    <p className="product-description">{firmName}</p>
                                    <div className="button-group">
                                        <button
                                            className="button primary"
                                            
                                            onClick={() => addToCart(item._id) }
                                       
                                        >
                                            Add to cart
                                           
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
                        )}}
                         
                    ))}
                
                </div>
            </section>
            </div>
           
    );

}
export default ProductMenu;*/}

import React, { useState, useEffect } from "react";
import { API_URL } from "../api"; // Ensure this path is correct
import { useParams, useNavigate } from "react-router-dom";

const ProductMenu = () => {
    const [products, setProducts] = useState([]);
    const { firmId, firmName } = useParams();
    const [activeRegion, setActiveRegion] = useState('all');
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API_URL}/product/${firmId}/products`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const newProductData = await response.json();
                setProducts(newProductData.products || []);
            } catch (error) {
                console.error("Product failed to fetch", error);
            }
        };

        fetchProducts();
    }, [firmId]);

    const addToCart = async (productId) => {
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
                body: JSON.stringify({ productId, userId, firmName, firmId })
            });
            const data = await response.json();
            if (response.ok) {
                alert('Product added to cart');
                navigate('/cart');
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Failed to add product to cart');
            console.error('Error:', error);
        }
    };

    const addToWishlist = async (productId) => {
        if (!userId) {
            console.error("User not authenticated");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/wishlist/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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

    const filterHandler = (region) => {
        setActiveRegion(region);
    };

    return (
        <div className="firm-container">
            <h1 className="firm-title">{firmName}</h1>
            <div className="filter-buttons">
                {['all', 'veg', 'non-veg', 'chicken', 'mutton', 'fish', 'biriyanies', 'tiffins', 'roties', 'desserts&icecreams', 'smoothies', 'meals'].map((region) => (
                    <button
                        key={region}
                        onClick={() => filterHandler(region)}
                        className={`filter-btn ${activeRegion === region ? 'active' : ''}`}
                    >
                        {region}
                    </button>
                ))}
            </div>
            <section className="product-container">
                
                <div className="product-list">
                    {products.map((item) =>  {
                    if (activeRegion === "all" || item.region.includes(activeRegion.toLowerCase())) {
                        return (
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
                                    <p className="product-description">{firmId}</p>
                                    <p className="product-description">{firmName}</p>
                                    <div className="button-group">
                                        <button
                                            className="button primary"
                                            
                                            onClick={() => addToCart(item._id) }
                                       
                                        >
                                            Add to cart
                                           
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
                        )}}
                         
                    )}
                
                </div>
            </section>
        </div>
    );
};

export default ProductMenu;

