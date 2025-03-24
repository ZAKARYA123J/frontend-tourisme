import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import jetskim from '../assets/jetskim.jpg';
import quadaga from '../assets/quadaga.jpg';
import hiking from '../assets/hiking.jpg';
import balloon from '../assets/balloon.jpg';

const Adventures = () =>{
 const [adventures,setadventures] = useState([
    
        {
            id: 1,
        name:' Jet Ski Adventure', 
        date:'Available daily', 
        description:'Ride the waves on a jet ski along Agadir’s beaches. A thrilling way to experience the Atlantic Ocean.',
        price:'for 15 min 300 ', 
        image: jetskim ,
        isFavorite: false ,

        },
        { 
            id: 2,
            name:'Quad Biking in the Desert', 
            date:'Available daily', 
            description:' Explore Agadir’s rugged landscapes, sand dunes, and Berber villages on a quad bike. Perfect for adventure seekers.', 
            price:'for 1 hour starting at 400 ', 
            image: quadaga ,
            isFavorite: false ,
            },
            { 
                id: 3,
                name: 'Hiking in the Atlas Mountains', 
                date:'Available year-round', 
                description:' Explore scenic trails in the Atlas Mountains, with options for all skill levels. Enjoy breathtaking views and Berber culture.',
                price:'per person 500', 
                image: hiking ,
                isFAvorite: false 
                },
                {
        id: 4,
        name:'Hot Air Balloon Ride', 
        date:'Available year-round (weather-dependent)', 
        description:' Enjoy panoramic views of Agadir, the ocean, and the desert from a hot air balloon.',
        price:'per person  1,500 ', 
        image: balloon,
        isFavorite: false ,
        },
            

 ])
 const toggleFavorite = (id) => {
    setadventures(adventures.map((Adventure) => Adventure.id === id ? { ...Adventure, isFavorite: !Adventure.isFavorite } : Adventure));
};

return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">adventures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adventures.map((Adventure) => (
                <div key={Adventure.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <img src={Adventure.image} alt={Adventure.name} className="Adventure-image" />
                    <h3>{Adventure.name}</h3>
                    <p>{Adventure.description}</p>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                        </h2>
                        <button onClick={() => toggleFavorite(Adventure.id)} className="text-red-500 hover:text-red-600">
                            {Adventure.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
                        </button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">Date:</span> {Adventure.date}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Price:</span> {Adventure.price} MAD
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Adventures;




