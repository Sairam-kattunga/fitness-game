import React, { useState, useEffect } from 'react';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';
import Leaderboard from './Leaderboard';
import ScoreChart from './ScoreChart';
import { motion } from 'framer-motion';
import {
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer
} from '../services/playerService';
import { Container, Typography, Divider } from '@mui/material';

function PlayerDashboard() {
  const [players, setPlayers] = useState([]);
  const [editPlayer, setEditPlayer] = useState(null);

  const fetchPlayers = () => {
    getPlayers().then((res) => setPlayers(res.data));
  };

  useEffect(() => fetchPlayers(), []);

  const handleAddOrUpdate = (player) => {
    if (editPlayer) {
      updatePlayer(editPlayer.id, player).then(() => {
        setEditPlayer(null);
        fetchPlayers();
      });
    } else {
      createPlayer(player).then(() => fetchPlayers());
    }
  };

  const handleEdit = (player) => setEditPlayer(player);
  const handleDelete = (id) => deletePlayer(id).then(() => fetchPlayers());

  return (
    <Container sx={{ mt: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
          💪 Fitness Game Dashboard
        </Typography>

        <PlayerForm onSubmit={handleAddOrUpdate} initialData={editPlayer} />

        <Divider sx={{ my: 3 }} />

        <PlayerList players={players} onEdit={handleEdit} onDelete={handleDelete} />

        <Divider sx={{ my: 3 }} />

        <Leaderboard topN={5} />

        <ScoreChart players={players} />
      </motion.div>
    </Container>
  );
}

export default PlayerDashboard;
