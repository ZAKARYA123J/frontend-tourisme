import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import intermarath from '../assets/intermarath.jpg';
import nightrun from '../assets/nightrun.jpg';
import halfmarath from '../assets/halfmarath.jpg';
import valleymarath from '../assets/valleymarath.jpg';
import semi from '../assets/semi.jpg';
import marathon25 from '../assets/marathon25.jpg';
import ultra from '../assets/ultra.jpg';

const marathons = () =>{
 const [marathons,setmarathons] = useState([
    
               {
        id: 4,
        name:'Agadir Night Runn', 
        date:'Usually held in August', 
        description:' A unique nighttime running event along Agadir’s illuminated beaches and promenades. Choose from 5K, 10K, or half marathon distances.',
        price:'Registration starts at 150 MAD', 
        image: nightrun ,
        isFavorite: false ,
        }, 
        { 
            id: 2,
            name:'Agadir Half Marathon', 
            date:'Usually held in March', 
            description:' A half marathon event with routes showcasing Agadir’s beautiful beaches and cityscapes. Perfect for runners looking for a shorter distance.', 
            price:'Registration starts at 150 MAD..', 
            image: halfmarath ,
            isFavorite: false ,
            },
            { 
                id: 3,
                name: 'Souss Valley Marathon', 
                date:'Typically held in February', 
                description:' A marathon that takes runners through the lush Souss Valley, known for its argan trees and agricultural landscapes.',
                price:'Registration starts at 250 MAD.', 
                image: valleymarath,
                isFAvorite: false 
                },
        
        {
            id: 5,
            name: "Semi-Marathon Agadir",
            date: "May 11, 2025",
            description: "A popular half-marathon event in Agadir featuring a 10 km and a 21.1 km race. The event promotes sports tourism and highlights local culture with a scenic route.",
            price: "Varies, usually around 100-200 MAD depending on registration time",
            image: semi,
            isFavorite: false
          },
          {
            id: 1,
        name:' Agadir International Marathon', 
        date:'Usually held in December', 
        description:'A popular annual marathon that attracts runners from around the world. Choose from full marathon, half marathon, or 10K races. The route offers stunning views of Agadir’s coastline and landscapes.',
        price:' Registration starts at 200 ', 
        image: intermarath ,
        isFavorite: false ,

        },
          {
            id: 6,
            name: "Agadir International Marathon 2025",
            date: "Fall 2025 (exact date TBD)",
            description: "The Agadir International Marathon is an annual marathon event attracting runners from around the world. The event also includes a 10 km race and a 5 km fun run.",
            price: "Varies, typically around 150-300 MAD depending on race category",
            image: marathon25,
            isFavorite: false
          },
                {
        id: 7,
        name:'Agadir Ultra Marathon', 
        date:'November 2025', 
        description:'This ultra marathon will challenge runners with long-distance endurance across diverse terrains including coastal roads and paths through nature reserves.',
        price:' Registration typically opens in the months leading to the race', 
        image: ultra ,
        isFavorite: false ,
        },
           
            

 ])
 const toggleFavorite = (id) => {
    setmarathons(marathons.map((Marathon) => Marathon.id === id ? { ...Marathon, isFavorite: !Marathon.isFavorite } : Marathon));
};

return (
    <div className="container mx-auto  p-8">
        <h1 className="text-4xl font-bold text-blue-800 p-11 mb-8">marathons</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marathons.map((Marathon) => (
                <div key={Marathon.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <img src={Marathon.image} alt={Marathon.name} className="Marathon-image" />
                    <h3>{Marathon.name}</h3>
                    <p>{Marathon.description}</p>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                        </h2>
                        <button onClick={() => toggleFavorite(Marathon.id)} className="text-red-500 hover:text-red-600">
                            {Marathon.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
                        </button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">Date:</span> {Marathon.date}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Price:</span> {Marathon.price} MAD
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default marathons;




