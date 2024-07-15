package com.tibelian.gamaharului.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tibelian.gamaharului.controller.response.MostPlayedTracksByUserResponse;
import com.tibelian.gamaharului.model.music.Play;
import com.tibelian.gamaharului.model.music.Track;

public interface PlayRepository extends JpaRepository<Play, Integer> {

    @Query(value = "SELECT t.* FROM play p " +
    				"JOIN track t ON p.track_id = t.id " +
    				"ORDER BY p.played_at DESC " +
    				"LIMIT :limit", nativeQuery = true)
	List<Track> findLatestPlayedTracks(@Param("limit") int limit);

    @Query(value = "SELECT t.* FROM play p " +
                   "JOIN track t ON p.track_id = t.id " +
                   "WHERE p.user_id = :userId " +
                   "ORDER BY p.played_at DESC " +
                   "LIMIT :limit", nativeQuery = true)
    List<Track> findLatestPlayedTracksByUser(@Param("userId") int userId, @Param("limit") int limit);
    
    @Query(value = "SELECT t.*, COUNT(p.id) AS playCount " +
                   "FROM play p " +
                   "JOIN track t ON p.track_id = t.id " +
                   "WHERE p.user_id = :userId " +
                   "GROUP BY t.id " +
                   "ORDER BY playCount DESC " +
                   "LIMIT :limit", nativeQuery = true)
    List<MostPlayedTracksByUserResponse> findMostPlayedTracksByUser(@Param("userId") int userId, @Param("limit") int limit);

}
