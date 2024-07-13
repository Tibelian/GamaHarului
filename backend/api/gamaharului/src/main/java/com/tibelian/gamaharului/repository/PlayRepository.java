package com.tibelian.gamaharului.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tibelian.gamaharului.model.music.Play;

public interface PlayRepository extends JpaRepository<Play, Integer> {

}
