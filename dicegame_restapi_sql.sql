DROP DATABASE IF EXISTS dicegame;
CREATE DATABASE dicegame;

USE dicegame;

-- CREATING TABLES

CREATE TABLE player (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date DATETIME NOT NULL
		DEFAULT CURRENT_TIMESTAMP, 
    name VARCHAR(60) NULL UNIQUE,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    successRate FLOAT
);

CREATE TABLE game (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	id_player INT NOT NULL,
    dice1 TINYINT,
    dice2 TINYINT,
    score BIT,
    result ENUM('WIN', 'LOST')
);

CREATE TABLE ranking (
	 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     id_name VARCHAR(60),
     id_player INT,
     successRate FLOAT NULL
);

-- ADDING FOREIGN KEYS

ALTER TABLE `game` ADD FOREIGN KEY (`id_player`) REFERENCES `player` (`id`);

ALTER TABLE `ranking` ADD FOREIGN KEY (`id_player`) REFERENCES `player` (`id`);
ALTER TABLE `ranking` ADD FOREIGN KEY (`id_name`) REFERENCES `player` (`name`);
