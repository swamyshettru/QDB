import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fetchGet";
import { getRandomNumber } from "../Helper/Utils";
import postImg from "../images/post.jpg";
import Post from "./Post";

const Posts = () => {
  interface Posts {
    id: number;
    title: string;
    body: string;
  }
  const [posts, setPosts] = useState<Array<Posts>>([]);
  const [isPostVisible, setIsPostVisible] = useState({
    postVisible: false,
    postId: 1,
  });

  useEffect(() => {
    const randomUser = getRandomNumber(1, 10);
    const url = `${process.env.REACT_APP_BASE_API_URL_USERS}${randomUser}/posts`;
    fetchData(url, setPosts);
  }, []);

  return isPostVisible.postVisible ? (
    <Post postId={isPostVisible?.postId} />
  ) : (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() =>
            setIsPostVisible({
              postVisible: true,
              postId: post.id,
            })
          }
        >
          <img src={postImg} alt="logo" width="250px" height="125px" />
          <div style={{ padding: "20px" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
