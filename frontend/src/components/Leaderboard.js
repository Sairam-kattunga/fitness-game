import React from "react";
import styles from "../App.module.css";

const Leaderboard = ({ topPlayers }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Leaderboard</h2>
      <div className={styles.listContainer}>
        {topPlayers.map((player, index) => (
          <div
            key={player.id}
            className={`${styles.playerCard} ${
              index === 0 ? styles.gold :
              index === 1 ? styles.silver :
              index === 2 ? styles.bronze : ""
            }`}
          >
            <span className={styles.playerRank}>{index + 1}</span>
            <span className={styles.playerName}>{player.name}</span>
            <span className={styles.playerScore}>Score: {player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
