import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
      });

      if (response.data.token && response.data.user) {
        setSuccess("Registration successful!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/"); 
      } else {
        setError("Invalid response. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {error && <div className="mt-3 text-red-600 text-sm text-center">{error}</div>}
          {success && <div className="mt-3 text-green-600 text-sm text-center">{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;
