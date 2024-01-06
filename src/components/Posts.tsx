import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { deleteData, fetchData } from "../api/fetchUtils";
import { getRandomNumber } from "../helper/Utils";
import postImg from "../images/post.jpg";
import { Button, Flex } from "antd";

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
    const url: string = `${process.env.REACT_APP_BASE_API_URL_USERS}${randomUser}/posts`;
    fetchData(url, setPosts);
  }, []);

  const deletePost = (id: number) => {
    let filtered = posts.filter((post) => {
      return post.id != id;
    });
    setPosts(filtered);
    // deleteData(url);
  };

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post?.id}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          // onClick={() => history.push(`/posts/${post?.id}`)}
        >
          <img
            src={postImg}
            alt="logo"
            width="250px"
            // height="auto"
            style={{ margin: "10px" }}
            onClick={() => history.push(`/posts/${post?.id}`)}
          />
          <div style={{ alignSelf: "baseline" }}>
            <div onClick={() => history.push(`/posts/${post?.id}`)}>
              <h2>{post?.title}</h2>
              <p>{post?.body}</p>
            </div>
            <div>
              <Flex gap="small" wrap="wrap" justify={"start"}>
                <Button
                  type="default"
                  onClick={() => history.push(`/posts/${post?.id}`)}
                >
                  Edit
                </Button>
                <Button
                  danger
                  onClick={() =>
                    deletePost(
                      // `${process.env.REACT_APP_BASE_API_URL_POSTS}${post?.id}`
                      post?.id
                    )
                  }
                >
                  Delete
                </Button>
              </Flex>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
