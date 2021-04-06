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
    password VARCHAR(60)
);

CREATE TABLE game (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	id_player INT NOT NULL,
    dice1 TINYINT,
    dice2 TINYINT,
    result ENUM('WIN', 'LOST')
);

-- ADDING FOREIGN KEYS

ALTER TABLE `game` ADD FOREIGN KEY (`id_player`) REFERENCES `player` (`id`);

DESCRIBE player;
DESCRIBE game;


-- INSERTING ONE USER WITHOUT NAME

INSERT INTO player (email, password) VALUES ('anonim1@gmail.com', 'password');
CALL setNameIfNull('anonim1@gmail.com');
SELECT * FROM player;

-- INSERTING GAMES AND SETTING UP RESULT IN RECENTLY CREATED USER 
INSERT INTO game (id_player, dice1, dice2) VALUES (5, 1, 1);
CALL setResult;

INSERT INTO game (id_player, dice1, dice2) VALUES (5, 7, 7);
CALL setResult;


-- INSERTING ONE USER WITH NAME

INSERT INTO player (name, email, password) VALUES ('Sandra', 'sandra@gmail.com', 'password');
CALL setNameIfNull('sandra@gmail.com');

-- INSERTING GAMES AND SETTING UP RESULT IN RECENTLY CREATED USER 

INSERT INTO game (id_player, dice1, dice2) VALUES (2, 7, 5);
CALL setResult;

-- DELETING GAMES BY PLAYER ID

DELETE FROM game WHERE id=10;

