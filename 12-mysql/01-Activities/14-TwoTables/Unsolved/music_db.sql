-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS music_db;
CREATE DATABASE music_db;

-- Makes it so all of the following code will affect animals_db --
USE music_db;

-- Creates the table "people" within animals_db --
CREATE TABLE top100Songs (
  rank int not null,
  artist varchar(255) not null,
  song varchar(255) not null,
  songYear integer(4),
  rating1 float,
  rating2 float,
  rating3 float,
  rating4 float,
  rating5 float,
  primary key (rank)
);

CREATE TABLE topAlbums (
  rank int not null,
  artist varchar(255) not null,
  album varchar(255) not null,
  albumYear integer(4),
  rating1 float,
  rating2 float,
  rating3 float,
  rating4 float,
  rating5 float,
  primary key (rank)
);

CREATE TABLE topSongs (
  rank int not null,
  artist varchar(255) not null,
  song varchar(255) not null,
  songYear integer(4),
  rating1 float,
  rating2 float,
  rating3 float,
  rating4 float,
  rating5 float,
  primary key (rank)
);

-- INSERT INTO top100songs (rank, artist, song, songYear, rating1, rating2,rating3,rating4,rating5)
-- VALUES (1, "Bing Crosby", "White Christmas", 1942, 39.903,23.929,5.7,2.185,0.54);

-- UPDATE top100songs 
-- SET rank = 1,
-- artist = "Bing Crosby",
--  song = "White Christmas",
--  songYear = 1942,
--  rating1 = 39.903,
--  rating2 = 23.929,
--  rating3 = 5.7,
--  rating4 = 2.185,
--  rating5 = 0.54
--  WHERE artist = "Bing Crosby";