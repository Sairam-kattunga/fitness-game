package com.fitness.fitness_game.exception;

public class PlayerNotFoundException extends RuntimeException {
    public PlayerNotFoundException(Long id) {
        super("Player not found with id " + id);
    }
}
