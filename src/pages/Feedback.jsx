import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedSelect = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className="w-full relative">
      <label className="text-gray-700 font-semibold text-lg mb-1 block">{label}</label>
      <div
        className="p-4 text-lg rounded-lg bg-white border border-gray-400 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLabel}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full mt-2 bg-white border border-gray-400 rounded-lg shadow-lg z-10"
          >
            {options.map((option) => (
              <motion.div
                key={option.value}
                className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Feedback = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, content, rating }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600">Thank you for your Feedback!🎉</h2>
          <p className="text-gray-600 mt-2">Have a great day! 😊</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">Give your opinion</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-7" onSubmit={handleSubmit}>
          <div>
            <motion.label
              htmlFor="name"
              className="block text-gray-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Name of place
            </motion.label>
            <motion.input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border mt-6 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div>
            <motion.label
              htmlFor="content"
              className="block text-gray-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Feedback
            </motion.label>
            <motion.textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full p-2 border mt-6 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            ></motion.textarea>
          </div>

          <div>
          

   
            <AnimatedSelect
              label="Rate the place"
              options={[
                { value: 1, label: "⭐ 1" },
                { value: 2, label: "⭐⭐ 2" },
                { value: 3, label: "⭐⭐⭐ 3" },
                { value: 4, label: "⭐⭐⭐⭐ 4" },
                { value: 5, label: "⭐⭐⭐⭐⭐ 5" },
              ]}
              value={rating}
              onChange={setRating}
              placeholder="Select rating"
            />
          </div>

         
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
