import React, { useState } from "react";
import quadaga from '../assets/quadaga.jpg';
import raptor from '../assets/raptor.jpg';
import raptor2 from '../assets/raptor2.jpg';
import raptor3 from '../assets/raptor3.jpg';
import raptor4 from '../assets/raptor4.jpg'; 
import raptor6 from '../assets/raptor6.jpg'; 
import quadbiking from '../assets/quadbiking.jpg'; 
import { motion } from 'framer-motion';

const Destination5 = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const adventureData = {
    name: "Quad Adventure Agadir",
    description: "Quad Adventure Agadir propose des excursions passionnantes à travers le désert et les montagnes de l'Atlas, à bord de quads puissants et faciles à piloter. Les aventuriers peuvent choisir parmi différentes options de parcours, allant des balades relaxantes en famille aux aventures plus extrêmes pour les amateurs de sensations fortes. Les guides expérimentés vous emmèneront à travers des paysages spectaculaires, entre dunes de sable, vallées verdoyantes et villages berbères. Après une journée pleine d'adrénaline, vous pourrez vous détendre avec un repas traditionnel marocain dans un cadre authentique.",
    location: "Agadir, Maroc",
    services: [
      "Excursions en quad guidées",
      "Parcours pour tous les niveaux",
      "Visite des villages berbères",
      "Repas traditionnels marocains",
      "Sécurité et équipements fournis",
      "Guide local expérimenté"
    ],
    bestTimeToVisit: "Le meilleur moment pour participer à une aventure en quad est de mars à novembre, lorsque les températures sont modérées.",
    tips: "Portez des vêtements légers, des lunettes de protection et de la crème solaire. Ne partez jamais sans votre guide et assurez-vous que votre quad est bien préparé avant le départ.",
    images: [
      { src: raptor, alt: "Plage avec quad", description: "Explorez la plage avec des quads." },
      { src: raptor2, alt: "Kayak sur la mer", description: "Faites du kayak dans des eaux cristallines." },
      { src: raptor3, alt: "Cours de yoga sur la plage", description: "Participez à un cours de yoga au lever du soleil." },
      { src: raptor4, alt: "Piscine à débordement", description: "Détendez-vous au bord de la piscine à débordement." },
      { src: raptor6, alt: "Massage sur la plage", description: "Profitez d'un massage relaxant sur la plage." },
      { src: quadbiking, alt: "Quad sur les dunes", description: "Faites une aventure en quad à travers les dunes." },
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
          src={quadaga}
          alt="Quad Adventure"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 hover:text-indigo-600 transition-all duration-300">{adventureData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{adventureData.location}</p>
        </div>
      </motion.div>

      {/* Contenu principal */}
      <motion.div
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Description de l'Aventure */}
        <motion.section
          className="bg-blue-50 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700 hover:text-indigo-600 transition-all duration-300">À propos de l'Aventure</h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-lg hover:text-gray-800 transition-all duration-300">
            {showFullDescription ? adventureData.description : `${adventureData.description.substring(0, 200)}...`}
          </p>
          <button
            className="text-black hover:text-indigo-500 transition-all duration-300"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? 'Lire moins' : 'Lire plus'}
          </button>
        </motion.section>

        {/* Meilleur moment pour visiter */}
        <motion.section
          className="bg-teal-50 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Meilleur moment pour visiter</h3>
          <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{adventureData.bestTimeToVisit}</p>
        </motion.section>

        {/* Services Disponibles */}
        <motion.section
          className="bg-yellow-50 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Services disponibles</h3>
          <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
            {adventureData.services.map((service, index) => (
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

        {/* Conseils pour les Visiteurs */}
        <motion.section
          className="bg-orange-50 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Conseils pour les visiteurs</h3>
          <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{adventureData.tips}</p>
        </motion.section>

        {/* Galerie d'images */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-indigo-700 hover:text-indigo-600 transition-all duration-300">Explorez notre Aventure en Images</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {adventureData.images.map((image, index) => (
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
      </motion.div>
    </div>
  );
};

export default Destination5;
