import React from "react";

import {
  Box,
  Button,
  CardContent,
  Typography,
  Card,
  CardActions,
  CardActionArea,
} from "@mui/material";
import { CardPostProps } from "./CardPost.props";
import { useTimePassed } from "../../hooks";
import { declOfNum } from "../../helpers/endWords";

export const CardPost = ({
  title,
  user,
  date,
  text,
  postIdPage,
  deletePost,
}: CardPostProps): JSX.Element => {
  const timePassed = useTimePassed(date);

  return (
    <Card sx={{ minWidth: 600, margin: "15px" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {timePassed} {declOfNum(timePassed, ["час", "часа", "часов"])} назад
          </Typography>
        </Box>

        <Typography variant="body1">{text}</Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          Пост оставил: {user}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" onClick={postIdPage}>
          Перейти к посту
        </Button>
        <Button size="small" onClick={deletePost}>
          Удалить пост
        </Button>
      </CardActions>
    </Card>
  );
};
