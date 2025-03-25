import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa"; 

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div
      className="flex justify-center items-start min-h-screen bg-cover bg-blue-200 bg-center relative text-center pt-20 pb-20"
  
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className={`relative bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full transition-all duration-700 ease-out transform mx-auto ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
          About Us
        </h2>
        <p
          className={`text-gray-600 mb-6 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Welcome to our company! We are a passionate team committed to delivering the best experiences in web development and design. With a focus on innovation, we craft solutions that matter.
        </p>

        <div className="text-gray-700 space-y-4">
          <p>
            Our journey started with a simple mission: to create high-quality products that exceed expectations. Over the years, we've grown and evolved, working with clients from various industries to solve complex challenges.
          </p>
          <p>
            We believe in collaboration, creativity, and the power of technology to bring ideas to life. Our team consists of highly skilled professionals who are always ready to tackle new and exciting projects.
          </p>
          <p>
            Whether you're a startup or an established business, we are here to help you succeed. Let's build something great together!
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={30} />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={30} />
            </a>
            <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore Our Website</h3>
          <div className="flex flex-col items-center space-y-3">
            <ul className="space-y-2">
              <li><Link to="/feedback" className="hover:text-blue-400">Feedback</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 text-white font-semibold py-1 px-3 text-sm rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
