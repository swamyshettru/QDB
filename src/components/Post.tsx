import React, { useEffect } from "react";
import { useState } from "react";
import postImg from "../images/post.jpg";
import { Button, Flex, Input } from "antd";
import { fetchData } from "../api/fetchGet";

interface props {
  postId: number;
}

interface postType {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<props> = ({ postId }) => {
  const [post, setPost] = useState<postType>({ id: 1, title: "", body: "" });
  const [editedPost, setEditedPost] = useState(post.body);
  const [editClicked, setEditClicked] = useState(false);

  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_API_URL_POSTS}${postId}`;
    fetchData(url, setPost);
  }, [editedPost]);

  return (
    <>
      <div key={postId} style={{ display: "flex", alignItems: "center" }}>
        <img src={postImg} alt="logo" width="250px" height="125px" />
        <div style={{ padding: "20px" }}>
          <h2>{post.title}</h2>
          <Input.TextArea
            value={editClicked ? editedPost : post.body}
            style={{ width: "550px", height: "110px" }}
            onChange={(e) => setEditedPost(e.target.value)}
          >
            {post.body}
          </Input.TextArea>
        </div>
      </div>
      <div>
        <Flex gap="small" wrap="wrap" justify={"center"}>
          <Button type="primary" onClick={() => setEditClicked(true)}>
            Edit
          </Button>
          <Button>Save</Button>
        </Flex>
      </div>
    </>
  );
};

export default Post;
