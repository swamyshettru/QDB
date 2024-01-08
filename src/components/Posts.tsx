import React, { useState } from "react";
import { useHistory } from "react-router";
import { getRandomNumber } from "../helper/Utils";
import * as constants from "../helper/constants";
import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image4 from "../images/image-4.jpg";
import image5 from "../images/image-5.jpg";
import image6 from "../images/image-6.jpg";
import image7 from "../images/image-7.jpg";
import image8 from "../images/image-8.jpg";
import image9 from "../images/image-9.jpg";
import image10 from "../images/image-10.jpg";

import { Button, Flex, Spin, Divider, Result } from "antd";
import { useFetch } from "../hooks/useFetch";

const Posts: React.FC = () => {
  const history = useHistory();
  const imagePaths = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const randomUser = getRandomNumber(1, 10);
  /**get list of posts for a random user */
  const url: string = `${process.env.REACT_APP_BASE_API_URL_USERS}${randomUser}/posts`;
  const [data, error, loading] = useFetch(url);
  const [filteredData, setFilteredData] = useState(data);
  const [isfiltered, setFiltered] = useState(false);

  const deletePost = (id: number, index: number) => {
    let filtered = (isfiltered ? filteredData : data).filter((post: any) => {
      return post.id !== id;
    });

    setFilteredData(filtered);
    setFiltered(true);
  };

  if (error) {
    return (
      <Result
        status={constants.ERROR_STATUS}
        subTitle={constants.SOMETHING_WENT_WRONG_TEXT}
      />
    );
  }

  return loading ? (
    <Spin size="large" fullscreen />
  ) : (
    /**render list of blog posts */
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {(isfiltered ? filteredData : data).map((post: any, index: number) => (
        <div
          key={post?.id}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            width: "100%",
          }}
        >
          <div style={{ width: "400px" }}>
            <img
              src={imagePaths[index]}
              alt="post"
              width={400}
              height={250}
              style={{ padding: "10px" }}
              onClick={() => history.push(`/posts/${post?.id}`)}
            />
          </div>
          <div style={{ alignSelf: "baseline", marginLeft: "10px" }}>
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
                  {constants.EDIT_TEXT}
                </Button>
                <Button danger onClick={() => deletePost(post?.id, index)}>
                  {constants.DELETE_TEXT}
                </Button>
                <Divider />
              </Flex>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
