package com.database.games.repository;

import com.database.games.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game, String> {
    @Override
    void delete(Game game);
}
