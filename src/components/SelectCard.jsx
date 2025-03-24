import React from "react";
import { Link } from "react-router-dom";

const SelectCard = (props) => {
  return (
    <Link to={props.link} className="relative">  {/* Use props.link here */}
      <img
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        src={props.bg}
        alt={props.alt || "background image"} 
        aria-label={props.alt || "Image"}
      />
      <div className={`absolute w-full h-full top-0 left-0 ${props.bgOverlay ? 'bg-gray-900/50' : 'bg-gray-900/30'} group-hover:bg-gray-900/40 transition-all`}>
        {props.text && (
          <p className="left-4 bottom-4 text-2xl font-bold text-white absolute transition-opacity duration-300 group-hover:opacity-100 opacity-0">
            {props.text} 
          </p>
        )}
      </div>
    </Link>
  );
};

export default SelectCard;
