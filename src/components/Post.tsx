import React, { useRef } from "react";
import { useState } from "react";
import { Button, Flex, Spin } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Post: React.FC = () => {
  const editPostRef = useRef<HTMLTextAreaElement>(null);
  let { id } = useParams<{ id: string }>();
  let history = useHistory();

  const url = `${process.env.REACT_APP_BASE_API_URL_POSTS}${id}`;
  const [data, loading] = useFetch(url);
  const [editedPost, setEditedPost] = useState(editPostRef.current?.value);
  const [editClicked, setEditClicked] = useState(false);
  const [updateInprogress, setUpdateInprogress] = useState(false);

  const updatePost = async () => {
    setUpdateInprogress(true);

    const requestBody = {
      id: 1,
      title: data?.title,
      body: editedPost,
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        setUpdateInprogress(false);
        history.push("/error-page");
      }

      const result = await response.json();
      if (result) {
        setUpdateInprogress(false);
        history.push("/success");
      }
    } catch (error) {
      setUpdateInprogress(false);
      history.push("/error-page");
    }
  };

  return updateInprogress || loading ? (
    <Spin fullscreen />
  ) : (
    <>
      <div key={id} style={{ display: "flex", height: "100vh" }}>
        <div style={{ padding: "20px" }}>
          <h2>{data?.title}</h2>
          <textarea
            ref={editPostRef}
            value={editClicked ? editedPost : data?.body}
            style={{ width: "1260px", height: "160px" }}
            onChange={(e) => setEditedPost(e.target.value)}
            onFocus={(e) => setEditClicked(true)}
          >
            {editClicked ? editedPost : data?.body}
          </textarea>
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
