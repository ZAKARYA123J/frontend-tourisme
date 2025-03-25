import { FaFileAlt, FaGlobe } from "react-icons/fa";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import contact from '../assets/contact.jpg'

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 p-8">
      {/* Section "À Propos" */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left p-6 hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-center mb-4">
          <FaGlobe className="text-blue-600 text-2xl mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">À Propos d'Agadir</h2>
        </div>
        <p className="text-gray-700">
          Agadir, perle du sud marocain, est une destination prisée pour ses plages dorées, son climat ensoleillé toute l année et ses infrastructures modernes. La ville offre un parfait équilibre entre nature, culture et loisirs.
        </p>
      </motion.div>

      {/* Image et expérience */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative md:w-1/2 flex justify-center p-6"
      >
        <img 
          src={contact}
          alt="Tourisme à Agadir" 
          className="rounded-lg shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Section Services */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
        className="md:w-1/2 text-center md:text-left p-6 hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-center mb-4">
          <FaFileAlt className="text-blue-600 text-2xl mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Nos Services</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Activités & Destinations</h3>
        <p className="text-gray-700 mb-4">
          Nous proposons des excursions, des visites guidées et des activités nautiques telles que le surf, le jet-ski et la plongée. Découvrez la Kasbah, la Vallée du Paradis et bien d'autres lieux emblématiques.
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Réservations</h3>
        <p className="text-gray-700">
          Réservez vos hôtels, restaurants et transports avec notre service personnalisé pour un séjour inoubliable.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSection;
