import { useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import timitar from '../assets/timitar.jpg';  
import vfm from '../assets/vfm.jpg';
import yannayer from '../assets/yannayer.jpg';
import boujloud from '../assets/boujloud.jpg';
import filmfestival from '../assets/filmfestival.jpg';
import festival from '../assets/festival.jpg';
import tiznitfest from '../assets/tiznitfest.jpg';
import nationalday from '../assets/nationalday.jpg';
import gnaoua from '../assets/gnaoua.jpg';

const Festivals = () => {
    const [festivals, setFestivals] = useState([
        {
            id: 1,
            name: 'Timitar festival',
            date: 'july 15-16, 2025',
            description: 'One of the biggest music festivals in Morocco, Timitar celebrates Amazigh culture while incorporating diverse international musical influences. It features performances by Moroccan stars and global artists, with past lineups including Daoudia, Hindi Zahra, and Diana Haddad.',
            price: 'Free',
            image: timitar,
            isFavorite: false,
        },
        {
            id: 2,
            name: 'Visa for Music',
            date: 'November 2025',
            description: 'A major music industry event focusing on African and Middle Eastern artists, Visa For Music brings together musicians, producers, and industry professionals for concerts, networking, and workshops.',
            price: 'varies (some free, others ticketed)',
            image: vfm,
            isFavorite: false,
        },
        {
            id: 3,
            name: 'Amazigh New Year (Yennayer)',
            date: 'January 12, 2025',
            description: 'A cultural celebration of the Amazigh New Year with music, food, and traditional performances.',
            price: 'Free',
            image: yannayer,
            isFavorite: false,
        },
        {
            id: 4,
            name: 'Festival of the Atlantic Coast ',
            date: 'seasonally',
            description: ' A celebration of the region’s coastal heritage, arts, and maritime activities. This festival typically features seafood tastings, music, and community activities',
            price: 'Free',
            image: festival,
            isFavorite: false,
        },
        {
            id: 5,
            name: 'Eid al-Adha',
            date: 'June 6–10, 2025',
            description: 'This significant Islamic festival is celebrated with family gatherings, prayers, and feasts. It’s a great time to experience the local culture, as many businesses close for the event​.',
            price: 'free',
            image: boujloud,
            isFavorite: false,
        },
        {
            id: 6,
            name: 'Festival of Tiznit',
            date:  '2025',
            description: ' Though slightly further from Agadir, the Tiznit Festival celebrates the regions crafts, especially silver jewelry and Berber culture, often involving cultural exchanges and performances',
            price: 'Free',
            image: tiznitfest,
            isFavorite: false,
        },
        {
            id: 7,
            name: 'Agadir International Film Festival',
            date: 'july 15-16, 2025',
            description: 'This film festival focuses on African cinema and brings filmmakers and movie enthusiasts together​',
            price: 'Free',
            image: filmfestival,
            isFavorite: false,
        },
        {
            id: 8,
            name: 'Moroccan National Day',
            date: 'July 30',
            description: 'The countrys independence is celebrated across Morocco, including Agadir, with public events, parades, and fireworks​.',
            price: 'free',
            image: nationalday,
            isFavorite: false,
        },
        {
            id: 9,
            name: 'Gnaoua World Music Festival ',
            date: 'June 19–21, 2025',
            description: 'Although this festival takes place in nearby Essaouira, it’s just a short drive from Agadir. It celebrates Gnaoua music, an essential part of Moroccan heritage, and draws a variety of international artists​',
            price: 'Free',
            image: gnaoua,
            isFavorite: false,
        },
    ]);

    const toggleFavorite = (id) => {
        setFestivals(festivals.map((festival) => festival.id === id ? { ...festival, isFavorite: !festival.isFavorite } : festival));
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-blue-800 p-11 mb-8">Festivals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {festivals.map((festival) => (
                    <div key={festival.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <img src={festival.image} alt={festival.name} className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
                        <h3>{festival.name}</h3>
                        <p>{festival.description}</p>
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {festival.name}
                            </h2>
                            <button onClick={() => toggleFavorite(festival.id)} className="text-red-500 hover:text-red-600">
                                {festival.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
                            </button>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-600">
                                <span className="font-semibold">Date:</span> {festival.date}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Price:</span> {festival.price} MAD
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Festivals;