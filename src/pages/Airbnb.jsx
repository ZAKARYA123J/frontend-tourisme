import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import sofitel from '../assets/sofitel.jpg';
import riu from '../assets/riu.jpg';
import dunes from '../assets/dunes.jpg';
import riad from '../assets/riad.jpg';

const airbnbs = () =>{
 const [Airbnbs,setAirbnbs] = useState([
    
        {
            id: 1,
        name:'  Modern Apartment with Sea View', 
        date:' Available year-round', 
        description:' A stylish apartment with a balcony overlooking the beach. Fully equipped kitchen and modern amenities.',
        price:'per night 500 ', 
        image:sofitel ,
        isFavorite: false ,

        },
        { 
            id: 2,
            name:' Central Agadir Studio', 
            date:'Available year-round', 
            description:' A cozy studio in the city center, close to shops, restaurants, and attractions. Perfect for solo travelers or couples.',
            price:'per night 300 ', 
            image: riu,
            isFavorite: false ,
            },
            { 
                id: 3,
                name: 'Penthouse with Panoramic Views', 
                date:' Available year-round', 
                description:' A luxurious penthouse with stunning views of the ocean and city. Features a modern kitchen and spacious living area.',
                price:'per night 1,500', 
                image: dunes,
                isFavorite: false 
                },
                {
        id: 4,
        name:'Hotel Riad Villa Blanche', 
        date:' Open year-round', 
        description:' A traditional Moroccan riad with intricate decor, a courtyard, and authentic cuisine. Located in the heart of Agadir.',
        price:'per day 700 ', 
        image: riad ,
        isFavorite: false ,
        },
            

 ])
 const toggleFavorite = (id) => {
    setHotels(Hotels.map((Hotel) => Hotel.id === id ? { ...Hotel, isFavorite: !Hotel.isFavorite } : Hotel));
};

return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Hotels</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Hotels.map((Hotel) => (
                <div key={Hotel.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <img src={Hotel.image} alt={Hotel.name} className="Hotel-image" />
                    <h3>{Hotel.name}</h3>
                    <p>{Hotel.description}</p>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                        </h2>
                        <button onClick={() => toggleFavorite(Hotel.id)} className="text-red-500 hover:text-red-600">
                            {Hotel.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
                        </button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">Date:</span> {Hotel.date}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Price:</span> {Hotel.price} MAD
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Hotels;




