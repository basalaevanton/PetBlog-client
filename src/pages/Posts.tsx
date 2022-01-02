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

const Posts = () => {
  const { posts, loading, error, page, limit } = useTypedSelector(
    (state) => state.PostReducer
  );
  const { setTodoPage, fetchPosts } = useActions();
  console.log(posts);

  useEffect(() => {
    fetchPosts(page, limit);
  }, []);

  return (
    <div>
      {posts.map(({ _id, user, title, text, date }) => (
        <CardPost key={_id} user={user} title={title} text={text} date={date} />
      ))}
    </div>
  );
};

export default withLayout(Posts);
