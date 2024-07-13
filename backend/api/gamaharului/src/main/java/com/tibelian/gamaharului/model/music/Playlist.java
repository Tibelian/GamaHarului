package com.tibelian.gamaharului.model.music;

import java.util.Date;

import com.tibelian.gamaharului.model.auth.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Playlist {

	@Id
	private int id;
    private String name;
    private String description;
    private Date createdAt;
    private User user;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

}
