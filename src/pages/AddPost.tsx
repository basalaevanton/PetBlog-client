import React from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";

import axios from "axios";
import { useInput } from "../hooks/useInput";
import { AddNewPost } from "../components";
import { API } from "../helpers/api";

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

    await axios.post(`${API.HOST}posts`, formData).catch((e) => console.log(e));
  };
  return (
    <>
      <Typography variant="h3">Добавить пост</Typography>
      <AddNewPost user={user} title={title} text={text} onClick={postNewPost} />
    </>
  );
};

export default withLayout(AddPost);
