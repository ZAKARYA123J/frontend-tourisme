import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoblue from "../assets/logoblue.png";

const Footer = () => {
  return (
<footer className="bg-gray-100 text-black py-10 mt-auto transition-all duration-300 hover:bg-gray-200">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">

      <div>
        <h3 className="font-bold mb-3 text-lg">Cultural:</h3>
        <ul className="space-y-2">
          <li><Link to='/festivals' className="hover:text-blue-500 text-lg transition duration-300 hover:scale-102 active:scale-98">Festivals</Link></li>
          <li><Link to='/exhibitions' className="hover:text-blue-500 text-lg transition duration-300 hover:scale-102 active:scale-98">Exhibitions</Link></li>
          <li><Link to='/heritage' className="hover:text-blue-500 transition text-lg duration-300 hover:scale-102 active:scale-98">Heritage Tours</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-3 text-lg">Sports:</h3>
        <ul className="space-y-2">
          <li><Link to='/tournaments' className="hover:text-blue-500 text-lg transition duration-300 hover:scale-102 active:scale-98">Tournaments</Link></li>
          <li><Link to='/marathons' className="hover:text-blue-500 transition text-lg duration-300 hover:scale-102 active:scale-98">Marathons</Link></li>
          <li><Link to='/adventures' className="hover:text-blue-500 transition text-lg duration-300 hover:scale-102 active:scale-98">Adventures</Link></li>
        </ul>
      </div>
      <div>
            <h3 className="font-bold mb-3 text-lg">Reservations:</h3>
            <ul className="space-y-2">
              <li><Link to='/hotels' className="hover:text-blue-500 transition text-lg duration-300">Hotels</Link></li>
              <li><Link to='/airbnb' className="hover:text-blue-500 transition text-lg duration-300">Airbnb</Link></li>
              <li><Link to='/carBooking' className="hover:text-blue-500 transition text-lg duration-300">Car Booking</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-lg">Review:</h3>
            <ul className="space-y-2">
              <li><Link to='/feedback' className="hover:text-blue-500 text-lg transition duration-300">Feedback</Link></li>
            </ul>
          </div>

    </div>

    <div className="border-t border-gray-400 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-base">
      <div className="text-center md:text-left">
        <p>© 2025 - Tous droits réservés</p>
        <p>Site géré par le Conseil Régional du Tourisme Agadir Souss-Massa</p>
      </div>

      <div className="flex space-x-5 mt-5 md:mt-0">
        {[FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram].map((Icon, index) => (
          <Icon 
            key={index} 
            className="text-2xl text-gray-600 transition-transform duration-300 hover:text-blue-500 hover:scale-102 active:scale-98"
          />
        ))}
      </div>

      <img src={logoblue} alt="Web logo" className="h-[100px] w-auto transition-transform duration-300 hover:scale-102 active:scale-98" />
    </div>
  </div>
</footer>

  );
};

export default Footer;