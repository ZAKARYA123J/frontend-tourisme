import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import sofitel from '../assets/sofitel.jpg';
import riu from '../assets/riu.jpg';
import dunes from '../assets/dunes.jpg';
import riad from '../assets/riad.jpg';
import zephyr from '../assets/zephyr.jpg';
import dominium from '../assets/dominium.jpg';
import argana from '../assets/argana.jpg';
import sahara from '../assets/sahara.jpg';
import mabrouk from '../assets/mabrouk.jpg';
import theview from '../assets/theview.jpg';


const Hotels = () =>{
 const [Hotels,setHotels] = useState([
    
        {
            id: 1,
        name:' Sofitel Agadir Royal Bay Resort', 
        date:': Open year-round', 
        description:' A 5-star luxury hotel located on Agadir’s beachfront. Offers spacious rooms, multiple pools, a spa, and fine dining options. Perfect for a luxurious stay.',
        price:'per night 1,800 ', 
        image:sofitel ,
        isFavorite: false ,

        },
        { 
            id: 2,
            name:'Riu Palace Tikida Agadir', 
            date:'Open year-round', 
            description:' A 5-star all-inclusive resort with gourmet dining, pools, and entertainment. Ideal for a hassle-free vacation.', 
            price:'per night 1,500 ', 
            image: riu,
            isFavorite: false ,
            },
            { 
                id: 3,
                name: 'Les Dunes d’Or', 
                date:' Open year-round', 
                description:'A romantic hotel with sea views, private balconies, and a serene atmosphere. Perfect for couples.',
                price:'per night 1,000', 
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
        {
            id: 5,
        name:'Zephyr AgadirOpens in new window', 
        date:': Open year-round', 
        description:' deally set in the Founty district of Agadir, Zephyr Agadir is set 1.8 km from Agadir Beach, 3.2 km from Amazighe Heritage Museum and 3.4 km from Medina Polizzi..',
        price:'per night 1,800 ', 
        image:zephyr ,
        isFavorite: false ,

        },
        { 
            id: 6,
            name:'The View Agadir', 
            date:'Open year-round', 
            description:'Luxury hotel on the beach, with outdoor pool', 
            price:'per night 2520 ', 
            image: theview ,
            isFavorite: false ,
            },
            { 
                id: 7,
                name: 'Hotel Argana', 
                date:' Open year-round', 
                description:'private beach and outdoor pool, near Royal Palace',
                price:'per night 2830', 
                image: argana,
                isFavorite: false 
                },
                {
        id: 8,
        name:'dominium Hotel', 
        date:' Open year-round', 
        description:'Hotel with 2 restaurants, near Agadir Beach',
        price:'per day 980 ', 
        image: dominium ,
        isFavorite: false ,
        },
        {
            id: 9,
            name:'Sahara Hotel Agadir', 
            date:' Open year-round', 
            description:'Elegant adults-only beach hotel with outdoor pool',
            price:'per day 1320', 
            image: sahara ,
            isFavorite: false ,
            }, 
            {
                id: 10,
                name:'Mabrouk Hotel And Suites', 
                date:' Open year-round', 
                description:' Beach fun in outdoor pool, near Souk El Had',
                price:'per night 1010 ', 
                image: mabrouk ,
                isFavorite: false ,
                }, 

 ])
 const toggleFavorite = (id) => {
    setHotels(Hotels.map((Hotel) => Hotel.id === id ? { ...Hotel, isFavorite: !Hotel.isFavorite } : Hotel));
};

return (
    <div className="container mx-auto  p-8">
        <h1 className="text-4xl font-bold text-blue-800 p-11 mb-8">Hotels</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Hotels.map((Hotel) => (
                <div key={Hotel.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <img src={Hotel.image} alt={Hotel.name} className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
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




