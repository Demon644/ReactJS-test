package com.database.games.controller;

import com.database.games.model.Developer;
import com.database.games.repository.DeveloperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController()
public class DeveloperController {

    @Autowired
    DeveloperRepository developerRepository;

    @GetMapping("/developers")
    public Iterable<Developer> findAll(){
        return developerRepository.findAll();
    }

    @PostMapping("/developers")
    public Developer save(@RequestBody Developer developer){
        developerRepository.save(developer);
        return developer;
    }

    @GetMapping("/developers/{id}")
    public Optional<Developer> findById(@PathVariable String id){
        return developerRepository.findById(id);
    }

    @PutMapping("/developers/{id}")
    public Developer update(@PathVariable String id, @RequestBody Developer developer){
        Optional<Developer> optionalDeveloper = developerRepository.findById(id);
        Developer d = optionalDeveloper.get();
        if (developer.getId() != null)
            d.setId(developer.getId());
        if (developer.getDate_created() != null)
            d.setDate_created(developer.getDate_created());
        if (developer.getName() != null)
            d.setName(developer.getName());
        if (developer.getShort_info() !=null)
            d.setShort_info(developer.getShort_info());
        developerRepository.save(d);
        return d;
    }

    @DeleteMapping("/developers/{id}")
    public String delete(@PathVariable String id){
        Optional<Developer> optionalDeveloper = developerRepository.findById(id);
        Developer d = optionalDeveloper.get();
        developerRepository.delete(d);
        return "Developer deleted";
    }
}
