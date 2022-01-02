import React from "react";

import {
  Box,
  Button,
  CardContent,
  Typography,
  Card,
  CardActions,
} from "@mui/material";
import { CardPostProps } from "./CardPost.props";

export const CardPost = ({
  title,
  user,
  date,
  text,
  deletePost,
}: CardPostProps): JSX.Element => {
  return (
    <Card sx={{ minWidth: 275, margin: "15px" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component="div"
            color="text.secondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="body2">{date}</Typography>
        </Box>

        <Typography variant="body1">{text}</Typography>
        <Typography variant="body2">Пост оставил: {user}</Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Оставить комментарий</Button>
        <Button size="small" onClick={deletePost}>
          Удалить пост
        </Button>
      </CardActions>
    </Card>
  );
};
