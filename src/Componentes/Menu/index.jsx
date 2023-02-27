import styles from "./Menu.module.scss";

import React from "react";
import MenuLink from "./MenuLink/index";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/sobremim">Sobre mim</MenuLink>
      </nav>
    </header>
  );
}
