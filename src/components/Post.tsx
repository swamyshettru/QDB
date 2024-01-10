import React, { useRef } from "react";
import { useState } from "react";
import { Button, Flex, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import * as constants from "../helper/constants";
import usePutData from "../hooks/usePutData";
import Success from "./Success";
import GenericError from "./GenericError";

const Post: React.FC = () => {
  const editPostRef = useRef<HTMLTextAreaElement>(null);
  let { id } = useParams<{ id: string }>();

  const url = `${process.env.REACT_APP_BASE_API_URL_POSTS}${id}`;

  //custom hooks to fetch a blog post
  const [data, error, loading] = useFetch(url);

  //custom hook to update a blog post
  const { makeRequest, updatedData, updateInprogress, updateError } =
    usePutData(url);

  const [editedPost, setEditedPost] = useState(editPostRef.current?.value);
  const [editClicked, setEditClicked] = useState(false);

  //update blog post
  const updatePost = async () => {
    const requestBody = {
      id: 1,
      title: data?.title,
      body: editedPost,
    };

    await makeRequest(requestBody);
  };

  if (error || updateError) {
    return <GenericError />;
  }

  if (updatedData) {
    return <Success />;
  }

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
            <Button onClick={() => updatePost()}>{constants.SAVE_TEXT}</Button>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Post;
