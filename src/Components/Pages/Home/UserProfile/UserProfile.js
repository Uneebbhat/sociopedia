import React from "react";
import "./UserProfile.css";

export default function Userprofile() {
  return (
    <>
      <div className="container">
        <div className="user__name">
          <div className="user__wrapper">
            <div className="user__img">
              <div className="img">
                <img src="https://via.placeholder.com/600/92c952" alt="" />
              </div>
            </div>
            <div className="user__name">
              <h4>Leanne Graham</h4>
              <p>0 followers</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="user__small-details">
          <div className="first">
            <p>who visited your profile</p>
            <p>1170</p>
          </div>
          <div className="second">
            <p>impression of your post </p>
            <p>1120</p>
          </div>
        </div>
      </div>
    </>
  );
}
