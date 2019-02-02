-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  food VARCHAR(30) NOT NULL,
  score INTEGER(10)
  );

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(30) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(30),
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id numeric auto_increment not null,
  -- Create a string column called "movie" which cannot be null --
  movie varchar(30) not null,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times boolean default false,
  -- Make an integer column called "score" --
  score integer(10),
  -- Set the primary key of the table to id --
  primary key (id)
);
