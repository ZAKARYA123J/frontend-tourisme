import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gradient-to-b from-gray-100 to-gray-200 border-t border-gray-300">
      <div className="max-w-[1240px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Information</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Cookie Policy', 'Accessibility', 'Terms and Conditions', 'Contact us'].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors">
                  <a href="#" className="text-gray-700 hover:text-blue-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Useful Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['ENIT S.p.A.', 'Ministry of Tourism', 'Open Library', 'Interoperability Guidelines'].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors">
                  <a href="#" className="text-gray-700 hover:text-blue-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Account */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Your Account</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" className="text-gray-700 hover:text-blue-600">Login / Sign Up</a>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" className="text-gray-700 hover:text-blue-600">My Bookings</a>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" className="text-gray-700 hover:text-blue-600">Wishlist</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Let's Keep in Touch</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-gray-700">Subscribe to our newsletter for special offers</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex space-x-4 mt-2">
                {[FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              TravelTour
            </h2>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 TravelTour. All rights reserved.<br />
            Managed by Regional Council of Tourism - Agadir Souss-Massa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;