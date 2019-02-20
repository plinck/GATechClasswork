DROP DATABASE IF EXISTS seinfeld_db;

CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "actors" 
CREATE TABLE actors
(
  id int AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  coolness_points int,
  attitude varchar(255),
  PRIMARY KEY (id)
);