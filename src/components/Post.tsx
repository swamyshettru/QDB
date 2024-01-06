import React, { useEffect } from "react";
import { useState } from "react";
import postImg from "../images/post.jpg";
import { Button, Flex, Input } from "antd";
import { fetchData, updateData } from "../api/fetchUtils";
import { CONTENT_TYPE } from "../helper/constants";
import { useParams } from "react-router-dom";

interface postType {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC = () => {
  let { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<postType>({ id: 1, title: "", body: "" });
  const [editedPost, setEditedPost] = useState(post.body);
  const [editClicked, setEditClicked] = useState(false);
  const url = `${process.env.REACT_APP_BASE_API_URL_POSTS}${id}`;

  useEffect(() => {
    fetchData(url, setPost);
  }, [url]);

  const updatePost = () => {
    const headers = {
      "Content-type": CONTENT_TYPE,
    };
    const body = JSON.stringify({
      id: 1,
      title: post.title,
      body: editedPost,
    });

    updateData(url, headers, body);
  };
  return (
    <>
      <div key={id} style={{ display: "flex", alignItems: "center" }}>
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
          <Flex
            gap="small"
            wrap="wrap"
            justify={"center"}
            style={{ margin: "20px" }}
          >
            <Button onClick={() => updatePost()}>Save</Button>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Post;
