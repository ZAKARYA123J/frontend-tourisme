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
      "Plage Imsouane is a true hidden paradise nestled between the Imsouane mountains and the Atlantic Ocean, offering breathtaking panoramic views of stunning landscapes. This secluded spot is perfect for those seeking to escape from daily life, recharge in a natural setting, and experience outdoor adventures. Explore the hiking trails winding through the mountains, challenge the waves with surfing, or relax in the comfort of our wooden chalets. After an active day, indulge in a total relaxation experience at our mountain spa or enjoy the gourmet delights of our restaurant that focuses on local products. A stay at Plage Imsouane is the perfect opportunity for nature, sport, and wellness lovers.",
    location: "Imsouane, Agadir",
    services: [
      "Guided hikes to explore mountain trails",
      "Skiing and winter sports for thrill seekers",
      "Gourmet mountain restaurant with delicious, local cuisine",
      "Spa and massages for total relaxation in a natural setting",
      "Wellness and meditation sessions to recharge in nature",
      "Private chalets offering comfort and privacy with stunning views",
    ],
    bestTimeToVisit:
      "The best time to visit is between December and March for winter sports, or between June and September for summer hiking.",
    tips: "Wear appropriate shoes for mountain hiking and don't miss the nearby alpine lakes.",
    images: [
      {
        src: img4,
        alt: "Mountain hiking",
        description: "Explore breathtaking mountain trails.",
      },
      {
        src: surf,
        alt: "Skiing in winter",
        description: "Experience skiing in a spectacular setting.",
      },
      {
        src: surf2,
        alt: "Relaxing at the spa",
        description: "Treat yourself to a relaxing massage after a day of adventure.",
      },
      {
        src: surf3,
        alt: "View from the chalet",
        description: "Admire mountain landscapes from your chalet.",
      },
      {
        src: surf4,
        alt: "Gourmet meal",
        description: "Savor locally prepared dishes.",
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
          src={img4}
          alt="Plage Imsouane"
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
              {showFullDescription ? "Read Less" : "Read More"}
            </button>
          </motion.section>

          <motion.section
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">
              Best Time to Visit
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
              Refuge Services
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
              Visitor Tips
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
            Explore Our Refuge in Pictures
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {resortData.images.map((image, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                  <p className="text-lg">{image.description}</p>
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
