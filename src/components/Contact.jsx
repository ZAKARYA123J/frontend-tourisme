import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import contact from "../assets/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
    comment: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("SEND MESSAGE");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setButtonText("Sending...");
    setLoading(true);

    if (!formData.name || !formData.email || !formData.question || !formData.comment) {
      setErrorMessage("All fields are required.");
      setButtonText("SEND MESSAGE");
      setLoading(false);
      return;
    }

    axios
      .post("http://127.0.0.1:8000/api/contacts", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          setSuccessMessage("Your message has been successfully sent!");
          setButtonText("Sent!");
          setFormData({ name: "", email: "", question: "", comment: "" });
        }, 2000);
      })
      .catch(() => {
        setTimeout(() => {
          setLoading(false);
          setErrorMessage("An error occurred. Please try again.");
          setButtonText("SEND MESSAGE");
        }, 2000);
      });
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-white py-10"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-3xl w-full mt-20 bg-white shadow-lg rounded-xl p-10 flex flex-col items-center md:flex-row md:space-x-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900  md:mb-12 ">CONTACT US</h2>
          <p className="text-gray-600 mb-5 ">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
          </p>
          <form className="space-y-1" onSubmit={handleSubmit}>
            {["name", "email", "question"].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 font-medium capitalize">{field}:</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                  placeholder={`Your ${field}...`}
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-700 font-medium capitalize">Comment:</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                placeholder="Your comment..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : buttonText}
            </button>
          </form>
        </div>
        <motion.div
          className="md:w-1/2 hidden md:flex justify-center mt-6 md:mt-0 ml-20"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={contact} alt="24/7 Service" className="w-full max-w-xs" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
