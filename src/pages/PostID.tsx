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
import { useNavigate, useParams } from "react-router-dom";

const PostID = () => {
  const { posts, loading, error, page, limit } = useTypedSelector(
    (state) => state.PostReducer
  );
  const { setTodoPage, fetchPosts, fetchPostID } = useActions();

  const { id } = useParams();
  console.log(id);
  console.log(posts);

  useEffect(() => {
    fetchPostID(id);
  }, []);

  return <div>POSTID</div>;
};

export default withLayout(PostID);
