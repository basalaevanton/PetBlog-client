import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useInput } from "../hooks/useInput";

const PostID = () => {
  const { posts, postId, loading, error, page, limit } = useTypedSelector(
    (state) => state.PostReducer
  );
  const { deleteComment, addComment, fetchPostID } = useActions();

  const { id } = useParams();

  const user = useInput("");
  const text = useInput("");

  useEffect(() => {
    fetchPostID(id);
  }, []);

  const postComment = async () => {
    addComment({
      username: user.value,
      text: text.value,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      id: id!,
    });
  };

  if (loading) {
    return <Typography>LOADING....</Typography>;
  }

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
