import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";
import { CardPost } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { posts, loading, error, page, limit } = useTypedSelector(
    (state) => state.PostReducer
  );
  const { setTodoPage, fetchPosts } = useActions();

  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts(page, limit);
  }, []);

  const deletePost = async (id: string) => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
  };

  const redirectToPostId = (id: string) => {
    navigate(`/post/${id}`, { replace: true });
  };

  if (loading) {
    return <Typography>LOADING....</Typography>;
  }
  return (
    <>
      {posts.map(({ _id, user, title, text, date }) => (
        <CardPost
          key={_id}
          user={user}
          title={title}
          text={text}
          date={date}
          deletePost={() => deletePost(_id)}
          postIdPage={() => redirectToPostId(_id)}
        />
      ))}
    </>
  );
};

export default withLayout(Posts);
