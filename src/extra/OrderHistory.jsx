import React, { useEffect, useState } from 'react';
import { API_URL } from '../api';
import TopBar from '../components/TopBar';


const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${API_URL}/order/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError('Failed to fetch orders');
        console.error('Error:', error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <>
    <TopBar/>
    <h2 className="order-history-title">Order History</h2>
    <div className="order-history-container">
      {error && <p className="text-danger">{error}</p>}
      <div className="order-list">
        {orders.map((order,index) => (
          <div className="order-card" key={order.id||index}>
            <h4 className="order-id">Order ID: {order.orderId}</h4>
            <p className="order-total">Total: ₹{order.total}</p>
            <p className="order-date">Date: {new Date(order.orderDate).toLocaleString()}</p>
            <div className="order-items">
              <ul>
                {order.items.map((item, index) => (
                  <li className="order-item" key={index}>
                    <p className="product-name">Product: {item.productName}</p>
                    <p className="product-quantity">Quantity: {item.quantity}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default OrderHistory;
