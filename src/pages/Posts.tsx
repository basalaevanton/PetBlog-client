import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";
import { CardPost } from "../components";
import axios from "axios";

const Posts = () => {
  const { posts, loading, error, page, limit } = useTypedSelector(
    (state) => state.PostReducer
  );
  const { setTodoPage, fetchPosts } = useActions();
  console.log(posts);

  useEffect(() => {
    fetchPosts(page, limit);
  }, []);

  const deletePost = async (id: string) => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
  };

  return (
    <div>
      {posts.map(({ _id, user, title, text, date }) => (
        <CardPost
          key={_id}
          user={user}
          title={title}
          text={text}
          date={date}
          deletePost={() => deletePost(_id)}
        />
      ))}
    </div>
  );
};

export default withLayout(Posts);
