package com.tibelian.gamaharului.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tibelian.gamaharului.model.music.Track;
import com.tibelian.gamaharului.repository.TrackRepository;

@Service
public class TrackService {

	@Autowired
	private TrackRepository trackRepository;
	
	public List<Track> getAll() {
		return trackRepository.findAll();
	}
	
	public Track getById(int id) {
		return trackRepository.findById(id).orElse(null);
	}
	
	public Track save(Track track) {
		return trackRepository.save(track);
	}
	
	public Track edit(int id, Track track) {
        Optional<Track> existingTrack = trackRepository.findById(id);
        if (existingTrack.isPresent()) {
        	Track updated = existingTrack.get();
        	updated.setTitle(track.getTitle());
        	updated.setReleaseDate(track.getReleaseDate());
            return trackRepository.save(updated);
        } else {
            // no track found
            return null;
        }
    }
	
	public void delete(int id) {
		trackRepository.deleteById(id);
	}
	
	public List<Track> findTopByPlayCount() {
		return findTopByPlayCount(10);
	}

	public List<Track> findTopByPlayCount(int top) {
		// TODO: limit max and min top
		return trackRepository.findTopByPlayCount(top);
	}

	public List<Track> findTopByLikedCount() {
		return findTopByLikedCount(10);
	}

	public List<Track> findTopByLikedCount(int top) {
    	// TODO: limit max and min top
		return trackRepository.findTopByLikedCount(top);
	}
}
