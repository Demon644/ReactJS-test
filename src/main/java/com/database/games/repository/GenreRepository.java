package com.database.games.repository;

import com.database.games.model.Genre;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GenreRepository extends MongoRepository<Genre, String> {
    @Override
    void delete(Genre genre);
}
