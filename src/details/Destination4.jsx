import Taghazout from '../assets/Taghazout.jpg';
import qawarib from '../assets/qawarib.jpg';
import qawarib2 from '../assets/qawarib2.jpg';
import qawarib3 from '../assets/qawarib3.jpg';
import qawarib4 from '../assets/qawarib4.jpg';
import qawarib5 from '../assets/qawarib5.jpg';
import { motion } from 'framer-motion';

const Destination4 = () => {
  const resortData = {
    name: "Taghazout Surf Resort",
    description: "Taghazout Surf Resort est un lieu incontournable pour les passionnés de surf. Situé à Taghazout, un village côtier au Maroc, le resort bénéficie de l'une des meilleures vagues de la région, idéales pour les surfeurs de tous niveaux. Le complexe propose des cours de surf dispensés par des instructeurs expérimentés et des sessions guidées sur les plages locales. Les chambres sont modernes, avec des vues spectaculaires sur l'océan. Après une journée sur les vagues, les visiteurs peuvent se détendre au spa, savourer des repas locaux ou profiter des soirées animées sur la terrasse du resort. La meilleure période pour surfer à Taghazout est de septembre à avril, lorsque les vagues sont les plus constantes.",
    location: "Taghazout, Agadir, Maroc",
    services: [
      "Cours de surf et sessions guidées",
      "Vagues idéales pour tous niveaux",
      "Restaurant avec cuisine marocaine",
      "Spa et massage après surf",
      "Terrasse avec vue sur l'océan",
      "Soirées et événements animés"
    ],
    bestTimeToVisit: "La meilleure période pour surfer est de septembre à avril, lorsque les vagues sont les plus constantes.",
    tips: "N'oubliez pas de louer une planche de surf de qualité, et assurez-vous de prendre un guide local pour vous faire découvrir les meilleurs spots de surf. Les vagues peuvent être assez puissantes, alors soyez prêt à relever le défi !",
    images: [
      { src: qawarib, alt: "Plage avec quad", description: "Explorez la plage avec des quads." },
      { src: qawarib2, alt: "Kayak sur la mer", description: "Faites du kayak dans des eaux cristallines." },
      { src: qawarib3, alt: "Cours de yoga sur la plage", description: "Participez à un cours de yoga au lever du soleil." },
      { src: qawarib4, alt: "Piscine à débordement", description: "Détendez-vous au bord de la piscine à débordement." },
      { src: qawarib5, alt: "Massage sur la plage", description: "Profitez d'un massage relaxant sur la plage." },
      { src: Taghazout, alt: "Massage sur la plage", description: "Profitez d'un massage relaxant sur la plage." },
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
          src={Taghazout} 
          alt="Taghazout Surf Resort" 
          className="absolute inset-0 w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 hover:text-indigo-600 transition-all duration-300">{resortData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-6 py-12 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-indigo-700 hover:text-indigo-600 transition-all duration-300">Description du Resort</h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg hover:text-gray-800 transition-all duration-300">{resortData.description}</p>

            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Meilleur moment pour visiter</h3>
            <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.bestTimeToVisit}</p>

            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Services du Resort</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              {resortData.services.map((service, index) => (
                <motion.li 
                  key={index}
                  className="transition-all duration-300 hover:text-indigo-600"
                >
                  {service}
                </motion.li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Conseils pour les visiteurs</h3>
            <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.tips}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {resortData.images.map((image, index) => (
              <motion.div 
                key={index}
                className="relative group transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-800 font-medium mb-2 group-hover:text-indigo-600 transition-all duration-300">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Destination4;
