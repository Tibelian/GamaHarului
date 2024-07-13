package com.tibelian.gamaharului.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tibelian.gamaharului.model.music.Play;
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
	
}
