package com.tibelian.gamaharului.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tibelian.gamaharului.exception.NotFoundException;
import com.tibelian.gamaharului.model.music.Artist;
import com.tibelian.gamaharului.service.ArtistService;

@RestController
@RequestMapping("/api/artists")
public class ArtistController {

	@Autowired
	private ArtistService artistService;

    @GetMapping("/most-played")
    public List<Artist> getMostPlayedTracks(@RequestParam(defaultValue = "10") int top) {
        return artistService.findTopByPlayCount(top);
    }
	
	@GetMapping
	public List<Artist> getAll() {
		return artistService.getAll();
	}
	
    @GetMapping("/{id}")
    public Artist getById(@PathVariable int id) {
        Artist artist = artistService.getById(id);
        if (artist == null) {
        	throw new NotFoundException("Could not find a artist with the id " + id);
        }
        return artist;
    }

    @PutMapping("/{id}")
    public Artist edit(@PathVariable int id, @RequestBody Artist Artist) {
    	Artist oldArtist = getById(id);
    	return artistService.edit(oldArtist.getId(), Artist);
    }

    @PostMapping
    public Artist create(@RequestBody Artist Artist) {
        return artistService.save(Artist);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        Artist Artist = getById(id);
        artistService.delete(Artist.getId());
    }
	
}
