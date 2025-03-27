import React from "react";
import { motion } from "framer-motion";
import jmal1 from "../assets/jmal1.jpg";
import jmal2 from "../assets/jmal2.jpg";
import jmal3 from "../assets/jmal3.jpg";
import jmal4 from "../assets/jmal4.jpg";
import jmal5 from "../assets/jmal5.jpg";
import jmal6 from "../assets/jmal6.jpg";

const images = [
  { src: jmal1, alt: "Camel in desert", description: "A majestic camel walking through the golden dunes of the desert." },
  { src: jmal2, alt: "Camel at sunset", description: "A camel silhouette against a beautiful desert sunset." },
  { src: jmal3, alt: "Camel and its herd", description: "A group of camels moving together, with a panoramic view of the desert." },
  { src: jmal4, alt: "Camel in the shade", description: "A camel resting in the shade of a tree, seeking refuge from the desert heat." },
  { src: jmal5, alt: "Camel with light coloration", description: "A camel with a light coat, slowly moving through the hot sand." },
  { src: jmal6, alt: "Camel with spots", description: "A camel with a spotted coat, crossing the vast desert expanses." },
];

const Activite2 = () => {
  return (
    <div className="bg-yellow-800 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Camel Discovery in the Desert</h2>
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

export default Activite2;
