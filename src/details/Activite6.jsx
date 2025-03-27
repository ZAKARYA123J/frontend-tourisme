import React from "react";
import { motion } from "framer-motion";
import desert from "../assets/desert.jpg";
import desert2 from "../assets/desert2.jpg";
import desert3 from "../assets/desert3.jpg";
import desert4 from "../assets/desert4.jpg";
import desert5 from "../assets/desert5.jpg";
import desert6 from "../assets/desert6.jpg";

const images = [
  { src: desert, alt: "Sand dunes", description: "The vast sand dunes of the desert, creating a majestic and endless landscape." },
  { src: desert2, alt: "Sunset over the desert", description: "A spectacular sunset over the desert, with orange and red hues on the horizon." },
  { src: desert3, alt: "Adorable desert view", description: "A breathtaking desert landscape, with golden dunes stretching as far as the eye can see, offering a serene and beautiful view at the heart of the desert." },
  { src: desert4, alt: "Sandstorm", description: "Animals enduring the desert heat, camouflaging into the dry landscape." },
  { src: desert5, alt: "Desert vegetation", description: "Some hardy plants and cacti managing to survive in the desert's aridity." },
  { src: desert6, alt: "Desert wildlife", description: "A sandstorm sweeping across the desert, reducing visibility and creating a mysterious atmosphere." },
];

const Activite6 = () => {
  return (
    <div className="bg-yellow-800 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Discovery of the Desert and Its Wonders</h2>
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

export default Activite6;
