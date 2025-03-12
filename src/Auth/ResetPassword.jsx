import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/reset-password", {
        token,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      setMessage(response.data.message);
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to reset password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md transform transition-all duration-700 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">New Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordConfirmation" className="form-label">Confirm Password:</label>
            <input
              type="password"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-500 shadow-md">Reset Password</button>
          {message && <div className="text-green-600 text-sm text-center mt-3">{message}</div>}
          {error && <div className="text-red-600 text-sm text-center mt-3">{error}</div>}
        </form>
        <div className="text-center mt-3">
          <a href="/login" className="text-blue-600 hover:text-blue-800 transition-all duration-500">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
