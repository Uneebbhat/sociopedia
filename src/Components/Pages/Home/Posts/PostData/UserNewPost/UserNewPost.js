import React, { useState } from "react";
import "./UserNewPost.css";

export default function UserNewPost() {
  const newPostText = localStorage.getItem("User New Post");
  const newPostImage = localStorage.getItem("User Post Image");
  const userName = localStorage.getItem("First name");
  const [likes, setLikes] = useState(0);

  const handleClickLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <>
      <div className="post__data-wrapper">
        <div className="post__data">
          <div className="post__data-wrapper">
            <div className="post__data">
              <div className="user__wrapper">
                <div className="user__post">
                  <div className="user__img-post">
                    <img src="/img/me.png" alt="user" />
                  </div>
                  <div className="about__user-post">
                    <h4 className="user__Name">{userName}</h4>
                  </div>
                </div>
                <div className="about__post">
                  <div className="post__heading">
                    <h5>{newPostText}</h5>
                  </div>
                  <div className="post__img">
                    <img src={newPostImage} alt="" />
                  </div>
                </div>
                <div className="post__review">
                  <div className="like" onClick={handleClickLike}>
                    <img src="/img/like.svg" alt="" />
                    <span>{likes}</span>
                  </div>
                  <div className="comment">
                    <img src="/img/comment.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
