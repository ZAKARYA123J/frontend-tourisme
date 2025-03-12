import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      if (response.data.token && response.data.user) {
        setSuccess("Connexion réussie !");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError("Réponse invalide. Veuillez réessayer.");
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || "Échec de connexion. Veuillez réessayer.");
    }
  };


  const handleSubmitRegister = async (e) => {
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
        setSuccess("Inscription réussie !");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError("Réponse invalide. Veuillez réessayer.");
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || "Échec de l'inscription. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 px-4 overflow-hidden">
      <div className={`bg-white shadow-2xl rounded-2xl flex w-full max-w-4xl transition-transform duration-1000 ease-in-out transform ${isSignUp ? 'translate-x-56' : 'translate-x-0'}`}>
        <div className={`w-1/2 p-10 flex flex-col justify-center transition-all duration-1000 ease-in-out ${isSignUp ? 'order-2' : 'order-1'}`}>
          {isSignUp ? (
            <>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Register</h2>
              <form onSubmit={handleSubmitRegister} className="space-y-5">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500" required />
                <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-700">{loading ? "Inscription..." : "Register"}</button>
                {error && <div className="mt-3 text-red-600 text-sm text-center">{error}</div>}
                {success && <div className="mt-3 text-green-600 text-sm text-center">{success}</div>}
              </form>
              <p className="text-center mt-4 text-sm">Already have an account? <span onClick={() => setIsSignUp(false)} className="text-blue-600 cursor-pointer hover:text-blue-800 transition-all duration-500">Sign In</span></p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Sign In</h2>
              <form onSubmit={handleSubmitLogin} className="space-y-5">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500" placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500" placeholder="Password" required />
                <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-700" disabled={loading}>{loading ? "Connexion..." : "Sign In"}</button>
                {error && <div className="mt-3 text-red-600 text-sm text-center">{error}</div>}
                {success && <div className="mt-3 text-green-600 text-sm text-center">{success}</div>}
              </form>
              <p className="text-center mt-4 text-sm">Don't have an account? <span onClick={() => setIsSignUp(true)} className="text-blue-600 cursor-pointer hover:text-blue-800 transition-all duration-500">Register</span></p>
              <div className="text-center mt-4 text-sm">
                <Link to="/forgot-password" className="text-blue-600 cursor-pointer hover:text-blue-800 transition-all duration-500">Forgot Password?</Link>
              </div>
            </>
          )}
        </div>
        <div className={`w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 text-white flex flex-col justify-center items-center rounded-r-2xl p-10 transition-all duration-1000 ease-in-out ${isSignUp ? 'order-1' : 'order-2'}`}>
          <h2 className="text-3xl font-bold">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
          <p className="text-center mt-4">{isSignUp ? "Sign in to continue your journey with us." : "Register with your personal details to use all site features."}</p>
          <button onClick={() => setIsSignUp(!isSignUp)} className="mt-6 py-2 px-6 border border-white rounded-full text-white hover:bg-white hover:text-purple-600 transition-all duration-700">
            {isSignUp ? "Sign In" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
