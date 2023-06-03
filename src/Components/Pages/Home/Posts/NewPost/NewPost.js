import React from "react";
import "./NewPost.css";

export default function NewPost() {
  return (
    <>
      <div className="new__post-wrapper">
        <div className="add__post">
          <div className="user__img">
            <img src="/img/me.png" alt="user" />
          </div>
          <div className="on__mind">
            <input
              type="text"
              className="mind"
              placeholder="What's on you mind?"
            />
          </div>
        </div>
        <hr />
        <div className="add__attachment">
          <div className="post__icons">
            <div className="img post__icon">
              <img src="/img/image.svg" alt="" />
              <span>Image</span>
            </div>
            <div className="clip post__icon">
              <img src="/img/clip.svg" alt="" />
              <span>Clip</span>
            </div>
            <div className="attachment post__icon">
              <img src="/img/attachment.svg" alt="" />
              <span>Attachment</span>
            </div>
            <div className="audio post__icon">
              <img src="/img/audio.svg" alt="" />
              <span>Audio</span>
            </div>
            <div className="post__button">
              <button className="post__btn">Post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
