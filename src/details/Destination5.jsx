import React, { useState } from 'react'; 
import quadaga from '../assets/quadaga.jpg'; 
import raptor from '../assets/raptor.jpg'; 
import raptor2 from '../assets/raptor2.jpg'; 
import raptor3 from '../assets/raptor3.jpg'; 
import raptor4 from '../assets/raptor4.jpg'; 
import raptor6 from '../assets/raptor6.jpg'; 
import quadbiking from '../assets/quadbiking.jpg'; 
import {motion} from 'framer-motion';

const Destination5 = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const adventureData = {
    name: "Quad Adventure Agadir",
    description: "Quad Adventure Agadir offers exciting excursions through the desert and the Atlas Mountains, aboard powerful and easy-to-ride quads. Adventurers can choose from various course options, from relaxing family rides to more extreme adventures for thrill-seekers. Experienced guides will take you through spectacular landscapes, between sand dunes, green valleys, and Berber villages. After a day full of adrenaline, you can relax with a traditional Moroccan meal in an authentic setting.",
    location: "Agadir, Morocco",
    services: [
      "Guided quad excursions",
      "Courses for all levels",
      "Visit to Berber villages",
      "Traditional Moroccan meals",
      "Safety and equipment provided",
      "Experienced local guide"
    ],
    bestTimeToVisit: "The best time to participate in a quad adventure is from March to November, when temperatures are moderate.",
    tips: "Wear light clothing, protective goggles, and sunscreen. Never go without your guide and make sure your quad is well-prepared before departure.",
    images: [
      { src: raptor, alt: "Beach with quad", description: "Explore the beach with quads." },
      { src: raptor2, alt: "Kayak on the sea", description: "Kayak in crystal-clear waters." },
      { src: raptor3, alt: "Yoga class on the beach", description: "Participate in a sunrise yoga class." },
      { src: raptor4, alt: "Infinity pool", description: "Relax by the infinity pool." },
      { src: raptor6, alt: "Massage on the beach", description: "Enjoy a relaxing massage on the beach." },
      { src: quadbiking, alt: "Quad on the dunes", description: "Take a quad adventure through the dunes." },
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
            <h2 className="text-3xl font-semibold mb-4 text-indigo-700 hover:text-indigo-600 transition-all duration-300">About the Adventure</h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg hover:text-gray-800 transition-all duration-300">
              {showFullDescription ? adventureData.description : `${adventureData.description.substring(0, 200)}...`}
            </p>
            <button
              className="text-black hover:text-indigo-500 transition-all duration-300"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Read less' : 'Read more'}
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={raptor} 
              alt="Quad Adventure" 
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
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Best Time to Visit</h3>
            <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{adventureData.bestTimeToVisit}</p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={raptor2} 
              alt="Quad view" 
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
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Available Services</h3>
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
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={raptor3} 
              alt="Quad dunes" 
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
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Tips for Visitors</h3>
            <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{adventureData.tips}</p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={raptor4} 
              alt="Quad Adventure" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          {adventureData.images.map((image, index) => (
            <motion.div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-sm text-gray-600 mt-2">{image.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </div>
  );
}

export default Destination5;
