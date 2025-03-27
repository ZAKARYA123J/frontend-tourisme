import React, { useState } from "react";
import Taghazout from "../assets/Taghazout.jpg";
import surf from "../assets/surf.jpg";
import surf2 from "../assets/surf2.jpg";
import surf3 from "../assets/surf3.jpg";
import surf4 from "../assets/surf4.jpg";
import surf5 from "../assets/surf5.jpg";
import surf6 from "../assets/surf6.jpg";
import { motion } from "framer-motion";

const Destination4 = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const resortData = {
    name: "Taghazout",
    description:
      "Taghazout is a peaceful haven located at the top of the mountains, offering breathtaking views of the mountainous landscapes. This secluded refuge is perfect for nature and adventure lovers. Visitors can explore hiking trails, enjoy skiing, or relax in the comfort of a wooden chalet. The on-site restaurant serves delicious dishes with local products, and there is a mountain spa for complete relaxation. An ideal place for hiking enthusiasts, skiing, and those seeking an escape from the daily hustle and bustle.",
    location: "Taghazout, Agadir",
    services: [
      "Guided hikes",
      "Skiing and winter sports",
      "Mountain gourmet restaurant",
      "Spa and massages",
      "Wellness and meditation sessions",
      "Private chalets",
    ],
    bestTimeToVisit:
      "The best time to visit is between December and March for winter sports, or between June and September for summer hiking.",
    tips: "Wear suitable shoes for mountain hiking and don't miss visiting the nearby alpine lakes.",
    images: [
      {
        src: Taghazout,
        alt: "Mountain hiking",
        description: "Explore breathtaking mountain trails.",
      },
      {
        src: surf,
        alt: "Winter skiing",
        description: "Experience skiing in a spectacular setting.",
      },
      {
        src: surf2,
        alt: "Spa relaxation",
        description: "Treat yourself to a relaxing massage after a day of adventure.",
      },
      {
        src: surf3,
        alt: "View from the chalet",
        description: "Admire the mountain landscapes from your chalet.",
      },
      {
        src: surf4,
        alt: "Gourmet meal",
        description: "Savor local dishes prepared with care.",
      },
      {
        src: surf5,
        alt: "Meditation in nature",
        description: "Relax with a meditation session in the mountains.",
      },
      {
        src: surf6,
        alt: "Meditation in nature",
        description: "Relax with a meditation session in the mountains.",
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
          src={Taghazout}
          alt="Taghazout"
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
              Refuge Description
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf}
                alt="Hiking"
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
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          </motion.section>

          <motion.section
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">
              Best time to visit
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf2}
                alt="Skiing"
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
              Resort Services
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={surf3}
                alt="Relaxation"
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
              Tips for visitors
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
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-indigo-700 hover:text-indigo-600 transition-all duration-300">
            Explore our Resort in Images
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

export default Destination4;
