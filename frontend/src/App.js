import React, { useState, useEffect } from "react";
import {
  getPlayers,
  createPlayer,
  deletePlayer,
  getTopNPlayers,
} from "./services/playerService";
import Header from "./components/Header";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import Leaderboard from "./components/Leaderboard";
import styles from "./App.module.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [topPlayers, setTopPlayers] = useState([]);

  const fetchPlayers = async () => {
    try {
      const response = await getPlayers();
      setPlayers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTopPlayers = async () => {
    try {
      const response = await getTopNPlayers(5);
      setTopPlayers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPlayers();
    fetchTopPlayers();
  }, []);

  const addPlayer = async (player) => {
    try {
      await createPlayer(player);
      fetchPlayers();
      fetchTopPlayers();
    } catch (err) {
      console.error(err);
    }
  };

  const removePlayer = async (id) => {
    try {
      await deletePlayer(id);
      fetchPlayers();
      fetchTopPlayers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.app}>
      {/* Animated particles background */}
      <div className={styles.particles}>
        {Array.from({ length: 50 }).map((_, idx) => (
          <div
            key={idx}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${Math.random() * 4 + 3}px`,
              height: `${Math.random() * 4 + 3}px`,
            }}
          />
        ))}
      </div>

      <Header />
      <PlayerForm addPlayer={addPlayer} />
      <PlayerList players={players} deletePlayer={removePlayer} />
      <Leaderboard topPlayers={topPlayers} />
    </div>
  );
}

export default App;
