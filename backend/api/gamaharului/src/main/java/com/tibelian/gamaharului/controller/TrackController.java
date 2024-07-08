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

import com.tibelian.gamaharului.model.Track;
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
    public Track getById(@PathVariable Long id) {
        return trackService.getById(id);
    }

    @PutMapping("/{id}")
    public Track edit(@PathVariable Long id, @RequestBody Track track) {
    	return trackService.edit(id, track);
    }

    @PostMapping
    public Track save(@RequestBody Track track) {
        return trackService.save(track);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
    	trackService.delete(id);
    }
	
}
