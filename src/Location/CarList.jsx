import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = ({ categoryId }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        if (categoryId) {
            axios.get(`http://127.0.0.1:8000/api/cars?category_id=${categoryId}`)
                .then(response => setCars(response.data))
                .catch(error => console.log(error));
        }
    }, [categoryId]);

    return (
        <div>
            <h3>Voitures disponibles</h3>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.marque} {car.modele} - {car.transmission}
                        <button>Réserver</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
