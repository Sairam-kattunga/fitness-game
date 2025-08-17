package com.fitness.fitness_game.repository;

import com.fitness.fitness_game.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    // Custom method to get all players sorted by score descending
    List<Player> findAllByOrderByScoreDesc();
}
