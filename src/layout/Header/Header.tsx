import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";

import cn from "classnames";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Typography variant="h1" component="div">
        Header
      </Typography>
      <nav className={styles.nav}>
        <Link to="/">Home link</Link>
        <Link to="/second">Second link</Link>
      </nav>
    </header>
  );
};
