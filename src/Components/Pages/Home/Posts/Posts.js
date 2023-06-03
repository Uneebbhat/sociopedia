import React from "react";
import NewPost from "./NewPost/NewPost";
import PostData from "./PostData/PostData";

export default function Posts() {
  return (
    <>
      <div className="post__wrapper">
        <NewPost />
        <PostData />
      </div>
    </>
  );
}
