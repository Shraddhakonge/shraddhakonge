import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderForm = ({ userId, medicineId, totalAmount }) => {
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/order/place', {
        userId,
        medicines: [medicineId],
        deliveryAddress,
        totalAmount,
      });
      toast.success('Order placed successfully!');
      console.log(response.data);
    } catch (err) {
      toast.error('Error placing order');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
        placeholder="Delivery Address"
        required
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;

