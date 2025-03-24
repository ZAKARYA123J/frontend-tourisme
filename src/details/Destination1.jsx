import React, { useState } from "react";
import img3 from "../assets/img3.jpg";
import lacote from "../assets/la cote.jpg";
import lacote2 from "../assets/lacote2.jpg";
import lacote3 from "../assets/lacote3.jpg";
import lacote4 from "../assets/lacote4.jpg";
import viewplage2 from "../assets/viewplage2.jpg";
import place3 from "../assets/place3.jpg";
import { motion } from "framer-motion";

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

  const renderSection = (title, content, imageSrc, imageAlt) => (
    <motion.section
      className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">
        {title}
      </h3>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full md:w-1/3 h-72 object-cover rounded-lg mr-4 mb-4 md:mb-0"
        />
        <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">
          {content}
        </p>
      </div>
    </motion.section>
  );

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
          alt="Ocean Breeze Resort"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 hover:text-indigo-600 transition-all duration-300">
            {resortData.name}
          </h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-6 py-12 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {renderSection("Description du Refuge", showFullDescription ? resortData.description : `${resortData.description.substring(0, 200)}...`, lacote, "Plage paradisiaque")}
        <button
          className="text-black hover:text-indigo-500 transition-all duration-300"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Lire moins" : "Lire plus"}
        </button>

        {renderSection("Meilleur moment pour visiter", resortData.bestTimeToVisit, lacote2, "Kayak sur l'eau")}

        {renderSection("Services du Refuge", resortData.services.map(service => <motion.li key={service} className="transition-all duration-300 hover:text-indigo-600">{service}</motion.li>), lacote3, "Cours de yoga")}

        {renderSection("Conseils pour les visiteurs", resortData.tips, lacote4, "Relaxation")}
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-indigo-700 hover:text-indigo-600 transition-all duration-300">
          Explorez notre Refuge en Images
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                <p className="text-lg text-gray-800 font-medium mb-2 text-center group-hover:text-indigo-600 transition-all duration-300">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Destination1;
