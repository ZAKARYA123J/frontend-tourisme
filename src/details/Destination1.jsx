import React, { useState } from "react";
import img3 from '../assets/img3.jpg';
import lacote from '../assets/la cote.jpg';
import lacote2 from '../assets/lacote2.jpg';
import lacote3 from '../assets/lacote3.jpg';
import lacote4 from '../assets/lacote4.jpg';
import viewplage2 from '../assets/viewplage2.jpg';
import place3 from '../assets/place3.jpg';
import { motion } from 'framer-motion';

const Destination1 = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const resortData = {
    name: "Ocean Breeze Resort",
    description:
      "Ocean Breeze Resort est un complexe hôtelier de luxe offrant une vue imprenable sur l'océan. Idéal pour une escapade relaxante, il propose une piscine à débordement, un spa haut de gamme et une cuisine gastronomique. Des activités nautiques telles que le jet-ski et le surf sont également disponibles. Les visiteurs peuvent profiter d'un cadre paradisiaque avec des chambres spacieuses et des panoramas exceptionnels.",
    location: "Plage de Los Angeles, Californie",
    services: [
      "Piscine à débordement",
      "Spa et centre de bien-être",
      "Restaurants gastronomiques",
      "Activités nautiques",
      "Salle de sport moderne",
    ],
    bestTimeToVisit:
      "Le meilleur moment pour visiter est de mai à octobre, lorsque le climat est idéal pour profiter des activités extérieures.",
    tips: "Pensez à réserver vos activités en avance et profitez des magnifiques couchers de soleil au bord de la plage.",
    images: [
      { src: lacote, alt: "Plage paradisiaque", description: "Admirez la beauté de la plage et ses eaux cristallines." },
      { src: lacote2, alt: "Kayak sur l'eau", description: "Explorez l'océan en kayak et vivez une expérience unique." },
      { src: lacote3, alt: "Cours de yoga", description: "Détendez-vous avec un cours de yoga face à la mer." },
      { src: lacote4, alt: "Piscine luxueuse", description: "Profitez d'un moment de détente dans une piscine à débordement." },
      { src: viewplage2, alt: "Vue panoramique", description: "Contemplez la vue magnifique sur l'océan depuis le resort." },
      { src: place3, alt: "Coin détente", description: "Un espace parfait pour se relaxer après une journée bien remplie." },
    ]
  };

  return (
    <div className="bg-gray-50">
  
      <motion.div
        className="relative bg-cover bg-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src={img3} 
          alt="Vue du resort" 
          className="absolute inset-0 w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 hover:text-indigo-600 transition-all duration-300">{resortData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </motion.div>


      <motion.div
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       
        <motion.section
          className="bg-blue-50 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500 grid grid-cols-1 md:grid-cols-2 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-indigo-700 hover:text-indigo-600 transition-all duration-300">Description du Resort</h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg hover:text-gray-800 transition-all duration-300">
              {showFullDescription ? resortData.description : `${resortData.description.substring(0, 200)}...`}
            </p>
            <button
              className="text-black hover:text-indigo-500 transition-all duration-300"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Lire moins' : 'Lire plus'}
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={lacote} 
              alt="Plage" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.section>


        <motion.section
          className="bg-teal-50 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500 grid grid-cols-1 md:grid-cols-2 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Meilleur moment pour visiter</h3>
            <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.bestTimeToVisit}</p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={lacote2} 
              alt="Vue de la mer" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.section>


        <motion.section
          className="bg-yellow-50 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500 grid grid-cols-1 md:grid-cols-2 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Services du Resort</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              {resortData.services.map((service, index) => (
                <motion.li 
                  key={index}
                  className="transition-all duration-300 hover:text-indigo-600"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.7 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={lacote3} 
              alt="Yoga sur la plage" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.section>

     
        <motion.section
          className="bg-orange-50 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500 grid grid-cols-1 md:grid-cols-2 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Conseils pour les visiteurs</h3>
            <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.tips}</p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={place3} 
              alt="Massage sur la plage" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.section>

      
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-indigo-700 hover:text-indigo-600 transition-all duration-300">Explorez notre Resort en Images</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {resortData.images.map((image, index) => (
              <motion.div 
                key={index}
                className="relative bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                  <p className="text-sm">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Destination1;
