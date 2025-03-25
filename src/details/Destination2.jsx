import React, { useState } from "react";
import img4 from "../assets/img4-4.jpg";
import surf from "../assets/surf.jpg";
import surf2 from "../assets/surf2.jpg";
import surf3 from "../assets/surf3.jpg";
import surf4 from "../assets/surf4.jpg";
import surf5 from "../assets/surf5.jpg";
import surf6 from "../assets/surf6.jpg";
import { motion } from "framer-motion";

const Destination2 = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const resortData = {
    name: "Plage Imsouane",
    description:
   "Plage Imsounae est un véritable coin de paradis caché entre les montagnes d’Imsouane et l'océan Atlantique, offrant un panorama exceptionnel sur des paysages à couper le souffle. Ce lieu isolé est parfait pour ceux qui cherchent à s’évader de la vie quotidienne, à se ressourcer dans un cadre naturel et à vivre des aventures en pleine nature. Explorez les sentiers de randonnée qui serpentent à travers la montagne, défiez les vagues avec le surf ou détendez-vous dans le confort de nos chalets en bois. Après une journée active, offrez-vous une expérience de détente totale dans notre spa de montagne ou profitez des délices gastronomiques du restaurant, qui privilégie des produits locaux. Un séjour à Plage Imsounae est l’occasion rêvée pour les amoureux de la nature, du sport et du bien-être.",    location: "Imsouane, Agadir",
    services: [
      "Randonnées guidées pour explorer les sentiers montagneux",
      "Ski et sports d'hiver en hiver pour les amateurs de sensations fortes",
      "Restaurant gastronomique de montagne avec une cuisine savoureuse et locale",
      "Spa et massages pour une relaxation totale dans un cadre naturel",
      "Séances de bien-être et méditation pour se ressourcer en pleine nature",
      "Chalets privés offrant confort et intimité avec vue imprenable",
    ],
    bestTimeToVisit:
      "Le meilleur moment pour visiter est entre décembre et mars pour les sports d'hiver, ou entre juin et septembre pour les randonnées estivales.",
    tips: "Portez des chaussures adaptées pour les randonnées en montagne et ne manquez pas la visite des lacs alpins à proximité.",
    images: [
      {
        src: img4,
        alt: "Randonnée en montagne",
        description: "Explorez les sentiers de montagne à couper le souffle.",
      },
      {
        src: surf,
        alt: "Ski en hiver",
        description: "Vivez l'expérience du ski dans un cadre spectaculaire.",
      },
      {
        src: surf2,
        alt: "Détente au spa",
        description:
          "Offrez-vous un massage relaxant après une journée d'aventure.",
      },
      {
        src: surf3,
        alt: "Vue depuis le chalet",
        description: "Admirez les paysages montagneux depuis votre chalet.",
      },
      {
        src: surf4,
        alt: "Repas gastronomique",
        description: "Savourez des plats locaux préparés avec soin.",
      },
      {
        src: surf5,
        alt: "Méditation en pleine nature",
        description: "Détendez-vous avec une séance de méditation en montagne.",
      },
      {
        src: surf6,
        alt: "Méditation en pleine nature",
        description: "Détendez-vous avec une séance de méditation en montagne.",
      },
    ],
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
          src={img4}
          alt="plage Imsounae"
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.section
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-indigo-700 hover:text-indigo-600 transition-all duration-300">
              Description du Refuge
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf}
                alt="Randonnée"
                className="w-full md:w-1/3 h-72 object-cover rounded-lg mr-4 mb-4 md:mb-0"
              />
              <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-800 transition-all duration-300">
                {showFullDescription
                  ? resortData.description
                  : `${resortData.description.substring(0, 200)}...`}
              </p>
            </div>
            <button
              className="text-black hover:text-indigo-500 transition-all duration-300"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Lire moins" : "Lire plus"}
            </button>
          </motion.section>

          <motion.section
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">
              Meilleur moment pour visiter
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf2}
                alt="Ski"
                className="w-full md:w-1/3 h-72 object-cover rounded-lg mr-4 mb-4 md:mb-0"
              />
              <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">
                {resortData.bestTimeToVisit}
              </p>
            </div>
          </motion.section>

          <motion.section
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">
              Services du Refuge
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf3}
                alt="Détente"
                className="w-full md:w-1/3 h-72 object-cover rounded-lg mr-4 mb-4 md:mb-0"
              />
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
          </motion.section>

          <motion.section
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">
              Conseils pour les visiteurs
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf4} 
                alt="Chalet"
                className="w-full md:w-1/3 h-72 object-cover rounded-lg mr-4 mb-4 md:mb-0"
              />
              <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">
                {resortData.tips}
              </p>
            </div>
          </motion.section>
          <motion.section
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">
              Conseils pour les visiteurs
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf5}
                alt="Chalet"
                className="w-full md:w-1/3 h-72 object-cover rounded-lg mr-4 mb-4 md:mb-0"
              />
              <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">
                {resortData.tips}
              </p>
            </div>
          </motion.section>
          <motion.section
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">
              Conseils pour les visiteurs
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf6}
                alt="Chalet"
                className="w-full md:w-1/3 h-72 object-cover rounded-lg mr-4 mb-4 md:mb-0"
              />
              <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">
                {resortData.tips}
              </p>
            </div>
          </motion.section>
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
      </motion.div>
    </div>
  );
};

export default Destination2;
