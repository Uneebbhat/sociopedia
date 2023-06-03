import React from "react";
import SmallUserProfile from "./SmallUserProfile/SmallUserProfile";
import Posts from "./Posts/Posts";
import FriendList from "./FriendList/FriendList";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <div className="main__wrapper">
        <SmallUserProfile />
        <Posts />
        <FriendList />
      </div>
    </>
  );
}
