import React from "react";
import styles from "../App.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Fitness Game Leaderboard</h1>
    </header>
  );
};

export default Header;
