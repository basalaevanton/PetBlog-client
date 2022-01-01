import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";

const Start = () => {
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
      {posts.map((item) => (
        <Typography key={item._id} variant="h5" component="div">
          {item.text} {item.date}
        </Typography>
      ))}
    </div>
  );
};

export default withLayout(Start);
