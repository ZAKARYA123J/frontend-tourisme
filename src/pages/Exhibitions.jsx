import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import sifel from '../assets/sifel.jpg';
import eresc from '../assets/eresc.jpg';
import agtt from '../assets/agtt.jpg';
import artaga from '../assets/artaga.jpg';
import craft from '../assets/craft.jpg';
import photograph from '../assets/photograph.jpg';
import heritage from '../assets/heritage.jpg';
import fair from '../assets/fair.jpg';
import marine from '../assets/marine.jpg';

const Exhibitions = () => {
    const [exhibitions, setexhibitions] = useState([
        {
            id: 1,
            name: ' Sifel Morocco (International Exhibition for Fruits & Vegetables)',
            date: 'November 2025',
            description: 'A major agricultural exhibition focusing on Morocco’s fruit and vegetable industry, featuring international exhibitors.',
            price: 'Free',
            image: sifel,
            isFavorite: false,
        },
        {
            id: 2,
            name: 'International Renewable and Sustainable Energy Conference (IRSEC)',
            date: 'November 2025',
            description: 'A global event dedicated to advancements in renewable energy and sustainable development.',
            price: 'Paid entry (varies)',
            image: eresc,
            isFavorite: false,

        },
        {
            id: 3,
            name: 'Agadir Travel & Tourism Expo',
            date: 'October 2025',
            description: ' A travel fair showcasing Morocco’s tourism offerings, including cultural heritage sites, eco-tourism, and adventure travel.',
            price: 'Free for visitors',
            image: agtt,
            isFavorite: false,
        },
        {
            id: 4,
            name: ' Agadir International Art Exhibition ',
            date: 'june',
            description: 'This exhibition showcases contemporary art, featuring works by local and international artists. It often highlights a mix of painting, sculpture, photography, and installations',
            image: artaga,
            isFavorite: false,
        },
        {
            id: 5,
            name: 'Agadir International Exhibition of Handicrafts ',
            date: 'june',
            description: 'A celebration of Moroccan craftsmanship, this exhibition includes a variety of traditional Moroccan handicrafts such as carpets, pottery, jewelry, and woodwork​',
            price: 'Paid entry (varies)',
            image: craft,
            isFavorite: false,

        },
        {
            id: 6,
            name: 'Agadir International Photography Exhibition ',
            date: 'October 2025',
            description: 'Focused on both local and global photographers, this exhibition often showcases works depicting Morocco’s landscapes, culture, and people​',
            price: 'varies',
            image: photograph,
            isFavorite: false,
        },
        {
            id: 7,
            name: ' Exhibition on Moroccan History and Heritage',
            date: 'November 2025',
            description: 'Held at the Agadir Museum, this exhibition focuses on the region’s history and its significant archaeological sites, including the pre-Islamic era and the Amazigh heritage​',
            price: 'Free',
            image: heritage,
            isFavorite: false,
        },
        {
            id: 8,
            name: 'Agadir International Book Fair',
            date: 'November 2025',
            description: ' Although it is primarily a book fair, this exhibition also includes panels, discussions, and art displays related to literature and cultural heritage​',
            price: 'free',
            image: fair,
            isFavorite: false,

        },
        {
            id: 9,
            name: 'Oceanography and Marine Conservation Exhibition',
            date: 'October 2025',
            description: ' Highlighting the importance of ocean conservation, this exhibition focuses on marine life and environmental preservation in the region​',
            price: 'varies',
            image: marine,
            isFavorite: false,
        },



    ])
    const toggleFavorite = (id) => {
        setexhibitions(exhibitions.map((exhibition) => exhibition.id === id ? { ...exhibition, isFavorite: !exhibition.isFavorite } : exhibition));
    };

    return (
        <div className="container mx-auto  p-8">
            <h1 className="text-4xl font-bold text-blue-800 p-11 mb-8">exhibitions</h1>
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




