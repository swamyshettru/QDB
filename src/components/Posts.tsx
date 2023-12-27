import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { fetchData } from "../api/fetchUtils";
import { getRandomNumber } from "../helper/Utils";
import postImg from "../images/post.jpg";

const Posts: React.FC = () => {
  const history = useHistory();

  interface Posts {
    id: number;
    title: string;
    body: string;
  }
  const [posts, setPosts] = useState<Array<Posts>>([]);

  useEffect(() => {
    const randomUser = getRandomNumber(1, 10);
    const url = `${process.env.REACT_APP_BASE_API_URL_USERS}${randomUser}/posts`;
    fetchData(url, setPosts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post?.id}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => history.push(`/posts/${post?.id}`)}
        >
          <img src={postImg} alt="logo" width="250px" height="125px" />
          <div style={{ padding: "20px" }}>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
