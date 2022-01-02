import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";
import { CardPost } from "../components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useInput } from "../hooks/useInput";

const PostID = () => {
  const { posts, postId, loading, error, page, limit } = useTypedSelector(
    (state) => state.PostReducer
  );
  const { setTodoPage, fetchPosts, fetchPostID } = useActions();

  const { id } = useParams();
  // console.log(id);
  // console.log(postId);

  const user = useInput("");

  const text = useInput("");

  useEffect(() => {
    fetchPostID(id);
  }, []);

  const deleteComment = async (id: string) => {
    await axios.delete(`http://localhost:5000/comments/${id}`);
  };

  const postComment = async () => {
    console.log(id);

    const formData = {
      username: user.value,
      text: text.value,
      postId: id!,
    };

    console.log(formData);

    await axios
      .post("http://localhost:5000/comments", formData)
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Typography>{postId.text}</Typography>
      {postId?.comments?.map((comment) => (
        <div key={comment._id}>
          <Typography>{comment.text}</Typography>
          <Button size="small" onClick={() => deleteComment(comment._id)}>
            Удалить комментарий
          </Button>
        </div>
      ))}
      <Typography>Добавить комментарий к посту</Typography>
      <Grid container direction={"column"} style={{ padding: 20 }}>
        <TextField {...user} style={{ marginTop: 10 }} label={"User"} />

        <TextField
          {...text}
          style={{ marginTop: 10 }}
          label={"Text post"}
          multiline
          rows={3}
        />
      </Grid>
      <Button onClick={postComment}>Отправить</Button>
    </div>
  );
};

export default withLayout(PostID);
