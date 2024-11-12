import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';


const Cart = () => {
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const userId = localStorage.getItem("userId");
    const userName=localStorage.getItem('userName');
    const address=localStorage.getItem('userAddress');

    const fetchCart = async () => {
        try {
            const response = await fetch(`${API_URL}/cart/${userId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const validCartItems = data.cart.filter(item => item.productId !== null);
            setCart(validCartItems);
            calculateTotal(validCartItems);
        } catch (error) {
            console.error('Failed to fetch cart', error);
        }
    };

    const addOrder = async () => {
        try {
            const response = await fetch(`${API_URL}/order/add`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                    items: cart.map((item) => ({
                        productId: item.productId._id,
                        productName: item.productId.productName,
                        quantity: item.quantity,
                        price: item.productId.price
                    })),
                    total: totalAmount,
                })
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data);
                alert("Order placed successfully");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.productId._id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        calculateTotal(updatedCart);
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.productId._id === productId) {
                return { ...item, quantity: Math.max(1, item.quantity - 1) };
            }
            return item;
        });
        setCart(updatedCart);
        calculateTotal(updatedCart);
    };

    const calculateTotal = (cartItems) => {
        let total = 0;
        cartItems.forEach(item => {
            if (item.productId && item.productId.price) {
                total += item.productId.price * item.quantity;
            }
        });
        setTotalAmount(total);
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const deleteCart = async (productId) => {
        try {
            const response = await fetch(`${API_URL}/cart/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, userId })
            });
            if (response.ok) {
                if (confirm("Are you sure you want to delete?")) {
                    const updatedCart = cart.filter(product => product.productId._id !== productId);
                    setCart(updatedCart);
                    calculateTotal(updatedCart);
                    alert("Product deleted successfully");
                }
            } else {
                const errorData = await response.json();
                console.error('Failed to delete product:', errorData.message);
                alert('Failed to delete product');
            }
        } catch (error) {
            console.error('Failed to delete product:', error);
            alert('Failed to delete product');
        }
    };

    return (
        <div className="cart-container">
            <h1>Your Cart [{cart.length}]</h1>
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.productId._id} className="cart-item">
                        <div className="cart-item-inner">
                            <img
                                src={`${API_URL}/uploads/${item.productId.image}`}
                                alt={item.productId.productName}
                                className="cart-item-img"
                            />
                            <div className="cart-item-info">
                                <h3 className="cart-item-title">{item.productId.productName}</h3>
                                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                <p className="cart-item-price">Price: ₹{item.productId.price}</p>
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={() => increaseQuantity(item.productId._id)}>+</button>
                                    <button className="quantity-btn" onClick={() => decreaseQuantity(item.productId._id)}>-</button>
                                </div>
                                <button className="remove-btn" onClick={() => deleteCart(item.productId._id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1>SUMMARY</h1>
            <div className="summary">
                {cart.map((item) => (
                    <div key={item.productId._id} className="summary-item">
                        <h3>Product: {item.productId.productName}</h3>
                        <h3>Quantity: {item.quantity}</h3>
                        <h3>Price: ₹{item.productId.price}</h3>
                    </div>
                ))}
            </div>
            <h2>Total Amount: ₹{totalAmount}</h2>
            <p>Hey!{userName}<br/>
                            Here is your delivery address:=<h2>{address}</h2>  <br/>Want to change click here<button className='addChange'>change</button></p>
            <button className="proceed-btn" onClick={addOrder}>Proceed</button>
            
        </div>
       

    );
};

export default Cart;
