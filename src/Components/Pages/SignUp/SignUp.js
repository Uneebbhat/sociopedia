import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataURL = e.target.result;
      localStorage.setItem("uploadedImage", dataURL);
    };
    reader.readAsDataURL(file);
  };

  const handleStoreData = () => {
    localStorage.setItem("First name", firstName);
    localStorage.setItem("Last name", lastName);
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
            <div className="name">
              <input
                type="text"
                className="first__name name"
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
                autoComplete="firstName"
              />
              <input
                type="text"
                className="last__name name"
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
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
            <div className="add__img">
              <div className="img__border">
                <div className="text">
                  <input
                    type="file"
                    id="imageUpload"
                    className="image__input"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            <div className="button">
              <button className="btn" onClick={handleStoreData}>
                REGISTER
              </button>
            </div>
            <div className="signup">
              <Link to="/signin">Already have an account? Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
