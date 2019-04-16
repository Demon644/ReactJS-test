package com.database.games.model;

import com.mongodb.lang.NonNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "developers")
public class Developer {

    @Id
    String id;
    @Field
    @Indexed(unique = true)
    @NonNull
    String name;
    @Field
    String date_created = "Unknown";
    @Field
    String short_info = "No info";
}
