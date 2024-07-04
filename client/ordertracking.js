

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(`/api/order/user/${userId}`);
      setOrders(response.data);
    };
    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h1>Your Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id} - Status: {order.status}
            <ul>
              {order.medicines.map((med) => (
                <li key={med._id}>{med.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
