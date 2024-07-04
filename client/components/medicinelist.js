import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get('/api/medicine');
        setMedicines(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMedicines();
  }, []);

  return (
    <div>
      <h1>Medicine List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {medicines.map((medicine) => (
            <li key={medicine._id}>
              {medicine.name} - {medicine.description} - ${medicine.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicineList;