import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-blue-900 mb-2">Information</h3>
            <ul className="space-y-1 text-sm">
              {['Privacy Policy', 'Cookie Policy', 'Accessibility', 'Contact us'].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors">
                  <a href="#" className="text-gray-600 hover:text-blue-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-semibold text-blue-900 mb-2">Links</h3>
            <ul className="space-y-1 text-sm">
              {['ENIT S.p.A.', 'Ministry of Tourism', 'Open Library'].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors">
                  <a href="#" className="text-gray-600 hover:text-blue-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-semibold text-blue-900 mb-2">Account</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" className="text-gray-600 hover:text-blue-600">Login/Sign Up</a>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" className="text-gray-600 hover:text-blue-600">My Bookings</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-blue-900 mb-2">Connect</h3>
            <div className="flex space-x-3">
              {[FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <form className="mt-2 flex gap-2">
              <input 
                type="email" 
                placeholder="Email"
                className="flex-1 px-3 py-1.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-center">
          <div className="mb-2 md:mb-0">
            <h2 className="text-xl font-bold text-blue-900">
              TravelTour
            </h2>
          </div>
          <p className="text-gray-600 text-xs">
            © 2025 TravelTour. All rights reserved.<br className="md:hidden" />
            Managed by Regional Tourism Council - Agadir
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;