import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="welcome__heading">
          <p>Welcome to Sociopedia, the Social Media For Sociopathsics</p>
        </div>
        <div className="form">
          <form action="/" className="form">
            <div className="name__form">
              <input
                type="text"
                className="name first__name"
                placeholder="First Name"
              />
              <input type="text" className="name" placeholder="Last Name" />
            </div>
            <div className="email__form">
              <input
                type="email"
                className="email"
                placeholder="name@gmail.com"
              />
              <input
                type="password"
                className="password"
                placeholder="password"
              />
            </div>
            <div className="profile__pic">
              <div className="border">
                <p>Add Picture Here</p>
              </div>
            </div>
            <div className="button">
              <button className="btn">Register</button>
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
