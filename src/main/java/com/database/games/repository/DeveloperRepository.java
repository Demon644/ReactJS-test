package com.database.games.repository;

import com.database.games.model.Developer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeveloperRepository extends MongoRepository<Developer, String> {
    @Override
    void delete(Developer developer);
}
