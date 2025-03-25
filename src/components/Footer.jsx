import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoblue from "../assets/logoblue.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
    
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

          <div>
            <h3 className="font-bold text-lg mb-3">Cultural:</h3>
            <ul className="space-y-2">
              <li><Link to="/festivals" className="hover:text-blue-400 text-lg">Festivals</Link></li>
              <li><Link to="/exhibitions" className="hover:text-blue-400 text-lg">Exhibitions</Link></li>
              <li><Link to="/heritage" className="hover:text-blue-400 text-lg">Heritage Tours</Link></li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-bold text-lg mb-3">Sports:</h3>
            <ul className="space-y-2">
              <li><Link to="/tournaments" className="hover:text-blue-400 text-lg">Tournaments</Link></li>
              <li><Link to="/marathons" className="hover:text-blue-400 text-lg">Marathons</Link></li>
              <li><Link to="/adventures" className="hover:text-blue-400 text-lg">Adventures</Link></li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-bold text-lg mb-3">Reservations:</h3>
            <ul className="space-y-2">
              <li><Link to="/hotels" className="hover:text-blue-400 text-lg">Hotels</Link></li>
              <li><Link to="/airbnb" className="hover:text-blue-400 text-lg">Airbnb</Link></li>
              <li><Link to="/carBooking" className="hover:text-blue-400 text-lg">Car Booking</Link></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-bold text-lg mb-3">Contact:</h3>
            <ul className="space-y-2">
              <li><Link to="/feedback" className="hover:text-blue-400 text-lg">Feedback</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 text-lg">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 text-lg">Contact Us</Link></li>

            </ul>
          </div>
        </div>


        <div className="border-t border-gray-700 mt-12 pt-6">

        
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-500 transition duration-300">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-blue-300 transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-600 hover:text-red-500 transition duration-300">
              <FaYoutube />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-700 hover:text-red-600 transition duration-300">
              <FaPinterest />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
          </div>

      
          <div className="text-center text-sm">
            <p>© 2025 - Tous droits réservés</p>
            <p>Site géré par le Conseil Régional du Tourisme Agadir Souss-Massa</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 