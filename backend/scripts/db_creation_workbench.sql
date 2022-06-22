CREATE TABLE `Tunas` (
  `TunaID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `ShortName` varchar(45) NOT NULL,
  PRIMARY KEY (`TunaID`,`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `Users` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Mote` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Tuna` int DEFAULT NULL,
  `isAdmin` tinyint DEFAULT '0',
  `isConfirmed` tinyint DEFAULT '0',
  `Role` varchar(45) DEFAULT 'tuno',
  PRIMARY KEY (`UserID`),
  KEY `fk_user_tuna_idx` (`Tuna`),
  CONSTRAINT `fk_user_tuna` FOREIGN KEY (`Tuna`) REFERENCES `Tunas` (`TunaID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `Events` (
  `EventID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(200) NULL,
  `Creator` INT NULL,
  PRIMARY KEY (`EventID`),
  INDEX `fk_creator_idx` (`Creator` ASC) VISIBLE,
  CONSTRAINT `fk_creator`
    FOREIGN KEY (`Creator`)
    REFERENCES .`Users` (`UserID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


CREATE TABLE `Song` (
  `SongID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Tuna` int NOT NULL,
  `LastEditor` int DEFAULT NULL,
  `Author` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`SongID`),
  KEY `fk_tuna_idx` (`Tuna`),
  KEY `fk_editor_idx` (`LastEditor`),
  CONSTRAINT `fk_editor` FOREIGN KEY (`LastEditor`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tuna` FOREIGN KEY (`Tuna`) REFERENCES `Tunas` (`TunaID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `UserEvent` (
  `User` INT NOT NULL,
  `Event` INT NOT NULL,
  PRIMARY KEY (`User`, `Event`),
  INDEX `fk_event_idx` (`Event` ASC) VISIBLE,
  CONSTRAINT `fk_user`
    FOREIGN KEY (`User`)
    REFERENCES .`Users` (`UserID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_event`
    FOREIGN KEY (`Event`)
    REFERENCES .`Events` (`EventID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `Task` (
  `idTask` int NOT NULL AUTO_INCREMENT,
  `Creator` int NOT NULL,
  `Description` varchar(450) DEFAULT '"Tarea"',
  `Novato` int NOT NULL,
  PRIMARY KEY (`idTask`),
  KEY `fk_creator_idx` (`Creator`),
  KEY `fk_task_novato_idx` (`Novato`),
  CONSTRAINT `fk_task_creator` FOREIGN KEY (`Creator`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_task_novato` FOREIGN KEY (`Novato`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
