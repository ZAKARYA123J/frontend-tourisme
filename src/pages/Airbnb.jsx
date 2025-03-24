import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import penthouse from '../assets/penthouse.jpg';
import villa from '../assets/villa.jpg';
import house from '../assets/house.jpg';
import suite from '../assets/suite.jpg';
import renttam from '../assets/renttam.jpg'
import loft from '../assets/loft.jpg'
import condo from '../assets/condo.jpg'
import aitbihi from '../assets/aitbihi.jpg'
import villaimi from '../assets/villaimi.jpg'
import rentaltagha from '../assets/rentaltagha.jpg'

const Airbnbs = () =>{
 const [Airbnbs,setAirbnbs] = useState([
    
        {
            id: 1,
        name:' Luxury Royal Suite W/Pool', 
        date:' Available year-round', 
        description:' A stylish apartment with a balcony overlooking the beach. Fully equipped kitchen and modern amenities.',
        price:'per night 527 ', 
        image:suite,
        isFavorite: false ,

        },
        { 
            id: 2,
            name:'Luxurious house near the Grand Bazaar "Souk El Had" ', 
            date:'Available year-round', 
            description:' A cozy studio in the city center, close to shops, restaurants, and attractions. Perfect for solo travelers or couples.',
            price:'per night 337 ', 
            image: house,
            isFavorite: false ,
            },
            { 
                id: 3,
                name: 'Entire villa in Agadir', 
                date:' Available year-round', 
                description:' A luxurious penthouse with stunning views of the ocean and city. Features a modern kitchen and spacious living area.',
                price:'per night 2,052', 
                image: villa,
                isFavorite: false 
                },
                {
        id: 4,
        name:'Penthouse Ocean View', 
        date:' Open year-round', 
        description:' A sustainable cottage surrounded by nature, close to Paradise Valley. Perfect for eco-conscious travelers.',
        price:'per night 400 ', 
        image: penthouse ,
        isFavorite: false ,
        
        },
        {
            id: 5,
            name:'Entire rental unit in Tamraght', 
            date:' Open year-round', 
            description:' Discover the authentic charm of our Berber suite, an open space designed for your comfort and relaxation.',
            price:'per night 313 ', 
            image: renttam ,
            isFavorite: false ,
            
            },
            {
                id: 6,
                name:'Entire loft in Taghazout', 
                date:' Open year-round', 
                description:' Healthy Sea Salt Air! The comfortable private apartment is located in the heart of the charming Berber fishing village of Taghazout and offers the greatest views over the Ocean and its waves. It lies in the bay of town and is surrounded by lovely sandy beaches. It is done up in typical Moroccan design, with use of traditional materials.',
                price:'per night 561  ', 
                image: loft ,
                isFavorite: false ,
                
                },
                {
                    id: 7,
                    name:'Entire condo in Taghazout', 
                    date:' Open year-round', 
                    description:' Spacious and cozy apartment in Taghazout Bay – Amazing view and absolute calm 🌅',
                    price:'per night 899 ', 
                    image: condo ,
                    isFavorite: false ,
                    
                    },
                    {
                        id: 8,
                        name:'rental unit in Ait Bihi', 
                        date:' Open year-round', 
                        description:'Perched on the heights of Taghazout, just 1.5 km (5 min drive) from the beaches and village, our apartment offers a peaceful hideaway in the heart of unspoiled nature.',
                        price:'per night 540  ', 
                        image: aitbihi ,
                        isFavorite: false ,
                        
                        },
                        {
                            id: 9,
                            name:'Entire villa in Imi Ouaddar', 
                            date:' Open year-round', 
                            description:' Beachfront villa in Imi ouadar near Agadir almost 27km',
                            price:'per night 1,044 ', 
                            image: villaimi ,
                            isFavorite: false ,
                            
                            },
                            {
                                id: 10,
                                name:'Entire rental unit in Taghazout', 
                                date:' Open year-round', 
                                description: "Whether you're seeking a peaceful escape or an adventure-filled getaway, this second-floor apartment in Taghazout promises a comfortable stay and a chance to experience the beauty of this coastal haven.",
                                price:'per night 430  ', 
                                image: rentaltagha ,
                                isFavorite: false ,
                                
                                },
            

 ])
 const toggleFavorite = (id) => {
    setAirbnb(Airbnbs.map((Airbnb) => Airbnb.id === id ? { ...Airbnb, isFavorite: !Airbnb.isFavorite } : Airbnb));
};

return (
    <div className="container mx-auto  p-8">
        <h1 className="text-4xl font-bold text-blue-800 p-11 mb-8">Airbnbs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Airbnbs.map((Airbnb) => (
                <div key={Airbnb.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <img src={Airbnb.image} alt={Airbnb.name} className="Airbnb-image" />
                    <h3>{Airbnb.name}</h3>
                    <p>{Airbnb.description}</p>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                        </h2>
                        <button onClick={() => toggleFavorite(Airbnb.id)} className="text-red-500 hover:text-red-600">
                            {Airbnb.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
                        </button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">Date:</span> {Airbnb.date}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Price:</span> {Airbnb.price} MAD
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Airbnbs;




