import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleStoreData = () => {
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
  };

  return (
    <>
      <div className="main__wrapper">
        <div className="container">
          <div className="welcome__message">
            <p>Welcome to Sociopedia, the Social Media For Sociopathsic</p>
          </div>
          <form action="/" className="form">
            <div className="email__pass">
              <div className="email">
                <input
                  type="email"
                  className="email"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  className="password"
                  placeholder="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <div className="button">
              <button className="btn" onClick={handleStoreData}>
                Login
              </button>
            </div>
            <div className="signup">
              <Link to="/signup">Don't have an account? SignUp here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
