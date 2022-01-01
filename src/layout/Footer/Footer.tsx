import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.scss";

import cn from "classnames";
import { Typography } from "@mui/material";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <Typography variant="h1" component="div">
        Footer
      </Typography>
    </footer>
  );
};
