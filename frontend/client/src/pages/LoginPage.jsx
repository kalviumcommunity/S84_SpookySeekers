import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError("");

    // Validate input fields
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.token) {
          // Store the token securely
          localStorage.setItem("token", data.token);

          // Redirect to the home page
          alert("Login successful!");
          navigate("/home"); // Redirect to homepage
        } else {
          setError("Login failed: No token received.");
        }
      } else {
        // Display backend error message
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred while trying to log in. Please try again later.");
    }
  };

  const handleForgotPassword = () => {
    alert("Resetting password is not supported.");
  };

  return (
    <div className="login-container">
      {/* Sign Up Button */}
      <button
        className="signup-btn"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>

      <div className="login-box">
        <h2>Welcome Back, Seeker</h2>
        <p>Enter the shadows and access your account...</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-text">{error}</p>} {/* Display error messages */}
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default LoginPage;