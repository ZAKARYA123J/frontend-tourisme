import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import intermarath from '../assets/intermarath.jpg';
import volleyball from '../assets/volleyball.jpg';
import halfmarath from '../assets/halfmarath.jpg';
import valleymarath from '../assets/valleymarath.jpg';

const marathons = () =>{
 const [marathons,setmarathons] = useState([
    
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
        id: 4,
        name:'Agadir Night Runn', 
        date:'Usually held in August', 
        description:' A unique nighttime running event along Agadir’s illuminated beaches and promenades. Choose from 5K, 10K, or half marathon distances.',
        price:'Registration starts at 150 MAD', 
        image: volleyball ,
        isFavorite: false ,
        },
            

 ])
 const toggleFavorite = (id) => {
    setmarathons(marathons.map((Marathon) => Marathon.id === id ? { ...Marathon, isFavorite: !Marathon.isFavorite } : Marathon));
};

return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">marathons</h1>
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




