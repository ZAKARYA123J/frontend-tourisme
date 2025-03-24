import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: "What's your preferred climate?",
      options: ["Tropical", "Cool", "Warm", "Cold"],
    },
    {
      question: "What type of activities do you enjoy most?",
      options: ["Outdoor Adventures", "Culture & History", "Relaxation"],
    },
    {
      question: "Preferred vacation pace?",
      options: ["Adventurous", "Peaceful", "Mixed"],
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const tropical = answers.filter((answer) => answer === "Tropical").length;
    const adventurous = answers.filter((answer) => 
      answer === "Outdoor Adventures" || answer === "Adventurous"
    ).length;

    let destination = "";
    if (tropical > adventurous) {
      destination = "Crocoparc";
    } else if (adventurous > tropical) {
      destination = "Taghazout Surf";
    } else {
      destination = "Aglou Beach";
    }
    setResult(destination);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="w-full p-6 bg-white rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Discover Your Perfect Agadir Experience
      </h1>

      <div className="h-2 bg-gray-200 rounded-full mb-8">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl font-semibold text-green-600">
              Perfect Match Found!
            </h2>
            <p className="text-xl font-medium text-gray-700">
              Your ideal destination:{" "}
              <span className="text-blue-600">{result}</span>
            </p>
            <button
              onClick={resetQuiz}
              className="mx-auto px-8 py-3 bg-blue-600 text-white rounded-lg 
              hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Try Again
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-8"
          >
            <h2 className="text-2xl text-center text-gray-800 font-medium">
              {questions[step].question}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {questions[step].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="px-6 py-3 bg-white border-2 border-blue-200 rounded-xl 
                  text-gray-700 text-lg font-medium hover:border-blue-400 
                  hover:bg-blue-50 transition-all duration-200 min-w-[200px]
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;