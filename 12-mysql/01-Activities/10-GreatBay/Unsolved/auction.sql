DROP DATABASE IF EXISTS auctionDB;

CREATE DATABASE auctionDB;

USE auctionDB;

CREATE TABLE auctionItems (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  description VARCHAR(255) NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE bids (
  item_id INT NOT NULL,
  highBid DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (item_id)
);


