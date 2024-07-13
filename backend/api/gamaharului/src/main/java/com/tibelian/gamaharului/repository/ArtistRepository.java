package com.tibelian.gamaharului.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tibelian.gamaharului.model.music.Artist;


public interface ArtistRepository extends JpaRepository<Artist, Integer> {

	/**
	 * Native SQL query to get top N tracks by descending playCount
	 * @param top
	 * @return
	 */
    @Query(value = "SELECT * FROM artist ORDER BY play_count DESC LIMIT :top", nativeQuery = true)
    List<Artist> findTopByPlayCount(@Param("top") int top);

    
    /*
    // Options to find the play count:
    // 1. calculate all the playCount from associated tracks
    // - this requires to create a custom mapper because the JpaRepository return list of Object[] { artist data + totalPlayCount }
    // 2. rename artist table to artist_original and create a view with the totalPlayCount already calculated from associated tracks
    // - this requires to modify the CRUD methods using procedures or triggers so the action is executed correctly over the artist_original table
    // 3. just create the play_count field into artist table and increase it when the associated track`s play_count is increased
    // - the most efficient, it does not require too many changes
    
    // example of the required query if the third option is not applied
    @Query(value = "SELECT a.*, SUM(t.play_count) AS totalPlayCount " +
            "FROM artist a " +
            "JOIN track t ON a.id = t.artist_id " +
            "GROUP BY a.id, a.name " +
            "ORDER BY totalPlayCount DESC " +
            "LIMIT :top", nativeQuery = true)
    List<Object[]> findTopByPlayCount(@Param("top") int top);

    @Query(value = "SELECT SUM(t.play_count) FROM track t WHERE t.artist_id = :artistId", nativeQuery = true)
    Integer findTotalPlayCount(@Param("artistId") int id);
     */

}
