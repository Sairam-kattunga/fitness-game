package com.fitness.fitness_game.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "🏋️ Fitness Game Backend is Running!";
    }
}
