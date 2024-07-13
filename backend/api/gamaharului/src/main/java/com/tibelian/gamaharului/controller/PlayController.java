package com.tibelian.gamaharului.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tibelian.gamaharului.model.music.Play;
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

    // TODO: create the next functions: 
    // 1. obtain user's last plays
    // 2. obtain user`s most played tracks
    // 3. obtain user`s most played artists
    
}
