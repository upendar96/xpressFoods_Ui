import React, { useEffect, useState } from 'react';
import { API_URL } from '../api'; 
import { FaArrowLeft } from 'react-icons/fa';

const MyWishlist = () => {
    const [wishlist, setWishlist] = useState("");
    const userId=localStorage.getItem("userId");
    const fetchWishlist = async () => {
        try {
            const response = await fetch(`${API_URL}/wishlist/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist');
            }
            const data = await response.json();
            setWishlist(data.wishlist); 
        } catch (error) {
            console.error('Failed to fetch wishlist', error);
            setProducts([]); 
        }
    };

    useEffect(() => {
        fetchWishlist();
    }, []);

    return (
        <div className="wishlist-container">
            <button className="back-button">
                <FaArrowLeft />
            </button>
            <div>
            <h1>My Wishlist</h1>
            <div className='wishlistItems'>
                {wishlist.length > 0 ? (
                    wishlist.map(item => (
                        <div key={item.id} className='wishlistItem'>
                            
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No items in wishlist</p>
                )}
            </div>
        </div>
                    
                       
               
            </div>
       
    );
};

export default MyWishlist;
