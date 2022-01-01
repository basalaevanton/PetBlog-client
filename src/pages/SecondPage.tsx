import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";

const SecondPage = () => {
  return (
    <>
      <Typography variant="h1" component="div">
        Second Page
      </Typography>
    </>
  );
};

export default withLayout(SecondPage);
