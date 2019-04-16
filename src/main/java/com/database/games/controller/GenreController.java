package com.database.games.controller;

import com.database.games.model.Genre;
import com.database.games.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController()
public class GenreController {

    @Autowired
    GenreRepository genreRepository;

    @GetMapping("/genres")
    public Iterable<Genre> findAllGenres(){
        return genreRepository.findAll();
    }

    @PostMapping("/genres")
    public Genre save(@RequestBody Genre genre){
        genreRepository.save(genre);
        return genre;
    }

    @GetMapping("/genres/{id}")
    public Optional<Genre> getById(@PathVariable String id){
        return genreRepository.findById(id);
    }

    @PutMapping("/genres/{id}")
    public Genre update(@PathVariable String id, @RequestBody Genre genre){
        Optional<Genre> optgenre = genreRepository.findById(id);
        Genre g = optgenre.get();
        if(genre.getName() != null)
            g.setName(genre.getName());
        if (genre.getShort_info() != null)
            g.setShort_info(genre.getShort_info());
        if(genre.getId() != null)
            g.setId(genre.getId());
        genreRepository.save(g);
        return g;
    }

    @DeleteMapping("/genres/{id}")
    public String delete(@PathVariable String id){
        Optional<Genre> optgenre = genreRepository.findById(id);
        Genre g = optgenre.get();
        genreRepository.delete(g);
        return "Genre is deleted";
    }
}
