package com.fitness.fitness_game.controller;

import com.fitness.fitness_game.exception.PlayerNotFoundException;
import com.fitness.fitness_game.model.Player;
import com.fitness.fitness_game.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/players")
@CrossOrigin(origins = "http://localhost:3000") // allow requests from React frontend
public class PlayerController {

    @Autowired
    private PlayerRepository playerRepository;

    // Get all players
    @GetMapping
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    // Get player by ID
    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable Long id) {
        return playerRepository.findById(id)
                .orElseThrow(() -> new PlayerNotFoundException(id));
    }

    // Add new player
    @PostMapping
    public Player createPlayer(@RequestBody Player player) {
        return playerRepository.save(player);
    }

    // Update player
    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable Long id, @RequestBody Player playerDetails) {
        Player player = playerRepository.findById(id)
                .orElseThrow(() -> new PlayerNotFoundException(id));

        player.setName(playerDetails.getName());
        player.setLevel(playerDetails.getLevel());
        player.setScore(playerDetails.getScore());

        return playerRepository.save(player);
    }

    // Delete player
    @DeleteMapping("/{id}")
    public String deletePlayer(@PathVariable Long id) {
        Player player = playerRepository.findById(id)
                .orElseThrow(() -> new PlayerNotFoundException(id));

        playerRepository.delete(player);
        return "Player with id " + id + " deleted successfully.";
    }

    // Leaderboard: get all players sorted by score
    @GetMapping("/leaderboard")
    public List<Player> getLeaderboard() {
        return playerRepository.findAllByOrderByScoreDesc();
    }

    // Leaderboard: get top N players
    @GetMapping("/leaderboard/top/{n}")
    public List<Player> getTopNPlayers(@PathVariable int n) {
        List<Player> allPlayers = playerRepository.findAllByOrderByScoreDesc();
        return allPlayers.size() > n ? allPlayers.subList(0, n) : allPlayers;
    }
}
