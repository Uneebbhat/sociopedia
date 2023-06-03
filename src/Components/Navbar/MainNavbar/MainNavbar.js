import React from "react";
import "./MainNavbar.css";

export default function MainNavbar() {
  return (
    <>
      <nav className="navbar flex">
        <div className="left">
          <img src="/img/logo.svg" alt="" />
        </div>
        <div className="right">
          <div className="icons">
            <img src="/img/dark mode.svg" alt="" />
            <img src="/img/message.svg" alt="" />
            <img src="/img/notification.svg" alt="" />
            <img src="/img/info.svg" alt="" />
          </div>
          <div className="switch__account">
            <select className="accounts">
              <option value="account">Profile</option>
              <option value="signout">Sign out</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
}
