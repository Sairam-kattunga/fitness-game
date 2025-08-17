import React from "react";
import styles from "../App.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const PlayerList = ({ players, deletePlayer, editPlayer }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Players List</h2>
      <div className={styles.listContainer}>
        {players.map(player => (
          <div key={player.id} className={styles.playerCard}>
            <div className={styles.playerInfo}>
              <span className={styles.playerName}>{player.name}</span>
              <span className={styles.playerScore}>Score: {player.score}</span>
              <span className={styles.playerLevel}>Level: {player.level}</span>
            </div>
            <div className={styles.actionButtons}>
              <button
                className={`${styles.editBtn} ${styles.button}`}
                onClick={() => editPlayer(player)}
              >
                <FaEdit /> Edit
              </button>
              <button
                className={`${styles.deleteBtn} ${styles.button}`}
                onClick={() => deletePlayer(player.id)}
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
