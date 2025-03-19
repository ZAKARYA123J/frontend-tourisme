import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import kasbah from '../assets/kasbah.jpg';
import Tiznit from '../assets/Tiznit.jpg';
import natpark from '../assets/natpark.jpg';

const heritages = () =>{
 const [heritages,setheritages] = useState([
    {
        id: 1,
        name:' Agadir Kasbah Cultural Tour', 
        Availability:' Year-round', 
        description:'A guided historical tour of the ancient Kasbah of Agadir, offering insights into the city’s history and heritage.',
        price:'per person 200-500 ', 
        image: kasbah ,
        isFavorite: false ,
        },
        {
            id: 2,
        name:'Tiznit & Silver Craftsmanship Tour', 
        Availability:'November 2025', 
        description:' is a fun and easy way to explore the charming town of Tiznit, famous for its beautiful silver jewelry. You’ll walk through the old town, visit local markets, and watch talented artisans create stunning handmade silver pieces. It’s a great chance to learn about Moroccan culture, shop for unique souvenirs, and enjoy the town’s peaceful atmosphere. Perfect for anyone who loves history, crafts, or just wants a relaxing day out!.',
        price:'per person 500 ', 
        image: Tiznit ,
        isFavorite: false ,

        },
        { 
            id: 3,
            name:' Souss-Massa National Park Eco-Tour', 
            Availability:'year-round', 
            description:' A nature and cultural tour showcasing Amazigh traditions and wildlife conservation in the region.', 
            price:'per person 600', 
            image: natpark,
            isFavorite: false ,
            },
            

 ])
 const toggleFavorite = (id) => {
    setheritages(heritages.map((heritage) => heritage.id === id ? { ...heritage, isFavorite: !heritage.isFavorite } : heritage));
};

return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">heritages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heritages.map((heritage) => (
                <div key={heritage.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <img src={heritage.image} alt={heritage.name} className="heritage-image" />
                    <h3>{heritage.name}</h3>
                    <p>{heritage.description}</p>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                        </h2>
                        <button onClick={() => toggleFavorite(heritage.id)} className="text-red-500 hover:text-red-600">
                            {heritage.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
                        </button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">Availability:</span> {heritage.Availability}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Price:</span> {heritage.price} MAD
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default heritages;




