import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import sifel from '../assets/sifel.jpg';
import eresc from '../assets/eresc.jpg';
import agtt from '../assets/agtt.jpg';

const Exhibitions = () =>{
 const [exhibitions,setexhibitions] = useState([
    {
        id: 1,
        name:' Sifel Morocco (International Exhibition for Fruits & Vegetables)', 
        date:'November 2025', 
        description:'A major agricultural exhibition focusing on Morocco’s fruit and vegetable industry, featuring international exhibitors.',
        price:'Free', 
        image: sifel ,
        isFavorite: false ,
        },
        {
            id: 2,
        name:'International Renewable and Sustainable Energy Conference (IRSEC)', 
        date:'November 2025', 
        description:'A global event dedicated to advancements in renewable energy and sustainable development.',
        price:'Paid entry (varies)', 
        image: eresc ,
        isFavorite: false ,

        },
        { 
            id: 3,
            name:'Agadir Travel & Tourism Expo', 
            date:'October 2025', 
            description:' A travel fair showcasing Morocco’s tourism offerings, including cultural heritage sites, eco-tourism, and adventure travel.', 
            price:'Free for visitors', 
            image: agtt ,
            isFavorite: false ,
            },
            

 ])
 const toggleFavorite = (id) => {
    setexhibitions(exhibitions.map((exhibition) => exhibition.id === id ? { ...exhibition, isFavorite: !exhibition.isFavorite } : exhibition));
};

return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">exhibitions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitions.map((exhibition) => (
                <div key={exhibition.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <img src={exhibition.image} alt={exhibition.name} className="exhibition-image" />
                    <h3>{exhibition.name}</h3>
                    <p>{exhibition.description}</p>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                        </h2>
                        <button onClick={() => toggleFavorite(exhibition.id)} className="text-red-500 hover:text-red-600">
                            {exhibition.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
                        </button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">Date:</span> {exhibition.date}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Price:</span> {exhibition.price} MAD
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Exhibitions;




