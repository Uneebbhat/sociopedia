import React, { useState, useEffect } from "react";
import "./PostData.css";

export default function PostData() {
  const userApi = "https://jsonplaceholder.typicode.com/users";
  const postsApi = "https://jsonplaceholder.typicode.com/posts";
  const imageApi = "https://jsonplaceholder.typicode.com/photos";
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [imageData, setImageData] = useState(0);

  const [likes, setLikes] = useState({});

  const handleClickLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, postsResponse, imageResponse] = await Promise.all([
          fetch(userApi),
          fetch(postsApi),
          fetch(imageApi),
        ]);
        const [userData, postsData, imageData] = await Promise.all([
          userResponse.json(),
          postsResponse.json(),
          imageResponse.json(),
        ]);

        setUserData(userData);
        setPostData(postsData);
        setImageData(imageData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="post__data-wrapper">
        <div className="post__data">
          {userData.map((user, index) => (
            <div className="post__data-wrapper" key={index}>
              <div className="post__data">
                <div className="user__wrapper">
                  <div className="user__post">
                    <div className="user__img-post">
                      <img src="/img/me.png" alt="user" />
                    </div>
                    <div className="about__user-post">
                      <h4 className="user__Name">{user.name}</h4>
                    </div>
                  </div>
                  <div className="about__post">
                    <div className="post__heading">
                      <h5>{postData[index]?.title}</h5>
                    </div>
                    <div className="post__img">
                      <img src={imageData[index]?.url} alt="" />
                    </div>
                  </div>
                  <div className="post__review">
                    <div
                      className="like"
                      onClick={() => handleClickLike(index)}>
                      <img src="/img/like.svg" alt="" />
                      <span>{likes[index] || 0}</span>
                    </div>
                    <div className="comment">
                      <img src="/img/comment.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
