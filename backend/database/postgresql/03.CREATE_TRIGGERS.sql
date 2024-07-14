-------------------------
-- LOG THE TRACK PLAYS --
-------------------------
CREATE OR REPLACE FUNCTION update_play_count_func()
RETURNS TRIGGER AS $$
BEGIN
    -- Increase the current track play_count
    UPDATE track
    SET play_count = play_count + 1
    WHERE id = NEW.track_id;
    
    -- Increase the artist total play_count
    UPDATE artist
    SET total_play_count = total_play_count + 1
    WHERE id = (SELECT artist_id FROM track WHERE id = NEW.track_id);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_play_count
AFTER INSERT ON play
FOR EACH ROW
EXECUTE FUNCTION update_play_count_func();

--------------------
-- FAVOURITE LIST --
--------------------
CREATE OR REPLACE FUNCTION after_user_insert_func()
RETURNS TRIGGER AS $$
BEGIN
    -- New playlist for favorite songs
    INSERT INTO playlist (name, user_id)
    VALUES ('_fav_', NEW.id);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_user_insert
AFTER INSERT ON "user"
FOR EACH ROW
EXECUTE FUNCTION after_user_insert_func();

CREATE OR REPLACE FUNCTION increment_like_count_func()
RETURNS TRIGGER AS $$
DECLARE
    playlistName VARCHAR(255);
BEGIN
    -- Get the name of the playlist to which the track was added
    SELECT name INTO playlistName FROM playlist WHERE id = NEW.playlist_id;
    
    -- Increase the track's like counter if the playlist is "_fav_"
    IF playlistName = '_fav_' THEN
        UPDATE track
        SET like_count = like_count + 1
        WHERE id = NEW.track_id;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER increment_like_count
AFTER INSERT ON track_playlist
FOR EACH ROW
EXECUTE FUNCTION increment_like_count_func();

CREATE OR REPLACE FUNCTION decrement_like_count_func()
RETURNS TRIGGER AS $$
DECLARE
    playlistName VARCHAR(255);
BEGIN
    -- Get the name of the playlist from which the track was deleted
    SELECT name INTO playlistName FROM playlist WHERE id = OLD.playlist_id;
    
    -- Decrement the track's like counter if the playlist is "_fav_"
    -- and ensures that like_count is not less than 0.
    IF playlistName = '_fav_' THEN
        UPDATE track
        SET like_count = GREATEST(like_count - 1, 0)
        WHERE id = OLD.track_id;
    END IF;

    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER decrement_like_count
AFTER DELETE ON track_playlist
FOR EACH ROW
EXECUTE FUNCTION decrement_like_count_func();

-- apply changes
COMMIT;
