import React from "react";
import { motion } from "framer-motion";

import Views2 from "../assets/views2.jpg";
import Views3 from "../assets/views3.jpg";
import Views4 from "../assets/views4.jpg";
import Views5 from "../assets/views5.jpg";
import Views6 from "../assets/views6.jpg";
import Views7 from "../assets/views7.jpg";
import Views8 from "../assets/views8.jpg";
import Views9 from "../assets/views9.jpg";
import Views10 from "../assets/views10.jpg";
import Views11 from "../assets/views11.jpg";
import Views12 from "../assets/views12.jpg";
import upview from "../assets/upview.jpg";
import Views1 from "../assets/views1.jpg";

const images = [
  { src: Views1, alt: "View of traditional decor", description: "A stunning panorama of snowy decor next to a brown wall." },
  { src: Views2, alt: "Sunset", description: "A spectacular sunset lighting up the sky with orange and red hues." },
  { src: Views3, alt: "Dense forest", description: "A peaceful view of the sea extending to the horizon, with soft waves and calming colors." },
  { src: Views4, alt: "Desert landscape", description: "Golden sand dunes, with a clear sky and a breathtaking desert landscape." },
  { src: Views5, alt: "View of the sea", description: "A lush forest with green trees and light filtering through the foliage." },
  { src: Views6, alt: "The Corniche in the evening", description: "A verdant valley surrounded by mountains, offering a peaceful and beautiful landscape." },
  { src: Views7, alt: "View in the corniche", description: "A panoramic view of a vibrant city, with modern buildings and bustling streets." },
  { src: Views8, alt: "Mountains at sunrise", description: "The first light of the sun shining behind majestic mountains." },
  { src: Views9, alt: "Paradise beach", description: "A white sand beach, lined with palm trees, with sparkling turquoise waters." },
  { src: Views10, alt: "View of the beach", description: "A tranquil lake surrounded by mountains, with crystal clear waters reflecting the sky." },
  { src: Views11, alt: "Panoramic view of flowers", description: "A spectacular view of a lush valley, surrounded by green hills." },
  { src: Views12, alt: "View of the private beach", description: "Green fields and gentle hills stretching endlessly under a clear blue sky." },
  { src: upview, alt: "View of the city", description: "Green fields and gentle hills stretching endlessly under a clear blue sky." },
];

const Activite4 = () => {
  return (
    <div className="bg-blue-800 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Discovery of Spectacular Views</h2>
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

export default Activite4;
