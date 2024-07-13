package com.tibelian.gamaharului.model.music;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Album {

	@Id
    private int id;
    private String title;
    private Artist artist;
    private String coverUrl;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Artist getArtist() {
		return artist;
	}
	public void setArtist(Artist artist) {
		this.artist = artist;
	}
	public String getCoverUrl() {
		return coverUrl;
	}
	public void setCoverUrl(String coverUrl) {
		this.coverUrl = coverUrl;
	}
    
}
