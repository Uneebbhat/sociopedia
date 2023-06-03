import React from "react";
import "./SmallUserProfile.css";
export default function SmallUserProfile() {
  return (
    <>
      <div className="small__profile-wrapper">
        <div className="user__wrapper">
          <div className="user">
            <div className="user__img">
              <img src="/img/me.png" alt="user picture" />
            </div>
            <div className="about__user">
              <h4>Uneeb Bhatti</h4>
              <p>0 Followers</p>
            </div>
          </div>
          <hr />
          <div className="stats">
            <div className="first__stat stat">
              <p>people visited</p>
              <p className="number">750</p>
            </div>
            <div className="second__stat stat">
              <p>posts impressions</p>
              <p className="number">1120</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
