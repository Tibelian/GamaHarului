package com.tibelian.gamaharului.controller.response;

import com.tibelian.gamaharului.model.music.Track;

public class MostPlayedTracksByUserResponse {

	private int playCount;
	private Track track;
	
	public int getPlayCount() {
		return playCount;
	}
	public void setPlayCount(int playCount) {
		this.playCount = playCount;
	}
	public Track getTrack() {
		return track;
	}
	public void setTrack(Track track) {
		this.track = track;
	}
	
}
