package com.tibelian.gamaharului.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tibelian.gamaharului.model.Track;
import com.tibelian.gamaharului.repository.TrackRepository;

@Service
public class TrackService {

	@Autowired
	private TrackRepository trackRepository;
	
	public List<Track> getAll() {
		return trackRepository.findAll();
	}
	
	public Track getById(Long id) {
		return trackRepository.findById(id).orElse(null);
	}
	
	public Track save(Track track) {
		return trackRepository.save(track);
	}
	
	public Track edit(Long id, Track track) {
        Optional<Track> existingTrack = trackRepository.findById(id);
        if (existingTrack.isPresent()) {
        	Track updated = existingTrack.get();
        	updated.setName(track.getName());
        	updated.setDescription(track.getDescription());
            return trackRepository.save(updated);
        } else {
            // no track found
            return null;
        }
    }
	
	public void delete(Long id) {
		trackRepository.deleteById(id);
	}
	
}
