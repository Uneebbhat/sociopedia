import React, { useState } from "react";
import "./HomeNav.css";

const HomeNav = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left__side">
          <div className="logo">
            <img src="/img/logo.svg" alt="" />
          </div>
          <div className="searchbar">
            <input type="search" className="search" placeholder="Search" />
          </div>
        </div>
        <div className="right__side">
          <div className="icons">
            <img src="img/dark mode.svg" alt="" />
            <img src="img/message.svg" alt="" />
            <img src="img/notification.svg" alt="" />
            <img src="img/info.svg" alt="" />
          </div>
          <div className="change__profile">
            <div>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="select__user"
              >
                <option value="option1">Fake Person 1</option>
                <option value="option2">Fake Person 2</option>
                <option value="option3">Fake Person 3</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
