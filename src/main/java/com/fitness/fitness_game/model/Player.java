package com.fitness.fitness_game.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is mandatory")
    @Column(nullable = false)
    private String name;

    @Min(value = 0, message = "Score cannot be negative")
    private int score;

    @Min(value = 1, message = "Level must be at least 1")
    private int level;

    // Default constructor for JPA
    public Player() {}

    // Convenience constructor
    public Player(String name, int score, int level) {
        this.name = name;
        this.score = score;
        this.level = level;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }

    public int getLevel() { return level; }
    public void setLevel(int level) { this.level = level; }
}
