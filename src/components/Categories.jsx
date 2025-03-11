import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const EventCategories = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Event Categories</h2>

      <div className="grid gap-4 md:grid-cols-2">
       
        <div className="p-4 border-l-4 border-green-500 bg-green-50">
            <Link to="/cutural" className="p-4 border-l-4 border-green-500 bg-green-50 hover:bg-green-100 transition-all duration-300">
          <h3 className="font-semibold mb-2">Cultural</h3>
          <ul className="text-sm space-y-1">
            <li>Festivals</li>
            <li>Exhibitions</li>
            <li>Heritage Tours</li>
          </ul></Link>
        </div>

     
        <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
         <Link to="/sports"  className="p-4 border-l-4 border-blue-500 bg-blue-50 hover:bg-blue-100 transition-all duration-300"
        >
          <h3 className="font-semibold mb-2">Sports</h3>
          <ul className="text-sm space-y-1">
            <li>Tournaments</li>
            <li>Marathons</li>
            <li>Adventure Sports</li>
          </ul></Link>
        </div>

        <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
         <Link to="/hosting "className="p-4 border-l-4 border-purple-500 bg-purple-50 hover:bg-purple-100 transition-all duration-300"
         >
          <h3 className="font-semibold mb-2">Hosting</h3>
          <ul className="text-sm space-y-1">
            <li>Hotels</li>
            <li>airbnb</li>
            <li>rent</li>
          </ul></Link>
        </div>

    
        <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
         <Link to="transport"className="p-4 border-l-4 border-purple-500 bg-purple-50 hover:bg-purple-100 transition-all duration-300"
         >
          <h3 className="font-semibold mb-2">Transport</h3>
          <ul className="text-sm space-y-1">
            <li>bus</li>
            <li>uber</li>
            <li>book a car</li>
          </ul></Link>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
        <FiArrowRight className="inline-block" />
        <span>Need something specific? </span>
        <button className="text-blue-600 hover:underline">Contact us</button>
      </div>
    </div>
  );
};

export default EventCategories;