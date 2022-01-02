import React from "react";

import {
  Box,
  Button,
  CardContent,
  Typography,
  Card,
  CardActions,
  Grid,
  TextField,
} from "@mui/material";
import { AddNewPostProps } from "./AddNewPost.props";

export const AddNewPost = ({
  title,
  user,
  text,
  onClick,
}: AddNewPostProps): JSX.Element => {
  return (
    <>
      <Grid container direction={"column"} style={{ padding: 20 }}>
        <TextField {...user} style={{ marginTop: 10 }} label={"User"} />
        <TextField {...title} style={{ marginTop: 10 }} label={"Title post"} />
        <TextField
          {...text}
          style={{ marginTop: 10 }}
          label={"Text post"}
          multiline
          rows={3}
        />
      </Grid>
      <Button onClick={onClick}>Отправить</Button>
    </>
  );
};
