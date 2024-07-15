package com.tibelian.gamaharului.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tibelian.gamaharului.model.music.Track;

public interface TrackRepository extends JpaRepository<Track, Integer> {

	/**
	 * Native SQL query to get top N tracks by descending playCount
	 * @param top
	 * @return
	 */
    @Query(value = "SELECT * FROM track ORDER BY play_count DESC LIMIT :top", nativeQuery = true)
    List<Track> findTopByPlayCount(@Param("top") int top);


	/**
	 * Native SQL query to get top N tracks by descending likeCount
	 * @param top
	 * @return
	 */
    @Query(value = "SELECT * FROM track ORDER BY like_count DESC LIMIT :top", nativeQuery = true)
	List<Track> findTopByLikedCount(@Param("top") int top);
	
}
