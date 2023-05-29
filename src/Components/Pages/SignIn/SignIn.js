import React from "react";
import "./SignIn.css";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="welcome__heading">
          <p>Welcome to Sociopedia</p>
        </div>
        <div className="form">
          <form action="/" className="form">
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
            <div className="button">
              <button className="btn">Login</button>
            </div>
            <div className="sign__up">
              <p>Don’t have an account? Signup here.</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
