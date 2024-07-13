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
import org.springframework.web.bind.annotation.RestController;

import com.tibelian.gamaharului.exception.NotFoundException;
import com.tibelian.gamaharului.model.music.Track;
import com.tibelian.gamaharului.service.TrackService;

@RestController
@RequestMapping("/api/tracks")
public class TrackController {

	@Autowired
	private TrackService trackService;
	
	@GetMapping
	public List<Track> getAll() {
		return trackService.getAll();
	}

    @GetMapping("/{id}")
    public Track getById(@PathVariable int id) {
        Track track = trackService.getById(id);
        if (track == null) {
        	throw new NotFoundException("Could not find a track with the id " + id);
        }
        return track;
    }

    @PutMapping("/{id}")
    public Track edit(@PathVariable int id, @RequestBody Track track) {
        Track oldTrack = getById(id);
    	return trackService.edit(oldTrack.getId(), track);
    }

    @PostMapping
    public Track create(@RequestBody Track track) {
        return trackService.save(track);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        Track track = getById(id);
    	trackService.delete(track.getId());
    }
    
	
}
