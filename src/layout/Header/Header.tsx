import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";

import cn from "classnames";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-evenly" }}>
          <Typography variant="h6" component="div">
            Pet Blog
          </Typography>
          <Link to="/posts">posts</Link>
          <Link to="/addPost">addPost</Link>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};
