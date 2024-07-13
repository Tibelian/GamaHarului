package com.tibelian.gamaharului.model.music;

import java.util.Date;

import com.tibelian.gamaharului.model.auth.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Play {

	@Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "track_id")
    private Track track;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private Date playedAt;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Track getTrack() {
		return track;
	}
	public void setTrack(Track track) {
		this.track = track;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Date getPlayedAt() {
		return playedAt;
	}
	public void setPlayedAt(Date playedAt) {
		this.playedAt = playedAt;
	}
    
}
