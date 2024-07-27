package com.tibelian.gamaharului.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tibelian.gamaharului.controller.response.MostPlayedEntityResponse;
import com.tibelian.gamaharului.model.music.Artist;
import com.tibelian.gamaharului.model.music.Genre;
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

    @GetMapping("/tracks/latest")
    public List<Track> getLatestPlayedTracks(
    		@RequestParam(defaultValue = "10") int limit, 
    		@RequestParam(required = false) Integer userId) {
    	if (userId == null) {
            return playService.findLatestPlayedTracks(limit);
    	}
    	// TODO: check if user exists
        return playService.findLatestPlayedTracksByUser(userId, limit);
    }

    @GetMapping("/tracks/most-played")
    public List<MostPlayedEntityResponse<Track>> getMostPlayedTracksByUser(
    		@RequestParam(defaultValue = "10") int limit, 
    		@RequestParam(required = true) int userId) {
    	// TODO: check if user exists
        return playService.getMostPlayedTracksByUser(userId, limit);
    }

    @GetMapping("/artists/most-played")
    public List<MostPlayedEntityResponse<Artist>> getMostPlayedAtristsByUser(
    		@RequestParam(defaultValue = "10") int limit, 
    		@RequestParam(required = true) int userId) {
    	// TODO: check if user exists
        return playService.getMostPlayedArtistsByUser(userId, limit);
    }

    @GetMapping("/genres/most-played")
    public List<MostPlayedEntityResponse<Genre>> getMostPlayedGenresByUser(
    		@RequestParam(defaultValue = "10") int limit, 
    		@RequestParam(required = true) int userId) {
    	// TODO: check if user exists
        return playService.getMostPlayedGenresByUser(userId, limit);
    }
    
}
