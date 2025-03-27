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
    description: "Aghroud Beach Resort is an idyllic place located on the beach of Aghroud, offering stunning views of the Atlantic Ocean. This luxury resort offers modern rooms with private balconies, perfect for enjoying the mild climate all year round. The location is ideal for those seeking a relaxing and active holiday, with activities such as surfing, scuba diving, and boat excursions. The resort has several restaurants serving both traditional Moroccan and international dishes. You can also enjoy the spa for relaxation after a day of activities. The best time to visit is from March to November, when the weather is perfect for relaxing by the water and exploring the surroundings.",
    location: "Aghroud Beach, Agadir, Morocco",
    services: [
      "Surfing and water sports",
      "Moroccan and international restaurant",
      "Spa and wellness",
      "Boat excursions",
      "Infinity pool",
      "Modern gym"
    ],
    bestTimeToVisit: "The best time to visit is from March to November, when the weather is perfect for outdoor activities.",
    tips: "Don't forget to visit the souk in Agadir and try the local cuisine. Make sure to book excursions and activities in advance to guarantee your spot.",
    images: [
      { src: viewplage, alt: "Beach with quad", description: "Explore the beach with quads." },
      { src: viewplage2, alt: "Kayak on the sea", description: "Kayak in crystal-clear waters." },
      { src: viewplage4, alt: "Yoga class on the beach", description: "Join a yoga class at sunrise." },
      { src: plage4, alt: "Infinity pool", description: "Relax by the infinity pool." },
      { src: plage5, alt: "Massage on the beach", description: "Enjoy a relaxing massage on the beach." },
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
            <h2 className="text-3xl font-semibold mb-4 text-indigo-700 hover:text-indigo-600 transition-all duration-300">Resort Description</h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg hover:text-gray-800 transition-all duration-300">
              {showFullDescription ? resortData.description : `${resortData.description.substring(0, 200)}...`}
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
              src={viewplage} 
              alt="Beach" 
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
            <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.bestTimeToVisit}</p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={viewplage2} 
              alt="Sea view" 
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
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Resort Services</h3>
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
              alt="Yoga on the beach" 
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
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Visitor Tips</h3>
            <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.tips}</p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={plage4} 
              alt="Relaxing by the pool" 
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
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Gallery</h3>
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
