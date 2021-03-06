package io.openex.player.injects.email.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class EmailInjectAttachment {
    private String id;
    private String name;
    private String description;
    private String type;
    private String path;
    private List<String> tags;

    @JsonProperty("file_id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @JsonProperty("file_name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("file_description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @JsonProperty("file_type")
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @JsonProperty("file_path")
    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @JsonProperty("file_liste_tags")
    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    /*
    "document_id": "f37ec410-29dd-406c-98b6-3c96d1f0b48e",
    "document_name": "3.json",
    "document_description": null,
    "document_type": "txt",
    "document_path": "feefa634668d06e7a5581e1150e89bcc.txt",
    "document_liste_tags": [],
    "document_liste_tags_exercise": [],
    "file_id": "f37ec410-29dd-406c-98b6-3c96d1f0b48e",
    "file_name": "3.json",
    "file_description": null,
    "file_type": "txt",
    "file_path": "feefa634668d06e7a5581e1150e89bcc.txt",
    "file_liste_tags": []
     */
}
