-- Create the database task_saver_db and specified it for use.
DROP DATABASE IF EXISTS wishes_db;

CREATE DATABASE wishes_db;
USE wishes_db;

DROP TABLE IF EXISTS wishes;
-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Get a sweet redhead girlfiend');
INSERT INTO wishes (wish) VALUES ('Sub 9 hour Ironman');
INSERT INTO wishes (wish) VALUES ('Run a 2:30 Marathon');
