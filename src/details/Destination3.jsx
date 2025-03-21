import React, { useState } from 'react'; 
import Aghroud from '../assets/Aghroud.jpg'; 
import viewplage from '../assets/viewplage.jpg'; 
import viewplage2 from '../assets/viewplage2.jpg'; 
import viewplage4 from '../assets/viewplage4.jpg'; 
import plage4 from '../assets/plage4.jpg'; 
import plage5 from '../assets/plage5.jpg'; 
import { motion } from 'framer-motion';

const Destination3 = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const resortData = {
    name: "Aghroud Beach Resort",
    description: "Aghroud Beach Resort est un lieu idyllique situé sur la plage d'Aghroud, offrant une vue imprenable sur l'océan Atlantique. Ce complexe de luxe propose des chambres modernes avec des balcons privés, parfait pour profiter du climat doux toute l'année. L'endroit est idéal pour ceux qui recherchent des vacances reposantes et actives, avec des activités comme le surf, la plongée sous-marine et des excursions en bateau. Le resort dispose de plusieurs restaurants servant des plats traditionnels marocains et internationaux. Vous pourrez également profiter du spa pour un moment de relaxation après une journée d'activités. Le meilleur moment pour visiter est de mars à novembre, lorsque la météo est idéale pour se détendre au bord de l'eau et explorer les environs.",
    location: "Plage d'Aghroud, Agadir, Maroc",
    services: [
      "Surf et sports nautiques",
      "Restaurant marocain et international",
      "Spa et bien-être",
      "Excursions en bateau",
      "Piscine à débordement",
      "Salle de sport moderne"
    ],
    bestTimeToVisit: "Le meilleur moment pour visiter est de mars à novembre, quand la météo est idéale pour profiter des activités en extérieur.",
    tips: "N'oubliez pas de visiter le souk d'Agadir et de goûter à la cuisine locale. Pensez à réserver les excursions et activités à l'avance pour garantir votre place.",
    images: [
      { src: viewplage, alt: "Plage avec quad", description: "Explorez la plage avec des quads." },
      { src: viewplage2, alt: "Kayak sur la mer", description: "Faites du kayak dans des eaux cristallines." },
      { src: viewplage4, alt: "Cours de yoga sur la plage", description: "Participez à un cours de yoga au lever du soleil." },
      { src: plage4, alt: "Piscine à débordement", description: "Détendez-vous au bord de la piscine à débordement." },
      { src: plage5, alt: "Massage sur la plage", description: "Profitez d'un massage relaxant sur la plage." },
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
          src={Aghroud} 
          alt="Aghroud Beach Resort" 
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
              src={viewplage} 
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
              src={viewplage2} 
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
              src={viewplage4} 
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
              src={plage4} 
              alt="Détente à la piscine" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.section>

        <motion.section
          className="bg-gray-100 p-8 rounded-xl shadow-[0_4px_8px_0_rgba(245,225,183,0.5)] mb-8 hover:shadow-[0_6px_12px_0_rgba(245,225,183,0.7)] transition-all duration-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Galerie</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resortData.images.map((image, index) => (
              <div key={index} className="relative group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                  <p className="text-xl">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Destination3;
