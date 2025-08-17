import React, { useState } from "react";
import styles from "../App.module.css";

const PlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !score || !level) return;
    addPlayer({ name, score: Number(score), level: Number(level) });
    setName("");
    setScore("");
    setLevel("");
  };

  return (
    <form className={styles.formSection} onSubmit={handleSubmit}>
      <h2 className={styles.sectionTitle}>Add New Player</h2>

      <input
        className={styles.inputField}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="number"
        placeholder="Level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />

      <button className={styles.submitButton} type="submit">
        Add Player
      </button>
    </form>
  );
};

export default PlayerForm;
