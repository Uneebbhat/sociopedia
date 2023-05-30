import React from "react";
import "./HomePage.css";
import UserProfile from "./UserProfile/UserProfile";
import FriendList from "./FriendList/FriendList";
import Post from "./Posts/Post";

export default function HomePage() {
  return (
    <>
      <div className="home__container">
        <UserProfile className="profile" />
        <Post className="post" />
        <FriendList className="friends" />
      </div>
    </>
  );
}
