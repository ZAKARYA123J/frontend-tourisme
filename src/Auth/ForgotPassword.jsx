import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/forgot-password", { email });
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send reset link.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md transform transition-all duration-700 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter your email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-500 shadow-md"
          >
            Send Reset Link
          </button>
          {message && <div className="text-green-600 text-sm text-center mt-3">{message}</div>}
          {error && <div className="text-red-600 text-sm text-center mt-3">{error}</div>}
        </form>
        <div className="text-center mt-3">
          <Link to="/login" className="text-blue-600 hover:text-blue-800 transition-all duration-500">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
