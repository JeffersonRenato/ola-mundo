import styles from "./MenuLink.module.scss";

import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}
    `}
      to={to}
    >
      {children}
    </NavLink>
  );
}
