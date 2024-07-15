package com.tibelian.gamaharului.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tibelian.gamaharului.controller.response.MostPlayedTracksByUserResponse;
import com.tibelian.gamaharului.model.music.Play;
import com.tibelian.gamaharului.model.music.Track;
import com.tibelian.gamaharului.service.PlayService;

@RestController
@RequestMapping("/api/plays")
public class PlayController {

	@Autowired
	private PlayService playService;

    @PostMapping
    public Play create(@RequestBody Play play) {
        return playService.save(play);
    }

    @GetMapping("/latest")
    public List<Track> getLastPlayedTracks(
    		@RequestParam(defaultValue = "10") int limit, 
    		@RequestParam(required = false) Integer userId) {
    	if (userId == null) {
            return playService.findLatestPlayedTracks(limit);
    	}
    	// TODO: check if user exists
        return playService.findLatestPlayedTracksByUser(userId, limit);
    }

    @GetMapping("/most-played")
    public List<MostPlayedTracksByUserResponse> getMostPlayedTracksByUser(
    		@RequestParam(defaultValue = "10") int limit, 
    		@RequestParam(required = true) int userId) {
    	// TODO: check if user exists
        return playService.getMostPlayedTracksByUser(userId, limit);
    }
    
    // TODO: create the next functions: 
    // 1. obtain user's last plays -- DONE
    // 2. obtain user`s most played tracks
    // 3. obtain user`s most played artists
    // 4. obtain user`s most played genres
    
}
