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
    password VARCHAR(60),
    games INT,
    wins INT,
    successRate FLOAT
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

-- INSERTING GAMES, SETTING UP RESULT AND UPDATING SUCCESS RATE IN RECENTLY CREATED USER 
INSERT INTO game (id_player, dice1, dice2) VALUES (1, 1, 1);
CALL setResult(1);

SELECT * FROM player;
CALL setSuccessRate(1, (SELECT wins FROM player WHERE id=1), (SELECT games FROM player WHERE id=1));


INSERT INTO game (id_player, dice1, dice2) VALUES (1, 7, 7);
CALL setResult(1);

-- READING GAMES from a user

CALL readGames(1);

-- INSERTING ONE USER WITH NAME

INSERT INTO player (name, email, password) VALUES ('Sandra', 'sandra@gmail.com', 'password');
CALL setNameIfNull('sandra@gmail.com');

-- INSERTING GAMES AND SETTING UP RESULT IN RECENTLY CREATED USER 

INSERT INTO game (id_player, dice1, dice2) VALUES (2, 7, 5);
CALL setResult;

-- DELETING GAMES BY PLAYER ID

DELETE FROM game WHERE id=10;

ALTER TABLE player
ADD wins INT;

SELECT * FROM player;