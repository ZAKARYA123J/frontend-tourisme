import { useState } from "react";
import { motion } from "framer-motion";

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
        {/* Animation for Thank You message */}
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  px-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">Give your opinion</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-7" onSubmit={handleSubmit}>
          <div>
            <motion.label
              htmlFor="name"
              className="block text-gray-700  font-medium"
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
              className="w-full p-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            ></motion.textarea>
          </div>

          <div>
            <motion.label
              htmlFor="rating"
              className="block text-gray-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Note
            </motion.label>
            
            {/* Apply animation to the select dropdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
             <motion.option className="rounded-md font-semibold hover:bg-blue-700 transition duration-300" value={1}>⭐ 1</motion.option>   
                <option value={2}>⭐⭐ 2</option>
                <option value={3}>⭐⭐⭐ 3</option>
                <option value={4}>⭐⭐⭐⭐ 4</option>
                <option value={5}>⭐⭐⭐⭐⭐ 5</option>
              </select>
            </motion.div>
          </div>

          {/* Button with hover animation */}
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
