import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h3>Catégories</h3>
            <ul>
                {categories.map(category => (
                    <li key={category.id} onClick={() => onSelectCategory(category.id)}>
                        {category.nom}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
