import React from "react";
import { motion } from "framer-motion";

import souk2 from "../assets/souk2.jpg";
import souk3 from "../assets/souk3.jpg";
import souk4 from "../assets/souk4.jpg";
import souk5 from "../assets/souk5.jpg";
import souk6 from "../assets/souk6.jpg";
import souk7 from "../assets/souk7.jpg";
import soukalhad from "../assets/soukalhad.jpg";
import souk from "../assets/souk.jpg";

const images = [
  { src: souk, alt: "Colorful market", description: "A lively market with stalls of colorful fabrics and exotic spices." },
  { src: souk2, alt: "Spices in the market", description: "A stall filled with beautiful spices of vibrant colors and enchanting aromas." },
  { src: souk3, alt: "Local crafts", description: "Local artisans creating handmade art pieces in a market workshop." },
  { src: souk4, alt: "Textiles", description: "A beautiful textile design in the market, a true work of art reflecting the richness and diversity of local craftsmanship." },
  { src: souk5, alt: "Vendors at the market", description: "Vendors talking with customers in a busy street, surrounded by colorful stalls." },
  { src: souk6, alt: "Market at night", description: "The market illuminated by lanterns, creating a magical and warm atmosphere." },
  { src: souk7, alt: "Traditional clothes", description: "Traditional clothes, handwoven and filled with fascinating patterns." },
  { src: soukalhad, alt: "Carpet merchant", description: "A lively market with people walking among stalls selling fruits, vegetables, and handmade products." },
];

const Activite3 = () => {
  return (
    <div className="bg-orange-700 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Discovery of Traditional Souks</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl text-black font-semibold mt-3">{image.alt}</h3>
            <p className="text-sm text-gray-700 mt-2">{image.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activite3;
