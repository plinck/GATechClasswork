DROP DATABASE IF EXISTS popquiz_db;
CREATE DATABASE popquiz_db;
USE popquiz_db;

CREATE TABLE items (
    item_id   INT AUTO_INCREMENT NOT NULL,
    item_name VARCHAR(30) NOT NULL,
    costs  DECIMAL(8, 2) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO items (item_name, costs)
VALUES ("Item1", 500), ("Item2", 300), ("Item3", 1000);

Select * from items;