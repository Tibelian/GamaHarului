
-------------------------
-- LOG THE TRACK PLAYS --
-------------------------
DELIMITER //
CREATE TRIGGER update_play_count
AFTER INSERT ON play
FOR EACH ROW
BEGIN
    UPDATE track
    SET play_count = play_count + 1
    WHERE id = NEW.track_id;
END //
DELIMITER ;

--------------------
-- FAVOURITE LIST --
--------------------
DELIMITER //
CREATE TRIGGER after_user_insert
AFTER INSERT ON user
FOR EACH ROW
BEGIN
    -- new playlist for favorite songs
    INSERT INTO playlist (name, user_id)
    VALUES ('_fav_', NEW.id);
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER increment_like_count
AFTER INSERT ON track_playlist
FOR EACH ROW
BEGIN
    DECLARE playlistName VARCHAR(255);
    
    -- Get the name of the playlist to which the track was added
    SELECT name INTO playlistName FROM playlist WHERE id = NEW.playlist_id;
    
    -- Increase the track's like counter if the playlist is "_fav_"
    IF playlistName = '_fav_' THEN
        UPDATE track
        SET like_count = like_count + 1
        WHERE id = NEW.track_id;
    END IF;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER decrement_like_count
AFTER DELETE ON track_playlist
FOR EACH ROW
BEGIN
    DECLARE playlistName VARCHAR(255);
    
    -- Get the name of the playlist to which the track was deleted
    SELECT name INTO playlistName FROM playlist WHERE id = OLD.playlist_id;
    
    -- Decrement the track's likes counter if the playlist is "_fav_"
	-- and ensures that like_count is not less than 0.
    IF playlistName = '_fav_' THEN
        UPDATE track
        SET like_count = GREATEST(like_count - 1, 0)
        WHERE id = OLD.track_id;
    END IF;
END //
DELIMITER ;

-- apply changes
COMMIT;
