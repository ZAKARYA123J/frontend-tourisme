import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import kasbah from '../assets/kasbah.jpg';
import Tiznit from '../assets/Tiznit.jpg';
import natpark from '../assets/natpark.jpg';
import polizzi from '../assets/polizzi.jpg';
import taroudant from '../assets/taroudant.jpg';
import tafraoute from '../assets/Tafraoute.jpg';
import amazigh from '../assets/amazigh.jpg';

const Heritages = () => {
    const [heritages, setHeritages] = useState([
        {
            id: 1,
            name: 'Agadir Kasbah Cultural Tour',
            Availability: 'Year-round',
            description: 'A guided historical tour of the ancient Kasbah of Agadir, offering insights into the city’s history and heritage.',
            price: 'per person 200-500',
            image: kasbah,
            isFavorite: false,
        },
        {
            id: 2,
            name: 'Tiznit & Silver Craftsmanship Tour',
            Availability: 'November 2025',
            description: 'A fun and easy way to explore the charming town of Tiznit, famous for its beautiful silver jewelry.',
            price: 'per person 500',
            image: Tiznit,
            isFavorite: false,
        },
        {
            id: 3,
            name: 'Souss-Massa National Park Eco-Tour',
            Availability: 'Year-round',
            description: 'A nature and cultural tour showcasing Amazigh traditions and wildlife conservation in the region.',
            price: 'per person 600',
            image: natpark,
            isFavorite: false,
        },
        {
            id: 4,
            name: 'Souss-Massa National Park Eco-Tour',
            Availability: 'Year-round',
            description: 'A nature and cultural tour showcasing Amazigh traditions and wildlife conservation in the region.',
            price: 'per person 600',
            image: natpark,
            isFavorite: false,
        },
        {
            id: 5,
            name: 'Medina Polizzi',
            Availability: 'Year-round',
            description: 'A reconstructed traditional Moroccan medina designed by Italian architect Coco Polizzi, showcasing local crafts and architecture.',
            price: 'Varies',
            image: polizzi,
            isFavorite: false,
        },
        {
            id: 6,
            name: 'Taroudant City Walls',
            Availability: 'Year-round',
            description: 'Located near Agadir, these well-preserved 16th-century walls reflect Morocco’s medieval history.',
            price: 'Free',
            image: taroudant,
            isFavorite: false,
        },
        {
            id: 7,
            name: 'Tafraoute Rock Engravings',
            Availability: 'Year-round',
            description: 'Ancient petroglyphs in the Anti-Atlas Mountains, showcasing prehistoric Berber art and culture.',
            price: 'Free',
            image: tafraoute,
            isFavorite: false,
        },
        {
            id: 8,
            name: 'Amazigh Heritage Museum',
            Availability: 'Year-round',
            description: 'A museum dedicated to the history and culture of Morocco’s indigenous Amazigh people.',
            price: 'Free',
            image: amazigh,
            isFavorite: false,
        },
    ]);

    const toggleFavorite = (id) => {
        setHeritages(heritages.map((heritage) =>
            heritage.id === id ? { ...heritage, isFavorite: !heritage.isFavorite } : heritage
        ));
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-blue-800 p-11 mb-8">Heritages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {heritages.map((heritage) => (
                    <div key={heritage.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <img
                            src={heritage.image}
                            alt={heritage.name}
                            className="w-full h-48 md:h-64 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4">{heritage.name}</h3>
                        <p className="text-gray-600 mt-2">{heritage.description}</p>
                        <div className="flex justify-between items-start mb-4">
                            <button
                                onClick={() => toggleFavorite(heritage.id)}
                                className="text-red-500 hover:text-red-600"
                            >
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
};

export default Heritages;
