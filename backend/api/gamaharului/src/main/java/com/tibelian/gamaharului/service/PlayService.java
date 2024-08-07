package com.tibelian.gamaharului.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tibelian.gamaharului.controller.response.MostPlayedEntityResponse;
import com.tibelian.gamaharului.model.music.Artist;
import com.tibelian.gamaharului.model.music.Genre;
import com.tibelian.gamaharului.model.music.Play;
import com.tibelian.gamaharului.model.music.Track;
import com.tibelian.gamaharului.repository.PlayRepository;

@Service
public class PlayService {

	@Autowired
	private PlayRepository playRepository;
	
	public Play getById(int id) {
		return playRepository.findById(id).orElse(null);
	}
	
	public Play save(Play play) {
		return playRepository.save(play);
	}
	
	public List<Track> findLatestPlayedTracksByUser(int userId) {
		return findLatestPlayedTracksByUser(userId, 10);
	}

	public List<Track> findLatestPlayedTracksByUser(int userId, int limit) {
		return playRepository.findLatestPlayedTracksByUser(userId, limit);
	}
	
	public List<Track> findLatestPlayedTracks() {
		return findLatestPlayedTracks(10);
	}

	public List<Track> findLatestPlayedTracks(int limit) {
		return playRepository.findLatestPlayedTracks(limit);
	}
	
	

    public List<MostPlayedEntityResponse<Track>> getMostPlayedTracksByUser(int userId, int limit) {
        return playRepository.findMostPlayedTracksByUser(userId, limit);
    }

	public List<MostPlayedEntityResponse<Artist>> getMostPlayedArtistsByUser(int userId, int limit) {
        return playRepository.findMostPlayedArtistsByUser(userId, limit);
	}

	public List<MostPlayedEntityResponse<Genre>> getMostPlayedGenresByUser(int userId, int limit) {
        return playRepository.findMostPlayedGenresByUser(userId, limit);
	}
	
}
