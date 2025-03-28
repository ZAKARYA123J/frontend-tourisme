import React from "react";
import { Link } from "react-router-dom";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4-4.jpg";
import Aghroud from "../assets/Aghroud.jpg";
import Taghazout from "../assets/Taghazout.jpg";
import quad from "../assets/quadaga.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900"></h1>
      <p className="py-4 text-gray-700 text-xl font-bold">Best Destinations In Agadir</p>
      <p className="text-black text-lg md:text-xl font-bold mb-5">
        Destinations are travel spots chosen for tourism or exploration,
        offering attractions, activities, and experiences. They can be
        historical sites, resorts, or natural wonders. A good destination
        provides memorable experiences for visitors.
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        {[
          {
            src: img3,
            title: "Resort View",
            desc: "Luxury stay with ocean view",
            link: "/destination1",
          },
          {
            src: img4,
            title: "Beach Escape",
            desc: "Golden sands and clear waters",
            link: "/destination2",
          },
          {
            src: Aghroud,
            title: "Aghroud Beach",
            desc: "Relaxing coastal experience",
            link: "/destination3",
          },
          {
            src: Taghazout,
            title: "Taghazout Surf",
            desc: "Surfing paradise in Morocco",
            link: "/destination4",
          },
          {
            src: quad,
            title: "Quad Adventure",
            desc: "Exciting desert rides",
            link: "/destination5",
          },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <Link to={item.link}>
              <img
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                src={item.src}
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 rounded-lg">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
