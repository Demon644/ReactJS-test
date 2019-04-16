package com.database.games.controller;

import com.database.games.model.Game;
import com.database.games.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController()
public class GameController {

    @Autowired
    GameRepository gameRepository;

    @GetMapping("/games")
    public Iterable<Game> findAllGames(){
        return gameRepository.findAll();
    }

    @PostMapping("/games")
    public Game save(@RequestBody Game game){
        gameRepository.save(game);
        return game;
    }

    @GetMapping("/games/{id}")
    public Optional<Game> findById(@PathVariable String id){
        return gameRepository.findById(id);
    }

    @PutMapping("/games/{id}")
    public Game update(@PathVariable String id, @RequestBody Game game){
        Optional<Game> optionalGame = gameRepository.findById(id);
        Game g = optionalGame.get();
        if (game.getId() != null)
            g.setId(game.getId());
        if (game.getDate() != null)
            g.setDate(game.getDate());
        if (game.getName() != null)
            g.setName(game.getName());
        if (game.getShort_info() != null)
            g.setShort_info(game.getShort_info());
        if (game.getDeveloper_id() != null)
            g.setDeveloper_id(game.getDeveloper_id());
        if (game.getGenre_id() != null)
            g.setGenre_id(game.getGenre_id());
        gameRepository.save(g);
        return g;
    }

    @DeleteMapping("/games/{id}")
    public String delete(@PathVariable String id){
        Optional<Game> optionalGame = gameRepository.findById(id);
        Game g = optionalGame.get();
        gameRepository.delete(g);
        return "Game is deleted";
    }
}
