import React from 'react';
import img4 from '../assets/img4-4.jpg';
import surf from '../assets/surf.jpg';
import surf2 from '../assets/surf2.jpg';
import surf3 from '../assets/surf3.jpg';
import surf4 from '../assets/surf4.jpg'; 
import surf5 from '../assets/surf5.jpg'; 
import surf6 from '../assets/surf6.jpg'; 
import { motion } from 'framer-motion';

const Destination2 = () => {
  const resortData = {
    name: "Ocean Breeze Resort",
    description: "Ocean Breeze Resort est un paradis tropical niché sur une plage de sable doré, offrant une atmosphère paisible et relaxante. Idéal pour les amateurs de nature et de tranquillité, ce resort propose des hébergements élégants avec des vues imprenables sur l'océan. Les visiteurs peuvent profiter d'activités passionnantes comme le surf, la plongée avec tuba et les excursions en bateau. Le restaurant gastronomique du resort sert des spécialités locales avec des produits frais de la mer. Un centre de bien-être et un espace de méditation sont également disponibles pour une détente totale. Les couchers de soleil spectaculaires font de cet endroit une destination idéale pour une escapade romantique ou un séjour en famille. La meilleure période pour visiter s'étend d'avril à octobre, offrant un climat parfait pour profiter des plaisirs de la plage.",
    location: "Côte Pacifique, Costa Rica",
    services: [
      "Excursions en bateau et plongée",
      "Restaurant gastronomique en bord de mer",
      "Spa et centre de bien-être",
      "Espaces de méditation et de yoga",
      "Piscine panoramique",
      "Cours de surf pour débutants et experts"
    ],
    bestTimeToVisit: "Le meilleur moment pour visiter est entre avril et octobre, période idéale pour un climat chaud et agréable.",
    tips: "Apportez des chaussures d'eau pour explorer les récifs coralliens et profitez des excursions au lever du soleil pour des paysages inoubliables.",
    images: [
      { src: surf, alt: "Surf sur la plage", description: "Apprenez à surfer sur des vagues parfaites." },
      { src: surf2, alt: "Plongée en eaux claires", description: "Explorez les récifs coralliens avec masque et tuba." },
      { src: surf3, alt: "Yoga au bord de l'eau", description: "Détendez-vous avec des séances de yoga en plein air." },
      { src: surf4, alt: "Piscine avec vue sur l'océan", description: "Profitez d'une baignade rafraîchissante face à la mer." },
      { src: surf5, alt: "Massage en plein air", description: "Offrez-vous un massage relaxant au son des vagues." },
      { src: surf6, alt: "Balade romantique sur la plage", description: "Admirez un magnifique coucher de soleil les pieds dans le sable." }
    ]
  };

  return (
    <div className="bg-gray-50">
      {/* Image de couverture */}
      <motion.div
        className="relative bg-cover bg-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src={img4} 
          alt="Ocean Breeze Resort" 
          className="absolute inset-0 w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 hover:text-indigo-600 transition-all duration-300">{resortData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </motion.div>

      {/* Contenu principal */}
      <motion.div
        className="container mx-auto px-6 py-12 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Description du resort */}
        <motion.section
          className="bg-white p-8 rounded-xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700 hover:text-indigo-600 transition-all duration-300">Description du Resort</h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-lg hover:text-gray-800 transition-all duration-300">{resortData.description}</p>
        </motion.section>

        {/* Meilleur moment pour visiter */}
        <motion.section
          className="bg-white p-8 rounded-xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Meilleur moment pour visiter</h3>
          <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.bestTimeToVisit}</p>
        </motion.section>

        {/* Services du Resort */}
        <motion.section
          className="bg-white p-8 rounded-xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
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
        </motion.section>

        {/* Conseils pour les visiteurs */}
        <motion.section
          className="bg-white p-8 rounded-xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Conseils pour les visiteurs</h3>
          <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.tips}</p>
        </motion.section>

        {/* Galerie d'images */}
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
                className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-72 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-4">
                  <p className="text-lg text-gray-800 font-medium mb-2 group-hover:text-indigo-600 transition-all duration-300">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Button to Destination4 */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#destination4">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md transition-all duration-300">
              Découvrez notre autre resort à Taghazout
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Destination2;
