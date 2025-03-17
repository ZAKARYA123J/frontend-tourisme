import { useState } from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa';

const Festivals =()=>{
    const[festivals,setFestivals]=useState([
        {
            id:1,
            name:'Timitar festival',
            date:'july 15-16, 2025',
            description:' One of the biggest music festivals in Morocco, Timitar celebrates Amazigh culture while incorporating diverse international musical influences. It features performances by Moroccan stars and global artists, with past lineups including Daoudia, Hindi Zahra, and Diana Haddad.',
            price:'Free ',
            isFAvorite: false
        
        },
        {
            id:2,
            name:'Visa for Music',
            date:'November 2025',
            description:' A major music industry event focusing on African and Middle Eastern artists, Visa For Music brings together musicians, producers, and industry professionals for concerts, networking, and workshops.',
            price:'varies (some free,others tickited',
            isFAvorite: false
        },
    ]);
    const toggleFavorite=(id)=>{
        setFestivals (festivals.map(festival => festival.id===id ? {... festival, isFAvorite : !festival.isFAvorite} : festival));
    };
    return(
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-8">Festivals</h1>
       <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival)=> (
            <div key={festival.id} className="bg-white rounded-lg shadow-lg p-6 hover/shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {festivals.name}
                    </h2>
                    <button onClick={()=> toggleFavorite(festival.id)} className="text-red-500 hover:text-red-600">
                        {festival.isFAvorite ? <FaHeart size={24}/> : <FaRegHeart size={24}/>}
                    </button>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-600">
                        <span className="font-semibold">Date:</span>
                        {festival.date}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Time:</span>
                         {festival.time}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Price:</span>{festival.price} MAD
                    </p>
                    <p className="text-gray-600">{festival.description}</p>
                </div>
            </div>
        ))}
       </div>
        </div>
    );
}
export default Festivals;