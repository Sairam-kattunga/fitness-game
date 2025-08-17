import axios from "axios";

const API_URL = "http://localhost:8080/api/players";

export const getPlayers = () => axios.get(API_URL);
export const getPlayerById = (id) => axios.get(`${API_URL}/${id}`);
export const createPlayer = (player) => axios.post(API_URL, player);
export const updatePlayer = (id, player) => axios.put(`${API_URL}/${id}`, player);
export const deletePlayer = (id) => axios.delete(`${API_URL}/${id}`);
export const getLeaderboard = () => axios.get(`${API_URL}/leaderboard`);
export const getTopNPlayers = (n) => axios.get(`${API_URL}/leaderboard/top/${n}`);
