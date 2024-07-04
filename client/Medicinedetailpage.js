import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MedicineDetail = ({ match }) => {
  const [medicine, setMedicine] = useState(null);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchMedicine = async () => {
      const response = await axios.get(`/api/medicine/${match.params.id}`);
      setMedicine(response.data);
    };
    const fetchStores = async () => {
      const response = await axios.get(`/api/medicine/${match.params.id}/availability`);
      setStores(response.data);
    };
    fetchMedicine();
    fetchStores();
  }, [match.params.id]);

  if (!medicine) return <div>Loading...</div>;

  return (
    <div>
      <h1>{medicine.name}</h1>
      <p>{medicine.description}</p>
      <h3>Alternatives</h3>
      <ul>
        {medicine.alternatives.map((alt) => (
          <li key={alt._id}>{alt.name}</li>
        ))}
      </ul>
      <h3>Availability in Local Stores</h3>
      <ul>
        {stores.map((store) => (
          <li key={store._id}>
            {store.name} - {store.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineDetail;
