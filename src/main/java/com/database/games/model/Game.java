package com.database.games.model;

import com.mongodb.lang.NonNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "games")
public class Game {
    @Id
    String id;
    @Field
    @NonNull
    String name;
    @Field
    String date = "Unknown";
    @Field
    String developer_id = "Unknown";
    @Field
    @NonNull
    String genre_id;
    @Field
    String short_info = "No info";
}
