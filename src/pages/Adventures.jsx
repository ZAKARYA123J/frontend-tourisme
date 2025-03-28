import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import jetskim from '../assets/jetskim.jpg';
import quadaga from '../assets/quadaga.jpg';
import hiking from '../assets/hiking.jpg';
import balloon from '../assets/balloon.jpg';
import horseridin from '../assets/balloon.jpg';
import diving from '../assets/diving.jpg';
import kitesurfing from '../assets/Kitesurfing.jpg';
import bashing from '../assets/bashing.jpg';
import canyoning from '../assets/Canyoning.jpg';

const Adventures = () => {
  const [adventures, setAdventures] = useState([
    {
      id: 1,
      name: 'Jet Ski Adventure',
      date: 'Available daily',
      description: 'Ride the waves on a jet ski along Agadir’s beaches. A thrilling way to experience the Atlantic Ocean.',
      price: 'for 15 min 300',
      image: jetskim,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Quad Biking in the Desert',
      date: 'Available daily',
      description: 'Explore Agadir’s rugged landscapes, sand dunes, and Berber villages on a quad bike. Perfect for adventure seekers.',
      price: 'for 1 hour starting at 400',
      image: quadaga,
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Hiking in the Atlas Mountains',
      date: 'Available year-round',
      description: 'Explore scenic trails in the Atlas Mountains, with options for all skill levels. Enjoy breathtaking views and Berber culture.',
      price: 'per person 500',
      image: hiking,
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Hot Air Balloon Ride',
      date: 'Available year-round (weather-dependent)',
      description: 'Enjoy panoramic views of Agadir, the ocean, and the desert from a hot air balloon.',
      price: 'per person 1,500',
      image: balloon,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Horseback Riding in Souss-Massa National Park",
      date: "Available year-round",
      description: "Ride through the diverse landscapes of Souss-Massa National Park, where you can explore coastal areas, forests, and wildlife on horseback.",
      price: "for a guided horseback ride,Approx. 300-600",
      image: horseridin,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Diving in Agadir",
      date: "Available year-round",
      description: "Dive into Agadir’s coastal waters to explore the rich underwater life, caves, and shipwrecks, providing an exciting adventure beneath the waves.",
      price: "for a dive trip,Approx. 600-1000 MAD",
      image: diving,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Kitesurfing in Agadir",
      date: "Available year-round",
      description: "With perfect wind conditions, Agadir’s coastline is an ideal destination for kitesurfing. Suitable for both beginners and experienced riders.",
      price: "for lessons or rentals,Approx. 500-1000",
      image: kitesurfing,
      isFavorite: false,
    },
    {
      id: 8,
      name: "Dune Bashing in the Sahara",
      date: "Available year-round",
      description: "A thrilling off-road adventure across the golden sand dunes of the Sahara. Ride in 4x4 vehicles for an exciting experience in Morocco's desert landscapes.",
      price: "per day (guided tours),Approx. 1000-1500",
      image: bashing,
      isFavorite: false,
    },
    {
      id: 9,
      name: "Canyoning in the Atlas Mountains",
      date: "Available year-round",
      description: "Explore narrow canyons, waterfalls, and natural pools while canyoning through the Atlas Mountains, offering an adrenaline-packed journey through rugged terrain.",
      price: "for a guided tour,Approx. 800-1200",
      image: canyoning,
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setAdventures(adventures.map((adventure) => adventure.id === id ? { ...adventure, isFavorite: !adventure.isFavorite } : adventure));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Adventures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adventures.map((adventure) => (
          <div key={adventure.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Link to={adventure.link}>
              <img src={adventure.image} alt={adventure.name} className="w-full h-64 object-cover rounded-md mb-4" />
            </Link>
            <h3 className="text-xl font-semibold">{adventure.name}</h3>
            <p>{adventure.description}</p>
            <div className="flex justify-between items-start mb-4">
              <button onClick={() => toggleFavorite(adventure.id)} className="text-red-500 hover:text-red-600">
                {adventure.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">Date:</span> {adventure.date}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Price:</span> {adventure.price} MAD
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventures;
