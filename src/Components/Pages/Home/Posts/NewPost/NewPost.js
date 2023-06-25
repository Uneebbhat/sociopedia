import React, { useState, useRef } from "react";
import "./NewPost.css";

export default function NewPost() {
  const [userNewPost, setUserNewPost] = useState("");
  const storedImage = localStorage.getItem("uploadedImage");
  const [imageUpload, setImageUpload] = useState(null);
  const fileInputRef = useRef(null);

  const handleSaveData = (e) => {
    e.preventDefault();
  };

  const handleOnType = (e) => {
    setUserNewPost(e.target.value);
  };

  const handleOnClick = () => {
    localStorage.setItem("User New Post", userNewPost);
  };

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const image = e.target.files[0];
    setImageUpload(image);
    const imgReader = new FileReader();
    imgReader.onload = (e) => {
      const postDataURL = e.target.result;
      localStorage.setItem("User Post Image", postDataURL);
    };
    imgReader.readAsDataURL(image);
  };

  return (
    <>
      <div className="new__post-wrapper">
        <div className="add__post">
          <div className="user__img">
            <img src={storedImage} alt="user" />
          </div>
          <div className="on__mind">
            <input
              type="text"
              className="mind"
              placeholder="What's on you mind?"
              value={userNewPost}
              onChange={handleOnType}
            />
          </div>
        </div>
        <hr />
        <div className="add__attachment">
          <div className="post__icons">
            <div className="img post__icon" onClick={handleUploadImage}>
              <img src="/img/image.svg" alt="" />
              <span>Image</span>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
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
            <div className="post__button" onClick={handleSaveData}>
              <button className="post__btn" onClick={handleOnClick}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
