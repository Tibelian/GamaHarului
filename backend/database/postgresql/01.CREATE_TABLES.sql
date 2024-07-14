-----------------------
-- MUSIC MAIN TABLES --
-----------------------
CREATE TABLE artist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    image_url VARCHAR(255),
    total_play_count INT DEFAULT 0
);

CREATE TABLE album (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist_id INT,
    cover_url VARCHAR(255),
    FOREIGN KEY (artist_id) REFERENCES artist(id)
);

CREATE TABLE track (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date DATE,
    album_id INT,
    artist_id INT,
    play_count INT DEFAULT 0,
    like_count INT DEFAULT 0,
    FOREIGN KEY (album_id) REFERENCES album(id),
    FOREIGN KEY (artist_id) REFERENCES artist(id)
);

CREATE TABLE genre (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

----------
-- USER --
----------
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

CREATE TABLE permission (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE user_role (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    UNIQUE(user_id, role_id)  -- To ensure that a user does not have the same role more than once
);

CREATE TABLE playlist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

---------------
-- RELATIONS --
---------------
CREATE TABLE track_genre (
    id SERIAL PRIMARY KEY,
    track_id INT,
    genre_id INT,
    FOREIGN KEY (track_id) REFERENCES track(id),
    FOREIGN KEY (genre_id) REFERENCES genre(id)
);

CREATE TABLE track_playlist (
    id SERIAL PRIMARY KEY,
    track_id INT,
    playlist_id INT,
    FOREIGN KEY (track_id) REFERENCES track(id),
    FOREIGN KEY (playlist_id) REFERENCES playlist(id)
);

-------------------------
-- LOG THE TRACK PLAYS --
-------------------------
CREATE TABLE play (
    id SERIAL PRIMARY KEY,
    track_id INT,
    user_id INT,
    played_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (track_id) REFERENCES track(id),
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

-- apply changes
COMMIT;
