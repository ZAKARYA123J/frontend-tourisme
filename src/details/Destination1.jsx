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
    name: "Marina",
    description:
      "Located on the beautiful Marine Beach in Agadir, Marina is a peaceful haven where luxury meets nature. Offering stunning views of the Atlantic Ocean, this exceptional resort is perfect for a relaxing getaway or an unforgettable beach adventure. Dive into an infinity pool overlooking the horizon, pamper yourself in a top-tier spa, and indulge your taste buds at our gourmet restaurants serving refined flavors. Whether you want to relax or experience thrilling water activities, every moment here promises a memorable experience.",
    location: "Marine Beach, Agadir",
    services: [
      "Infinity pool with ocean view",
      "Spa and wellness center for ultimate relaxation",
      "Gourmet restaurants with exquisite flavors",
      "Water activities: jet-ski, surfing, diving, and more",
      "Modern gym with state-of-the-art equipment",
      "Concierge service for a customized stay",
      "Private beach access for an exclusive experience",
    ],
    bestTimeToVisit:
      "The best time to visit is from May to October when the weather is ideal for outdoor activities.",
    tips: "Make sure to book your activities in advance and enjoy the breathtaking sunsets by the beach.",
    images: [
      { src: lacote, alt: "Paradisiacal beach", description: "Admire the beauty of the beach and its crystal-clear waters." },
      { src: lacote2, alt: "Kayaking on the water", description: "Explore the ocean by kayak and have a unique experience." },
      { src: lacote3, alt: "Yoga class", description: "Relax with a yoga class facing the sea." },
      { src: lacote4, alt: "Luxurious pool", description: "Enjoy a moment of relaxation in an infinity pool." },
      { src: viewplage2, alt: "Panoramic view", description: "Admire the magnificent view of the ocean from the resort." },
      { src: place3, alt: "Relaxation corner", description: "A perfect spot to unwind after a busy day." },
    ],
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
      {title === "Resort Description" && (
        <button
          className="text-black hover:text-indigo-500 transition-all duration-300 mt-4"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      )}
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
        {renderSection("Resort Description", showFullDescription ? resortData.description : `${resortData.description.substring(0, 200)}...`, lacote, "Paradisiacal beach")}

        {renderSection("Best Time to Visit", resortData.bestTimeToVisit, lacote2, "Kayaking on the water")}

        {renderSection("Resort Services", resortData.services.map(service => <motion.li key={service} className="transition-all duration-300 hover:text-indigo-600">{service}</motion.li>), lacote3, "Yoga class")}

        {renderSection("Visitor Tips", resortData.tips, lacote4, "Relaxation")}
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-indigo-700 hover:text-indigo-600 transition-all duration-300">
          Explore Our Resort in Pictures
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
