import React, { useState } from "react";
import "./App.css";
import { FaRegMoon, FaSun } from "react-icons/fa";

const Auth = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleSignup = () => {
    setSignupOpen(!isSignupOpen);
    setLoginOpen(false); // Close login when signup is opened
  };

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
    setSignupOpen(false); // Close signup when login is opened
  };

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const themeStyles = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
    height: "100vh",
    width: "100%",
  };

  return (
    <div style={themeStyles}>
      {/* Navbar Section */}
      <nav className="navbar">
        <h1>React Task</h1>
        <div className="nav-right">
          <button className="nav-btn" onClick={toggleSignup}>
            Signup
          </button>
          <button className="nav-btn" onClick={toggleLogin}>
            Login
          </button>
          <p className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaRegMoon />}
          </p>
        </div>
      </nav>

      {/* Header Section */}
      <h2 className="header-text">React Task on useState & useEffect</h2>

      {/* Signup Form */}
      {isSignupOpen && (
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button className="auth-btn">Signup</button>
        </form>
      )}

      {/* Login Form */}
      {isLoginOpen && (
        <form className="auth-form">
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="auth-btn">Login</button>
        </form>
      )}
    </div>
  );
};

export default Auth;