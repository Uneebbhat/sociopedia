import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Store form values in local storage
    localStorage.setItem("user_first_name", firstName);
    localStorage.setItem("user_last_name", lastName);
    localStorage.setItem("user_email", email);
    localStorage.setItem("user_password", password);

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container">
        <div className="welcome__heading">
          <p>Welcome to Sociopedia, the Social Media For Sociopathsics</p>
        </div>
        <div className="form">
          <form onSubmit={handleFormSubmit} className="form">
            <div className="name__form">
              <input
                type="text"
                className="name first__name"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <input
                type="text"
                className="name"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="email__form">
              <input
                type="email"
                className="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                className="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="profile__pic">
              <div className="border">
                <p>Add Picture Here</p>
              </div>
            </div>
            <div className="button">
              <Link to="/">
                <button type="submit" className="btn">
                  Register
                </button>
              </Link>
            </div>
            <div className="sign__up">
              <p>Already have an account? Login here</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
