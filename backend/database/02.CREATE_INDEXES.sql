-- Indexes for artist table
CREATE INDEX idx_artist_name ON artist(name);

-- Indexes for album table
CREATE INDEX idx_album_title ON album(title);

-- Indexes for track table
CREATE INDEX idx_track_title ON track(title);
CREATE INDEX idx_track_release_date ON track(release_date);
CREATE INDEX idx_track_artist_id ON track(artist_id);

-- Indexes for genre table
CREATE INDEX idx_genre_name ON genre(name);

-- Indexes for user table (already included by UNIQUE restriction)
CREATE UNIQUE INDEX idx_user_username ON user(username);
CREATE UNIQUE INDEX idx_user_email ON user(email);

-- Indexes for playlist table
CREATE INDEX idx_playlist_name ON playlist(name);

-- Indexes for track_genre table
CREATE INDEX idx_track_genre_track_id ON track_genre(track_id);
CREATE INDEX idx_track_genre_genre_id ON track_genre(genre_id);

-- Indexes for track_playlist table
CREATE INDEX idx_track_playlist_track_id ON track_playlist(track_id);
CREATE INDEX idx_track_playlist_playlist_id ON track_playlist(playlist_id);

-- Indexes for permission table
CREATE INDEX idx_permission_name ON permission(name);

-- Indexes for role table
CREATE INDEX idx_role_name ON role(name);

-- Indexes for user_role table
CREATE INDEX idx_user_role_user_id_role_id ON user_role(user_id, role_id);

-- Indexes for role_permission table
CREATE INDEX idx_role_permission_role_id_permission_id ON role_permission(role_id, permission_id);

-- apply changes
COMMIT;