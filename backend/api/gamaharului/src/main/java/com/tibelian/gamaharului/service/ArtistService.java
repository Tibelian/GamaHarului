package com.tibelian.gamaharului.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tibelian.gamaharului.model.music.Artist;
import com.tibelian.gamaharului.repository.ArtistRepository;

@Service
public class ArtistService {

	@Autowired
	private ArtistRepository artistRepository;
	
	public List<Artist> getAll() {
		return artistRepository.findAll();
	}
	
	public Artist getById(int id) {
		return artistRepository.findById(id).orElse(null);
	}
	
	public Artist save(Artist artist) {
		return artistRepository.save(artist);
	}
	
	public Artist edit(int id, Artist artist) {
        Optional<Artist> existingArtist = artistRepository.findById(id);
        if (existingArtist.isPresent()) {
        	Artist updated = existingArtist.get();
        	updated.setName(artist.getName());
        	updated.setBio(artist.getBio());
        	updated.setImageUrl(artist.getImageUrl());
            return artistRepository.save(updated);
        } else {
            // no artist found
            return null;
        }
    }
	
	public void delete(int id) {
		artistRepository.deleteById(id);
	}
	
	
	public List<Artist> findTopByPlayCount() {
		return findTopByPlayCount(10);
	}

	public List<Artist> findTopByPlayCount(int top) {
		return artistRepository.findTopByPlayCount(top);
	}
	
}
