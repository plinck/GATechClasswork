drop database paultest;

create database paultest;

use  paultest;

create table animals (
	name varchar(30),
    type varchar(30),
    numberOfLegs int(10),
    id int auto_increment not null,
    primary key(id)
    );
    
INSERT into animals (name, type, numberOfLegs)
VALUES ("Jena", "dog", 4);

select * from animals;

UPDATE animals
SET name = "Groot", type = "dog", numberOfLegs = 4
WHERE type = "dog";

select * from animals where name = "Jena";