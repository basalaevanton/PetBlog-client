import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";
import axios from "axios";
import { useInput } from "../hooks/useInput";
import { AddNewPost } from "../components";

export interface postNewPost {
  user: string;
  title: string;
  text: string;
}

const AddPost = () => {
  const user = useInput("");
  const title = useInput("");
  const text = useInput("");

  const postNewPost = async () => {
    const formData: postNewPost = {
      user: user.value,
      title: title.value,
      text: text.value,
    };

    console.log(formData);

    await axios
      .post("http://localhost:5000/posts", formData)
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Typography variant="h3">Добавить пост</Typography>
      <AddNewPost user={user} title={title} text={text} onClick={postNewPost} />
    </>
  );
};

export default withLayout(AddPost);
